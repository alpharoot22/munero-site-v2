import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Octopus } from "../../components/Octopus";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Munero for performance agencies. Unlimited briefs, white-label reports, multi-client command center, team seats. $499 / month.",
};

export default function AgencyPage() {
  return (
    <>
      {/* Agency hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-20 grid md:grid-cols-[55fr_45fr] gap-10 items-center">
          <div>
            <div className="eyebrow flex items-center gap-2.5 mb-5">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
              />
              FOR AGENCIES
            </div>
            <h1 className="text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.03em] font-bold max-w-[18ch]">
              A productized intelligence layer for your{" "}
              <span className="italic-accent">agency</span>.
            </h1>
            <p
              className="mt-6 text-[18px] leading-relaxed max-w-[480px]"
              style={{ color: "var(--text-2)" }}
            >
              Run unlimited Munero briefs across every client. Deliver them under your branding.
              Compound cross-client intelligence into a moat your competitors can't replicate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={STRIPE_BRIEF} className="btn-primary">
                Subscribe · $499 / mo
              </a>
              <Link href="/sample" className="btn-secondary">
                See sample brief
              </Link>
            </div>
          </div>
          <div className="hidden md:block opacity-90">
            <Octopus />
          </div>
        </div>
      </section>

      <Section bordered>
        <Eyebrow>The five differences</Eyebrow>
        <H2 className="max-w-[22ch]">
          Five things agencies get that solo users <span className="italic-accent">don't</span>.
        </H2>
        <ol className="mt-12 hairline-t">
          {[
            ["Unlimited briefs", "Run as many briefs per month as your roster needs. No per-brief charges, no overage."],
            ["White-label reports", "Your agency name and logo on every deliverable. Clients never see Munero unless you want them to."],
            ["Multi-client command center", "One workspace, every client visible. Filter by stage, threat level, or campaign window."],
            ["Team seats with role permissions", "Strategists, media buyers, creative leads, and account managers each get the right access."],
            ["Cross-client intelligence patterns", "Patterns observed in client A inform briefs for client B (when not conflicting), a moat that compounds."],
          ].map(([title, body], i) => (
            <li key={title} className="hairline-b grid grid-cols-[auto_1fr] gap-6 py-7">
              <span className="num text-[14px] pt-1" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[20px] tracking-tight font-medium">{title}</h3>
                <p
                  className="mt-2 text-[15px] leading-relaxed max-w-[60ch]"
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
        <H2 className="max-w-[20ch]">
          $499 / mo replaces about <span className="italic-accent">$40K</span> of analyst time per quarter.
        </H2>
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
            <div key={label} className="p-8 hover-lift" style={{ background: "var(--surface)" }}>
              <div className="num text-[40px] tracking-tight" style={{ color: "var(--text)" }}>{value}</div>
              <div className="mt-1 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered>
        <Eyebrow>Add a research line item</Eyebrow>
        <H2 className="max-w-[22ch]">
          Charge clients $500 to $1,500 / month at near-100% margin.
        </H2>
        <Lede>
          Munero output is the kind of pre-campaign intelligence consultancies bill at $5K to
          $15K per engagement. You buy it once and resell it monthly across your roster.
        </Lede>
      </Section>

      <section className="hairline-t relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-[36px] md:text-[56px] tracking-[-0.03em] leading-[1.04] font-bold max-w-[20ch]">
            Ready to make your agency feel{" "}
            <span className="italic-accent">ten years ahead</span>?
          </h2>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Subscribe · $499 / mo
            </a>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
