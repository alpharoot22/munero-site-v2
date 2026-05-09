import { Section, Eyebrow, H2, Lede } from "../Section";

const steps = [
  {
    n: "01",
    t: "Tell us your brand and product.",
    d: "Brand name, URL, what you sell, who it's for, and your monthly ad budget. Two minutes.",
    time: "2 min",
  },
  {
    n: "02",
    t: "16 intelligence squads run in parallel.",
    d: "Reddit, Trustpilot, Google Trends, YouTube, Meta Ad Library, TikTok, LinkedIn, Amazon, Walmart, deep competitor analysis, and seven more sources. Real scraping, real data.",
    time: "20 min",
  },
  {
    n: "03",
    t: "We assemble the brief.",
    d: "Audience segments mapped to pain points. Hooks ranked by predicted performance. Competitor gaps with exact attack angles. Budget allocation. Kill rules.",
    time: "8 min",
  },
  {
    n: "04",
    t: "Creative production fires.",
    d: "46 assets generated across Meta, TikTok, and Google. Headlines, body copy, image prompts, video scripts. Tagged by funnel stage and audience.",
    time: "5 min",
  },
  {
    n: "05",
    t: "You get the campaign plan.",
    d: "30-day launch sequence. KPI targets. Kill and scale rules. Direct-import to Meta Ads Manager, Google Ads Editor, TikTok Ads Manager. SHA-256 audit hash.",
    time: "Done",
  },
];

export function HowItWorks() {
  return (
    <Section bordered id="how">
      <Eyebrow>How it works</Eyebrow>
      <div className="grid md:grid-cols-[1fr_auto] items-end gap-6">
        <H2 className="max-w-[18ch]">From zero context to launch-ready in 35 minutes.</H2>
        <span className="num text-[12px]" style={{ color: "var(--text-3)" }}>
          5 steps · parallelized
        </span>
      </div>
      <Lede>
        We don't replace your strategy. We give you a defensible foundation in less time than a
        meeting takes.
      </Lede>

      <ol className="mt-14 hairline-t">
        {steps.map((s) => (
          <li key={s.n} className="hairline-b grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 py-8">
            <span className="num text-[14px] pt-1" style={{ color: "var(--accent)" }}>
              {s.n}
            </span>
            <div>
              <h3 className="text-[19px] tracking-tight font-medium">{s.t}</h3>
              <p
                className="mt-1.5 text-[15px] leading-relaxed max-w-[60ch]"
                style={{ color: "var(--text-2)" }}
              >
                {s.d}
              </p>
            </div>
            <span
              className="num text-[12.5px] pt-1.5 whitespace-nowrap"
              style={{ color: "var(--text-3)" }}
            >
              {s.time}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
