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
  title: "How to Launch Your First TikTok Campaign | Munero Guides",
  description:
    "Step-by-step for solo marketers launching their first TikTok campaign. Hooks, creative volume, Spark Ads, fatigue, and what to actually measure.",
};

const TOC = [
  { id: "different", label: "Why TikTok is different from every other ad platform" },
  { id: "hook", label: "The hook is everything, 3 seconds or you lose them" },
  { id: "structure", label: "TikTok campaign structure for beginners" },
  { id: "creative", label: "Creative formats that actually convert" },
  { id: "targeting", label: "Audience targeting on TikTok" },
  { id: "budget", label: "Budget and bidding, what to expect" },
  { id: "day-7", label: "What to measure on Day 7" },
  { id: "framework", label: "The TikTok creative testing framework" },
];

export default function TikTokGuide() {
  return (
    <GuideShell>
      <GuideHero
        platform="TikTok Ads"
        title="How to Launch Your First TikTok Campaign"
        description="Hook strategy, creative volume, Spark Ads vs In-Feed, and why TikTok rewards testing more than targeting."
        readTime="8 min read"
      />

      <TableOfContents items={TOC} />

      <article className="guide-content">
        <h2 id="different">Why TikTok is different from every other ad platform</h2>
        <p>
          Meta works on targeting. Google works on intent. TikTok works on
          creative. If your video doesn&apos;t earn the watch in the first 3
          seconds, the platform stops showing it, no matter how much you bid.
        </p>
        <p>
          The practical consequence: on TikTok, the winning lever is{" "}
          <strong>creative volume</strong>, not bid strategy. Brands that ship 5
          new videos a week consistently beat brands that polish 1 a month.
        </p>

        <h2 id="hook">The hook is everything, 3 seconds or you lose them</h2>
        <p>
          The benchmark to beat: <span className="guide-stat">30%+</span> hook
          rate (3-second views divided by impressions). Below 25% and the
          algorithm will starve the ad of distribution.
        </p>
        <p>Hook formats that work on TikTok in 2026:</p>
        <ul>
          <li>
            <strong>POV opener:</strong> &ldquo;POV: you finally found a [thing]
            that actually [benefit].&rdquo; Native to the platform.
          </li>
          <li>
            <strong>Things that just make sense:</strong> Listicle frame.
            &ldquo;3 things about [category] that just make sense.&rdquo;
          </li>
          <li>
            <strong>Before / after:</strong> Show the transformation in the
            first frame. The viewer commits to watching to see how.
          </li>
          <li>
            <strong>Pattern interrupt:</strong> Something visually unexpected in
            the first 0.5 seconds. A weird angle. A noise. A direct stare.
          </li>
          <li>
            <strong>Curiosity gap:</strong> &ldquo;Why I stopped buying [common
            choice] and switched to [your thing].&rdquo;
          </li>
        </ul>

        <h2 id="structure">TikTok campaign structure for beginners</h2>
        <p>
          TikTok&apos;s structure mirrors Meta: Campaign, Ad Group, Ad. Keep it
          simple on day one.
        </p>
        <ul>
          <li>
            <strong>One campaign.</strong> Use{" "}
            <strong>Conversion</strong> objective if your pixel has 50+
            conversions, otherwise <strong>Traffic</strong>.
          </li>
          <li>
            <strong>One or two ad groups.</strong> Don&apos;t fragment your
            budget across ten audiences while you&apos;re still learning what
            works creatively.
          </li>
          <li>
            <strong>5 to 8 ads per group.</strong> TikTok needs creative volume
            to find the winner.
          </li>
        </ul>

        <h2 id="creative">Creative formats that actually convert</h2>
        <h3>Spark Ads</h3>
        <p>
          A Spark Ad is a regular organic post promoted as an ad. They
          consistently outperform from-scratch ads because they look native.
          Use them whenever you can. Either run your own organic content as
          Spark Ads or partner with creators who give you spark codes.
        </p>
        <h3>In-Feed Ads</h3>
        <p>
          Standard format. Shoot vertical, use captions, keep it under 30
          seconds. Studio polish hurts performance, iPhone-quality UGC wins.
        </p>
        <h3>TopView Ads</h3>
        <p>
          The first ad a user sees on app open. Premium reach, premium price.
          Skip these as a beginner. Spend the budget on volume in In-Feed.
        </p>

        <h2 id="targeting">Audience targeting on TikTok</h2>
        <p>
          TikTok&apos;s targeting is <strong>weaker than Meta</strong> on
          intent and <strong>better than Meta</strong> on raw discovery. Don&apos;t
          stack interests trying to recreate Facebook precision, the platform
          will starve overly narrow audiences.
        </p>
        <ul>
          <li>
            <strong>Broad targeting first:</strong> Age, gender, country.
            Nothing else. Let the algorithm find your buyer.
          </li>
          <li>
            <strong>Interest categories:</strong> If you must, pick 1 to 2
            broad categories. Avoid hashtag targeting, it&apos;s noisy.
          </li>
          <li>
            <strong>Custom audiences:</strong> Upload a customer email list
            once you have 1,000+ matched users.
          </li>
        </ul>

        <h2 id="budget">Budget and bidding, what to expect</h2>
        <p>
          TikTok CPMs run lower than Meta (often{" "}
          <span className="guide-stat">$5 to $12</span> vs Meta&apos;s{" "}
          <span className="guide-stat">$15 to $30</span>), but CVR also runs
          lower. Net CPA is typically comparable, sometimes 10 to 20% better
          for the right product.
        </p>
        <ul>
          <li>
            <strong>Daily minimum:</strong> $20/day per ad group, $50/day per
            campaign for the algorithm to learn.
          </li>
          <li>
            <strong>Bidding:</strong> Start with{" "}
            <strong>Lowest Cost</strong>. Switch to{" "}
            <strong>Cost Cap</strong> once you have a stable CPA benchmark.
          </li>
          <li>
            <strong>Learning phase:</strong> 50 conversions per ad group, same
            as Meta. Expect 7 to 10 days at $20/day.
          </li>
        </ul>
        <Callout label="Creative fatigue is faster on TikTok">
          A winning Meta creative might run for 30 to 60 days. A winning TikTok
          creative often peaks in 7 to 14 days. Plan to refresh weekly. This is
          why creative volume beats creative polish here.
        </Callout>

        <h2 id="day-7">What to measure on Day 7</h2>
        <ul>
          <li>
            <strong>Hook rate (3-second views / impressions):</strong> Aim for{" "}
            <span className="guide-stat">30%+</span>. Below 25%, the creative
            is failing.
          </li>
          <li>
            <strong>6-second hold rate:</strong> Aim for{" "}
            <span className="guide-stat">15%+</span>. The creative either keeps
            them or it doesn&apos;t.
          </li>
          <li>
            <strong>CTR:</strong> Anything above 1% is healthy on TikTok.
          </li>
          <li>
            <strong>CPA:</strong> Compare to your blended target. Below blended,
            scale; above, kill.
          </li>
        </ul>

        <h2 id="framework">The TikTok creative testing framework</h2>
        <p>
          Run 2 new hook variants per week against your current winner. Keep
          everything else constant: same offer, same audience, same bid.
        </p>
        <ol>
          <li>Week 1: Ship 5 to 8 hooks. Identify the top 2 by hook rate.</li>
          <li>Week 2: Make 2 variants of each top hook. Different opener, same body.</li>
          <li>Week 3: Kill the bottom half. Layer in 4 new fresh hooks.</li>
          <li>Repeat. The compounding winner is rare, the steady stream of new variants is the strategy.</li>
        </ol>
      </article>

      <MuneroCTA platformLine="This is what Munero researches before you ship a single TikTok ad." />

      <AlsoInSeries currentSlug="tiktok-ads" />
    </GuideShell>
  );
}
