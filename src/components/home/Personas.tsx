import { Section, Eyebrow, H2 } from "../Section";

export function Personas() {
  return (
    <Section bordered id="personas">
      <Eyebrow>Who this is for</Eyebrow>
      <H2 className="max-w-[24ch]">
        Built for the marketers doing the actual work.
      </H2>

      <div className="mt-12 grid gap-px hairline">
        {/* DTC Founder — full-width hero card */}
        <article
          className="relative p-8 md:p-10 hover-lift overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(29,158,117,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
            <div className="num text-[12px] tracking-[0.16em] mt-1.5 whitespace-nowrap" style={{ color: "var(--accent)" }}>
              DTC FOUNDER
            </div>
            <p className="text-[20px] md:text-[24px] tracking-tight leading-snug font-medium max-w-[64ch]" style={{ color: "var(--text)" }}>
              Spending $10 to $50K / month on Meta and TikTok. ROAS creeping down. You need to
              know which angle to bet on next without another $8K learning round.
            </p>
            <div className="flex md:flex-col gap-2 md:items-end">
              <span
                className="num text-[10.5px] tracking-[0.12em] px-2.5 py-1 rounded whitespace-nowrap"
                style={{
                  color: "var(--accent-light)",
                  background: "var(--accent-glow)",
                  border: "0.5px solid var(--accent)",
                }}
              >
                $5K - $50K / MO AD SPEND
              </span>
            </div>
          </div>
        </article>

        {/* Agency + In-house side-by-side, smaller */}
        <div className="grid md:grid-cols-2 gap-px hairline">
          <article
            className="p-7 hover-lift"
            style={{ background: "var(--surface)" }}
          >
            <div className="num text-[11px] tracking-[0.16em]" style={{ color: "var(--accent)" }}>
              PERFORMANCE AGENCY
            </div>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "var(--text)" }}>
              Running briefs for 10 clients. Every brief takes 2 days of research your team
              shouldn&apos;t be doing manually. You need a productized research layer at
              near-100% margin.
            </p>
            <div className="mt-5">
              <span
                className="num text-[10px] tracking-[0.12em] px-2 py-1 rounded"
                style={{
                  color: "var(--text-2)",
                  border: "0.5px solid var(--border-2)",
                  background: "var(--surface-2)",
                }}
              >
                5 - 50 CLIENTS · $499 / MO UNLIMITED
              </span>
            </div>
          </article>

          <article
            className="p-7 hover-lift"
            style={{ background: "var(--surface)" }}
          >
            <div className="num text-[11px] tracking-[0.16em]" style={{ color: "var(--accent)" }}>
              IN-HOUSE MARKETER
            </div>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "var(--text)" }}>
              Your boss wants to know why the last campaign underperformed. You need evidence
              before you ask for budget. Not gut feel.
            </p>
            <div className="mt-5">
              <span
                className="num text-[10px] tracking-[0.12em] px-2 py-1 rounded"
                style={{
                  color: "var(--text-2)",
                  border: "0.5px solid var(--border-2)",
                  background: "var(--surface-2)",
                }}
              >
                MID-SIZE BRAND · REPORTS TO CMO
              </span>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
