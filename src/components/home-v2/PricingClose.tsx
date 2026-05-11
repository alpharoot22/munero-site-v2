interface Plan {
  name: string;
  price: string;
  cadence: string;
  useCase: string;
  bullets: string[];
  href: string;
  color: string;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter Workspace",
    price: "$99",
    cadence: "one-time",
    useCase: "For one campaign brief and market clarity.",
    bullets: [
      "Workspace opens immediately",
      "First brief in 35 minutes",
      "100 credits included",
    ],
    href: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00",
    color: "#1D9E75",
    cta: "Start for $99",
  },
  {
    name: "Intelligence Feed",
    price: "$49",
    cadence: "/mo",
    useCase: "For weekly market signals and alerts.",
    bullets: [
      "Weekly signals + alerts",
      "Pain point & trend tracking",
      "Cancel anytime",
    ],
    href: "https://buy.stripe.com/dRm5kE05RbI674p98V5ZC03",
    color: "#6366F1",
    cta: "Start feed",
  },
  {
    name: "Creative Workspace",
    price: "$299",
    cadence: "one-time",
    useCase: "For campaign assets and creative production.",
    bullets: [
      "Everything in Starter",
      "750 creative credits",
      "AI image, video & copy",
    ],
    href: "https://buy.stripe.com/6oU3cw8Cn13s74pacZ5ZC02",
    color: "#8B5CF6",
    cta: "Start creative",
  },
  {
    name: "Agency Workspace",
    price: "$499",
    cadence: "/mo",
    useCase: "For agencies managing multiple clients.",
    bullets: [
      "Everything in Creative",
      "2,500 credits / month",
      "Multi-client workspace",
    ],
    href: "https://buy.stripe.com/fZu9AUdWH5jI3Sd1Gt5ZC04",
    color: "#3B82F6",
    cta: "Start agency plan",
  },
];

const STRIPE_STARTER = PLANS[0].href;

export function PricingClose() {
  return (
    <>
      <section
        style={{
          background: "#050508",
          borderTop: "0.5px solid #1E1E2E",
          padding: "72px 0",
        }}
        id="pricing"
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 34px)",
              color: "#E8E8F0",
              letterSpacing: "-0.022em",
              textAlign: "center",
              margin: 0,
            }}
          >
            Choose the workspace that fits you.
          </h2>

          <div className="plans-grid">
            {PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>

        <style>{`
          .plans-grid {
            margin-top: 36px;
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
          .plan-card { transition: border-color 150ms ease-out, transform 150ms ease-out; }
          .plan-card:hover { border-color: var(--plan-color); transform: translateY(-2px); }
          .plan-card .plan-cta { transition: background 150ms ease-out, color 150ms ease-out; }
          .plan-card .plan-cta:hover { background: var(--plan-color) !important; color: #FFFFFF !important; }
        `}</style>
      </section>

      {/* Final CTA strip */}
      <section
        style={{
          background: "#0A0A12",
          borderTop: "0.5px solid #1E1E2E",
          padding: "32px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 24,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src="/favicon.png"
              alt=""
              width={42}
              height={42}
              style={{ borderRadius: 8, display: "block" }}
              aria-hidden="true"
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "clamp(20px, 2vw, 26px)",
                  color: "#E8E8F0",
                  fontWeight: 500,
                  letterSpacing: "-0.022em",
                  lineHeight: 1.2,
                }}
              >
                Your market. Your workspace. Your edge.
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 13.5,
                  color: "#9898A8",
                  lineHeight: 1.4,
                }}
              >
                First brief in 35 minutes. Built on real buyer behavior. Ready before you spend.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={STRIPE_STARTER}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 22px",
                background: "#1D9E75",
                color: "#FFFFFF",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: 14.5,
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Start for $99
            </a>
            <a
              href="/sample"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                justifyContent: "center",
                height: 48,
                padding: "0 22px",
                background: "transparent",
                color: "#E8E8F0",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: 14.5,
                border: "0.5px solid #1E1E2E",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M3 2 L10 6 L3 10 Z" />
              </svg>
              View sample brief
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="plan-card"
      style={
        {
          position: "relative",
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 14,
          padding: 24,
          paddingTop: 28,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          ["--plan-color" as string]: plan.color,
        } as React.CSSProperties
      }
    >
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
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 14,
          color: "#E8E8F0",
          fontWeight: 500,
          letterSpacing: "-0.005em",
        }}
      >
        {plan.name}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          marginTop: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 38,
            color: plan.color,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#9898A8",
            letterSpacing: "0.02em",
          }}
        >
          {plan.cadence}
        </span>
      </div>

      <p
        style={{
          marginTop: 12,
          fontSize: 12.5,
          color: "#9898A8",
          lineHeight: 1.5,
        }}
      >
        {plan.useCase}
      </p>

      <ul
        style={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          listStyle: "none",
          padding: 0,
          flex: 1,
        }}
      >
        {plan.bullets.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12.5,
              color: "#9898A8",
              lineHeight: 1.45,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              style={{ marginTop: 3, flexShrink: 0 }}
            >
              <path d="M2 6 L5 9 L10 3" stroke={plan.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        style={
          {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            width: "100%",
            height: 44,
            background: `${plan.color}1A`,
            color: plan.color,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 13.5,
            border: `0.5px solid ${plan.color}55`,
            borderRadius: 8,
            textDecoration: "none",
            letterSpacing: "-0.005em",
            transition: "background 150ms ease-out",
          } as React.CSSProperties
        }
        className="plan-cta"
      >
        {plan.cta}
      </a>

    </article>
  );
}
