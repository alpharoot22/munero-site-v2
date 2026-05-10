import { Section, Eyebrow, H2 } from "../Section";

/**
 * Per-tier checkout URLs. Starter is live on Stripe. The other three
 * route to /register?upgrade=… until per-SKU Stripe links are provisioned.
 */
const STRIPE_LINKS = {
  starter:  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=starter",
  feed:     "/register?upgrade=feed",
  creative: "/register?upgrade=creative",
  agency:   "/register?upgrade=agency",
};
export { STRIPE_LINKS };

const AMBER = "#FFB547";

interface Tier {
  key: "starter" | "feed" | "creative" | "agency";
  name: string;
  price: string;
  cadence: string;
  recurring: boolean;
  note: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  popular?: boolean;
  feed?: boolean;
  badge?: string;
  /** True when the buyer can pay right now via Stripe. */
  checkoutAvailable: boolean;
}

const starterTier: Tier = {
  key: "starter",
  name: "Starter Workspace",
  note: "Your workspace opens. First intelligence brief included.",
  description:
    "For founders and marketers who want market clarity before spending on ads.",
  price: "$99",
  cadence: "one-time",
  recurring: false,
  checkoutAvailable: true,
  bullets: [
    "Workspace opens immediately",
    "First brief ready in 35 minutes",
    "16 intelligence squads",
    "5 audience segments with intent scores",
    "Competitor analysis (10 deep dives)",
    "Campaign plan with kill rules",
    "SHA-256 audit hash",
  ],
  cta: "Open workspace · $99",
  href: STRIPE_LINKS.starter,
};

const feedTier: Tier = {
  key: "feed",
  name: "Intelligence Feed",
  note: "Engine keeps running. Signals delivered weekly.",
  description:
    "For marketers who want to know when their market moves, automatically.",
  price: "$49",
  cadence: "per month",
  recurring: true,
  feed: true,
  badge: "BEST FOR RETENTION",
  checkoutAvailable: false,
  bullets: [
    "Weekly vertical intelligence digest",
    "Competitor ad change alerts (real-time)",
    "Rising pain point detection",
    "Buy alerts when demand spikes in your category",
    "Market gap notifications",
    "New brief at 50% off when signals peak",
    "Cancel anytime",
  ],
  cta: "Start Intelligence Feed · $49/mo",
  href: STRIPE_LINKS.feed,
};

const creativeTier: Tier = {
  key: "creative",
  name: "Creative Workspace",
  note: "Intelligence plus production-ready assets.",
  description:
    "For teams that want campaign-ready hooks, angles, copy, and creative assets built from the intelligence.",
  price: "$299",
  cadence: "one-time",
  recurring: false,
  popular: true,
  checkoutAvailable: false,
  bullets: [
    "Everything in Starter Workspace",
    "Deep research module",
    "Extended competitor deep dive",
    "46 creative assets across Meta, TikTok, Google",
    "Auto image generation included",
    "3 video credits (Higgsfield AI)",
    "Direct-import files for ad managers",
    "Compliance review",
  ],
  cta: "Reserve creative workspace · $299",
  href: STRIPE_LINKS.creative,
};

const agencyTier: Tier = {
  key: "agency",
  name: "Agency Workspace",
  note: "One workspace. Every client. Unlimited briefs.",
  description:
    "For shops running 5+ clients. Multi-client command center, white-label outputs, team seats, and ongoing intelligence.",
  price: "$499",
  cadence: "per month",
  recurring: true,
  badge: "FOR TEAMS",
  checkoutAvailable: false,
  bullets: [
    "Unlimited briefs across clients",
    "White-label reports with your branding",
    "Multi-client command center",
    "Team seats + role permissions",
    "10 video credits per month",
    "Slack, Notion, Drive, Canva integrations",
  ],
  cta: "Reserve agency workspace · $499/mo",
  href: STRIPE_LINKS.agency,
};

export function Pricing() {
  return (
    <Section bordered id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <H2 className="max-w-[26ch]">
        Start with a brief.
        <br />
        Keep the signals running. Scale when ready.
      </H2>
      <p
        className="mt-4 text-[16.5px] leading-relaxed max-w-[60ch]"
        style={{ color: "var(--text-2)" }}
      >
        Every tier opens or extends a Munero workspace. Buy a brief once.
        Subscribe to keep the engine running. Upgrade when you want creative
        assets or a multi-client command center.
      </p>

      {/* 4-step flow strip */}
      <FlowStrip />

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

      {/* 3-card top row — Starter, Feed (amber), Creative (popular) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <SmallCard tier={starterTier} />
        <FeedCard tier={feedTier} />
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

/* ----------------- 4-step flow strip ----------------- */

const FLOW_STEPS = [
  { num: "01", label: "Brief",    price: "$99",     desc: "Understand your market" },
  { num: "02", label: "Feed",     price: "$49/mo",  desc: "Keep the signals coming" },
  { num: "03", label: "Creative", price: "$299",    desc: "Build the campaign assets" },
  { num: "04", label: "Agency",   price: "$499/mo", desc: "Scale to every client" },
];

function FlowStrip() {
  return (
    <div className="mt-10 hairline rounded-md overflow-hidden" style={{ background: "var(--surface)" }}>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-px hairline-b md:hairline-b" style={{ background: "var(--border)" }}>
        {FLOW_STEPS.map((s, i) => (
          <li
            key={s.num}
            className="relative flex items-center gap-3 px-5 py-4"
            style={{ background: "var(--surface)" }}
          >
            <span
              className="num shrink-0 inline-flex items-center justify-center"
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "0.5px solid var(--accent)",
                background: "rgba(29, 158, 117, 0.08)",
                fontSize: 10.5,
                color: "var(--accent)",
                fontWeight: 700,
              }}
            >
              {s.num}
            </span>
            <div className="flex-1 min-w-0">
              <div
                className="flex items-baseline gap-2"
                style={{ color: "var(--text)" }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {s.label}
                </span>
                <span
                  className="num"
                  style={{ fontSize: 11, color: "var(--text-3)" }}
                >
                  {s.price}
                </span>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "rgba(184, 184, 200, 0.95)",
                  marginTop: 2,
                }}
              >
                {s.desc}
              </div>
            </div>
            {/* Arrow between steps — desktop only, not after last */}
            {i < FLOW_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:block absolute"
                style={{
                  right: -8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4l-4 4"
                    stroke="var(--accent)"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------- Cards ----------------- */

function ComingSoonBadge() {
  return (
    <span
      className="num"
      style={{
        fontSize: 9,
        letterSpacing: "0.14em",
        color: AMBER,
        background: "rgba(255, 183, 71, 0.1)",
        border: `0.5px solid ${AMBER}66`,
        borderRadius: 4,
        padding: "2px 6px",
        fontWeight: 700,
      }}
    >
      CHECKOUT OPENS SOON
    </span>
  );
}

/** Standard tier (Starter). */
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
      <div className="mt-1.5 text-[11.5px] leading-snug" style={{ color: "var(--text-3)" }}>
        {tier.note}
      </div>
      <div className="mt-3 flex items-baseline gap-2 flex-wrap">
        <span className="num text-[32px] tracking-[-0.02em]" style={{ color: "var(--text)" }}>
          {tier.price}
        </span>
        <span
          className="num text-[11px] uppercase tracking-[0.06em]"
          style={{ color: "var(--text-2)" }}
        >
          {tier.cadence}
        </span>
        {tier.checkoutAvailable ? (
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
        ) : (
          <ComingSoonBadge />
        )}
      </div>
      <p className="mt-3 text-[12.5px] leading-relaxed min-h-[3em]" style={{ color: "var(--text-2)" }}>
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

/** Intelligence Feed — amber dashed border, recurring tier, "KEEPS RUNNING" badge. */
function FeedCard({ tier }: { tier: Tier }) {
  return (
    <div
      className="relative p-6 flex flex-col hover-lift rounded-md"
      style={{
        background: "var(--surface)",
        border: `0.5px dashed ${AMBER}55`,
      }}
    >
      <span
        className="absolute top-4 right-4 num"
        style={{
          fontSize: 9,
          letterSpacing: "0.14em",
          color: AMBER,
          background: `${AMBER}1a`,
          border: `0.5px solid ${AMBER}66`,
          borderRadius: 4,
          padding: "2px 6px",
          fontWeight: 700,
        }}
      >
        KEEPS RUNNING
      </span>

      <div className="text-[14px] tracking-tight font-semibold" style={{ color: "var(--text)" }}>
        {tier.name}
      </div>
      <div className="mt-1.5 text-[11.5px] leading-snug" style={{ color: "var(--text-3)" }}>
        {tier.note}
      </div>

      <div className="mt-3 flex items-baseline gap-2 flex-wrap">
        <span className="num text-[32px] tracking-[-0.02em]" style={{ color: "var(--text)" }}>
          {tier.price}
        </span>
        <span
          className="num text-[11px] uppercase tracking-[0.06em]"
          style={{ color: AMBER, fontWeight: 700 }}
        >
          {tier.cadence}
        </span>
      </div>

      {/* Pulse line under the price */}
      <p
        className="mt-2"
        style={{
          fontSize: 11.5,
          color: AMBER,
          fontStyle: "italic",
          letterSpacing: "-0.005em",
        }}
      >
        Your market doesn&apos;t stop. Neither does Munero.
      </p>

      {tier.badge && (
        <div className="mt-3">
          <span
            className="num"
            style={{
              fontSize: 9,
              letterSpacing: "0.14em",
              color: AMBER,
              fontWeight: 700,
            }}
          >
            {tier.badge}
          </span>
        </div>
      )}

      <p className="mt-3 text-[12.5px] leading-relaxed min-h-[3em]" style={{ color: "var(--text-2)" }}>
        {tier.description}
      </p>

      <ul className="mt-4 space-y-2.5 flex-1">
        {tier.bullets.map((b) => (
          <li
            key={b}
            className="text-[13px] leading-relaxed grid grid-cols-[auto_1fr] gap-2.5"
            style={{ color: "var(--text-2)" }}
          >
            <FeedTick />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.href}
        className="mt-7 inline-flex items-center justify-center gap-2 transition-colors"
        style={{
          height: 44,
          padding: "0 18px",
          borderRadius: 6,
          background: `${AMBER}15`,
          color: AMBER,
          border: `0.5px solid ${AMBER}80`,
          fontSize: 14.5,
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
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
        <div className="mt-1.5 text-[12.5px] leading-snug" style={{ color: "var(--text-2)" }}>
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
          {tier.checkoutAvailable ? (
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
          ) : (
            <ComingSoonBadge />
          )}
        </div>
        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "var(--text)" }}>
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
            {tier.badge ?? "FOR TEAMS"}
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
          {!tier.checkoutAvailable && (
            <div className="mt-2.5">
              <ComingSoonBadge />
            </div>
          )}
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

function FeedTick() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1">
      <path
        d="M3 8.5L6 11.5L13 4.5"
        stroke={AMBER}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
