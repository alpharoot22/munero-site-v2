import { Section, Eyebrow, H2, Lede } from "../Section";

const tools = [
  {
    n: "Munero",
    d: "Live intelligence + strategy + creative",
    p: "$99 per brief · $499 / mo unlimited",
    w: "Brief, hooks, and 46 creative assets in 35 minutes. Includes the campaign plan.",
    a: true,
  },
  {
    n: "ChatGPT",
    d: "General-purpose LLM",
    p: "$20 / mo",
    w: "Plausible copy from training data. No live Reddit, Meta Ad Library, or competitor scraping. No scoring.",
  },
  {
    n: "Freelance strategist",
    d: "Human consultant",
    p: "$2K to $8K per brief",
    w: "Two weeks per brief. One person's gut feel. Quality varies. Doesn't scale across clients.",
  },
  {
    n: "Semrush + similar",
    d: "SEO / PPC data toolkit",
    p: "$139 to $499 / mo",
    w: "Gives you data. You assemble the brief yourself. No creative, no strategy, no plan.",
  },
];

export function Compare() {
  return (
    <Section bordered id="compare">
      <Eyebrow>Compare</Eyebrow>
      <H2 className="max-w-[22ch]">
        Munero replaces the stack, not <span className="italic-accent">a tile in it</span>.
      </H2>
      <Lede>
        ChatGPT writes copy. Strategists write decks. SEO tools surface data. Munero ships the
        brief, the creative, and the campaign plan in 35 minutes.
      </Lede>

      <div
        className="mt-12 hairline rounded-md overflow-hidden"
        style={{ background: "var(--surface)" }}
      >
        <div className="hidden md:grid grid-cols-[1.4fr_1.6fr_1fr_2fr] hairline-b text-[11px] num"
             style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
          <div className="px-5 py-3.5">TOOL</div>
          <div className="px-5 py-3.5">WHAT IT IS</div>
          <div className="px-5 py-3.5">PRICE</div>
          <div className="px-5 py-3.5">LIMITATION</div>
        </div>

        {tools.map((t) => (
          <div
            key={t.n}
            className={`grid md:grid-cols-[1.4fr_1.6fr_1fr_2fr] hairline-b last:border-b-0 hover-lift relative ${
              t.a ? "" : ""
            }`}
            style={{
              background: t.a ? "var(--surface-2)" : "transparent",
            }}
          >
            {t.a && (
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(29,158,117,0.08) 0%, rgba(29,158,117,0.02) 40%, transparent 80%)",
                }}
              />
            )}
            <div className="px-5 py-4 flex items-center gap-2.5">
              <span className={`text-[15px] font-medium tracking-tight`}
                    style={{ color: t.a ? "var(--accent-light)" : "var(--text)" }}>
                {t.n}
              </span>
              {t.a && (
                <span
                  className="num text-[9.5px] px-1.5 py-0.5 rounded"
                  style={{
                    background: "var(--accent-glow)",
                    color: "var(--accent-light)",
                    border: "0.5px solid var(--accent)",
                  }}
                >
                  YOU
                </span>
              )}
            </div>
            <div className="px-5 pb-4 md:py-4 text-[13.5px]" style={{ color: "var(--text-2)" }}>
              {t.d}
            </div>
            <div className="px-5 pb-4 md:py-4 text-[13px] num" style={{ color: "var(--text)" }}>
              {t.p}
            </div>
            <div className="px-5 pb-4 md:py-4 text-[13.5px]"
                 style={{ color: t.a ? "var(--text)" : "var(--text-2)" }}>
              {t.w}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
