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
  title: "How to Launch Your First Google Ads Campaign | Munero Guides",
  description:
    "Step-by-step for solo marketers launching their first Google Ads campaign. Search vs Display, keyword match types, Quality Score, and how not to burn budget on day one.",
};

const TOC = [
  { id: "which-format", label: "Search vs Display vs Shopping, which to start with" },
  { id: "keyword-research", label: "Keyword research for beginners" },
  { id: "match-types", label: "Match types explained" },
  { id: "structure", label: "Campaign structure, the right way" },
  { id: "ad-copy", label: "Writing ad copy that gets clicks" },
  { id: "landing", label: "Landing page requirements" },
  { id: "budget", label: "Budget and bidding strategy" },
  { id: "quality-score", label: "Quality Score, what it is and why it matters" },
  { id: "week-1", label: "What to measure in Week 1" },
];

export default function GoogleAdsGuide() {
  return (
    <GuideShell>
      <GuideHero
        platform="Google Ads"
        title="How to Launch Your First Google Ads Campaign"
        description="Keyword intent, match types, campaign structure, and Quality Score. Step-by-step for first-time advertisers."
        readTime="12 min read"
      />

      <TableOfContents items={TOC} />

      <article className="guide-content">
        <h2 id="which-format">Search vs Display vs Shopping, which to start with</h2>
        <p>
          <strong>Always start with Search.</strong> It captures the buyer at
          the moment of explicit intent, the easiest possible conversion to
          earn. Display and YouTube are awareness plays. Shopping is for
          e-commerce with a Merchant Center feed.
        </p>
        <ul>
          <li>
            <strong>Search:</strong> Highest intent, smallest waste. Start here.
          </li>
          <li>
            <strong>Shopping:</strong> Only if you sell physical products and
            have a configured Merchant Center feed.
          </li>
          <li>
            <strong>Display:</strong> Skip as a beginner. The defaults will
            spend on placements you would never approve.
          </li>
          <li>
            <strong>Performance Max:</strong> Tempting because it&apos;s
            automated, dangerous because you can&apos;t see what you&apos;re
            paying for. Only use after you have a stable Search baseline.
          </li>
        </ul>

        <h2 id="keyword-research">Keyword research for beginners</h2>
        <p>
          Don&apos;t start in Google&apos;s Keyword Planner. Start with a
          whiteboard. Write down the exact phrases your buyer types when the
          problem is most acute.
        </p>
        <ol>
          <li>List 10 to 20 problem phrases your customer would type at 2am.</li>
          <li>List 5 to 10 product-shaped phrases (&ldquo;[your category] for [their use case]&rdquo;).</li>
          <li>List your top 3 competitor brand names. Yes, you bid on them.</li>
        </ol>
        <p>
          Then run the list through Keyword Planner to validate volume and
          range CPC. Drop anything with{" "}
          <span className="guide-stat">&lt;100</span> monthly searches unless
          intent is razor-sharp.
        </p>

        <h2 id="match-types">Match types explained</h2>
        <p>
          The single biggest budget leak for beginners is the wrong match
          type. Google&apos;s default is Broad. Don&apos;t use it.
        </p>
        <h3>Exact match [keyword]</h3>
        <p>
          Triggers only on tight variants of the keyword. Smallest reach,
          highest intent. Start here.
        </p>
        <h3>Phrase match &ldquo;keyword&rdquo;</h3>
        <p>
          Triggers when the search includes the phrase in order, with words
          before or after allowed. Use this once you&apos;ve confirmed your
          exact keywords convert.
        </p>
        <h3>Broad match keyword</h3>
        <p>
          Triggers on Google&apos;s interpretation of related intent. As a
          beginner, this will burn your budget on irrelevant clicks within
          days. <strong>Do not use as a beginner.</strong>
        </p>
        <Callout label="The most important thing beginners skip">
          Negative keywords. Every campaign needs a list of words that{" "}
          <em>disqualify</em> the search. &ldquo;Free&rdquo;, &ldquo;DIY&rdquo;,
          &ldquo;jobs&rdquo;, competitor names you don&apos;t want to bid on,
          and so on. Build the negative list as you watch the search terms
          report each week.
        </Callout>

        <h2 id="structure">Campaign structure, the right way</h2>
        <p>
          One campaign per intent type. Not per keyword, not per product, per
          intent. Structure:
        </p>
        <ul>
          <li>
            <strong>Campaign 1:</strong> High-intent (problem phrases the buyer
            types when ready to act).
          </li>
          <li>
            <strong>Campaign 2:</strong> Brand defense (your own brand name,
            cheap CPC, captures organic traffic competitors might bid on).
          </li>
          <li>
            <strong>Campaign 3 (optional):</strong> Competitor brand bids.
            Higher CPC, qualified traffic.
          </li>
        </ul>
        <p>
          Inside each campaign, ad groups are tightly themed: 5 to 15 keywords
          per ad group, all variants of one intent. Each ad group gets 3 ads.
        </p>

        <h2 id="ad-copy">Writing ad copy that gets clicks</h2>
        <p>
          A Responsive Search Ad takes up to 15 headlines and 4 descriptions.
          Don&apos;t write 4 headlines. Use all 15. Variety lets Google&apos;s
          system find the combination that converts.
        </p>
        <ul>
          <li>Include the exact keyword in at least 3 headlines.</li>
          <li>
            Use <strong>specific numbers</strong> over vague claims. &ldquo;Save
            $147/month&rdquo; beats &ldquo;Save big.&rdquo;
          </li>
          <li>
            Use one headline for{" "}
            <strong>your differentiator</strong>, one for{" "}
            <strong>social proof</strong>, one for the{" "}
            <strong>offer / price</strong>, one for the{" "}
            <strong>CTA</strong>.
          </li>
          <li>
            Pin only when needed. Pinning every headline destroys the system&apos;s
            ability to optimize.
          </li>
        </ul>

        <h2 id="landing">Landing page requirements</h2>
        <p>
          Sending Google traffic to your homepage is the single most expensive
          mistake first-time advertisers make. Build a dedicated landing page
          per ad group.
        </p>
        <ul>
          <li>
            <strong>Headline matches the keyword.</strong> If the ad says
            &ldquo;ergonomic office chair under $300&rdquo;, the page H1 says
            the same. This drives Quality Score.
          </li>
          <li>
            <strong>Loads in under 2 seconds</strong> on mobile. Use{" "}
            <code>pagespeed.web.dev</code> to verify before you spend a cent.
          </li>
          <li>
            <strong>One CTA above the fold.</strong> Every ad group has one
            goal. The page reflects that.
          </li>
          <li>
            <strong>No menu navigation</strong> for paid traffic. Strip it. The
            only links are your CTA and a phone number.
          </li>
        </ul>

        <h2 id="budget">Budget and bidding strategy</h2>
        <p>
          The 1 / 10 / 100 rule for first-time campaigns:
        </p>
        <ul>
          <li>
            <strong>$1 to $10/day:</strong> too small. Google won&apos;t learn
            and you won&apos;t either.
          </li>
          <li>
            <strong>$10 to $30/day:</strong> learning budget. Expect 60 to 90
            days to find a stable winner.
          </li>
          <li>
            <strong>$30 to $100/day:</strong> the real beginner range. You can
            generate enough conversion data to make decisions in 3 to 4 weeks.
          </li>
        </ul>
        <h3>Bidding: Manual CPC vs Smart Bidding</h3>
        <p>
          Smart Bidding (Maximize Conversions, Target CPA, Target ROAS) needs
          50+ conversions in 30 days to work. You don&apos;t have that yet.
        </p>
        <p>
          Start with <strong>Manual CPC</strong>. Set max CPC bids you&apos;re
          willing to pay. Once you have 50 conversions, switch to{" "}
          <strong>Maximize Conversions</strong>, then{" "}
          <strong>Target CPA</strong>.
        </p>
        <Callout label="Conversion tracking is non-negotiable">
          Set it up before the first dollar of spend. Without it you are flying
          blind and Google&apos;s system can&apos;t learn. Use Google Ads
          conversion tracking, GA4 import, or both.
        </Callout>

        <h2 id="quality-score">Quality Score, what it is and why it matters</h2>
        <p>
          Quality Score is Google&apos;s 1-to-10 rating of how relevant your ad
          and landing page are to the keyword. Higher Quality Score equals
          lower cost per click for the same ad position.
        </p>
        <p>Three components, each rated Below / Average / Above average:</p>
        <ul>
          <li>
            <strong>Expected CTR:</strong> driven by ad copy that matches the
            keyword.
          </li>
          <li>
            <strong>Ad relevance:</strong> driven by keyword presence in the
            headline.
          </li>
          <li>
            <strong>Landing page experience:</strong> driven by load speed,
            on-page keyword match, and content depth.
          </li>
        </ul>
        <p>
          Going from a Quality Score of 5 to 8 typically cuts CPC by 30 to 50%.
          This is the single highest-ROI lever in Google Ads.
        </p>

        <h2 id="week-1">What to measure in Week 1</h2>
        <ul>
          <li>
            <strong>Search terms report:</strong> read it daily. Add negative
            keywords for any irrelevant trigger.
          </li>
          <li>
            <strong>CTR by ad:</strong> aim for{" "}
            <span className="guide-stat">3%+</span> on Search. Below 1.5% means
            the ad copy is failing.
          </li>
          <li>
            <strong>CPC by keyword:</strong> kill keywords with CPC above 2x
            your target on day 1. Test cheaper variants.
          </li>
          <li>
            <strong>CVR by landing page:</strong> aim for{" "}
            <span className="guide-stat">2%+</span>. Below 1%, the landing page
            is the problem, not the ad.
          </li>
          <li>
            <strong>Impression share lost (budget):</strong> if above 30%, you
            are budget-capped on a profitable keyword. Increase budget.
          </li>
        </ul>
      </article>

      <MuneroCTA platformLine="This is what Munero researches before you bid on a single Google keyword." />

      <AlsoInSeries currentSlug="google-ads" />
    </GuideShell>
  );
}
