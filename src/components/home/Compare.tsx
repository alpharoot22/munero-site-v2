import { Section, Eyebrow, H2, Lede } from "../Section";

const TOOLS = [
  {
    name: "Munero",
    you: true,
    what: "Marketing intelligence workspace with brief, creative, and campaign planning tools",
    price: "$99 starter · $499 / mo unlimited",
    limitation:
      "One workspace connects market signals, competitors, creative strategy, and campaign planning. First brief ready in 35 minutes.",
  },
  {
    name: "Semrush",
    what: "SEO + PPC data toolkit",
    price: "$139 to $499 / mo",
    limitation: "Gives data, not strategy. No brief. No creative. No plan.",
  },
  {
    name: "SimilarWeb",
    what: "Traffic + ad intelligence",
    price: "$125 to $833 / mo",
    limitation: "Heavy, expensive, steep learning curve. Still need a strategist.",
  },
  {
    name: "SpyFu",
    what: "Google Ads history tool",
    price: "$39 to $299 / mo",
    limitation: "Google-only. No social intelligence, no synthesis, no brief.",
  },
  {
    name: "Pathmatics",
    what: "Enterprise cross-channel intelligence",
    price: "$30K to $100K / yr",
    limitation: "Enterprise pricing. No self-serve. No creative production.",
  },
  {
    name: "ChatGPT",
    what: "General AI assistant",
    price: "$20 / mo",
    limitation:
      "No live data. No market scraping. Hallucinated insights. No brief structure.",
  },
];

export function Compare() {
  return (
    <Section bordered id="compare">
      <Eyebrow>Compare</Eyebrow>
      <H2 className="max-w-[28ch]">
        Munero replaces the manual strategy layer between your tools.
      </H2>
      <Lede>
        Side by side against the tools you&apos;d otherwise stitch together.
        Munero does not replace every data tool, it replaces the manual work
        of turning scattered signals into a campaign-ready plan.
      </Lede>

      {/* Cost callout — full border is OK on a callout box */}
      <div
        className="mt-10 rounded-md p-5 md:p-6"
        style={{
          background: "var(--surface-2)",
          borderLeft: "1px solid var(--accent)",
          borderTop: "0.5px solid var(--border-2)",
          borderRight: "0.5px solid var(--border-2)",
          borderBottom: "0.5px solid var(--border-2)",
        }}
      >
        <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--text)" }}>
          Traditional research stack:{" "}
          <span className="num" style={{ color: "var(--score-mid)" }}>
            $40K to $106K / year
          </span>{" "}
          across tools, freelancers, and strategy time.
        </p>
        <p
          className="mt-2 text-[14.5px] leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          Munero starts at{" "}
          <span className="num" style={{ color: "var(--accent-light)" }}>
            $99
          </span>{" "}
          with one workspace and a campaign-ready brief.
        </p>
      </div>

      {/* Comparison table */}
      <div
        className="mt-8 hairline rounded-md overflow-x-auto"
        style={{ background: "var(--surface)" }}
      >
        {/* Header row — desktop only */}
        <div
          className="hidden md:grid grid-cols-[1.4fr_1.6fr_1fr_2fr] hairline-b num text-[10px] uppercase tracking-[0.12em]"
          style={{ color: "var(--text-3)" }}
        >
          <div className="px-5 py-3.5">TOOL</div>
          <div className="px-5 py-3.5">WHAT IT IS</div>
          <div className="px-5 py-3.5">PRICE</div>
          <div className="px-5 py-3.5">WHY IT FALLS SHORT</div>
        </div>

        {TOOLS.map((t) => (
          <div
            key={t.name}
            className={`grid md:grid-cols-[1.4fr_1.6fr_1fr_2fr] hairline-b last:border-b-0 relative items-center ${
              t.you ? "" : "hover-lift"
            }`}
            style={{
              background: t.you ? "var(--accent-glow)" : "transparent",
              borderLeft: t.you ? "2px solid var(--accent)" : undefined,
            }}
          >
            <div
              className="flex items-center gap-2.5"
              style={{ padding: t.you ? "20px 20px" : "14px 20px" }}
            >
              <span
                className={`tracking-tight ${t.you ? "text-[20px] font-bold" : "text-[15px] font-semibold"}`}
                style={{ color: t.you ? "var(--accent-light)" : "var(--text)" }}
              >
                {t.name}
              </span>
              {t.you && (
                <span
                  className="num text-[9.5px] px-1.5 py-0.5 rounded"
                  style={{
                    background: "var(--accent)",
                    color: "#051410",
                    fontWeight: 700,
                  }}
                >
                  YOU
                </span>
              )}
            </div>
            <div
              className={`text-[13.5px] ${t.you ? "font-medium" : ""}`}
              style={{
                color: t.you ? "var(--text)" : "var(--text-2)",
                padding: t.you ? "20px 20px" : "0 20px 14px 20px",
              }}
            >
              {t.what}
            </div>
            <div
              className="num"
              style={{
                color: "var(--text)",
                fontSize: t.you ? 15 : 13,
                fontWeight: t.you ? 600 : 400,
                padding: t.you ? "20px 20px" : "0 20px 14px 20px",
              }}
            >
              {t.price}
            </div>
            <div
              className={t.you ? "text-[14.5px] font-medium" : "text-[13.5px]"}
              style={{
                color: t.you ? "var(--text)" : "var(--text-2)",
                padding: t.you ? "20px 20px" : "0 20px 14px 20px",
                lineHeight: t.you ? 1.55 : 1.5,
              }}
            >
              {t.limitation}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
