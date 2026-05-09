import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to delete the data Munero holds about you. Three options. 30-day SLA.",
};

export default function DataDeletionPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "100px 24px 80px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "var(--text-3)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 16,
        }}
      >
        Last updated: May 2026
      </p>
      <h1
        style={{
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          marginBottom: 16,
          lineHeight: 1.2,
        }}
      >
        Data Deletion
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "var(--text-2)",
          lineHeight: 1.6,
          marginBottom: 8,
        }}
      >
        Delete your data.
      </p>

      <div className="legal-prose">
        <p>
          You can delete the data Munero holds about you at any time. Operated by Alpharoot
          Marketing LLC FZE (UAE).
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: "var(--text-3)",
          }}
        >
          Effective: 2026-05-02 · Contact:{" "}
          <a href="mailto:privacy@munero.ai">privacy@munero.ai</a>
        </p>

        <hr />

        <h2>Three ways to delete your data</h2>
        <p>
          Pick whichever is easiest. All three trigger the same cascade and meet the same SLA.
        </p>

        <h3>Option 1 — Self-service in app</h3>
        <p>
          Sign in at app.munero.ai → Settings → Disconnect All Integrations → Delete Account.
          Self-service deletions begin immediately and are typically complete within minutes.
        </p>

        <h3>Option 2 — Email request</h3>
        <p>
          Email <a href="mailto:privacy@munero.ai">privacy@munero.ai</a> with subject{" "}
          <strong>Delete My Data</strong> from the email registered on your account. We respond
          within 30 days; deletion typically runs within 72 hours of confirmation.
        </p>

        <h3>Option 3 — Platform-initiated</h3>
        <p>
          Removing the Munero app from your Meta, Google, TikTok, or LinkedIn account triggers
          automatic deletion of the corresponding integration data within 24 hours. The
          platform sends us a signed callback; we honour it with no manual step required.
        </p>

        <h2>What gets deleted</h2>
        <p>The cascade is the same for all three options:</p>
        <ul>
          <li>
            <strong>OAuth tokens</strong> for the affected integration(s) — wiped from Supabase
            Vault immediately.
          </li>
          <li>
            <strong>Raw API responses</strong> we pulled on your behalf — deleted within 30
            days.
          </li>
          <li>
            <strong>Campaign performance metrics</strong> tied to the integration — deleted
            within 30 days.
          </li>
          <li>
            <strong>Sync run logs and API call logs</strong> for the integration — retained for
            90 days for security and compliance, then deleted.
          </li>
          <li>
            <strong>Briefs, recommendations, account profile</strong> — deleted within 30 days
            when you delete your full account (kept while the account remains active even if
            you only disconnect a single platform).
          </li>
        </ul>
        <p>
          <strong>What we keep:</strong> a deletion-audit record (account identifier, request
          timestamp, confirmation code, completion timestamp) for 90 days so we can prove the
          deletion happened if a platform or regulator asks. The audit record contains no
          campaign or performance data.
        </p>

        <h2>Service level</h2>
        <ul>
          <li>
            <strong>Self-service in app:</strong> typically immediate, max 24 hours.
          </li>
          <li>
            <strong>Platform-initiated callback:</strong> max 24 hours.
          </li>
          <li>
            <strong>Email request:</strong> max 30 days, typically 72 hours.
          </li>
        </ul>
        <p>
          We send a confirmation email when deletion completes, with a unique confirmation
          code you can quote if you need to evidence the deletion to an advertising platform
          or regulator.
        </p>

        <h2>For Meta App Review reviewers</h2>
        <p>
          Munero implements Meta&apos;s data-deletion callback at the URL below. The endpoint
          accepts the standard signed-request payload, verifies the HMAC-SHA256 signature
          against our App Secret, queues deletion of the identified user&apos;s data, and
          returns the required confirmation URL and code:
        </p>
        <ul>
          <li>
            Callback URL: <code>https://munero.ai/api/data-deletion</code>
          </li>
          <li>
            User-facing instructions URL:{" "}
            <code>https://munero.ai/data-deletion</code>
          </li>
          <li>
            Status confirmation URL pattern:{" "}
            <code>https://munero.ai/data-deletion/status/&lt;confirmation_code&gt;</code>
          </li>
        </ul>

        <h2>Still need help?</h2>
        <p>
          Email <a href="mailto:privacy@munero.ai">privacy@munero.ai</a> from the address on
          your account. If you can no longer access the account email, include enough
          information to identify the account (registration date, organisation name, last-used
          integration) and we will follow up on a verification path.
        </p>
      </div>
    </main>
  );
}
