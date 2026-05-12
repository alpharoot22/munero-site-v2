"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  line: string;
  chips: string[];
  more: number;
  color: string;
  iconBg: string;
  preview: ReactNode;
}

export function HowItWorks() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "80px 0 88px",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -200,
          width: 700,
          height: 700,
          background: "radial-gradient(circle at center, rgba(139,92,246,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 12,
              padding: "5px 12px",
              background: "rgba(29,158,117,0.06)",
              border: "0.5px solid rgba(29,158,117,0.25)",
              borderRadius: 999,
            }}
          >
            One workspace · Three layers
          </span>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: "#E8E8F0",
              letterSpacing: "-0.028em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            From insight to impact in{" "}
            <span style={{ color: "#1D9E75" }}>3 simple steps</span>
            <span style={{ color: "#E8E8F0" }}>.</span>
          </h2>
          <p style={{ marginTop: 10, fontSize: 14.5, color: "#9898A8" }}>
            Research the market. Build better campaigns. Improve what works.
          </p>
        </div>

        <div className="steps-grid">
          <StepCard step={STEPS[0]} />
          <StepArrow />
          <StepCard step={STEPS[1]} />
          <StepArrow />
          <StepCard step={STEPS[2]} />
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }
        .step-arrow { display: none; }
        @media (min-width: 1100px) {
          .steps-grid {
            grid-template-columns: 1fr auto 1fr auto 1fr;
            gap: 14px;
            align-items: center;
          }
          .step-arrow { display: inline-flex; }
        }
      `}</style>
    </section>
  );
}

function StepArrow() {
  return (
    <span
      className="step-arrow"
      style={{ alignItems: "center", justifyContent: "center", color: "#505068" }}
      aria-hidden="true"
    >
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path
          d="M1 7 H19 M14 2 L19 7 L14 12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function StepCard({ step }: { step: Step }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setVisible(true), obs.disconnect())),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="step-card"
      style={
        {
          position: "relative",
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 20,
          padding: 22,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms ease-out",
          ["--step-color" as string]: step.color,
        } as React.CSSProperties
      }
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: step.iconBg,
            border: `0.5px solid ${step.color}55`,
            color: step.color,
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: 14,
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {step.number}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: 19,
            color: "#E8E8F0",
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {step.title}
        </h3>
      </div>

      <p style={{ fontSize: 13.5, color: "#9898A8", lineHeight: 1.5, margin: 0, maxWidth: "32ch" }}>
        {step.line}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {step.chips.map((c) => (
          <span
            key={c}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11.5,
              color: "#9898A8",
              background: "#111118",
              border: "0.5px solid #1E1E2E",
              borderRadius: 999,
              padding: "5px 12px",
              letterSpacing: "-0.005em",
            }}
          >
            {c}
          </span>
        ))}
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10.5,
            color: "#505068",
            alignSelf: "center",
            marginLeft: 2,
          }}
        >
          +{step.more} more
        </span>
      </div>

      <div style={{ marginTop: "auto" }}>{step.preview}</div>

      <style>{`
        .step-card:hover { border-color: var(--step-color) !important; }
      `}</style>
    </article>
  );
}

/* ============ STEP PREVIEWS ============ */

function MarketDemandPreview() {
  return (
    <div style={{ background: "#10101A", border: "0.5px solid #1E1E2E", borderRadius: 14, padding: 16 }}>
      <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#9898A8", marginBottom: 12, fontWeight: 500 }}>
        Market Demand
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ position: "relative", width: 64, height: 64 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="26" stroke="#1E1E2E" strokeWidth="6" fill="none" />
            <circle
              cx="32"
              cy="32"
              r="26"
              stroke="#1D9E75"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(62 / 100) * 163} 163`}
              transform="rotate(-90 32 32)"
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              fontWeight: 600,
            }}
          >
            62%
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 16, color: "#E8E8F0", fontWeight: 500 }}>
            High
          </div>
          <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#505068", marginTop: 2 }}>
            opportunity
          </div>
        </div>
      </div>
    </div>
  );
}

function CreativePackPreview() {
  return (
    <div style={{ background: "#10101A", border: "0.5px solid #1E1E2E", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            flex: "1.2",
            aspectRatio: "1 / 1.1",
            borderRadius: 10,
            background: "linear-gradient(135deg, #4338CA 0%, #8B5CF6 100%)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: 8,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "44%",
              height: "55%",
              background: "rgba(255,255,255,0.18)",
              borderRadius: "30% 30% 8px 8px",
            }}
          />
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: 6 }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: `linear-gradient(135deg, ${["#1D9E75", "#8B5CF6", "#3B82F6"][i - 1]}33 0%, ${["#1D9E75", "#8B5CF6", "#3B82F6"][i - 1]}11 100%)`,
                borderRadius: 8,
                border: "0.5px solid #1E1E2E",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoasPreview() {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 14,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* Hero metric + chart */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.0) 70%)",
          border: "0.5px solid #1E1E2E",
          borderRadius: 12,
          padding: "12px 12px 8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 2 }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#9898A8", fontWeight: 500 }}>
            ROAS
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 10,
              color: "#1D9E75",
              background: "rgba(29,158,117,0.12)",
              border: "0.5px solid rgba(29,158,117,0.35)",
              padding: "1px 7px",
              borderRadius: 999,
              letterSpacing: "0.04em",
            }}
          >
            +18%
          </span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 30,
            color: "#E8E8F0",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            marginBottom: 4,
          }}
        >
          4.62x
        </div>
        <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9.5, color: "#505068", marginBottom: 6 }}>
          vs last 7 days
        </div>
        <svg width="100%" height="42" viewBox="0 0 200 42" preserveAspectRatio="none">
          <defs>
            <linearGradient id="roas-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,34 L18,32 L36,30 L54,28 L72,29 L90,24 L108,21 L126,18 L144,14 L162,10 L180,7 L200,3 L200,42 L0,42 Z"
            fill="url(#roas-area)"
          />
          <path
            d="M0,34 L18,32 L36,30 L54,28 L72,29 L90,24 L108,21 L126,18 L144,14 L162,10 L180,7 L200,3"
            stroke="#3B82F6"
            strokeWidth="1.8"
            fill="none"
          />
          <circle cx="200" cy="3" r="3" fill="#3B82F6" />
          <circle cx="200" cy="3" r="6" fill="#3B82F6" fillOpacity="0.2" />
        </svg>
      </div>

      {/* 3-up KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        <KpiCell label="Spend" value="$12.4K" delta="+22%" deltaColor="#9898A8" />
        <KpiCell label="CPA" value="$23.41" delta="-11%" deltaColor="#1D9E75" />
        <KpiCell label="CTR" value="2.1%" delta="+4%" deltaColor="#1D9E75" />
      </div>

      {/* Winning Creatives leaderboard */}
      <div
        style={{
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 10.5,
              color: "#E8E8F0",
              fontWeight: 500,
            }}
          >
            Winning Creatives
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              color: "#3B82F6",
              letterSpacing: "0.06em",
            }}
          >
            TOP 3
          </span>
        </div>

        <WinnerRow
          rank="01"
          name="Image 03"
          tag="Static"
          roas="5.21x"
          delta="+24%"
          gradient="linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)"
        />
        <WinnerRow
          rank="02"
          name="Video 02"
          tag="UGC 30s"
          roas="4.45x"
          delta="+12%"
          gradient="linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
        />
        <WinnerRow
          rank="03"
          name="Image 07"
          tag="Carousel"
          roas="3.18x"
          delta="+6%"
          gradient="linear-gradient(135deg, #1D9E75 0%, #3B82F6 100%)"
          last
        />
      </div>
    </div>
  );
}

function KpiCell({
  label,
  value,
  delta,
  deltaColor,
}: {
  label: string;
  value: string;
  delta: string;
  deltaColor: string;
}) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 8,
        padding: "8px 10px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 9.5,
          color: "#9898A8",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#E8E8F0",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 8.5,
            color: deltaColor,
          }}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}

function WinnerRow({
  rank,
  name,
  tag,
  roas,
  delta,
  gradient,
  last,
}: {
  rank: string;
  name: string;
  tag: string;
  roas: string;
  delta: string;
  gradient: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "18px 26px 1fr auto auto",
        alignItems: "center",
        gap: 8,
        padding: "5px 0",
        borderBottom: last ? "none" : "0.5px solid #1E1E2E",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 9,
          color: "#505068",
          letterSpacing: "0.06em",
        }}
      >
        {rank}
      </span>
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: 5,
          background: gradient,
          flexShrink: 0,
          boxShadow: "0 4px 10px -4px rgba(59,130,246,0.5)",
        }}
        aria-hidden="true"
      />
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 10.5,
            color: "#E8E8F0",
            fontWeight: 500,
            letterSpacing: "-0.005em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 8.5,
            color: "#505068",
            letterSpacing: "0.04em",
          }}
        >
          {tag}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#3B82F6",
          fontWeight: 500,
        }}
      >
        {roas}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 9,
          color: "#1D9E75",
        }}
      >
        {delta}
      </span>
    </div>
  );
}

const STEPS: Step[] = [
  {
    number: "1",
    title: "Market Research",
    line: "Understand demand, trends, and what your audience actually cares about.",
    chips: ["Demand", "Pain Points", "Competitors"],
    more: 3,
    color: "#1D9E75",
    iconBg: "rgba(29,158,117,0.12)",
    preview: <MarketDemandPreview />,
  },
  {
    number: "2",
    title: "Campaign + Creative",
    line: "Turn insights into launch-ready campaigns and scroll-stopping creative.",
    chips: ["Strategy", "Angles", "Ad Copy"],
    more: 3,
    color: "#8B5CF6",
    iconBg: "rgba(139,92,246,0.14)",
    preview: <CreativePackPreview />,
  },
  {
    number: "3",
    title: "Optimize + Learn",
    line: "Track performance, learn what works, and double down on winners.",
    chips: ["ROAS", "Creative Score", "Insights"],
    more: 2,
    color: "#3B82F6",
    iconBg: "rgba(59,130,246,0.14)",
    preview: <RoasPreview />,
  },
];
