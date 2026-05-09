import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Sources } from "../../components/home/Sources";
import { WhatYouGet } from "../../components/home/WhatYouGet";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every Munero feature: 16 intelligence squads, 46 creative assets, peptide brief example, agency workspace, integrations.",
};

const features = [
  ["Audience segments", "5 ranked segments per brief with intent scores, share %, demographics, pain triggers, and preferred platforms."],
  ["Pain point library", "Ranked by frequency and emotional intensity. Real Reddit and Trustpilot quotes attached."],
  ["Competitor watchlist", "10 deep dives per brief. Threat levels and exact attack angles."],
  ["Evidence library", "50+ verifiable items per brief across Reddit, reviews, ads, video, search."],
  ["Hooks ranked by signal", "10 hooks scored for predicted CTR based on pattern match against winning ads."],
  ["46 creative assets", "Headlines, body copy, image prompts, video scripts, ad units. Tagged by funnel stage."],
  ["Budget allocation", "Channel split with rationale grounded in segment fit and CAC benchmarks."],
  ["Kill rules and scale rules", "Quantified thresholds, not 'let it run another week'."],
  ["30-day campaign plan", "Day-by-day sequence with creative cadence, learning checkpoints, scale gates."],
  ["Direct-import files", "Meta Ads Manager, Google Ads Editor, TikTok Ads Manager, ready to load."],
  ["SHA-256 audit hash", "Every brief is hashed. You can prove what you got and when."],
  ["Cross-brand patterns", "When patterns recur across briefs, the engine surfaces them as priors."],
];

const integrations = [
  ["Slack", "Brief delivery, alerts, weekly recaps."],
  ["Notion", "Brief sync as a structured page per client."],
  ["Google Drive", "Auto-export of creative assets and reports."],
  ["Canva", "Image briefs handed off ready to design."],
  ["Higgsfield", "Video generation directly from creative briefs."],
  ["Meta · Google · TikTok", "Direct-import campaign files."],
];

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Features</Eyebrow>
        <H2 className="max-w-[22ch]">
          The full surface area of an{" "}
          <span className="italic-accent">intelligence engine</span>.
        </H2>
        <Lede>
          Every feature exists for one reason: shorten the distance between hypothesis and
          validated launch.
        </Lede>
      </Section>

      <Sources />

      <Section bordered>
        <Eyebrow>What lands in every brief</Eyebrow>
        <H2 className="max-w-[24ch]">12 deliverables, every time.</H2>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px hairline">
          {features.map(([t, b], i) => (
            <li
              key={t}
              className="p-6 hover-lift"
              style={{ background: "var(--surface)" }}
            >
              <div className="num text-[10.5px] mb-2.5" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[15px] font-medium tracking-tight">{t}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                {b}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <WhatYouGet />

      <Section bordered>
        <Eyebrow>Integrations</Eyebrow>
        <H2 className="max-w-[20ch]">Plugs into the tools your team already runs on.</H2>
        <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-px hairline">
          {integrations.map(([n, d]) => (
            <li
              key={n}
              className="p-6 hover-lift"
              style={{ background: "var(--surface)" }}
            >
              <div className="text-[15px] font-medium tracking-tight">{n}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                {d}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
