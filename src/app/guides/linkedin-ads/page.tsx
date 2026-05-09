import type { Metadata } from "next";
import {
  GuideShell,
  GuideHero,
  TableOfContents,
  Callout,
  AlsoInSeries,
  MuneroCTA,
} from "../../../components/guides/GuidePrimitives";

export const metadata: Metadata = {
  title: "How to Launch Your First LinkedIn Campaign | Munero Guides",
  description:
    "Step-by-step for first-time LinkedIn advertisers. B2B targeting, ad formats, cost expectations, Lead Gen Forms, and what to measure.",
};

const TOC = [
  { id: "is-it-right", label: "Is LinkedIn right for your business?" },
  { id: "ad-formats", label: "LinkedIn ad formats, which one to use first" },
  { id: "targeting", label: "Targeting on LinkedIn" },
  { id: "cost", label: "Cost expectations" },
  { id: "creative", label: "Creative strategy for LinkedIn" },
  { id: "lead-gen", label: "Lead Gen Forms vs website traffic" },
  { id: "measure", label: "What to measure and when to optimize" },
];

export default function LinkedInGuide() {
  return (
    <GuideShell>
      <GuideHero
        platform="LinkedIn Ads"
        title="How to Launch Your First LinkedIn Campaign"
        description="B2B targeting, ad formats, cost expectations, and why LinkedIn requires a different creative strategy. Built for first-time advertisers."
        readTime="8 min read"
      />

      <TableOfContents items={TOC} />

      <article className="guide-content">
        <h2 id="is-it-right">Is LinkedIn right for your business?</h2>
        <p>
          LinkedIn is a B2B platform. The targeting and the audience exist for
          one reason: reaching people in their work context. If you sell a
          consumer product, even a high-ticket one, your dollar goes further
          on Meta. <strong>If you&apos;re DTC, skip LinkedIn.</strong>
        </p>
        <p>LinkedIn earns its premium when you sell:</p>
        <ul>
          <li>SaaS targeting a specific job function or seniority.</li>
          <li>Professional services (legal, financial, consulting).</li>
          <li>High-ticket B2B with a 3 to 12 month sales cycle.</li>
          <li>Enterprise software with named-account targeting.</li>
          <li>Recruiting, hiring, or workforce-tech products.</li>
        </ul>

        <h2 id="ad-formats">LinkedIn ad formats, which one to use first</h2>
        <p>Five formats matter. Use them in this order:</p>
        <h3>Single Image Ad</h3>
        <p>
          The default. Highest reach, lowest production cost, easiest to test.{" "}
          <strong>Start here.</strong> Square or 1.91:1 image, 150 character
          intro text, headline, CTA.
        </p>
        <h3>Document Ad</h3>
        <p>
          A PDF (case study, framework, report) shown in-feed. Reads as
          editorial, not advertising. Excellent for thought-leadership plays.
        </p>
        <h3>Video Ad</h3>
        <p>
          15 to 30 seconds, vertical or square. Talking-head founder format
          consistently outperforms produced video.
        </p>
        <h3>Sponsored Message</h3>
        <p>
          Direct-to-inbox. High open rate, polarizing experience. Use sparingly
          for high-fit ICP only.
        </p>
        <h3>Lead Gen Form Ad</h3>
        <p>
          A Single Image or Video Ad with a native lead form attached. We&apos;ll
          come back to this, it&apos;s the highest-converting format on the
          platform.
        </p>

        <h2 id="targeting">Targeting on LinkedIn</h2>
        <p>
          LinkedIn is the most precise B2B targeting on any platform. The
          following dimensions, used together, build account-grade targeting
          at the campaign level.
        </p>
        <ul>
          <li>
            <strong>Job title:</strong> the most powerful targeting on the
            internet. Stack 5 to 15 closely related titles. &ldquo;Head of
            Marketing&rdquo;, &ldquo;VP Marketing&rdquo;, &ldquo;Marketing
            Director&rdquo;, etc.
          </li>
          <li>
            <strong>Seniority:</strong> use as a filter on top of broader
            functions. &ldquo;Director and above&rdquo; in &ldquo;Marketing&rdquo;.
          </li>
          <li>
            <strong>Company size:</strong> exclude what you can&apos;t sell to.
            If you only close $10K+ ACV, exclude 1 to 10 employee companies.
          </li>
          <li>
            <strong>Industry:</strong> primary qualifier for ICP fit.
          </li>
          <li>
            <strong>Skills:</strong> looser signal than job title, useful when
            roles vary in name (e.g. &ldquo;Salesforce admin&rdquo;).
          </li>
          <li>
            <strong>Matched audiences:</strong> upload a list of company
            domains to run account-based campaigns.
          </li>
        </ul>
        <Callout label="Audience size sweet spot">
          Aim for <span className="guide-stat">50K to 300K</span> people per
          campaign. Smaller and you&apos;ll burn frequency. Larger and your
          targeting isn&apos;t doing real work.
        </Callout>

        <h2 id="cost">Cost expectations</h2>
        <p>
          LinkedIn is expensive. Plan for it.
        </p>
        <ul>
          <li>
            <strong>CPM:</strong> typically{" "}
            <span className="guide-stat">$50 to $100</span>, vs Meta&apos;s{" "}
            <span className="guide-stat">$15 to $30</span>. 3 to 5x premium is
            normal.
          </li>
          <li>
            <strong>CPC:</strong>{" "}
            <span className="guide-stat">$8 to $15</span> on most B2B
            campaigns. Specialist roles can run higher.
          </li>
          <li>
            <strong>Cost per Lead (Lead Gen Form):</strong>{" "}
            <span className="guide-stat">$30 to $80</span> for SaaS,{" "}
            <span className="guide-stat">$80 to $200</span> for enterprise.
          </li>
          <li>
            <strong>Minimum budget to learn:</strong>{" "}
            <span className="guide-stat">$50/day</span> per campaign. Below
            this, don&apos;t bother, you&apos;ll never reach significance.
          </li>
        </ul>
        <p>
          The math works when your customer LTV is 4-figures or higher. At
          $200 LTV, LinkedIn rarely pencils out.
        </p>

        <h2 id="creative">Creative strategy for LinkedIn</h2>
        <p>
          LinkedIn is not Meta. Direct response copy that screams
          &ldquo;limited time, click now&rdquo; is the wrong register. The
          platform rewards content that reads as professional editorial.
        </p>
        <ul>
          <li>
            <strong>Lead with insight, not offer.</strong> Open with a stat or
            an opinionated take. The pitch comes second.
          </li>
          <li>
            <strong>Long copy works.</strong> 1,200 characters of substantive
            text often outperforms 200. Readers self-select.
          </li>
          <li>
            <strong>Founder-led.</strong> A face and a first-person voice
            converts better than a corporate brand voice.
          </li>
          <li>
            <strong>Document Ads punch above their weight.</strong> A 5-page
            PDF framework with a Lead Gen Form attached is the highest-LTV
            format we know on the platform.
          </li>
          <li>
            <strong>Avoid clichés.</strong> &ldquo;Game-changer&rdquo;,
            &ldquo;synergy&rdquo;, &ldquo;leverage&rdquo;. The audience
            actively penalizes them.
          </li>
        </ul>

        <h2 id="lead-gen">Lead Gen Forms vs website traffic</h2>
        <p>
          Lead Gen Forms convert at roughly{" "}
          <span className="guide-stat">3x</span> the rate of equivalent ads
          driving to a website landing page. The form pre-fills with the
          user&apos;s LinkedIn profile, so submission takes one tap.
        </p>
        <p>Trade-off: the lead is colder.</p>
        <ul>
          <li>
            <strong>Use Lead Gen Forms for:</strong> top-of-funnel content
            offers (PDFs, webinars, gated frameworks). The goal is the email
            and the title.
          </li>
          <li>
            <strong>Use website traffic for:</strong> bottom-of-funnel
            conversions (demo requests, free trials, pricing pages). You want
            the lead motivated enough to leave the platform.
          </li>
        </ul>

        <h2 id="measure">What to measure and when to optimize</h2>
        <p>LinkedIn campaigns need patience. Don&apos;t touch anything in week 1.</p>
        <ul>
          <li>
            <strong>Day 7 check:</strong> CTR (aim for{" "}
            <span className="guide-stat">0.4%+</span>, vs Meta&apos;s 1%+),
            cost per lead, lead quality from sales.
          </li>
          <li>
            <strong>Day 14:</strong> kill creatives below half the campaign
            average CTR. Add 2 new variants.
          </li>
          <li>
            <strong>Day 30:</strong> evaluate by booked meetings or pipeline,
            not by leads. LinkedIn fills the top of the funnel; sales reports
            the truth.
          </li>
        </ul>
        <p>
          The single biggest mistake on LinkedIn: judging the campaign on Day
          7. The signal isn&apos;t there yet. Hold your nerve, hold the
          variables, let the system finish learning.
        </p>
      </article>

      <MuneroCTA platformLine="This is what Munero researches before you spend a single dollar on LinkedIn." />

      <AlsoInSeries currentSlug="linkedin-ads" />
    </GuideShell>
  );
}
