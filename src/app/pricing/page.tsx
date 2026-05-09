import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Pricing } from "../../components/home/Pricing";
import { FAQ } from "../../components/home/FAQ";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pay per brief at $99, $149, or $299. Or run unlimited briefs on the $499 Agency plan.",
};

const matrix = [
  { feature: "16 intelligence sources", brief: true, enhanced: true, full: true, agency: true },
  { feature: "Audience + pain point library", brief: true, enhanced: true, full: true, agency: true },
  { feature: "Competitor analysis (10)", brief: true, enhanced: true, full: true, agency: true },
  { feature: "Final strategy + opportunity score", brief: true, enhanced: true, full: true, agency: true },
  { feature: "30-day campaign plan", brief: true, enhanced: true, full: true, agency: true },
  { feature: "SHA-256 audit hash", brief: true, enhanced: true, full: true, agency: true },
  { feature: "Deep research module", brief: false, enhanced: true, full: true, agency: true },
  { feature: "Extended competitor deep dive", brief: false, enhanced: true, full: true, agency: true },
  { feature: "Cross-brand pattern detection", brief: false, enhanced: true, full: true, agency: true },
  { feature: "46 creative assets", brief: false, enhanced: false, full: true, agency: true },
  { feature: "Video + image generation", brief: false, enhanced: false, full: true, agency: true },
  { feature: "Direct-import ad files", brief: false, enhanced: false, full: true, agency: true },
  { feature: "Compliance review", brief: false, enhanced: false, full: true, agency: true },
  { feature: "Unlimited briefs", brief: false, enhanced: false, full: false, agency: true },
  { feature: "White-label reports", brief: false, enhanced: false, full: false, agency: true },
  { feature: "Multi-client workspace", brief: false, enhanced: false, full: false, agency: true },
  { feature: "Team seats", brief: false, enhanced: false, full: false, agency: true },
  { feature: "Slack / Notion / Drive / Canva", brief: false, enhanced: false, full: false, agency: true },
];

export default function PricingPage() {
  return (
    <>
      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <H2 className="max-w-[22ch]">No subscription unless you want one.</H2>
        <Lede>
          Brief, Enhanced, and Full creative are one-time payments. Agency is monthly and built
          for shops running multiple client briefs per week.
        </Lede>
      </Section>

      <Pricing />

      <Section bordered>
        <Eyebrow>Side by side</Eyebrow>
        <H2>What's in each tier.</H2>

        <div className="mt-12 hairline rounded-md overflow-x-auto" style={{ background: "var(--surface)" }}>
          <table className="w-full text-left text-[14px]">
            <thead className="hairline-b">
              <tr>
                <th className="py-4 px-5 font-medium" style={{ color: "var(--text-3)" }}>Feature</th>
                <th className="py-4 px-5 font-medium">Brief</th>
                <th className="py-4 px-5 font-medium">Enhanced</th>
                <th className="py-4 px-5 font-medium">Full creative</th>
                <th className="py-4 px-5 font-medium">Agency</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.feature} className="hairline-b last:border-b-0">
                  <td className="py-3.5 px-5" style={{ color: "var(--text-2)" }}>
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5">{row.brief ? <Tick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.enhanced ? <Tick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.full ? <Tick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.agency ? <Tick /> : <Dash />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FAQ />
    </>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5L6 11.5L13 4.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dash() {
  return (
    <span style={{ color: "var(--text-3)" }} className="num text-[12px]">
      ·
    </span>
  );
}
