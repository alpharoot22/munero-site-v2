interface Plan {
  name: string;
  price: string;
  cadence: string;
  credits: string;
  blurb: string;
  href: string;
  color: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter Workspace",
    price: "$99",
    cadence: "one-time",
    credits: "100 credits",
    blurb: "Brief + workspace opens",
    href: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00",
    color: "#1D9E75",
  },
  {
    name: "Intelligence Feed",
    price: "$49",
    cadence: "per month",
    credits: "150 credits / mo",
    blurb: "Weekly signals + alerts",
    href: "https://buy.stripe.com/dRm5kE05RbI674p98V5ZC03",
    color: "#6366F1",
  },
  {
    name: "Creative Workspace",
    price: "$299",
    cadence: "one-time",
    credits: "750 credits",
    blurb: "Full creative production",
    href: "https://buy.stripe.com/6oU3cw8Cn13s74pacZ5ZC02",
    color: "#8B5CF6",
  },
  {
    name: "Agency Workspace",
    price: "$499",
    cadence: "per month",
    credits: "2,500 credits / mo",
    blurb: "Multi-client workspace",
    href: "https://buy.stripe.com/fZu9AUdWH5jI3Sd1Gt5ZC04",
    color: "#3B82F6",
  },
];

const STRIPE_STARTER = PLANS[0].href;

export function PricingClose() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        minHeight: "100dvh",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px 32px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 24,
            color: "#E8E8F0",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Four ways in.
        </h2>
        <p
          style={{
            marginTop: 6,
            fontSize: 14,
            color: "#9898A8",
            lineHeight: 1.5,
          }}
        >
          Every plan includes the full workspace.
        </p>

        <div className="plans-grid">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>

      {/* Closing block */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 24px 64px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            color: "#1D9E75",
            fontSize: "clamp(48px, 7vw, 72px)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          munero
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 16,
            color: "#9898A8",
            lineHeight: 1.55,
            maxWidth: "44ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          The data compounds. Every brief makes the next one smarter.
        </p>
        <a
          href={STRIPE_STARTER}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
            width: 220,
            height: 52,
            background: "#1D9E75",
            color: "#FFFFFF",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 16,
            borderRadius: 8,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Start for $99
        </a>
        <p
          style={{
            marginTop: 16,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#505068",
            letterSpacing: "0.04em",
          }}
        >
          hello@munero.ai  ·  No subscription required
        </p>
      </div>

      <style>{`
        .plans-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .plans-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .plans-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .plan-card { transition: border-color 150ms ease-out; }
        .plan-card:hover { border-color: var(--plan-color); }
      `}</style>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="plan-card"
      style={
        {
          position: "relative",
          background: "#111118",
          border: "0.5px solid #1E1E2E",
          borderRadius: 12,
          padding: 24,
          paddingTop: 28,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          ["--plan-color" as string]: plan.color,
        } as React.CSSProperties
      }
    >
      {/* Top accent line */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: plan.color,
        }}
      />

      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 13,
          color: "#505068",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {plan.name}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginTop: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 42,
            color: plan.color,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: "#505068",
            letterSpacing: "0.04em",
          }}
        >
          {plan.cadence}
        </span>
      </div>

      <div
        style={{
          marginTop: 8,
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: plan.color,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {plan.credits}
      </div>

      <p
        style={{
          marginTop: 14,
          fontSize: 13,
          color: "#9898A8",
          lineHeight: 1.5,
          flex: 1,
        }}
      >
        {plan.blurb}
      </p>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          width: "100%",
          height: 44,
          background: plan.color,
          color: "#FFFFFF",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 500,
          fontSize: 14,
          borderRadius: 6,
          textDecoration: "none",
          letterSpacing: "-0.005em",
        }}
      >
        Choose plan
      </a>

    </article>
  );
}
