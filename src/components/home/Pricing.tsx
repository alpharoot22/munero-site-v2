import { Section, Eyebrow, H2 } from "../Section";

// Per-tier Stripe payment links. Until per-SKU links are created, the same
// checkout link is used with a `?tier=` query param so Stripe / analytics can
// distinguish which CTA was clicked. Replace with separate Stripe links when
// SKUs are provisioned.
const STRIPE_BASE = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";
export const STRIPE_LINKS = {
  brief:         `${STRIPE_BASE}?tier=brief`,
  enhanced:      `${STRIPE_BASE}?tier=enhanced`,
  full_creative: `${STRIPE_BASE}?tier=full_creative`,
  agency:        `${STRIPE_BASE}?tier=agency`,
};

const tiers = [
  {
    name: "Brief",
    note: "Intelligence only. Bring your own creative team.",
    price: "$99",
    cadence: "one-time",
    blurb: "Intelligence and strategy. No creative production.",
    bullets: [
      "16 intelligence squads",
      "5 audience segments with intent scores",
      "Competitor gap analysis (10 deep dives)",
      "Final strategy + market opportunity score",
      "30-day campaign plan with kill rules",
    ],
    cta: "Get my brief · $99",
    href: STRIPE_LINKS.brief,
  },
  {
    name: "Enhanced",
    note: "Add depth when the vertical is competitive.",
    price: "$149",
    cadence: "one-time",
    blurb: "Brief plus deeper research and competitor work.",
    bullets: [
      "Everything in Brief",
      "Deep research module (Perplexity + academic)",
      "Extended competitor deep dive",
      "Cross-brand pattern detection",
      "Priority queue (faster turnaround)",
    ],
    cta: "Get Enhanced · $149",
    href: STRIPE_LINKS.enhanced,
  },
  {
    name: "Full Creative",
    note: "Everything in Enhanced, plus production-ready assets.",
    price: "$299",
    cadence: "one-time",
    blurb: "Brief plus 46 creative assets, auto-images, and video credits.",
    popular: true,
    bullets: [
      "Everything in Enhanced",
      "46 creative assets across Meta, TikTok, Google",
      "Image generation auto-included for every brief",
      "3 video credits (Higgsfield AI, production quality)",
      "Direct-import files for ad managers",
    ],
    cta: "Get Full Creative · $299",
    href: STRIPE_LINKS.full_creative,
  },
  {
    name: "Agency",
    note: "For shops running 5+ clients. One subscription, unlimited briefs.",
    price: "$499",
    cadence: "per month",
    blurb: "Unlimited briefs, white-label, multi-seat.",
    bullets: [
      "Unlimited briefs across clients",
      "White-label reports with your branding",
      "Multi-client command center",
      "Team seats + role permissions",
      "10 video credits per month included",
      "Slack, Notion, Drive, Canva integrations",
    ],
    cta: "Subscribe · $499/mo",
    href: STRIPE_LINKS.agency,
  },
];

export function Pricing() {
  return (
    <Section bordered id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <H2 className="max-w-[22ch]">
        Pay per brief. <span className="italic-accent">No subscription unless you want one</span>.
      </H2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px hairline">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="relative p-7 flex flex-col hover-lift"
            style={{
              background: t.popular ? "var(--surface-2)" : "var(--surface)",
            }}
          >
            {t.popular && (
              <>
                <span
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, rgba(29,158,117,0.1) 0%, transparent 60%)",
                  }}
                />
                <span
                  className="absolute top-4 right-4 num text-[9.5px] tracking-[0.12em] px-2 py-1 rounded"
                  style={{
                    background: "var(--accent)",
                    color: "#051410",
                    fontWeight: 700,
                  }}
                >
                  MOST POPULAR
                </span>
              </>
            )}
            <div className="text-[13px] tracking-tight" style={{ color: "var(--text-2)" }}>
              {t.name}
            </div>
            <div
              className="mt-1.5 text-[11.5px] leading-snug min-h-[2.4em]"
              style={{ color: "var(--text-3)" }}
            >
              {t.note}
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="num text-[36px] tracking-[-0.02em]" style={{ color: "var(--text)" }}>
                {t.price}
              </span>
              <span className="text-[12px] num" style={{ color: "var(--text-3)" }}>
                {t.cadence}
              </span>
            </div>
            <p
              className="mt-3 text-[13px] leading-relaxed min-h-[3em]"
              style={{ color: "var(--text-2)" }}
            >
              {t.blurb}
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {t.bullets.map((b) => (
                <li
                  key={b}
                  className="text-[12.5px] leading-relaxed grid grid-cols-[auto_1fr] gap-2.5"
                  style={{ color: "var(--text-2)" }}
                >
                  <Tick />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.href}
              className={
                t.popular ? "btn-primary mt-7 justify-center" : "btn-secondary mt-7 justify-center"
              }
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
