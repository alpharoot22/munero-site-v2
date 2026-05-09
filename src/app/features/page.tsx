import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Sources } from "../../components/home/Sources";
import { Platform } from "../../components/home/Platform";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every Munero feature: 16 intelligence squads, 46 creative assets, 8 AI assistants, agency workspace, and integrations.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Features</Eyebrow>
        <H2 className="max-w-[22ch]">
          The full surface area of an AI marketing intelligence platform.
        </H2>
        <Lede>
          Every feature exists for one reason: shorten the distance between hypothesis and
          validated launch. This page is the complete inventory.
        </Lede>
      </Section>
      <Sources />
      <Platform />
      <Section bordered>
        <Eyebrow>Integrations</Eyebrow>
        <H2 className="max-w-[20ch]">Plugs into the tools your team already runs on.</H2>
        <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-px hairline">
          {[
            ["Slack", "Brief delivery, alerts, weekly recaps."],
            ["Notion", "Brief sync as a structured page per client."],
            ["Google Drive", "Auto-export of creative assets and reports."],
            ["Canva", "Image briefs handed off ready to design."],
            ["Higgsfield", "Video generation directly from creative briefs."],
            ["Meta / Google / TikTok", "Direct-import campaign files."],
          ].map(([n, d]) => (
            <li key={n} className="p-6" style={{ background: "var(--surface)" }}>
              <div className="text-[15px] font-medium tracking-tight">{n}</div>
              <div
                className="mt-1.5 text-[13.5px] leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                {d}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
