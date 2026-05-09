import { Section, Eyebrow, H2 } from "../Section";

const tiers = [
  {
    name: "Brief",
    price: "$99",
    cadence: "one-time",
    blurb: "Intelligence and strategy. No creative production.",
    bullets: [
      "16 intelligence sources",
      "Audience + pain point library",
      "Competitor analysis (10 deep dives)",
      "Final strategy + market opportunity score",
      "30-day campaign plan with kill rules",
      "SHA-256 audit hash",
    ],
    cta: "Start with $99",
    href: "https://munero.ai",
  },
  {
    name: "Enhanced",
    price: "$149",
    cadence: "one-time",
    blurb: "Brief plus deeper research and competitor work.",
    bullets: [
      "Everything in Brief",
      "Deep research module",
      "Extended competitor deep dive",
      "Cross-brand pattern detection",
      "Priority queue (faster turnaround)",
    ],
    cta: "Choose Enhanced",
    href: "https://munero.ai",
  },
  {
    name: "Full creative",
    price: "$299",
    cadence: "one-time",
    blurb: "Brief plus 46 creative assets and video credits.",
    popular: true,
    bullets: [
      "Everything in Enhanced",
      "46 creative assets across Meta, TikTok, Google",
      "Video generation credits (Higgsfield)",
      "Image generation included",
      "Direct-import files for ad managers",
      "Compliance review",
    ],
    cta: "Get Full creative",
    href: "https://munero.ai",
  },
  {
    name: "Agency",
    price: "$499",
    cadence: "per month",
    blurb: "Unlimited briefs, white-label, multi-seat.",
    bullets: [
      "Unlimited briefs across clients",
      "White-label reports with your branding",
      "Multi-client command center",
      "Team seats + role permissions",
      "Slack, Notion, Drive, Canva integrations",
      "Priority support",
    ],
    cta: "Book a walkthrough",
    href: "https://munero.ai",
  },
];

export function Pricing() {
  return (
    <Section bordered id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <H2 className="max-w-[22ch]">Pay per brief. No subscription unless you want one.</H2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px hairline">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="p-7 flex flex-col relative"
            style={{
              background: t.popular ? "var(--surface-elev)" : "var(--surface)",
            }}
          >
            {t.popular && (
              <span
                className="absolute top-4 right-4 num text-[10px] tracking-[0.12em] px-2 py-1 rounded"
                style={{
                  background: "var(--accent)",
                  color: "#06140F",
                  fontWeight: 600,
                }}
              >
                MOST POPULAR
              </span>
            )}
            <div className="text-[14px] tracking-tight" style={{ color: "var(--text-2)" }}>
              {t.name}
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="num text-[34px] tracking-tight">{t.price}</span>
              <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>
                {t.cadence}
              </span>
            </div>
            <p
              className="mt-3 text-[13.5px] leading-relaxed min-h-[3em]"
              style={{ color: "var(--text-2)" }}
            >
              {t.blurb}
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {t.bullets.map((b) => (
                <li
                  key={b}
                  className="text-[13px] leading-relaxed grid grid-cols-[auto_1fr] gap-2.5"
                  style={{ color: "var(--text-2)" }}
                >
                  <Tick />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.href}
              className={t.popular ? "btn-primary mt-7 justify-center" : "btn-secondary mt-7 justify-center"}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Tick() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1">
      <path
        d="M3 8.5L6 11.5L13 4.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
