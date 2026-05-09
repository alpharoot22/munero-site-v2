import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export const metadata: Metadata = {
  title: "Sample brief",
  description:
    "See the structure of a real Munero campaign brief. Audience segments, ranked hooks, competitor angles, full campaign plan.",
};

export default function SamplePage() {
  return (
    <>
      <Section>
        <Eyebrow>Sample brief</Eyebrow>
        <H2 className="max-w-[24ch]">
          The structure of a real brief. <span className="italic-accent">Read before you buy</span>.
        </H2>
        <Lede>
          A representative brief for a DTC e-commerce brand running $10K / month. Names changed,
          structure preserved.
        </Lede>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px hairline">
          {[
            ["Vertical", "DTC e-commerce"],
            ["Budget", "$10,000 / mo"],
            ["Sources used", "16 of 16"],
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
                "Audience segments",
                "Pain point library",
                "Competitor gaps",
                "Hooks ranked by signal",
                "Creative briefs",
                "Campaign plan",
                "Kill rules",
              ].map((s) => (
                <li key={s}>
                  <a
                    href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ color: "var(--text-2)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-12">
            <Block id="executive-summary" title="Executive summary">
              <p>
                The brief identifies three under-targeted segments where competitor coverage
                scores below 40 of 100. Recommended attack: lead with the strongest pain-point
                hook, secondary with category-trust positioning, tertiary with use-case-specific
                creative. Channel split shifts budget toward the platform with the highest
                segment density.
              </p>
              <Stat label="Market opportunity score" value="74 / 100" />
              <Stat label="Predicted blended ROAS at month 2" value="2.6x" />
              <Stat label="Recommended budget shift" value="Meta -10%, TikTok +35%" />
            </Block>

            <Block id="audience-segments" title="Audience segments">
              <p>
                Five primary segments with distinct pain language and channel weighting. Three
                shown here.
              </p>
              <Segment
                name="Skeptic high-intent buyer"
                size="32%"
                pains={[
                  "Burned by previous purchases that didn't deliver.",
                  "Don't trust brand claims, looks for review depth.",
                  "Willing to spend, but only on validated quality.",
                ]}
              />
              <Segment
                name="Category-curious researcher"
                size="28%"
                pains={[
                  "New to the category, learning what to value.",
                  "Confused which features actually matter.",
                  "Comparing across 4 to 6 brands.",
                ]}
              />
              <Segment
                name="Gift-occasion buyer"
                size="22%"
                pains={[
                  "Wants a gift that looks premium but isn't generic.",
                  "Sensitive to shipping windows around occasions.",
                  "Registry adjacency.",
                ]}
              />
            </Block>

            <Block id="hooks-ranked-by-signal" title="Hooks ranked by signal">
              <ol className="space-y-3">
                {[
                  ["The category that outlasts what you're replacing.", "92"],
                  ["Built for the way you actually use it.", "87"],
                  ["The quiet favorite of [target persona].", "81"],
                  ["Why this category — and why most options get it wrong.", "76"],
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

            <div
              className="hairline rounded-md p-8 text-center"
              style={{ background: "var(--surface)" }}
            >
              <div className="num text-[11px] mb-3" style={{ color: "var(--accent)" }}>
                17 MORE SECTIONS · 85+ DATA POINTS
              </div>
              <h3 className="text-[22px] tracking-tight font-medium">
                The full brief covers competitor gaps, creative briefs, and the day-by-day plan.
              </h3>
              <p
                className="mt-3 text-[14.5px] max-w-[52ch] mx-auto"
                style={{ color: "var(--text-2)" }}
              >
                Get yours in 35 minutes for $99.
              </p>
              <a href={STRIPE_BRIEF} className="btn-primary mt-6 inline-flex">
                Get my brief · $99
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
      <div
        className="mt-3 space-y-4 text-[15px] leading-relaxed"
        style={{ color: "var(--text-2)" }}
      >
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
