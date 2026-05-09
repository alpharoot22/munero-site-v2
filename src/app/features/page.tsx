import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Sources } from "../../components/home/Sources";
import { Assistants } from "../../components/home/Assistants";
import { Integrations } from "../../components/home/Integrations";
import { HowItWorks } from "../../components/home/HowItWorks";
import { Platform } from "../../components/home/Platform";
import { Lifecycle } from "../../components/home/Lifecycle";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every Munero capability live in production: 16 squads, 46 creative assets, 9 AI assistants, post-brief lifecycle, integrations, agency workspace.",
};

type Feature = [string, string];

const intelligence: Feature[] = [
  ["16 intelligence squads", "Reddit, Trustpilot, Google Trends, YouTube, Meta Ad Library, TikTok, LinkedIn, Amazon, Walmart, deep competitor analysis, market intelligence, deep research, creative gen, brief assembly, final strategy, campaign translation."],
  ["Pain points library", "Ranked by frequency and emotional intensity. Quotes attached to each."],
  ["Competitor watchlist", "10 deep dives per brief. Threat levels (High / Medium / Low) with attack angles."],
  ["Evidence library", "50+ verifiable items per brief across 10 source categories."],
  ["Keyword intelligence", "Intent classification, CPC estimates, trend direction."],
  ["Market trends", "Growth rates with progress bars. Breakout queries surfaced."],
  ["Competitor change alerts", "Daily automated monitoring. Slack notifications when threats move."],
  ["Market memory", "Cross-brand intelligence accumulates with every brief in your workspace."],
];

const briefOutput: Feature[] = [
  ["Market opportunity score", "0 to 100 with the inputs that drove the score."],
  ["SHA-256 integrity hash", "Every brief is cryptographically signed. Tamper-proof. Audit-ready."],
  ["5 audience segments with ITS", "Intent Score 0 to 10 per segment. Demographics, pains, channels."],
  ["Opportunity score leaderboard", "Angles ranked by predicted performance, sortable."],
  ["10 ad hooks ranked by signal", "Pattern-matched against winning ads in your category."],
  ["Competitor gap analysis", "Where rivals are weak. Specific attack angles per gap."],
  ["Platform budget allocation", "Exact dollar amounts per channel with rationale."],
  ["Auto kill rules", "e.g. 'Kill if CPA > $65 by Day 7'. Quantified per campaign."],
  ["Auto scale rules", "e.g. 'Scale if ROAS > 2.8x sustained 72h'. Triggers more budget."],
  ["30-day campaign launch sequence", "Day-by-day plan with creative cadence and gates."],
  ["Shareable brief link", "Public view, no login required. White-label-able on Agency tier."],
];

const creative: Feature[] = [
  ["46 creative assets", "Per Full Creative brief. Headlines, body, image prompts, video scripts."],
  ["Auto image generation", "Every asset gets an AI-generated image. Included in all tiers."],
  ["Video generation via credits", "Higgsfield AI. 3 credits on Full Creative, 10 / month on Agency."],
  ["Variation generator", "On-demand alternative hooks and copy at the click of a button."],
  ["Winning creatives library", "Top performers accumulate across all your briefs."],
  ["Rejected creatives library", "With notes on why each was rejected. Avoid repeating mistakes."],
  ["Creative confidence score", "0 to 100 per asset, predicted before launch."],
  ["Fatigue detection", "Warns when a creative is running too long against benchmarks."],
];

const campaign: Feature[] = [
  ["Campaign plan builder", "Channels, objectives, budget sliders. Outputs a full media plan."],
  ["ROI projection calculator", "Break-even, conservative, aggressive scenarios. Real numbers."],
  ["Day 7 / 14 / 30 review engine", "Enter actuals. Returns kill / scale / hold / watch decisions per asset."],
  ["KPI performance dashboard", "Actuals vs Munero predictions. Per channel, per audience."],
  ["Action board", "Auto-generated campaign actions with priorities and due dates."],
  ["Decision log", "Every kill and scale decision logged automatically with rationale."],
  ["Tasks board", "Campaign tasks with assignments and due dates. Per-client on Agency."],
  ["Brief comparison", "Compare Month 1 vs Month 2 side by side. See what shifted."],
  ["Brief templates", "Save and reuse brief configurations across similar campaigns."],
];

const flywheel: Feature[] = [
  ["Outcome tracking", "Submit actual ROAS after a campaign concludes. Feeds the engine."],
  ["Recommendation accuracy tracker", "Shows percent of angle predictions confirmed by results."],
  ["Month 2 auto-refresh", "After 45 days Munero re-checks the market on its own. New brief queued."],
  ["Weekly market update email", "Automated digest of what changed in your category this week."],
  ["Cross-brand pattern recognition", "Patterns across briefs surface as priors for the next one."],
  ["Portfolio benchmarks", "Your performance vs vertical benchmarks. Updated each cycle."],
];

const agency: Feature[] = [
  ["Multi-client command center", "Every client visible in one workspace. Filter by stage or threat."],
  ["White-label reports", "Your logo, your colors, your domain. Munero never appears."],
  ["Team seats with role permissions", "Owner, account manager, media buyer, analyst, client."],
  ["Client portal", "Clients see only their brief. No agency data, no other clients."],
  ["Unlimited briefs on Agency", "No per-brief charges, no overage. One subscription covers all."],
  ["Shareable client-facing brief links", "White-labeled. Send to clients or stakeholders."],
];

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Features</Eyebrow>
        <H2 className="max-w-[24ch]">
          Every Munero capability, live in production today.
        </H2>
        <Lede>
          This page is the complete inventory. No roadmap items, no &ldquo;coming soon&rdquo;.
          If it&apos;s listed here, it ships when you buy a brief.
        </Lede>
      </Section>

      <HowItWorks />

      <Sources />

      <FeatureGroup title="Brief output" eyebrow="What lands in every brief" features={briefOutput} />
      <FeatureGroup title="Intelligence layer" eyebrow="What runs in parallel" features={intelligence} />
      <FeatureGroup title="Creative production" eyebrow="46 assets per Full Creative" features={creative} />
      <FeatureGroup title="Campaign management" eyebrow="After the brief is delivered" features={campaign} />

      <Platform />

      <Assistants />

      <FeatureGroup title="The intelligence flywheel" eyebrow="Compounds over time" features={flywheel} />

      <Lifecycle />

      <Integrations />

      <FeatureGroup title="Agency workspace" eyebrow="Built for shops" features={agency} />
    </>
  );
}

function FeatureGroup({
  title,
  eyebrow,
  features,
}: {
  title: string;
  eyebrow: string;
  features: Feature[];
}) {
  return (
    <Section bordered>
      <Eyebrow>{eyebrow}</Eyebrow>
      <H2 className="max-w-[24ch]">{title}</H2>

      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px hairline">
        {features.map(([t, b], i) => (
          <li
            key={t}
            className="p-6 hover-lift relative"
            style={{ background: "var(--surface)" }}
          >
            <div className="flex items-baseline justify-between mb-2.5">
              <span className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="num text-[9px] tracking-[0.12em] px-1.5 py-0.5 rounded"
                style={{
                  color: "var(--accent-light)",
                  background: "var(--accent-glow)",
                  border: "0.5px solid var(--accent)",
                }}
              >
                LIVE
              </span>
            </div>
            <div className="text-[15px] font-semibold tracking-tight">{t}</div>
            <div className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              {b}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
