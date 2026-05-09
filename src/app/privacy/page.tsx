import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Munero handles your data. Privacy policy for Alpharoot Marketing LLC FZE (UAE).",
};

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "var(--text-2)",
          lineHeight: 1.6,
          marginBottom: 8,
        }}
      >
        How Munero handles your data.
      </p>

      <div className="legal-prose">
        <p>
          Munero is operated by Alpharoot Marketing LLC FZE (United Arab Emirates), the data
          controller for purposes of this policy. This page explains what we collect, why,
          where it lives, and the rights you have over it.
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

        <h2>Contents</h2>
        <ol>
          <li><a href="#who-we-are">Who we are</a></li>
          <li><a href="#what-we-collect">What data we collect</a></li>
          <li><a href="#what-we-do">What we do with it</a></li>
          <li><a href="#where-it-lives">Where it lives</a></li>
          <li><a href="#how-long">How long we keep it</a></li>
          <li><a href="#your-rights">Your rights (UAE PDPL & GDPR)</a></li>
          <li><a href="#international">International transfers</a></li>
          <li><a href="#third-parties">Third parties</a></li>
          <li><a href="#cookies">Cookies</a></li>
          <li><a href="#children">Children&apos;s data</a></li>
          <li><a href="#changes">Changes to this policy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>

        <h2 id="who-we-are">Who we are</h2>
        <p>
          Munero is an AI-powered creative intelligence and advertising strategy platform
          operated by Alpharoot Marketing LLC FZE, a Free Zone limited liability company
          registered in the United Arab Emirates (the Operator). References to &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;Munero&rdquo; in this policy are references to the
          Operator. Our registered address is Al Rostamani Building, 47 16th Street, Al
          Hamriya, Dubai, United Arab Emirates.
        </p>
        <p>
          We are the data controller for the personal data described in this policy, except
          where you connect a third-party advertising or analytics account to Munero. In that
          case the relevant platform is the controller of the underlying account data and
          Munero acts as a processor for the metrics we read on your behalf.
        </p>

        <h2 id="what-we-collect">What data we collect</h2>
        <p>We collect the minimum needed to deliver Munero:</p>
        <ul>
          <li>
            <strong>Account information</strong> — your name, email, company, role, and the
            credentials you use to authenticate. Authentication is handled by Supabase Auth; we
            never see your password.
          </li>
          <li>
            <strong>Brief inputs</strong> — the briefs you submit to Munero (industry,
            audience, budget, creative goals, etc.) and any files you upload.
          </li>
          <li>
            <strong>OAuth tokens</strong> — when you connect Google Analytics, Search Console,
            Meta, Google Ads, TikTok, or LinkedIn, we receive access and refresh tokens. Tokens
            are stored encrypted in Supabase Vault and are read-only by design (see our Terms).
          </li>
          <li>
            <strong>Ad performance metrics</strong> — campaign, ad set, and ad metrics (spend,
            impressions, clicks, conversions, revenue) pulled from connected accounts or
            uploaded via CSV. We do not pull personally identifiable end-user data from your ad
            accounts.
          </li>
          <li>
            <strong>Campaign metadata</strong> — campaign and ad names, creative IDs, and the
            recommendation IDs you paste into them so we can match performance back to a Munero
            recommendation.
          </li>
          <li>
            <strong>Operational logs</strong> — server logs, sync run logs, and API call logs
            needed to run the service, debug, and meet our read-only audit obligations.
          </li>
        </ul>

        <h2 id="what-we-do">What we do with it</h2>
        <ul>
          <li>
            <strong>Generate insights</strong> — we synthesise briefs, hooks, offers,
            audiences, and creative recommendations from your inputs and public market data.
          </li>
          <li>
            <strong>Match outcomes</strong> — once a campaign you launched goes live, we match
            its performance back to the original Munero recommendation so you see what worked.
          </li>
          <li>
            <strong>Train our recommendation engine</strong> — we use aggregated and
            de-identified outcome patterns to improve future briefs across our customer base.
            We never share raw account data, and identifiable outputs are scoped to the
            customer that produced them.
          </li>
          <li>
            <strong>Operate the service</strong> — auth, billing, security, incident response,
            and customer support.
          </li>
        </ul>
        <p>
          We do not sell your data. We do not share your data with advertisers or third parties
          for their marketing. We do not use your data to train third-party large language
          models for purposes unrelated to running Munero.
        </p>

        <h2 id="where-it-lives">Where it lives</h2>
        <p>
          Munero is hosted on the following infrastructure. Data is encrypted in transit (TLS)
          and at rest, and is isolated per customer using row-level security keyed to your
          account.
        </p>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Provider</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account, briefs, metrics, recommendation IDs</td>
              <td>Supabase</td>
              <td>United States (us-east)</td>
            </tr>
            <tr>
              <td>OAuth tokens</td>
              <td>Supabase Vault</td>
              <td>United States (us-east)</td>
            </tr>
            <tr>
              <td>Customer dashboard</td>
              <td>Vercel</td>
              <td>Global edge</td>
            </tr>
            <tr>
              <td>Sync workers and orchestration</td>
              <td>Railway</td>
              <td>United States</td>
            </tr>
          </tbody>
        </table>
        <p>
          Because our operating entity (Alpharoot Marketing LLC FZE) is in the UAE and our
          primary storage is in the United States, your data may transit between the UAE and
          the US in the course of normal operation.
        </p>

        <h2 id="how-long">How long we keep it</h2>
        <ul>
          <li>
            <strong>Active accounts</strong> — we retain account, brief, and performance data
            for as long as your account is active.
          </li>
          <li>
            <strong>Disconnect a platform</strong> — when you disconnect a platform, we delete
            the OAuth tokens immediately and the associated raw responses and metrics within 30
            days.
          </li>
          <li>
            <strong>Delete your account</strong> — when you delete your account, we delete
            account, briefs, recommendations, integrations, and performance data within 30
            days. Operational logs and the deletion-audit record are retained for 90 days for
            security and compliance, then deleted.
          </li>
        </ul>

        <h2 id="your-rights">Your rights (UAE PDPL & GDPR)</h2>
        <p>
          We honour the rights granted to you under the UAE Personal Data Protection Law
          (Federal Decree-Law No. 45 of 2021) and, where it applies to you, the EU General Data
          Protection Regulation:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of the personal data we hold about you.
          </li>
          <li>
            <strong>Rectification</strong> — ask us to correct inaccurate data.
          </li>
          <li>
            <strong>Deletion</strong> — ask us to delete your data. The fastest path is in-app:
            app.munero.ai → Settings → Delete Account. You can also follow the steps on{" "}
            <a href="/data-deletion">/data-deletion</a>.
          </li>
          <li>
            <strong>Portability</strong> — export your briefs and matched performance data in
            machine-readable form.
          </li>
          <li>
            <strong>Withdraw consent</strong> — disconnect any connected platform at any time
            without affecting the rest of your account.
          </li>
          <li>
            <strong>Restrict or object</strong> — ask us to restrict or stop specific
            processing.
          </li>
          <li>
            <strong>Lodge a complaint</strong> — EU users may complain to their national
            supervisory authority. UAE users may contact the UAE Data Office.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:privacy@munero.ai">privacy@munero.ai</a> from the address registered
          on your account, or use the in-app self-service flow. We respond within 30 days.
        </p>

        <h2 id="international">International transfers</h2>
        <p>
          Munero processes data in the United Arab Emirates (the operating entity) and the
          United States (Supabase, Vercel, Railway). Where you are located in the European
          Economic Area, the United Kingdom, or Switzerland, we rely on the European
          Commission&apos;s Standard Contractual Clauses (or equivalent UK and Swiss addenda)
          as the lawful basis for transferring your data to the United States. Where required,
          we additionally rely on supplementary technical measures (encryption in transit and
          at rest, RLS isolation, vaulted credentials).
        </p>

        <h2 id="third-parties">Third parties</h2>
        <p>
          We use a small set of sub-processors. Each is bound by a data processing agreement
          and is used only for the purpose listed.
        </p>
        <table>
          <thead>
            <tr>
              <th>Sub-processor</th>
              <th>Purpose</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Supabase</td><td>Database, auth, vault, storage</td><td>United States</td></tr>
            <tr><td>Vercel</td><td>Customer dashboard hosting</td><td>United States</td></tr>
            <tr><td>Railway</td><td>Sync workers and orchestration</td><td>United States</td></tr>
            <tr><td>Anthropic</td><td>LLM inference for brief generation</td><td>United States</td></tr>
            <tr><td>Apify</td><td>Public ad-library and market scraping</td><td>Czechia / EU</td></tr>
            <tr><td>SerpAPI</td><td>Search-engine market signal</td><td>United States</td></tr>
            <tr><td>Tavily</td><td>Web research for briefs</td><td>United States</td></tr>
            <tr><td>Resend</td><td>Transactional email (signups, deletions)</td><td>United States</td></tr>
          </tbody>
        </table>

        <h2 id="cookies">Cookies</h2>
        <p>
          Our marketing site (munero.ai) uses minimal first-party session cookies required for
          the site to function. We do not use third-party advertising cookies, and we do not
          load tracking pixels on our marketing site. The customer dashboard (app.munero.ai)
          uses session cookies issued by Supabase Auth to keep you signed in.
        </p>

        <h2 id="children">Children&apos;s data</h2>
        <p>
          Munero is a B2B product and is not intended for users under 18. We do not knowingly
          collect personal data from anyone under 18. If you believe a minor has provided
          personal data to Munero, email{" "}
          <a href="mailto:privacy@munero.ai">privacy@munero.ai</a> and we will delete the
          account.
        </p>

        <h2 id="changes">Changes to this policy</h2>
        <p>
          We will notify registered users of material changes to this policy by email at least
          30 days before the changes take effect. Non-material changes (typo fixes,
          clarifications) take effect on publication; the effective date at the top of the page
          tracks the latest version.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          Privacy questions, requests, or complaints:{" "}
          <a href="mailto:privacy@munero.ai">privacy@munero.ai</a>.
        </p>
        <p>
          Postal: Alpharoot Marketing LLC FZE, Al Rostamani Building, 47 16th Street, Al
          Hamriya, Dubai, United Arab Emirates.
        </p>
      </div>
    </main>
  );
}
