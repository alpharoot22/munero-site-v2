import { Section, Eyebrow, H2, Lede } from "../Section";

const squads = [
  { n: "01", source: "Reddit + Trustpilot", finds: "Customer pain points, ranked by frequency and emotion." },
  { n: "02", source: "Search intent", finds: "Keywords, modifiers, intent classification, CPC ranges." },
  { n: "03", source: "Google Trends", finds: "Market trajectory, seasonality, breakout queries." },
  { n: "04", source: "YouTube", finds: "Video hooks that hold attention, comment sentiment." },
  { n: "05", source: "Meta Ad Library", finds: "Real ads competitors are running this week." },
  { n: "06", source: "TikTok", finds: "Creator angles, format trends, viral mechanics." },
  { n: "07", source: "Google Ads", finds: "Auction insights, ad copy patterns, landing page tests." },
  { n: "08", source: "LinkedIn", finds: "B2B narrative, decision-maker language, hiring signal." },
  { n: "09", source: "Competitor deep dive", finds: "10 competitors analyzed across positioning, pricing, gaps." },
  { n: "10", source: "Market intelligence", finds: "TAM, SAM, SOM. Market structure and consolidation." },
  { n: "11", source: "Deep research", finds: "White papers, analyst reports, regulatory shifts." },
  { n: "12", source: "Amazon + Walmart", finds: "Review themes, price elasticity, attribute importance." },
  { n: "13", source: "Creative generation", finds: "46 assets across Meta, TikTok, Google. Tagged by funnel." },
  { n: "14", source: "Brief assembly", finds: "Synthesizes signal into one defensible document." },
  { n: "15", source: "Final strategy", finds: "Budget split, channel mix, kill and scale rules." },
  { n: "16", source: "Campaign translation", finds: "Direct import format for Meta, Google, TikTok." },
];

export function Sources() {
  return (
    <Section bordered id="sources">
      <Eyebrow>The 16 sources</Eyebrow>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-end">
        <H2>Every brief is built on 16 parallel intelligence streams.</H2>
        <Lede className="!mt-0">
          Not a search wrapper. Real scraping, real APIs, real data assembled into one verifiable
          document.
        </Lede>
      </div>

      <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px hairline">
        {squads.map((s) => (
          <li
            key={s.n}
            className="p-5 transition-colors"
            style={{ background: "var(--surface)" }}
          >
            <div
              className="num text-[11px] tracking-[0.1em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              {s.n}
            </div>
            <div className="text-[14.5px] font-medium tracking-tight">{s.source}</div>
            <div
              className="mt-1.5 text-[13px] leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              {s.finds}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
