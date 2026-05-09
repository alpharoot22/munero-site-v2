import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { WhatYouGet } from "../../components/home/WhatYouGet";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export const metadata: Metadata = {
  title: "Sample brief",
  description:
    "See a real Munero campaign brief. Peptide therapy DTC vertical, $10K/mo budget. Audience segments, hooks, full campaign plan.",
};

export default function SamplePage() {
  return (
    <>
      <Section>
        <Eyebrow>Sample brief</Eyebrow>
        <H2 className="max-w-[24ch]">
          A real brief. Real numbers. <span className="italic-accent">Read before you buy</span>.
        </H2>
        <Lede>
          This is the actual output for a peptide therapy DTC brand running $10K / month.
          Names changed, structure preserved.
        </Lede>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px hairline">
          {[
            ["Vertical", "Health / Wellness"],
            ["Stage", "DTC e-commerce"],
            ["Budget", "$10,000 / mo"],
            ["Sections", "21 · 85+ data points"],
          ].map(([k, v]) => (
            <div key={k} className="p-5" style={{ background: "var(--surface)" }}>
              <div className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
                {k.toUpperCase()}
              </div>
              <div className="mt-1.5 text-[14px] tracking-tight">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <WhatYouGet />

      <Section bordered>
        <div className="text-center hairline rounded-md p-10 md:p-14 max-w-3xl mx-auto"
             style={{ background: "var(--surface)" }}>
          <div className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
            17 MORE SECTIONS · 85+ DATA POINTS
          </div>
          <h3 className="mt-4 text-[26px] md:text-[34px] tracking-[-0.02em] font-medium leading-tight">
            The full brief covers competitor angles, evidence library, and the 30-day day-by-day plan.
          </h3>
          <p className="mt-4 text-[15px] max-w-[52ch] mx-auto" style={{ color: "var(--text-2)" }}>
            Get yours in 35 minutes for $99.
          </p>
          <a href={STRIPE_BRIEF} className="btn-primary mt-7 inline-flex">
            Get my brief · $99
          </a>
        </div>
      </Section>
    </>
  );
}
