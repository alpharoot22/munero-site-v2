import { Section, Eyebrow, H2, Lede } from "../Section";

const pains = [
  {
    bigStat: "$10,000",
    bigLabel: "burned per learning round",
    title: "You launch on a hunch.",
    body:
      "You have a hypothesis but no proof. You spend budget learning what does not work. Munero helps you see the market before you spend.",
  },
  {
    bigStat: "0",
    bigLabel: "live market signals",
    title: "ChatGPT gives you guesses, not signal.",
    body:
      "Generic copy has no live competitor intelligence, no search behavior, no pain-point data, and no market proof. Munero grounds strategy in real customer behavior.",
  },
  {
    bigStat: "7+",
    bigLabel: "tools to stitch together",
    title: "Your stack does not have a brain.",
    body:
      "SEO tools show keywords. Ad libraries show ads. Spreadsheets hold plans. Munero connects the dots inside one workspace.",
  },
];

export function Problem() {
  return (
    <Section bordered id="problem">
      <Eyebrow>The problem</Eyebrow>
      <H2 className="max-w-[28ch]">
        Most marketers have tools. None of them talk to each other.
      </H2>
      <Lede>
        You have Semrush for data. ChatGPT for copy. A spreadsheet for
        planning. And a gut feeling for everything else. Munero replaces the
        mess with one workspace that connects market signals, competitors,
        creative strategy, and campaign planning.
      </Lede>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px hairline">
        {pains.map((p, i) => (
          <article
            key={p.title}
            className="relative overflow-hidden p-7 md:p-8 hover-lift min-h-[340px]"
            style={{ background: "var(--surface)" }}
          >
            {/* Ghost numeral behind */}
            <span
              aria-hidden
              className="absolute pointer-events-none num select-none"
              style={{
                top: "-0.18em",
                right: "-0.05em",
                fontSize: 160,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.06em",
                color: "var(--score-low)",
                opacity: 0.08,
              }}
            >
              0{i + 1}
            </span>
            {/* Subtle red ambient glow */}
            <span
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 87, 87, 0.03) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="num text-[44px] md:text-[48px] leading-none tracking-[-0.02em]"
                style={{ color: "var(--score-low)" }}
              >
                {p.bigStat}
              </div>
              <div
                className="mt-2 text-[12.5px] num tracking-[0.04em]"
                style={{ color: "var(--text-3)" }}
              >
                {p.bigLabel.toUpperCase()}
              </div>
              <h3 className="mt-7 text-[22px] md:text-[24px] tracking-tight font-bold leading-tight">
                {p.title}
              </h3>
              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                {p.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
