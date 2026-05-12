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
            From market signal to{" "}
            <span style={{ color: "#1D9E75" }}>campaign performance</span>
            <span style={{ color: "#E8E8F0" }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 15,
              color: "#9898A8",
              lineHeight: 1.55,
              maxWidth: "56ch",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Munero connects research, creative, and optimization in one workspace.
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
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "rgba(29,158,117,0.08)",
        border: "0.5px solid rgba(29,158,117,0.45)",
        color: "#1D9E75",
        boxShadow: "0 0 16px -2px rgba(29,158,117,0.35)",
      }}
      aria-hidden="true"
    >
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path
          d="M1 6 H12 M8 2 L12 6 L8 10"
          stroke="currentColor"
          strokeWidth="1.6"
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
        {step.more > 0 ? (
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
        ) : null}
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
      {/* Hero: Market Demand donut */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(29,158,117,0.10) 0%, rgba(29,158,117,0) 70%)",
          border: "0.5px solid #1E1E2E",
          borderRadius: 12,
          padding: "12px 14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#9898A8", fontWeight: 500 }}>
            Market Demand
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
            +32%
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}>
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
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 22,
                color: "#E8E8F0",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              High
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: "#505068",
                marginTop: 4,
                letterSpacing: "0.02em",
              }}
            >
              opportunity
            </div>
          </div>
        </div>
      </div>

      {/* 3-up KPI strip — leads with Competitor Gaps */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        <KpiCell label="Comp gaps"     value="6"   delta="open"    deltaColor="#1D9E75" />
        <KpiCell label="Pain intensity" value="73"  delta="+9"     deltaColor="#1D9E75" />
        <KpiCell label="Buyer signals"  value="184" delta="quotes" deltaColor="#505068" />
      </div>

      {/* Top findings */}
      <div style={{ background: "#0A0A12", border: "0.5px solid #1E1E2E", borderRadius: 10, padding: 10 }}>
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
            Top Findings
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              color: "#1D9E75",
              letterSpacing: "0.06em",
            }}
          >
            TOP 3
          </span>
        </div>

        <FindingRow rank="01" quote="I've tried everything for adult acne" source="Reddit"     freq="84" />
        <FindingRow rank="02" quote="Clean ingredients, real results"        source="Trustpilot" freq="72" />
        <FindingRow rank="03" quote="Looking for better absorption"           source="YouTube"    freq="58" last />
      </div>
    </div>
  );
}

function FindingRow({
  rank,
  quote,
  source,
  freq,
  last,
}: {
  rank: string;
  quote: string;
  source: string;
  freq: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "18px 1fr auto auto",
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
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 10.5,
          color: "#E8E8F0",
          fontStyle: "italic",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        &ldquo;{quote}&rdquo;
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 8.5,
          color: "#9898A8",
          letterSpacing: "0.04em",
        }}
      >
        {source}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10,
          color: "#1D9E75",
          fontWeight: 500,
        }}
      >
        {freq}
      </span>
    </div>
  );
}

function CreativePackPreview() {
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
      {/* Hero: featured creative + 3 thumbnails */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0) 70%)",
          border: "0.5px solid #1E1E2E",
          borderRadius: 12,
          padding: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#9898A8", fontWeight: 500 }}>
            Creative Pack
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 10,
              color: "#8B5CF6",
              background: "rgba(139,92,246,0.12)",
              border: "0.5px solid rgba(139,92,246,0.35)",
              padding: "1px 7px",
              borderRadius: 999,
              letterSpacing: "0.04em",
            }}
          >
            46 assets
          </span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              flex: "1.2",
              aspectRatio: "1 / 1",
              borderRadius: 10,
              background: "linear-gradient(135deg, #4338CA 0%, #8B5CF6 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "18%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "44%",
                height: "58%",
                background: "rgba(255,255,255,0.20)",
                borderRadius: "30% 30% 8px 8px",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 8.5,
                color: "#FFFFFF",
                background: "rgba(0,0,0,0.35)",
                padding: "2px 6px",
                borderRadius: 4,
                letterSpacing: "0.06em",
              }}
            >
              HERO
            </span>
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { hue: "#1D9E75", label: "Static" },
              { hue: "#8B5CF6", label: "UGC" },
              { hue: "#3B82F6", label: "Video" },
            ].map((t) => (
              <div
                key={t.label}
                style={{
                  flex: 1,
                  background: `linear-gradient(135deg, ${t.hue}33 0%, ${t.hue}11 100%)`,
                  borderRadius: 8,
                  border: "0.5px solid #1E1E2E",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 8.5,
                    color: "#FFFFFF",
                    background: "rgba(0,0,0,0.35)",
                    padding: "1px 5px",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3-up KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        <KpiCell label="Hooks"   value="24"  delta="ranked"  deltaColor="#505068" />
        <KpiCell label="UGC"     value="6"   delta="scripts" deltaColor="#505068" />
        <KpiCell label="Variants" value="12" delta="per ad"  deltaColor="#505068" />
      </div>

      {/* Top picks list */}
      <div style={{ background: "#0A0A12", border: "0.5px solid #1E1E2E", borderRadius: 10, padding: 10 }}>
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
            Top Picks
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              color: "#8B5CF6",
              letterSpacing: "0.06em",
            }}
          >
            TOP 3
          </span>
        </div>

        <PickRow
          rank="01"
          quote="The drink that does what coffee promised."
          channel="Meta"
          score="92"
        />
        <PickRow
          rank="02"
          quote="I've tried everything. This actually works."
          channel="TikTok"
          score="87"
        />
        <PickRow
          rank="03"
          quote="Clean energy. No crash."
          channel="Google"
          score="81"
          last
        />
      </div>
    </div>
  );
}

function PickRow({
  rank,
  quote,
  channel,
  score,
  last,
}: {
  rank: string;
  quote: string;
  channel: string;
  score: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "18px 1fr auto auto",
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
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 10.5,
          color: "#E8E8F0",
          fontStyle: "italic",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        &ldquo;{quote}&rdquo;
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 8.5,
          color: "#9898A8",
          letterSpacing: "0.04em",
        }}
      >
        {channel}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10,
          color: "#8B5CF6",
          fontWeight: 500,
        }}
      >
        {score}
      </span>
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

      {/* Next Actions — the learning loop in action */}
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
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 10.5,
              color: "#E8E8F0",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3B82F6",
                boxShadow: "0 0 6px #3B82F6",
              }}
              aria-hidden="true"
            />
            Next Actions
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              color: "#3B82F6",
              letterSpacing: "0.06em",
            }}
          >
            AGENT
          </span>
        </div>

        <NextActionRow
          verb="Shift"
          object="$1,200"
          target="to Image 03"
          tone="scale"
        />
        <NextActionRow
          verb="Pause"
          object="Video 04"
          target="frequency 4.6"
          tone="kill"
        />
        <NextActionRow
          verb="Test"
          object="2 new hooks"
          target="exhaustion angle"
          tone="explore"
          last
        />
      </div>
    </div>
  );
}

function NextActionRow({
  verb,
  object,
  target,
  tone,
  last,
}: {
  verb: string;
  object: string;
  target: string;
  tone: "scale" | "kill" | "explore";
  last?: boolean;
}) {
  const toneColor =
    tone === "scale" ? "#1D9E75" : tone === "kill" ? "#F97316" : "#3B82F6";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        gap: 8,
        padding: "6px 0",
        borderBottom: last ? "none" : "0.5px solid #1E1E2E",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 8.5,
          color: toneColor,
          background: `${toneColor}15`,
          border: `0.5px solid ${toneColor}40`,
          padding: "2px 6px",
          borderRadius: 4,
          letterSpacing: "0.08em",
          fontWeight: 600,
        }}
      >
        {verb.toUpperCase()}
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11,
          color: "#E8E8F0",
          letterSpacing: "-0.005em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "#E8E8F0", fontWeight: 500 }}>{object}</span>
        <span style={{ color: "#9898A8" }}> {target}</span>
      </span>
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
    line: "Find what buyers want, what competitors miss, and which angles are worth testing.",
    chips: ["Pain Points", "Competitors", "Keywords", "Trends"],
    more: 0,
    color: "#1D9E75",
    iconBg: "rgba(29,158,117,0.12)",
    preview: <MarketDemandPreview />,
  },
  {
    number: "2",
    title: "Campaign Builder + Creative",
    line: "Turn research into launch-ready assets.",
    chips: ["Strategy", "Angles", "Ad Copy", "UGC", "Images"],
    more: 0,
    color: "#8B5CF6",
    iconBg: "rgba(139,92,246,0.14)",
    preview: <CreativePackPreview />,
  },
  {
    number: "3",
    title: "Optimize + Learning Loop",
    line: "Track what works and improve the next campaign.",
    chips: ["ROAS", "Scorecard", "Budget", "Reports"],
    more: 0,
    color: "#3B82F6",
    iconBg: "rgba(59,130,246,0.14)",
    preview: <RoasPreview />,
  },
];
