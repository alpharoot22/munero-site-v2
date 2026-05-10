import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const META_APP_SECRET = process.env.META_APP_SECRET ?? "";
const MUNERO_DELETION_HMAC_SECRET =
  process.env.MUNERO_DELETION_HMAC_SECRET ?? "";

const APP_CALLBACK_URL =
  "https://app.munero.ai/api/connect/data-deletion/meta-callback";

function base64urlDecode(input: string): Buffer {
  // base64url -> base64
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = b64.length % 4 === 0 ? "" : "=".repeat(4 - (b64.length % 4));
  return Buffer.from(b64 + padding, "base64");
}

function timingSafeEqualBuffers(a: Buffer, b: Buffer): boolean {
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

interface SignedRequestPayload {
  user_id?: string;
  algorithm?: string;
  issued_at?: number;
}

export async function POST(req: NextRequest) {
  if (!META_APP_SECRET) {
    return NextResponse.json(
      { error: "Server misconfigured: META_APP_SECRET unset" },
      { status: 500 }
    );
  }

  let signedRequest: string | null = null;

  // Meta sends application/x-www-form-urlencoded
  const contentType = req.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      const v = form.get("signed_request");
      if (typeof v === "string") signedRequest = v;
    } else if (contentType.includes("application/json")) {
      const body = (await req.json()) as { signed_request?: string };
      signedRequest = body.signed_request ?? null;
    } else {
      // Fallback: try to parse as form data anyway
      try {
        const form = await req.formData();
        const v = form.get("signed_request");
        if (typeof v === "string") signedRequest = v;
      } catch {
        const text = await req.text();
        const params = new URLSearchParams(text);
        signedRequest = params.get("signed_request");
      }
    }
  } catch {
    return NextResponse.json(
      { error: "Could not parse request body" },
      { status: 400 }
    );
  }

  if (!signedRequest || !signedRequest.includes(".")) {
    return NextResponse.json(
      { error: "Missing or malformed signed_request" },
      { status: 400 }
    );
  }

  const [encodedSig, payload] = signedRequest.split(".", 2);
  if (!encodedSig || !payload) {
    return NextResponse.json(
      { error: "Malformed signed_request" },
      { status: 400 }
    );
  }

  // Verify HMAC-SHA256(payload, app_secret) == sig
  let expectedSig: Buffer;
  let providedSig: Buffer;
  try {
    expectedSig = crypto
      .createHmac("sha256", META_APP_SECRET)
      .update(payload)
      .digest();
    providedSig = base64urlDecode(encodedSig);
  } catch {
    return NextResponse.json(
      { error: "Signature decode failed" },
      { status: 400 }
    );
  }

  if (!timingSafeEqualBuffers(expectedSig, providedSig)) {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Decode and parse the payload
  let parsed: SignedRequestPayload;
  try {
    const json = base64urlDecode(payload).toString("utf8");
    parsed = JSON.parse(json) as SignedRequestPayload;
  } catch {
    return NextResponse.json(
      { error: "Could not parse payload" },
      { status: 400 }
    );
  }

  const userId = parsed.user_id;
  if (!userId || typeof userId !== "string") {
    return NextResponse.json(
      { error: "Missing user_id in payload" },
      { status: 400 }
    );
  }

  // Generate confirmation_id = first 16 chars of SHA256(user_id + Date.now())
  const confirmationId = crypto
    .createHash("sha256")
    .update(`${userId}${Date.now()}`)
    .digest("hex")
    .slice(0, 16);

  // Notify app.munero.ai (best-effort; Meta still gets a response either way)
  try {
    const callbackBody = JSON.stringify({
      platform_user_id: userId,
      confirmation_id: confirmationId,
    });
    const callbackHmac = MUNERO_DELETION_HMAC_SECRET
      ? crypto
          .createHmac("sha256", MUNERO_DELETION_HMAC_SECRET)
          .update(callbackBody)
          .digest("hex")
      : "";

    // Fire-and-monitor with a tight timeout so Meta isn't kept waiting.
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 4000);
    try {
      await fetch(APP_CALLBACK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Munero-Deletion-Hmac": callbackHmac,
        },
        body: callbackBody,
        signal: ac.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    // Log but do not fail Meta's request; app-side reconciliation handles retries.
    console.error("[data-deletion] callback to app.munero.ai failed", err);
  }

  return NextResponse.json({
    url: `https://munero.ai/data-deletion-status/${confirmationId}`,
    confirmation_code: confirmationId,
  });
}

// Meta sometimes pings with GET for verification; respond cleanly.
export async function GET() {
  return NextResponse.json({
    endpoint: "data-deletion",
    method: "POST",
    expects: "signed_request (form-encoded)",
  });
}
