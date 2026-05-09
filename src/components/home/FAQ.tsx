import { Section, Eyebrow, H2 } from "../Section";

const faqs = [
  {
    q: "Is it actually worth $99?",
    a: "If you spend $5K a month on ads, the average wasted-spend on under-validated creative runs 30 to 50 percent of that budget in the first 3 weeks. $99 buys you 35 minutes of parallel research that your team would take 2 weeks to assemble manually. The math is straightforward.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT writes plausible ad copy from training data. Munero scrapes Reddit complaints, Trustpilot reviews, the live Meta Ad Library, current TikTok content, and competitor sites in parallel, then assembles them into one document with citations. The difference between guessing and grounding.",
  },
  {
    q: "What if my vertical is unusual?",
    a: "The 16 squads adapt by vertical. Briefs have shipped across DTC e-commerce, health and wellness, B2B SaaS, fashion, real estate, financial services, and creator brands. If a source doesn't apply, it skips and the others compensate. You see exactly which sources contributed to your brief.",
  },
  {
    q: "How long does it take?",
    a: "About 35 minutes from kickoff to delivery. The 16 squads run in parallel, then assembly takes 8 minutes, then creative production fires. You can leave the tab open or get a notification.",
  },
  {
    q: "Can I see a sample brief first?",
    a: "Yes. The /sample page shows the structure of a real brief. Audience segments, ranked hooks, competitor analysis, the campaign plan. Look at it before you spend $99.",
  },
  {
    q: "Do I need a subscription?",
    a: "Only for the Agency tier ($499 / month). Brief, Enhanced, and Full Creative are one-time purchases. No auto-renewal, no commitments. Buy a brief, get a brief.",
  },
  {
    q: "How does image and video generation work?",
    a: "Every brief automatically generates images for your creative assets. No credit draw. Video generation uses credits: Full Creative includes 3 video credits, Agency includes 10 per month. Videos are produced via Higgsfield AI at production quality and ready to upload directly into Meta, TikTok, or YouTube ad managers.",
  },
  {
    q: "Can agencies use this with clients?",
    a: "The Agency tier is built for it. White-label reports with your branding, multi-client workspace, team seats, and Slack / Notion / Drive / Canva integrations. You charge clients $500 to $1,500 / month for the research line item at near-100% margin.",
  },
];

export function FAQ() {
  return (
    <Section bordered id="faq">
      <Eyebrow>FAQ</Eyebrow>
      <H2 className="max-w-[20ch]">
        The questions you'd ask <span className="italic-accent">before paying</span>.
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
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
