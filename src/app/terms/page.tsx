import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of Munero, operated by Alpharoot Marketing LLC FZE (UAE).",
};

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "var(--text-2)",
          lineHeight: 1.6,
          marginBottom: 8,
        }}
      >
        Terms of service.
      </p>

      <div className="legal-prose">
        <p>
          These Terms govern your use of Munero, operated by Alpharoot Marketing LLC FZE
          (UAE). By using Munero you agree to these Terms. If you do not agree, do not use the
          service.
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: "var(--text-3)",
          }}
        >
          Effective: 2026-05-02 · Contact:{" "}
          <a href="mailto:legal@munero.ai">legal@munero.ai</a>
        </p>

        <hr />

        <h2>Contents</h2>
        <ol>
          <li><a href="#what-munero-is">What Munero is</a></li>
          <li><a href="#beta-status">Beta status</a></li>
          <li><a href="#read-only">Read-only commitment</a></li>
          <li><a href="#your-account">Your account</a></li>
          <li><a href="#acceptable-use">Acceptable use</a></li>
          <li><a href="#content">Your content and our content</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#termination">Termination</a></li>
          <li><a href="#warranties">Warranties and disclaimers</a></li>
          <li><a href="#liability">Liability</a></li>
          <li><a href="#indemnity">Indemnity</a></li>
          <li><a href="#governing-law">Governing law and jurisdiction</a></li>
          <li><a href="#changes">Changes to these terms</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>

        <h2 id="what-munero-is">What Munero is</h2>
        <p>
          Munero is an AI-powered creative intelligence and advertising strategy platform. We
          synthesise market data, public ad libraries, and the inputs you provide into briefs,
          hooks, audiences, offers, and creative recommendations. We optionally read campaign
          performance from advertising platforms you connect, and match it back to the
          recommendations you used so you can see what worked.
        </p>

        <h2 id="beta-status">Beta status</h2>
        <p>Munero is currently in beta. That means:</p>
        <ul>
          <li>features may change, regress, or be removed without notice while we iterate;</li>
          <li>we do not offer a service-level agreement during the beta;</li>
          <li>we may use aggregated and de-identified beta usage to improve the service.</li>
        </ul>
        <p>
          We will give you reasonable notice before any change that would materially reduce a
          feature you actively rely on.
        </p>

        <h2 id="read-only">Read-only commitment</h2>
        <p>
          Munero never modifies your advertising accounts during the beta. We connect with
          read-only scopes only. Our worker software is built so that mutation methods on
          platform SDKs are physically unavailable to it (the relevant client classes are not
          imported), and every outbound call is allowlisted at the URL level and logged for
          audit. If a future feature ever requires write access, we will roll it out as a
          separate, opt-in capability with an explicit consent flow.
        </p>

        <h2 id="your-account">Your account</h2>
        <p>
          You must be at least 18 years old and authorised to act on behalf of any
          organisation you sign up for. You are responsible for keeping your credentials
          secret and for activity under your account. Notify us at{" "}
          <a href="mailto:security@munero.ai">security@munero.ai</a> as soon as you suspect
          unauthorised use.
        </p>

        <h2 id="acceptable-use">Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use Munero to commit fraud, deceive consumers, or run scams;</li>
          <li>upload data you do not have the right to upload, including personal data of third parties without lawful basis;</li>
          <li>attempt to bypass authentication, rate limits, RLS isolation, or our read-only enforcement;</li>
          <li>resell or redistribute Munero outputs as a standalone product, or present them as your own original analysis without a contract that permits it;</li>
          <li>reverse engineer, scrape, or attempt to extract our recommendation engine, prompt graphs, or training signal;</li>
          <li>use Munero to generate content that violates the policies of the advertising platforms you connect (Meta, Google, TikTok, LinkedIn, etc.);</li>
          <li>interfere with the integrity or performance of Munero or other customers&apos; use of it.</li>
        </ul>

        <h2 id="content">Your content and our content</h2>
        <p>
          <strong>Your content stays yours.</strong> Briefs, uploaded files, and the
          recommendations Munero produces for you are yours to use. You grant us a limited,
          worldwide licence to host, process, and analyse your content for the sole purpose of
          operating and improving Munero, in line with our Privacy Policy.
        </p>
        <p>
          <strong>Our content stays ours.</strong> The Munero platform, the recommendation
          engine, the matching logic, the underlying prompts, and the aggregated benchmarks
          are our intellectual property. We grant you a non-exclusive, non-transferable right
          to use them while your account is active.
        </p>

        <h2 id="pricing">Pricing</h2>
        <p>
          Pricing tiers are listed on munero.ai. We may change pricing with at least 30
          days&apos; notice for paid plans; changes apply at the start of your next billing
          cycle. Beta access may be free or discounted; if a free beta seat converts to a paid
          plan we will tell you in advance.
        </p>

        <h2 id="termination">Termination</h2>
        <p>
          Either party may terminate these Terms at any time, for any reason, on 30 days&apos;
          written notice (email is fine). We may terminate or suspend your account immediately
          if you breach the Acceptable use section, fail to pay, or if we are required to by
          law. On termination, we will delete your data in line with the retention schedule in
          our <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2 id="warranties">Warranties and disclaimers</h2>
        <p>
          Munero is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We do not
          warrant that the service will be uninterrupted, error-free, or that any
          recommendation will produce a particular advertising outcome. Marketing involves
          uncertainty and Munero is a decision-support tool, not a guarantee. To the maximum
          extent permitted by law, we disclaim all implied warranties, including
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 id="liability">Liability</h2>
        <p>
          To the maximum extent permitted by law, our aggregate liability to you for any claim
          arising out of or relating to these Terms or the service is capped at the total fees
          you paid us in the twelve (12) months before the event giving rise to the claim. We
          are not liable for indirect, incidental, special, consequential, or exemplary
          damages (including lost profits, lost ad spend, lost data, or loss of goodwill),
          even if we have been advised of the possibility of such damages.
        </p>

        <h2 id="indemnity">Indemnity</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Alpharoot Marketing LLC FZE and
          its officers, directors, employees, and agents from any claim arising out of (a)
          your content, (b) your use of the service, or (c) your breach of these Terms or the
          policies of any advertising platform you connect to Munero.
        </p>

        <h2 id="governing-law">Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by the laws of the United Arab Emirates, without regard to
          conflict-of-law rules. Any dispute arising out of or relating to these Terms or the
          service will be submitted to the exclusive jurisdiction of the DIFC Courts (Dubai
          International Financial Centre Courts), Dubai, UAE. Nothing in this section prevents
          either party from seeking injunctive relief in any court of competent jurisdiction.
        </p>

        <h2 id="changes">Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. We will post the updated Terms here and
          update the effective date. For material changes we will notify registered users by
          email at least 30 days before the changes take effect. Your continued use of Munero
          after the effective date is your acceptance of the updated Terms.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:legal@munero.ai">legal@munero.ai</a>.
        </p>
        <p>
          Postal: Alpharoot Marketing LLC FZE, Al Rostamani Building, 47 16th Street, Al
          Hamriya, Dubai, United Arab Emirates.
        </p>
      </div>
    </main>
  );
}
