import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";

export const metadata: Metadata = {
  title: "Sample brief",
  description:
    "See a real, anonymized Munero campaign brief. Audience segments, hooks, competitor angles, full campaign plan.",
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
                "Audience segments",
                "Pain point library",
                "Competitor gaps",
                "Hooks ranked by signal",
                "Creative briefs (sample)",
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

            <div
              className="hairline rounded-md p-8 text-center"
              style={{ background: "var(--surface)" }}
            >
              <div className="num text-[11px] mb-3" style={{ color: "var(--accent)" }}>
                40+ MORE PAGES
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
              <a
                href="https://munero.ai"
                className="btn-primary mt-6 inline-flex"
              >
                Get my brief for $99
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
