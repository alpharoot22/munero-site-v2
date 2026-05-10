import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=starter";

export const metadata: Metadata = {
  title: "Sample brief",
  description:
    "See a real, anonymized Munero campaign brief. 16 sections from market opportunity score to SHA-256 audit hash.",
};

export default function SamplePage() {
  return (
    <>
      <Section>
        <Eyebrow>Sample brief</Eyebrow>
        <H2 className="max-w-[22ch]">A real brief, lightly anonymized. Read before you buy.</H2>
        <Lede>
          This is the actual output for a DTC home goods brand running $18K/mo on Meta. Names
          changed, numbers preserved.
        </Lede>
      </Section>

      <Section bordered>
        <div className="grid md:grid-cols-[260px_1fr] gap-12">
          <aside className="md:sticky md:top-20 self-start">
            <div
              className="text-[11px] uppercase tracking-[0.16em] num mb-3"
              style={{ color: "var(--text-3)" }}
            >
              Sections
            </div>
            <ul className="space-y-2 text-[13.5px]">
              {[
                "Executive summary",
                "Market opportunity score",
                "Audience segments",
                "Pain point library",
                "Search intent keywords",
                "Competitor gaps",
                "Winning angles",
                "Hooks ranked by signal",
                "Creative briefs",
                "Image & video kit",
                "Landing page direction",
                "Campaign plan",
                "KPI targets",
                "Kill & scale rules",
                "Evidence library",
                "SHA-256 audit hash",
              ].map((s, i) => (
                <li key={s}>
                  <a
                    href={`#${s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`}
                    className="grid grid-cols-[28px_1fr] gap-1 items-baseline"
                    style={{ color: "var(--text-2)" }}
                  >
                    <span
                      className="num"
                      style={{
                        fontSize: 11,
                        color: "var(--text-3)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-12">
            <Block id="executive-summary" title="Executive summary">
              <p>
                Brand X sells premium ceramic cookware DTC. Current monthly spend $18K, mixed
                Meta/Google with a 1.4x blended ROAS. The brief identifies three under-targeted
                segments (durability-skeptic gift buyers, induction-stovetop new users, cookware
                gift-givers for housewarmings) where competitor coverage scores below 40 of 100.
                Recommended attack: lead with durability proof, secondary with gift positioning,
                tertiary with induction-specific creative.
              </p>
              <Stat label="Market opportunity score" value="74 / 100" />
              <Stat label="Predicted blended ROAS at month 2" value="2.6x" />
              <Stat label="Recommended budget shift" value="Meta -10%, TikTok +35%" />
            </Block>

            <Block id="market-opportunity-score" title="Market opportunity score">
              <p>
                Score components weighted from category demand, competitor saturation, and
                creative whitespace. 74 / 100 signals a high-opportunity window before
                competitor coverage closes.
              </p>
              <Stat label="Demand signal (Trends + search)" value="82 / 100" />
              <Stat label="Competitor saturation (inverse)" value="68 / 100" />
              <Stat label="Creative whitespace" value="71 / 100" />
              <Stat label="Pain intensity (Reddit + Trustpilot)" value="76 / 100" />
              <Stat label="Final opportunity score" value="74 / 100" />
            </Block>

            <Block id="audience-segments" title="Audience segments">
              <p>
                Three primary segments, each with distinct pain language and channel weighting.
              </p>
              <Segment
                name="Durability-skeptic gift buyers"
                size="38%"
                pains={[
                  "Burned by $200 pans that warped in 6 months.",
                  "Don't trust brand claims, look for review depth.",
                  "Willing to spend, but only on validated longevity.",
                ]}
              />
              <Segment
                name="Induction stovetop new users"
                size="34%"
                pains={[
                  "Just moved to apartments with induction.",
                  "Confused which existing cookware works.",
                  "Looking for clear induction-compatibility signaling.",
                ]}
              />
              <Segment
                name="Housewarming gift-givers"
                size="28%"
                pains={[
                  "Want a gift that looks premium but isn't generic.",
                  "Need fast shipping windows around moves.",
                  "Wedding registry adjacency.",
                ]}
              />
            </Block>

            <Block id="pain-point-library" title="Pain point library">
              <p>
                47 ranked pain points across Reddit, Trustpilot, and YouTube comments. Top 6
                shown — full library lives in the workspace.
              </p>
              <PainList
                items={[
                  ["Coating chips after 4 months of normal use.", "Frequency 92", "Intensity 88"],
                  ["Doesn't work on my new induction range.", "Frequency 81", "Intensity 76"],
                  ["Handles get dangerously hot on the stovetop.", "Frequency 74", "Intensity 84"],
                  ["Warped after first dishwasher cycle.", "Frequency 68", "Intensity 79"],
                  ["Brand claimed lifetime, broke after 14 months.", "Frequency 63", "Intensity 91"],
                  ["Too heavy to lift one-handed when full.", "Frequency 58", "Intensity 52"],
                ]}
              />
            </Block>

            <Block id="search-intent-keywords" title="Search intent keywords">
              <p>
                Intent classified buy / research / brand-aware. CPC ranges pulled from Google
                Keyword Planner, ranked by intent strength.
              </p>
              <KeywordTable
                rows={[
                  ["best induction cookware set 2026", "Buy", "$3.40", "↑ 24%"],
                  ["ceramic cookware that lasts", "Buy", "$2.80", "↑ 18%"],
                  ["non toxic pans for new apartment", "Research", "$1.95", "↑ 31%"],
                  ["wedding registry cookware ideas", "Buy", "$2.20", "→ 4%"],
                  ["why does my pan warp", "Research", "$0.85", "↑ 12%"],
                  ["[Brand X] vs [Competitor Y]", "Brand-aware", "$1.10", "↑ 8%"],
                ]}
              />
            </Block>

            <Block id="competitor-gaps" title="Competitor gaps">
              <p>
                10 competitors deep-dived. Each scored on coverage of the 3 target segments.
                Below 40 / 100 = open lane.
              </p>
              <CompetitorGap
                name="Competitor A (market leader)"
                spend="$220K/mo"
                gap="Coverage 32 / 100 on induction-new-users. Almost no induction-specific creative on Meta. Lane is wide open."
              />
              <CompetitorGap
                name="Competitor B (mid-tier)"
                spend="$95K/mo"
                gap="Coverage 38 / 100 on gift positioning. Generic copy, no wedding-registry angle. Hooks 03 and 06 punch through."
              />
              <CompetitorGap
                name="Competitor C (budget)"
                spend="$48K/mo"
                gap="Coverage 71 / 100 on durability. Strong here — avoid head-on. Compete on premium framing instead."
              />
            </Block>

            <Block id="winning-angles" title="Winning angles">
              <p>
                Five angles ranked by predicted opportunity score. Validated against 380
                winning ads pulled from Meta Ad Library + TikTok Creative Center.
              </p>
              <AngleList
                items={[
                  ["Durability proof through visible stress test", "89", "Founder-led demo videos showing pan vs $400 competitor."],
                  ["Induction-compatibility as primary value prop", "84", "Side-by-side stovetop demos. UGC from real moves."],
                  ["Wedding registry positioning", "78", "Couple-led content. Gift-card mechanics. Q4 timing."],
                  ["Heritage / craft narrative", "71", "Factory tour B-roll. Material sourcing transparency."],
                  ["Price anchoring vs lifetime cost", "66", "$/year math. Long-form caption format."],
                ]}
              />
            </Block>

            <Block id="hooks-ranked-by-signal" title="Hooks ranked by signal">
              <ol className="space-y-3">
                {[
                  ["The pan that outlasts the pan you're replacing.", "92"],
                  ["Cookware that survives induction, gas, and your dishwasher.", "87"],
                  ["The wedding registry's quiet favorite.", "81"],
                  ["Why ceramic, and why most ceramic is wrong.", "76"],
                  ["10 years from now, you'll still be using this.", "72"],
                ].map(([hook, score]) => (
                  <li
                    key={hook}
                    className="grid grid-cols-[1fr_auto] gap-4 items-baseline hairline-b pb-3"
                  >
                    <span className="text-[15px]">{hook}</span>
                    <span
                      className="num text-[13px]"
                      style={{
                        color:
                          Number(score) >= 85
                            ? "var(--score-high)"
                            : Number(score) >= 75
                            ? "var(--score-mid)"
                            : "var(--text-2)",
                      }}
                    >
                      {score}
                    </span>
                  </li>
                ))}
              </ol>
            </Block>

            <Block id="creative-briefs" title="Creative briefs">
              <p>
                46 creative assets briefed across Meta, TikTok, and Google. Each includes hook,
                body copy, visual direction, CTA, and platform spec. Three samples shown.
              </p>
              <CreativeBrief
                format="Meta · 4:5 video · 15s"
                hook="The pan that outlasts the pan you're replacing."
                body="Founder holds Brand X pan next to a warped competitor. Drops both on counter. Tap into 'lifetime' overlay. End card: shop now."
                cta="Shop the bundle"
              />
              <CreativeBrief
                format="TikTok · 9:16 UGC · 22s"
                hook="My landlord said induction. My pan said no."
                body="Creator shows induction stove rejecting old pan. Cuts to Brand X — instant heat. Casual narration, low production."
                cta="See if yours works"
              />
              <CreativeBrief
                format="Google · responsive search · 30 char headline"
                hook="Cookware Built To Outlast 2025"
                body="3 headlines, 4 descriptions, 2 long callouts. Sitelinks: induction guide, registry, reviews, warranty."
                cta="Shop now"
              />
            </Block>

            <Block id="image-video-kit" title="Image & video kit">
              <p>
                Generated assets attached to every brief. Images via Munero auto-gen, videos via
                Higgsfield AI on Creative Workspace and above.
              </p>
              <Stat label="Image prompts generated" value="32" />
              <Stat label="Video scripts (15s / 22s / 45s)" value="9" />
              <Stat label="Storyboard frames" value="48" />
              <Stat label="Video credits used (Higgsfield)" value="3 of 3" />
              <Stat label="Direct-import zip (Meta + TikTok specs)" value="Ready" />
            </Block>

            <Block id="landing-page-direction" title="Landing page direction">
              <p>
                Above-fold + 4 below-fold modules briefed for the highest-scoring angle.
                Recommended hero: durability proof side-by-side.
              </p>
              <Stat label="Recommended hero hook" value="Outlasts the pan you're replacing" />
              <Stat label="Above-fold proof" value="6,400 reviews · 4.8★ avg" />
              <Stat label="Module 1" value="Durability stress test (video)" />
              <Stat label="Module 2" value="Induction compatibility checker" />
              <Stat label="Module 3" value="Lifetime cost math vs $400 alt" />
              <Stat label="Module 4" value="Wedding registry / gift module (Q4 only)" />
            </Block>

            <Block id="campaign-plan" title="Campaign plan">
              <p>
                30-day rollout across Meta, TikTok, and Google. Day-by-day creative cadence and
                budget allocation. Conservative start, scale gates at Day 7 and Day 14.
              </p>
              <CampaignDay day="Day 1-3" detail="Launch 6 hooks across Meta + TikTok at $200/day. Google Search holds existing brand campaign." />
              <CampaignDay day="Day 4-7" detail="Kill bottom 2 hooks by CPA. Scale top 2 to $400/day. Layer durability-proof angle on TikTok." />
              <CampaignDay day="Day 8-14" detail="Introduce induction-compatibility creative. New audience: induction-recent-movers." />
              <CampaignDay day="Day 15-21" detail="Wedding registry test (Q4 only). Pinterest pilot at $50/day. Refresh top hook with UGC." />
              <CampaignDay day="Day 22-30" detail="Double down on top angle. Build lookalike from purchaser data. Begin retention sequence." />
            </Block>

            <Block id="kpi-targets" title="KPI targets">
              <p>
                Per-channel and blended targets. Pulled from category benchmarks + your
                historical performance. These drive the kill / scale rules below.
              </p>
              <KpiTable
                rows={[
                  ["Meta CPA", "$58", "$72"],
                  ["TikTok CPA", "$49", "$65"],
                  ["Google Search CPA", "$38", "$48"],
                  ["Blended ROAS (Day 14)", "2.4x", "2.0x"],
                  ["Blended ROAS (Day 30)", "2.8x", "2.3x"],
                  ["Hook win rate", "≥ 30%", "≥ 22%"],
                ]}
              />
            </Block>

            <Block id="kill-scale-rules" title="Kill & scale rules">
              <p>
                Quantified, automatic. Munero re-evaluates against actuals when you submit them
                in the workspace. No emotional spend.
              </p>
              <Rule type="kill" text="Kill if CPA > $72 sustained 7 days at any spend level." />
              <Rule type="kill" text="Kill if CTR < 0.6% by Day 4 across audiences." />
              <Rule type="kill" text="Kill any creative > 14 days old with frequency > 4.2." />
              <Rule type="scale" text="Scale +50% budget if ROAS > 2.8x sustained 72 hours." />
              <Rule type="scale" text="Scale +30% if hook is top-3 by CPA on Day 7 or Day 14." />
              <Rule type="scale" text="Duplicate top hook into 3 audience variants when CTR > 1.4%." />
            </Block>

            <Block id="evidence-library" title="Evidence library">
              <p>
                57 verifiable items linked across the brief. Click any claim and it traces back
                to source. Audit-ready.
              </p>
              <EvidenceList
                items={[
                  ["Reddit", "r/CookwareTalk", "12 threads · 184 quotes"],
                  ["Trustpilot", "Brand X + 4 competitors", "1,840 reviews scraped"],
                  ["Meta Ad Library", "Active competitor ads", "380 ads · 6 months"],
                  ["TikTok Creative Center", "Top performing in category", "92 videos"],
                  ["Google Trends", "Category + branded queries", "24-month trend"],
                  ["YouTube comments", "Cookware review channels", "9 videos · 2,300 comments"],
                  ["Amazon reviews", "Brand X + competitor SKUs", "6,400 reviews"],
                  ["LinkedIn Ads", "B2B gift positioning", "Sponsored posts"],
                ]}
              />
            </Block>

            <Block id="sha-256-audit-hash" title="SHA-256 audit hash">
              <p>
                Every brief gets a cryptographic signature on generation. The hash binds the
                exact source set, prompt versions, and outputs. Tamper-proof. Shareable with
                clients, legal, or stakeholders.
              </p>
              <div
                className="hairline rounded-md p-5 font-mono text-[12px] break-all"
                style={{ background: "var(--surface)", color: "var(--text-2)" }}
              >
                <div className="num text-[10px] mb-2" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
                  BRIEF HASH
                </div>
                a4f1c8e2b6d39f74e5c1a08293bf6d2e7c41a9b8f63d0e5a728c1f4b9e6d3c082
              </div>
              <Stat label="Generated at" value="2026-05-09 14:22 UTC" />
              <Stat label="Source set version" value="v3.4.1" />
              <Stat label="Prompt revision" value="r-2026-05-01" />
              <Stat label="Verification endpoint" value="munero.ai/verify/{hash}" />
            </Block>

            <div
              className="hairline rounded-md p-8 text-center"
              style={{ background: "var(--surface)" }}
            >
              <div className="num text-[11px] mb-3" style={{ color: "var(--accent)" }}>
                16 SECTIONS · 80+ DATA POINTS
              </div>
              <h3 className="text-[22px] tracking-tight font-medium">
                The full brief covers all 16 sections from market opportunity score to SHA-256 audit hash.
              </h3>
              <p
                className="mt-3 text-[14.5px] max-w-[52ch] mx-auto"
                style={{ color: "var(--text-2)" }}
              >
                Get yours in 35 minutes for $99.
              </p>
              <a
                href={STRIPE_BRIEF}
                className="btn-primary mt-6 inline-flex"
              >
                Open your workspace · $99
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-20">
      <h3 className="text-[22px] tracking-tight font-medium">{title}</h3>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
        {children}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between hairline-b py-3 text-[14px]">
      <span style={{ color: "var(--text-2)" }}>{label}</span>
      <span className="num" style={{ color: "var(--text)" }}>
        {value}
      </span>
    </div>
  );
}

function Segment({
  name,
  size,
  pains,
}: {
  name: string;
  size: string;
  pains: string[];
}) {
  return (
    <div className="hairline rounded-md p-5 mt-3" style={{ background: "var(--surface)" }}>
      <div className="flex items-baseline justify-between">
        <span className="text-[15.5px] font-medium tracking-tight" style={{ color: "var(--text)" }}>
          {name}
        </span>
        <span className="num text-[13px]" style={{ color: "var(--accent)" }}>
          {size}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {pains.map((p) => (
          <li
            key={p}
            className="text-[13.5px] grid grid-cols-[auto_1fr] gap-2.5"
            style={{ color: "var(--text-2)" }}
          >
            <span style={{ color: "var(--text-3)" }} className="num">·</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PainList({ items }: { items: [string, string, string][] }) {
  return (
    <ul className="mt-2 space-y-2.5">
      {items.map(([pain, freq, intensity]) => (
        <li
          key={pain}
          className="grid grid-cols-[1fr_auto_auto] gap-4 items-baseline hairline-b pb-3 text-[14px]"
        >
          <span style={{ color: "var(--text)" }}>{pain}</span>
          <span className="num text-[11.5px]" style={{ color: "var(--text-3)" }}>
            {freq}
          </span>
          <span className="num text-[11.5px]" style={{ color: "var(--accent)" }}>
            {intensity}
          </span>
        </li>
      ))}
    </ul>
  );
}

function KeywordTable({
  rows,
}: {
  rows: [string, string, string, string][];
}) {
  return (
    <div className="hairline rounded-md mt-3 overflow-hidden" style={{ background: "var(--surface)" }}>
      <table className="w-full text-left text-[13.5px]">
        <thead>
          <tr className="hairline-b">
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              KEYWORD
            </th>
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              INTENT
            </th>
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              CPC
            </th>
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              TREND
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([kw, intent, cpc, trend]) => (
            <tr key={kw} className="hairline-b last:border-b-0">
              <td className="py-2.5 px-4" style={{ color: "var(--text)" }}>
                {kw}
              </td>
              <td className="py-2.5 px-4 num text-[12px]" style={{ color: "var(--text-2)" }}>
                {intent}
              </td>
              <td className="py-2.5 px-4 num text-[12px]" style={{ color: "var(--text-2)" }}>
                {cpc}
              </td>
              <td className="py-2.5 px-4 num text-[12px]" style={{ color: "var(--score-high)" }}>
                {trend}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompetitorGap({
  name,
  spend,
  gap,
}: {
  name: string;
  spend: string;
  gap: string;
}) {
  return (
    <div className="hairline rounded-md p-5 mt-3" style={{ background: "var(--surface)" }}>
      <div className="flex items-baseline justify-between">
        <span className="text-[15px] font-medium tracking-tight" style={{ color: "var(--text)" }}>
          {name}
        </span>
        <span className="num text-[12px]" style={{ color: "var(--text-3)" }}>
          {spend}
        </span>
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
        {gap}
      </p>
    </div>
  );
}

function AngleList({ items }: { items: [string, string, string][] }) {
  return (
    <ol className="mt-2 space-y-3">
      {items.map(([angle, score, detail]) => (
        <li key={angle} className="hairline-b pb-3">
          <div className="grid grid-cols-[1fr_auto] gap-4 items-baseline">
            <span className="text-[15px]" style={{ color: "var(--text)" }}>
              {angle}
            </span>
            <span
              className="num text-[13px]"
              style={{
                color:
                  Number(score) >= 85
                    ? "var(--score-high)"
                    : Number(score) >= 75
                    ? "var(--score-mid)"
                    : "var(--text-2)",
              }}
            >
              {score}
            </span>
          </div>
          <p className="mt-1.5 text-[13px]" style={{ color: "var(--text-2)" }}>
            {detail}
          </p>
        </li>
      ))}
    </ol>
  );
}

function CreativeBrief({
  format,
  hook,
  body,
  cta,
}: {
  format: string;
  hook: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="hairline rounded-md p-5 mt-3" style={{ background: "var(--surface)" }}>
      <div className="num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {format}
      </div>
      <div className="mt-2 text-[15px] font-medium" style={{ color: "var(--text)" }}>
        {hook}
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
        {body}
      </p>
      <div className="mt-3 num text-[11.5px]" style={{ color: "var(--text-3)" }}>
        CTA: <span style={{ color: "var(--text-2)" }}>{cta}</span>
      </div>
    </div>
  );
}

function CampaignDay({ day, detail }: { day: string; detail: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 items-baseline hairline-b py-3">
      <span className="num text-[12.5px]" style={{ color: "var(--accent)", letterSpacing: "0.04em" }}>
        {day}
      </span>
      <span className="text-[14px]" style={{ color: "var(--text-2)" }}>
        {detail}
      </span>
    </div>
  );
}

function KpiTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="hairline rounded-md mt-3 overflow-hidden" style={{ background: "var(--surface)" }}>
      <table className="w-full text-left text-[13.5px]">
        <thead>
          <tr className="hairline-b">
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              METRIC
            </th>
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              TARGET
            </th>
            <th className="py-2.5 px-4 num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
              FLOOR
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([metric, target, floor]) => (
            <tr key={metric} className="hairline-b last:border-b-0">
              <td className="py-2.5 px-4" style={{ color: "var(--text)" }}>
                {metric}
              </td>
              <td className="py-2.5 px-4 num text-[12px]" style={{ color: "var(--score-high)" }}>
                {target}
              </td>
              <td className="py-2.5 px-4 num text-[12px]" style={{ color: "var(--text-2)" }}>
                {floor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Rule({ type, text }: { type: "kill" | "scale"; text: string }) {
  const isKill = type === "kill";
  return (
    <div
      className="hairline rounded-md p-4 mt-2.5 grid grid-cols-[auto_1fr] gap-3 items-start"
      style={{ background: "var(--surface)" }}
    >
      <span
        className="num text-[9.5px] tracking-[0.14em] px-2 py-0.5 rounded shrink-0 mt-0.5"
        style={{
          color: isKill ? "#FF7B7B" : "var(--accent)",
          background: isKill ? "rgba(255, 123, 123, 0.1)" : "rgba(29, 158, 117, 0.1)",
          border: `0.5px solid ${isKill ? "rgba(255, 123, 123, 0.4)" : "var(--accent)"}`,
          fontWeight: 700,
        }}
      >
        {isKill ? "KILL" : "SCALE"}
      </span>
      <span className="text-[14px]" style={{ color: "var(--text-2)" }}>
        {text}
      </span>
    </div>
  );
}

function EvidenceList({ items }: { items: [string, string, string][] }) {
  return (
    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {items.map(([source, scope, count]) => (
        <li
          key={source}
          className="hairline rounded-md p-3.5"
          style={{ background: "var(--surface)" }}
        >
          <div className="num text-[10.5px] tracking-[0.12em]" style={{ color: "var(--accent)" }}>
            {source.toUpperCase()}
          </div>
          <div className="mt-1 text-[13.5px]" style={{ color: "var(--text)" }}>
            {scope}
          </div>
          <div className="num text-[11.5px] mt-1" style={{ color: "var(--text-3)" }}>
            {count}
          </div>
        </li>
      ))}
    </ul>
  );
}
