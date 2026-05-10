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

interface Tier {
  name: string;
  note: string;
  description: string;
  price: string;
  cadence: string;
  recurring: boolean;
  bullets: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

const starterTier: Tier = {
  name: "Starter Workspace",
  note: "Your workspace opens. First intelligence brief included.",
  description:
    "For founders and marketers who want market clarity before spending on ads.",
  price: "$99",
  cadence: "one-time",
  recurring: false,
  bullets: [
    "Workspace opens immediately",
    "First brief ready in 35 minutes",
    "16 intelligence squads",
    "5 audience segments with intent scores",
    "Competitor analysis (10 deep dives)",
    "Campaign plan with kill rules",
  ],
  cta: "Open workspace · $99",
  href: STRIPE_LINKS.brief,
};

const intelligenceTier: Tier = {
  name: "Intelligence Workspace",
  note: "Deeper research. Stronger competitor and signal analysis.",
  description:
    "For teams that want extended market intelligence, sharper opportunities, and stronger campaign direction.",
  price: "$149",
  cadence: "one-time",
  recurring: false,
  bullets: [
    "Everything in Starter",
    "Deep research module",
    "Extended competitor deep dive",
    "Cross-brand pattern detection",
    "Priority queue (faster turnaround)",
  ],
  cta: "Open workspace · $149",
  href: STRIPE_LINKS.enhanced,
};

const creativeTier: Tier = {
  name: "Creative Workspace",
  note: "Intelligence plus creative production.",
  description:
    "For teams that want campaign-ready hooks, angles, copy, and creative assets built from the intelligence.",
  price: "$299",
  cadence: "one-time",
  recurring: false,
  popular: true,
  bullets: [
    "Everything in Intelligence",
    "46 creative assets across Meta, TikTok, Google",
    "Auto image generation included",
    "3 video credits (Higgsfield AI)",
    "Direct-import files for ad managers",
    "Compliance review",
  ],
  cta: "Open creative workspace · $299",
  href: STRIPE_LINKS.full_creative,
};

const agencyTier: Tier = {
  name: "Agency Workspace",
  note: "One workspace. Every client. Unlimited briefs.",
  description:
    "Multi-client command center for agencies. White-label outputs, team seats, client workspaces, and ongoing intelligence.",
  price: "$499",
  cadence: "per month",
  recurring: true,
  bullets: [
    "Unlimited briefs across clients",
    "White-label outputs with your branding",
    "Multi-client command center",
    "Team seats + role permissions",
    "10 video credits per month",
    "Slack, Notion, Drive, Canva integrations",
  ],
  cta: "Open agency workspace · $499/mo",
  href: STRIPE_LINKS.agency,
};

export function Pricing() {
  return (
    <Section bordered id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <H2 className="max-w-[26ch]">
        Choose your workspace level. Start with one brief. Scale when ready.
      </H2>
      <p
        className="mt-4 text-[16.5px] leading-relaxed max-w-[60ch]"
        style={{ color: "var(--text-2)" }}
      >
        Every tier opens a Munero workspace. The first thing Munero runs is
        your intelligence brief. The workspace is where your market,
        competitors, creatives, campaign plan, and next moves live.
      </p>

      {/* Beta urgency banner */}
      <div
        className="mt-10 rounded-md text-center py-3.5 px-5 hairline"
        style={{ background: "var(--surface)" }}
      >
        <p
          className="num text-[11px] uppercase tracking-[0.1em]"
          style={{ color: "var(--accent)" }}
        >
          Beta pricing · First 100 workspaces at these rates · Price increases after
        </p>
        <p className="text-[12.5px] mt-1.5" style={{ color: "var(--text-3)" }}>
          <span className="num" style={{ color: "var(--score-high)" }}>
            28 of 100
          </span>{" "}
          beta slots used
        </p>
      </div>

      {/* Three one-time tiers — Creative dominates */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <SmallCard tier={starterTier} />
        <SmallCard tier={intelligenceTier} />
        <BigCard tier={creativeTier} />
      </div>

      {/* Agency — horizontal full-width below */}
      <AgencyCard tier={agencyTier} />

      {/* Strategic clarity line */}
      <p
        className="mt-12 text-center num text-[12px]"
        style={{ color: "var(--text-3)", letterSpacing: "0.04em" }}
      >
        The brief is what Munero runs first. The workspace is what you keep.
      </p>
    </Section>
  );
}

/** Standard tier — slightly muted next to Creative. */
function SmallCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="relative p-6 flex flex-col hover-lift rounded-md"
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        opacity: 0.96,
      }}
    >
      <div className="text-[14px] tracking-tight font-semibold" style={{ color: "var(--text)" }}>
        {tier.name}
      </div>
      <div
        className="mt-1.5 text-[11.5px] leading-snug"
        style={{ color: "var(--text-3)" }}
      >
        {tier.note}
      </div>
      <div className="mt-3 flex items-baseline gap-2 flex-wrap">
        <span
          className="num text-[32px] tracking-[-0.02em]"
          style={{ color: "var(--text)" }}
        >
          {tier.price}
        </span>
        <span
          className="num text-[11px] uppercase tracking-[0.06em]"
          style={{ color: "var(--text-2)" }}
        >
          {tier.cadence}
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
      <p
        className="mt-3 text-[12.5px] leading-relaxed min-h-[3em]"
        style={{ color: "var(--text-2)" }}
      >
        {tier.description}
      </p>
      <ul className="mt-4 space-y-2.5 flex-1">
        {tier.bullets.map((b) => (
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
      <a href={tier.href} className="btn-secondary mt-7 justify-center">
        {tier.cta}
      </a>
    </div>
  );
}

/** Most popular (Creative) — taller, bolder, MOST POPULAR badge floats above. */
function BigCard({ tier }: { tier: Tier }) {
  return (
    <div className="relative" style={{ marginTop: -32, marginBottom: -16 }}>
      <span
        className="absolute left-1/2 -translate-x-1/2 num text-[10px] tracking-[0.14em] px-3 py-1.5 rounded whitespace-nowrap z-10"
        style={{
          top: 12,
          background: "var(--accent)",
          color: "#051410",
          fontWeight: 700,
          boxShadow: "0 0 24px rgba(29, 158, 117, 0.5)",
        }}
      >
        MOST POPULAR
      </span>

      <div
        className="relative p-7 pt-12 flex flex-col rounded-md h-full"
        style={{
          background: "var(--accent-glow)",
          border: "1.5px solid var(--accent)",
        }}
      >
        <div className="text-[15px] tracking-tight font-bold" style={{ color: "var(--accent-light)" }}>
          {tier.name}
        </div>
        <div
          className="mt-1.5 text-[12.5px] leading-snug"
          style={{ color: "var(--text-2)" }}
        >
          {tier.note}
        </div>
        <div className="mt-3 flex items-baseline gap-2 flex-wrap">
          <span
            className="num text-[44px] tracking-[-0.02em] leading-none"
            style={{ color: "var(--text)" }}
          >
            {tier.price}
          </span>
          <span
            className="num text-[11px] uppercase tracking-[0.06em]"
            style={{ color: "var(--text-2)" }}
          >
            {tier.cadence}
          </span>
          <span
            className="num text-[9px] uppercase tracking-[0.12em] px-1.5 py-0.5 rounded"
            style={{
              color: "var(--accent)",
              border: "0.5px solid var(--accent)",
              background: "rgba(29, 158, 117, 0.12)",
            }}
          >
            BETA PRICE
          </span>
        </div>
        <p
          className="mt-3 text-[13px] leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          {tier.description}
        </p>
        <ul className="mt-5 space-y-3 flex-1">
          {tier.bullets.map((b) => (
            <li
              key={b}
              className="text-[14px] leading-relaxed grid grid-cols-[auto_1fr] gap-2.5"
              style={{ color: "var(--text)" }}
            >
              <Tick />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a href={tier.href} className="btn-primary mt-8 justify-center">
          {tier.cta}
        </a>
      </div>
    </div>
  );
}

/** Agency — horizontal full-width card below the three. */
function AgencyCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="relative mt-10 p-7 md:p-9 rounded-md hover-lift"
      style={{
        background: "var(--surface-2)",
        border: "0.5px solid var(--border-2)",
      }}
    >
      <div className="grid md:grid-cols-[1fr_1.4fr_auto] gap-8 md:gap-12 items-start">
        <div>
          <div className="num text-[11px] tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            FOR TEAMS
          </div>
          <div className="mt-2 text-[20px] font-bold tracking-tight" style={{ color: "var(--text)" }}>
            {tier.name}
          </div>
          <div className="mt-3 flex items-baseline gap-2 flex-wrap">
            <span
              className="num text-[36px] tracking-[-0.02em] leading-none"
              style={{ color: "var(--text)" }}
            >
              {tier.price}
            </span>
            <span
              className="num text-[11px] uppercase tracking-[0.06em]"
              style={{ color: "var(--score-mid)" }}
            >
              {tier.cadence}
            </span>
          </div>
          <p className="mt-3 text-[12.5px] leading-snug" style={{ color: "var(--text-2)" }}>
            {tier.note}
          </p>
          <p className="mt-2 text-[13px] leading-relaxed max-w-[36ch]" style={{ color: "var(--text-2)" }}>
            {tier.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {tier.bullets.map((b) => (
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

        <div className="md:self-center">
          <a href={tier.href} className="btn-primary">
            {tier.cta}
          </a>
        </div>
      </div>
    </div>
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
