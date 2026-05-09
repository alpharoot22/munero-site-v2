import { Section, Eyebrow, H2 } from "../Section";

// Per-tier Stripe links. All four currently point at the same $99 checkout
// with a `?tier=` query param so analytics can distinguish clicks. Replace
// each with a real Stripe payment link as SKUs are provisioned.
const STRIPE_LINKS = {
  // TODO: Replace with real $99 Stripe payment link
  brief: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00",
  // TODO: Create $149 Stripe payment link and replace
  enhanced: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=enhanced",
  // TODO: Create $299 Stripe payment link and replace
  full_creative: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=full_creative",
  // TODO: Create $499/mo Stripe payment link and replace
  agency: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=agency",
};
export { STRIPE_LINKS };

const tiers = [
  {
    name: "Brief",
    note: "Intelligence only. Bring your own creative team.",
    price: "$99",
    cadence: "one-time",
    recurring: false,
    bullets: [
      "16 intelligence squads",
      "Audience + pain point library",
      "Competitor analysis (10 deep dives)",
      "Final strategy + market opportunity score",
      "30-day campaign plan with kill rules",
      "SHA-256 audit hash",
    ],
    cta: "Get my brief · $99",
    href: STRIPE_LINKS.brief,
  },
  {
    name: "Enhanced",
    note: "Add depth when the vertical is competitive.",
    price: "$149",
    cadence: "one-time",
    recurring: false,
    bullets: [
      "Everything in Brief",
      "Deep research module",
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
    recurring: false,
    popular: true,
    bullets: [
      "Everything in Enhanced",
      "46 creative assets across Meta, TikTok, Google",
      "Image generation auto-included",
      "3 video credits (Higgsfield AI)",
      "Direct-import files for ad managers",
      "Compliance review",
    ],
    cta: "Get Full Creative · $299",
    href: STRIPE_LINKS.full_creative,
  },
  {
    name: "Agency",
    note: "For shops running 5+ clients. One subscription, unlimited briefs.",
    price: "$499",
    cadence: "per month",
    recurring: true,
    bullets: [
      "Unlimited briefs across clients",
      "White-label reports with your branding",
      "Multi-client command center",
      "Team seats + role permissions",
      "10 video credits per month",
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
      <H2 className="max-w-[24ch]">Pay per brief. No subscription unless you want one.</H2>

      {/* Beta urgency banner */}
      <div
        className="mt-10 rounded-md text-center py-3.5 px-5 hairline"
        style={{ background: "var(--surface)" }}
      >
        <p
          className="num text-[11px] uppercase tracking-[0.1em]"
          style={{ color: "var(--accent)" }}
        >
          Beta pricing · First 100 briefs at these rates · Price increases after
        </p>
        <p className="text-[12.5px] mt-1.5" style={{ color: "var(--text-3)" }}>
          <span className="num" style={{ color: "var(--score-high)" }}>
            28 of 100
          </span>{" "}
          beta slots used
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px hairline">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="relative p-7 flex flex-col hover-lift"
            style={{
              background: t.popular ? "var(--accent-glow)" : "var(--surface)",
              border: t.popular ? "1px solid var(--accent)" : "none",
            }}
          >
            {t.popular && (
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
            <div className="mt-3 flex items-baseline gap-2 flex-wrap">
              <span
                className="num text-[36px] tracking-[-0.02em]"
                style={{ color: "var(--text)" }}
              >
                {t.price}
              </span>
              <span
                className="num text-[11px] uppercase tracking-[0.06em]"
                style={{ color: t.recurring ? "var(--score-mid)" : "var(--text-2)" }}
              >
                {t.cadence}
              </span>
              <span
                className="num text-[9px] uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
                style={{
                  color: "var(--accent)",
                  border: "0.5px solid var(--accent)",
                  background: "rgba(29, 158, 117, 0.08)",
                }}
              >
                BETA PRICE
              </span>
            </div>
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
