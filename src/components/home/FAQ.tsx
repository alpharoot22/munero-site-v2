import { Section, Eyebrow, H2 } from "../Section";

const faqs = [
  {
    q: "Is it actually worth $99?",
    a: "If you spend $5K a month on ads, the average wasted-spend on under-validated creative is 30 to 50 percent of that budget in the first 3 weeks. $99 buys you 35 minutes of parallel research that your team would take 2 weeks to assemble manually. The math is straightforward.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT writes plausible ad copy from training data. Munero scrapes Reddit complaints, Trustpilot reviews, the live Meta Ad Library, current TikTok content, and competitor sites in parallel, then assembles them into one document with citations. It's the difference between guessing and grounding.",
  },
  {
    q: "What if my vertical is unusual?",
    a: "The 16 sources adapt by vertical. We've run briefs across DTC commerce, fintech, B2B SaaS, healthcare, professional services, and creator brands. If a source doesn't apply (e.g. Amazon for B2B), it skips and the others compensate. You see exactly which sources contributed.",
  },
  {
    q: "How long does it take?",
    a: "Roughly 35 minutes from kickoff to delivery. The 16 squads run in parallel, then assembly takes 8 minutes, then creative production fires. You can leave the tab open or get a notification.",
  },
  {
    q: "Can I see a sample brief first?",
    a: "Yes. The /sample page shows a real anonymized brief with every section populated. Audience segments, hooks, competitor analysis, the campaign plan. Look at it before you spend $99.",
  },
  {
    q: "Do I need a subscription?",
    a: "No. The Brief, Enhanced, and Full creative tiers are one-time purchases. Agency is the only monthly tier and is purpose-built for shops running multiple client briefs per week.",
  },
  {
    q: "What if I'm not happy with the brief?",
    a: "If the brief doesn't pass our internal quality bar (we run 12 verification checks before delivery), we re-run it on us. If it does pass and you still want a refund, contact support within 7 days and we'll handle it.",
  },
  {
    q: "Can agencies actually use this with clients?",
    a: "The Agency tier is built for it. White-label reports with your branding, multi-client workspace, team seats, and Slack/Notion/Drive/Canva integrations. Several 10 to 50 person agencies are running it as a productized service.",
  },
];

export function FAQ() {
  return (
    <Section bordered id="faq">
      <Eyebrow>FAQ</Eyebrow>
      <H2 className="max-w-[20ch]">The questions you'd ask before paying.</H2>

      <div className="mt-12 hairline-t">
        {faqs.map((f) => (
          <details key={f.q} className="hairline-b group">
            <summary className="flex items-center justify-between gap-6 py-6 px-1 cursor-pointer">
              <span className="text-[16.5px] tracking-tight font-medium pr-6">{f.q}</span>
              <span
                className="chev shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full hairline"
                style={{ color: "var(--text-2)" }}
              >
                <Plus />
              </span>
            </summary>
            <div
              className="pb-7 pr-12 text-[15px] leading-relaxed max-w-[68ch]"
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
