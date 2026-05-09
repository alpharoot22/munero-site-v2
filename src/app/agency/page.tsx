import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { AgencyTease } from "../../components/home/AgencyTease";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Munero for performance agencies. Unlimited briefs, white-label reports, multi-client command center, team seats.",
};

export default function AgencyPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-20">
          <div className="eyebrow mb-5">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            $499 / MO · UNLIMITED BRIEFS
          </div>
          <h1 className="mt-6 text-[44px] md:text-[64px] leading-[1.04] tracking-[-0.03em] font-medium max-w-[18ch]">
            A productized intelligence layer for your agency.
          </h1>
          <p
            className="mt-6 text-[18px] leading-relaxed max-w-[58ch]"
            style={{ color: "var(--text-2)" }}
          >
            Run unlimited Munero briefs across every client. Deliver them under your branding.
            Compound cross-client intelligence into a moat your competitors can't replicate.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=agency" className="btn-primary">
              Book a walkthrough
            </a>
            <a href="/sample" className="btn-secondary">
              See a sample brief
            </a>
          </div>
        </div>
      </section>

      <AgencyTease />

      <Section bordered>
        <Eyebrow>Built for shops</Eyebrow>
        <H2 className="max-w-[20ch]">Five things agencies get that solo users don't.</H2>
        <ol className="mt-12 hairline-t">
          {[
            ["Unlimited briefs", "Run as many briefs per month as your roster needs. No per-brief charges, no overage."],
            ["White-label reports", "Your agency name and logo on every deliverable. Clients never see Munero unless you want them to."],
            ["Multi-client command center", "One workspace, every client visible. Filter by stage, threat level, or campaign window."],
            ["Team seats with roles", "Strategists, media buyers, creative leads, and account managers each get the right access."],
            ["Cross-client intelligence", "Patterns observed in client A inform briefs for client B (when not conflicting): a moat that compounds."],
          ].map(([title, body], i) => (
            <li key={title} className="hairline-b grid grid-cols-[auto_1fr] gap-6 py-7">
              <span className="num text-[14px] pt-1" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[20px] tracking-tight font-medium">{title}</h3>
                <p
                  className="mt-2 text-[15.5px] leading-relaxed max-w-[60ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered>
        <Eyebrow>The math</Eyebrow>
        <H2 className="max-w-[20ch]">$499/mo replaces about $40K of analyst time per quarter.</H2>
        <Lede>
          A senior strategist at a performance agency assembles one brief per week. They cost
          $120K loaded. Munero delivers their output across every client in 35 minutes per
          brief.
        </Lede>

        <div className="mt-12 grid md:grid-cols-3 gap-px hairline">
          {[
            ["$499", "monthly cost"],
            ["~$40K", "analyst time saved per quarter"],
            ["8x", "throughput per strategist"],
          ].map(([value, label]) => (
            <div key={label} className="p-8" style={{ background: "var(--surface)" }}>
              <div className="num text-[36px] tracking-tight">{value}</div>
              <div className="mt-1 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="hairline-t">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-[36px] md:text-[52px] tracking-[-0.03em] leading-[1.04] font-medium max-w-[20ch]">
            Ready to make your agency feel ten years ahead?
          </h2>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=agency" className="btn-primary">
              Book a walkthrough
            </a>
            <a href="/pricing" className="btn-secondary">
              See pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
