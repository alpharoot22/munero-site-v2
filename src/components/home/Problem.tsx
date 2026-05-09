import { Section, Eyebrow, H2, Lede } from "../Section";

const pains = [
  {
    bigStat: "$10,000",
    bigLabel: "burned per learning round",
    title: "You launch on a hunch.",
    body:
      "You have a hypothesis about what will land, but no proof. You spend $10K to find out, and most of it teaches you what doesn't work.",
  },
  {
    bigStat: "0",
    bigLabel: "live market signals in ChatGPT",
    title: "ChatGPT gives you guesses, not signal.",
    body:
      "Generic ad copy that hasn't been validated against real Reddit complaints, Trustpilot reviews, current Meta ads, or what your competitors are running this week.",
  },
  {
    bigStat: "14 days",
    bigLabel: "before your agency starts ads",
    title: "Your agency briefs are theater.",
    body:
      "30-page decks built from competitor screenshots and a media planner's gut feel. By the time you read them, the ads have been running for two weeks.",
  },
];

export function Problem() {
  return (
    <Section bordered id="problem">
      <Eyebrow>The problem</Eyebrow>
      <H2 className="max-w-[28ch]">
        The average marketer spends{" "}
        <span style={{ color: "var(--score-low)" }}>$10,000</span> learning what doesn&apos;t
        work. Munero runs that research in 35 minutes for $99.
      </H2>
      <Lede>
        That math is broken. The cheapest market research is the kind that runs before media
        spend, not after.
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
