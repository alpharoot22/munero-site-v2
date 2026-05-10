import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Body {
  name?: string;
  email?: string;
  company?: string;
  monthly_ad_spend?: string;
  role?: string;
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").toLowerCase().trim();
  const company = (body.company ?? "").trim();
  const monthly_ad_spend = (body.monthly_ad_spend ?? "").trim();
  const role = (body.role ?? "").trim();

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, company" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Canonical n8n Router endpoint. Env var overrides for staging or test runs.
  const n8nWebhook =
    process.env.MUNERO_N8N_WEBHOOK_URL ??
    "https://bar0807.app.n8n.cloud/webhook/munero-router";

  const registered_at = new Date().toISOString();

  // Insert into Supabase waitlist. Treat 409 (duplicate email) as success.
  if (supabaseUrl && supabaseKey) {
    try {
      const r = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          full_name: name,
          email,
          company,
          role,
          source: "site_register",
          tier: monthly_ad_spend,
        }),
      });
      if (!r.ok && r.status !== 409) {
        const text = await r.text().catch(() => "");
        console.error("[register] supabase insert failed", r.status, text);
      }
    } catch (err) {
      console.error("[register] supabase fetch threw", err);
    }
  } else {
    console.warn(
      "[register] Supabase env vars missing (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) — skipping insert"
    );
  }

  // Fire to n8n Router for the welcome-email automation. Await so we don't
  // race the request lifecycle on serverless — Vercel may freeze the function
  // immediately after the response, killing an unresolved fire-and-forget.
  // The site flow is: form POSTs to /api/register, awaits the response, then
  // navigates to /pricing. A few hundred ms here is invisible to users and
  // guarantees the n8n call actually reaches the network.
  try {
    const n8nRes = await fetch(n8nWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "site_registration",
        name,
        email,
        company,
        role,
        monthly_ad_spend,
        registered_at,
        source: "munero-site-v2",
        // Routing hint for the n8n "Handle Site Registration" node: after the
        // user-facing welcome email is sent, send a second copy here.
        admin_notify_email: "barkobi04@gmail.com",
      }),
    });
    if (!n8nRes.ok) {
      const text = await n8nRes.text().catch(() => "");
      console.error("[register] n8n webhook non-2xx", n8nRes.status, text);
    }
  } catch (err) {
    console.error("[register] n8n webhook failed", err);
  }

  return NextResponse.json({ ok: true });
}
