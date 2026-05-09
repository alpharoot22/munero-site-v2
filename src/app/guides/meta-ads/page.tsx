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
  title: "How to Launch Your First Meta Campaign | Munero Guides",
  description:
    "Step-by-step guide for solo marketers launching their first Meta campaign. Audience targeting, creative strategy, budget allocation, and Day 7 kill rules.",
};

const TOC = [
  { id: "before-you-touch", label: "Before you touch Meta Ads Manager" },
  { id: "campaign-structure", label: "Campaign structure, the right way" },
  { id: "audience-targeting", label: "Audience targeting for beginners" },
  { id: "creative", label: "Creative, the only thing that matters" },
  { id: "budget", label: "Budget allocation, where to start" },
  { id: "day-7", label: "What to measure on Day 7" },
  { id: "the-mistake", label: "The one thing Meta beginners always get wrong" },
];

export default function MetaAdsGuide() {
  return (
    <GuideShell>
      <GuideHero
        platform="Meta Ads"
        title="How to Launch Your First Meta Campaign"
        description="Step-by-step for solo marketers launching their first Meta campaign. Audience, creative, budget, and what to actually measure on Day 7."
        readTime="10 min read"
      />

      <TableOfContents items={TOC} />

      <article className="guide-content">
        <h2 id="before-you-touch">Before you touch Meta Ads Manager</h2>
        <p>
          The biggest mistake first-time Meta advertisers make is going
          straight to the campaign setup without knowing their audience.
          Meta&apos;s targeting is powerful but only if you know which signals
          to feed it.
        </p>
        <p>Before you open Ads Manager, answer these three questions:</p>
        <ol>
          <li>
            Who has the sharpest pain your product solves? Not
            &ldquo;everyone&rdquo;, the most desperate buyer.
          </li>
          <li>
            What does that person type into Google at 2am when the problem is
            worst?
          </li>
          <li>
            Which competitor is already running ads to them, and what angle are
            they using?
          </li>
        </ol>

        <h2 id="campaign-structure">Campaign structure, the right way</h2>
        <p>
          Meta campaigns have three levels: <strong>Campaign</strong>,{" "}
          <strong>Ad Set</strong>, and <strong>Ad</strong>.
        </p>
        <h3>Campaign</h3>
        <p>
          Set your objective. For a first campaign, use <strong>Sales</strong>{" "}
          if you have a pixel with 50+ purchases, or <strong>Traffic</strong>{" "}
          if you&apos;re starting fresh.
        </p>
        <h3>Ad Set</h3>
        <p>
          This is where your audience lives. Start with one ad set. One
          audience. Do not split test audiences on your first campaign, you
          will run out of budget before you get statistical significance.
        </p>
        <h3>Budget</h3>
        <p>
          Start with <span className="guide-stat">$30 to $50/day</span>{" "}
          minimum. Below this, Meta&apos;s algorithm cannot optimize properly.
          If you can&apos;t afford $30/day, you&apos;re not ready to run Meta
          ads.
        </p>
        <h3>Ad</h3>
        <p>
          Create 3 to 5 variants. Different hooks, same offer. Let Meta find
          the winner. Do not create 20 ads, you&apos;ll dilute the learning
          budget.
        </p>

        <h2 id="audience-targeting">Audience targeting for beginners</h2>
        <p>Three approaches, in order of what works:</p>
        <ol>
          <li>
            <strong>Broad targeting (recommended for most):</strong> Age,
            gender, country only. No interests. Let Meta&apos;s AI find your
            buyer. This works better than interest targeting for most DTC
            brands in 2025-2026.
          </li>
          <li>
            <strong>Interest targeting:</strong> Use this if you have a very
            specific niche. Stack 3 to 5 related interests. Keep the audience
            above 1 million people.
          </li>
          <li>
            <strong>Lookalike audiences:</strong> Only effective if you have
            1,000+ customer emails to upload. Upload your customer list, create
            a 1% lookalike, run it.
          </li>
        </ol>

        <h2 id="creative">Creative, the only thing that matters</h2>
        <p>
          Meta&apos;s targeting is commoditized. <strong>Your creative is your targeting.</strong>
        </p>
        <p>
          The hook (first 3 seconds) determines everything. If you lose them in
          3 seconds, the rest of the ad doesn&apos;t matter. Test these hook
          formats:
        </p>
        <ul>
          <li>
            <strong>Problem statement:</strong> &ldquo;If you&apos;re struggling
            with [pain], this is for you.&rdquo;
          </li>
          <li>
            <strong>Social proof:</strong> &ldquo;50,000 people have already
            switched to [product].&rdquo;
          </li>
          <li>
            <strong>Curiosity gap:</strong> &ldquo;The reason your [results]
            aren&apos;t improving (and the fix).&rdquo;
          </li>
          <li>
            <strong>Direct offer:</strong> &ldquo;Get [result] in [time].
            Here&apos;s how.&rdquo;
          </li>
        </ul>
        <p>
          <strong>Image vs video:</strong> Video outperforms image for most
          DTC. UGC (user-generated content) style video outperforms polished
          video. iPhone footage converts better than studio footage.
        </p>

        <h2 id="budget">Budget allocation, where to start</h2>
        <ul>
          <li>
            <strong>Week 1 ($30/day):</strong> One campaign, one ad set, 3 to 5
            creatives.
          </li>
          <li>
            <strong>Week 2:</strong> Kill the lowest-performing creative. Add
            one new variant.
          </li>
          <li>
            <strong>Week 3:</strong> If ROAS is above{" "}
            <span className="guide-stat">1.5x</span>, increase budget by 20%.
            If ROAS is below <span className="guide-stat">1.0x</span>, pause
            and rebuild the creative.
          </li>
        </ul>
        <Callout label="Kill rule">
          If a creative has spent 2x your target CPA with zero purchases, pause
          it.
        </Callout>
        <Callout label="Scale rule">
          If ROAS is above 2x for 7 days, increase ad set budget by 30%.
        </Callout>

        <h2 id="day-7">What to measure on Day 7</h2>
        <p>The metrics that matter on Day 7:</p>
        <ul>
          <li>
            <strong>CPM (cost per 1,000 impressions):</strong> Above $30 means
            your creative is not resonating with the audience.
          </li>
          <li>
            <strong>CTR (click-through rate):</strong> Below 1% means your hook
            is failing.
          </li>
          <li>
            <strong>CPC (cost per click):</strong> Benchmark against your
            industry average.
          </li>
          <li>
            <strong>ROAS:</strong> Below 1.0x after $300 spend equals pause and
            rethink the angle.
          </li>
          <li>
            <strong>Hook rate (3-second video views / impressions):</strong>{" "}
            Below 25% equals weak hook.
          </li>
        </ul>

        <h2 id="the-mistake">The one thing Meta beginners always get wrong</h2>
        <p>They change too many variables at once.</p>
        <p>
          New creative + new audience + new offer + new landing page equals you
          have no idea what worked or what failed.
        </p>
        <p>
          Change one variable at a time. Keep everything else constant. Run
          each test for at least <span className="guide-stat">7 days</span> and{" "}
          <span className="guide-stat">$100</span> in spend before making
          decisions.
        </p>
      </article>

      <MuneroCTA platformLine="This is what Munero researches before you run a single Meta ad." />

      <AlsoInSeries currentSlug="meta-ads" />
    </GuideShell>
  );
}
