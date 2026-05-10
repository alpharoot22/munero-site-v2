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
      }),
    });
    if (!n8nRes.ok) {
      const text = await n8nRes.text().catch(() => "");
      console.error("[register] n8n webhook non-2xx", n8nRes.status, text);
    }
  } catch (err) {
    console.error("[register] n8n webhook failed", err);
  }

  // Admin notification: second Resend send straight to the sales inbox so
  // registrations show up immediately, independent of the n8n welcome flow.
  // Runs after n8n so a slow n8n call doesn't delay this.
  const resendKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_NOTIFY_EMAIL ?? "sales@munero.ai";
  if (resendKey && adminEmail) {
    const adminSubject = `New Munero registration: ${name} - ${email}`;
    const adminHtml = `
      <div style="font-family:-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#0A0A0F;color:#E8E8F0;">
        <p style="font-size:11px;color:#1D9E75;text-transform:uppercase;letter-spacing:0.14em;margin:0 0 16px;">New registration</p>
        <h1 style="font-size:22px;font-weight:600;color:#E8E8F0;margin:0 0 24px;letter-spacing:-0.02em;">${escapeHtml(name)}</h1>
        <table style="border-collapse:collapse;width:100%;font-size:13px;">
          <tr><td style="padding:6px 0;color:#9898A8;width:140px;">Email</td><td style="padding:6px 0;color:#E8E8F0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 0;color:#9898A8;">Company</td><td style="padding:6px 0;color:#E8E8F0;">${escapeHtml(company)}</td></tr>
          <tr><td style="padding:6px 0;color:#9898A8;">Role</td><td style="padding:6px 0;color:#E8E8F0;">${escapeHtml(role) || "—"}</td></tr>
          <tr><td style="padding:6px 0;color:#9898A8;">Monthly ad spend</td><td style="padding:6px 0;color:#E8E8F0;">${escapeHtml(monthly_ad_spend) || "—"}</td></tr>
          <tr><td style="padding:6px 0;color:#9898A8;">Registered at</td><td style="padding:6px 0;color:#E8E8F0;font-family:monospace;font-size:12px;">${registered_at}</td></tr>
        </table>
        <p style="color:#5A5A6A;font-size:11px;margin-top:32px;">Sent from munero.ai · /api/register</p>
      </div>
    `;
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Munero <hello@munero.ai>",
          to: [adminEmail],
          subject: adminSubject,
          html: adminHtml,
        }),
      });
      if (!r.ok) {
        const text = await r.text().catch(() => "");
        console.error("[register] admin Resend non-2xx", r.status, text);
      }
    } catch (err) {
      console.error("[register] admin Resend failed", err);
    }
  } else {
    console.warn(
      "[register] RESEND_API_KEY or ADMIN_NOTIFY_EMAIL missing — skipping admin notification"
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
