import { Section, Eyebrow, H2 } from "../Section";

const faqs = [
  {
    q: "What exactly is a buying signal?",
    a: "A buying signal is a pattern in real consumer behavior, search queries, Reddit complaints, review sentiment, competitor ad engagement, that predicts what message, offer, or angle will trigger a purchase. Munero reads these signals across 16 sources and scores your campaign idea against them before you spend.",
  },
  {
    q: "How is this different from ChatGPT or a freelancer?",
    a: "ChatGPT generates plausible copy. A freelancer gives you their opinion. Munero gives you a scored prediction based on live market data: what your audience is actually searching, complaining about, clicking on, and buying. The brief includes a Campaign Readiness Score, top objections, and specific angles ranked by predicted conversion likelihood.",
  },
  {
    q: "Can I use this for client pitches?",
    a: "Yes. Agencies use Munero briefs to walk into pitches with buying signal research their competitors don't have. The Agency plan includes white-label exports so you can present under your own brand.",
  },
  {
    q: "How long does a brief take?",
    a: "About 35 minutes from input to full deliverable. You enter your niche, country, and budget. Munero's 16 squads run simultaneously across data sources and deliver a complete brief.",
  },
  {
    q: "What if my campaign doesn't match the brief?",
    a: "Every campaign result you feed back into Munero sharpens the next prediction. The system compounds, the more campaigns it sees in your vertical, the more accurate the scores become. Early users report the first brief alone saves 2 to 3 weeks of manual research.",
  },
  {
    q: "Do I need existing campaign data to start?",
    a: "No. Munero works before you have any performance data. It synthesizes external signals, what people search, say, review, and click, to predict what will work. You bring the niche, Munero brings the intelligence.",
  },
  {
    q: "Is there a subscription?",
    a: "Only for the Agency tier ($499 / month). Brief, Enhanced, and Full Creative are one-time payments. No auto-renewal, no commitments. Buy a brief, get a brief.",
  },
  {
    q: "What verticals does Munero work for?",
    a: "Briefs have shipped across DTC e-commerce, health and wellness, B2B SaaS, fashion, real estate, financial services, and creator brands. The 16 squads adapt by vertical: irrelevant sources skip and the others compensate. You see exactly which sources contributed to your brief.",
  },
];

export function FAQ() {
  return (
    <Section bordered id="faq">
      <Eyebrow>FAQ</Eyebrow>
      <H2 className="max-w-[20ch]">
        Questions, <span className="italic-accent">answered</span>.
      </H2>

      <div className="mt-12 hairline-t max-w-[860px]">
        {faqs.map((f) => (
          <details key={f.q} className="hairline-b group">
            <summary className="flex items-center justify-between gap-6 py-6 px-1 cursor-pointer">
              <span className="text-[16px] tracking-tight font-medium pr-6">{f.q}</span>
              <span
                className="chev shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full hairline"
                style={{ color: "var(--text-2)" }}
              >
                <Plus />
              </span>
            </summary>
            <div
              className="pb-7 pr-12 text-[14.5px] leading-relaxed max-w-[68ch]"
              style={{ color: "var(--text-2)" }}
            >
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Plus() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
