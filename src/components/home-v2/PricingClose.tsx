"use client";

import { useState } from "react";

interface Plan {
  name: string;
  priceMonthly: number;
  priceYearlyMonthly: number;
  oneTime?: boolean;
  desc: string;
  bullets: string[];
  href: string;
  color: string;
  cta: string;
  variant: "outline" | "filled-green" | "filled-purple";
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    priceMonthly: 99,
    priceYearlyMonthly: 99,
    oneTime: true,
    desc: "Perfect for solo marketers and small teams.",
    bullets: ["Market research", "Sample brief", "Basic templates"],
    href: "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00",
    color: "#1D9E75",
    cta: "Get started",
    variant: "outline",
  },
  {
    name: "Feed",
    priceMonthly: 49,
    priceYearlyMonthly: 39,
    desc: "Continuous market intelligence delivered weekly.",
    bullets: ["Weekly briefs", "Trend tracking", "Email delivery"],
    href: "https://buy.stripe.com/cNi4gA3i37rQdsN4SF5ZC01",
    color: "#1D9E75",
    cta: "Start free trial",
    variant: "filled-green",
  },
  {
    name: "Creative",
    priceMonthly: 299,
    priceYearlyMonthly: 299,
    oneTime: true,
    desc: "Launch-ready assets and campaign kit.",
    bullets: ["Creative pack", "Ad copy & hooks", "Launch checklist"],
    href: "https://buy.stripe.com/dRm5kE05RbI674p98V5ZC03",
    color: "#8B5CF6",
    cta: "Get creative pack",
    variant: "filled-purple",
    popular: true,
  },
  {
    name: "Agency",
    priceMonthly: 499,
    priceYearlyMonthly: 399,
    desc: "Everything your agency needs to scale clients.",
    bullets: ["All features", "Client dashboards", "Team access"],
    href: "https://buy.stripe.com/6oU3cw8Cn13s74pacZ5ZC02",
    color: "#3B82F6",
    cta: "Start free trial",
    variant: "outline",
  },
];

export function PricingClose() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "80px 0 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Plans for every stage of growth
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: 4,
              background: "#0A0A12",
              border: "0.5px solid #1E1E2E",
              borderRadius: 999,
            }}
            role="tablist"
          >
            <ToggleBtn active={!yearly} onClick={() => setYearly(false)} label="Monthly" />
            <ToggleBtn
              active={yearly}
              onClick={() => setYearly(true)}
              label={
                <>
                  Yearly{" "}
                  <span
                    style={{
                      marginLeft: 4,
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 10,
                      color: "#1D9E75",
                      background: "rgba(29,158,117,0.15)",
                      padding: "2px 6px",
                      borderRadius: 6,
                    }}
                  >
                    -20%
                  </span>
                </>
              }
            />
          </div>
        </div>

        <div className="plans-grid">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} yearly={yearly} />
          ))}
        </div>
      </div>

      <style>{`
        .plans-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (min-width: 640px) { .plans-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .plans-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  );
}

function ToggleBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 34,
        padding: "0 16px",
        background: active ? "#FFFFFF" : "transparent",
        color: active ? "#050508" : "#9898A8",
        border: "none",
        borderRadius: 999,
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        transition: "background 150ms ease-out, color 150ms ease-out",
      }}
    >
      {label}
    </button>
  );
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const price = yearly && !plan.oneTime ? plan.priceYearlyMonthly : plan.priceMonthly;
  const cadence = plan.oneTime ? "one-time" : "/mo";
  const isPopular = plan.popular;

  const ctaBg =
    plan.variant === "filled-green"
      ? "#1D9E75"
      : plan.variant === "filled-purple"
      ? "#8B5CF6"
      : "#FFFFFF";
  const ctaColor = plan.variant === "outline" ? "#050508" : "#FFFFFF";

  return (
    <article
      className="plan-card"
      style={
        {
          position: "relative",
          background: isPopular ? "#0F0B1A" : "#0A0A12",
          border: isPopular ? "1px solid #8B5CF6" : "0.5px solid #1E1E2E",
          borderRadius: 20,
          padding: 26,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          boxShadow: isPopular ? "0 20px 50px -20px rgba(139,92,246,0.35)" : "none",
          ["--plan-color" as string]: plan.color,
        } as React.CSSProperties
      }
    >
      {isPopular ? (
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9.5,
            color: "#FFFFFF",
            background: "#8B5CF6",
            padding: "4px 9px",
            borderRadius: 999,
            letterSpacing: "0.08em",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Most Popular
        </span>
      ) : null}

      <div>
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 14,
            color: "#E8E8F0",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          {plan.name}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 40,
              color: "#E8E8F0",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            ${price}
          </span>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 12, color: "#9898A8" }}>
            {cadence}
          </span>
        </div>
        <p
          style={{
            marginTop: 12,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#9898A8",
            lineHeight: 1.5,
          }}
        >
          {plan.desc}
        </p>
      </div>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 42,
          background: ctaBg,
          color: ctaColor,
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13.5,
          fontWeight: 500,
          borderRadius: 10,
          textDecoration: "none",
          letterSpacing: "-0.005em",
          transition: "transform 80ms ease-out, opacity 150ms ease-out",
        }}
        className="plan-cta"
      >
        {plan.cta}
      </a>

      <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
        {plan.bullets.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 12.5,
              color: "#9898A8",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M2 6 L5 9 L10 3" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        ))}
      </ul>

      <style>{`
        .plan-card .plan-cta:active { transform: scale(0.98); }
        .plan-card .plan-cta:hover { opacity: 0.92; }
      `}</style>
    </article>
  );
}
