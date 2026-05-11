"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Layer {
  number: string;
  title: string;
  line: string;
  chips: string[];
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
        padding: "88px 0 96px",
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
          background:
            "radial-gradient(circle at center, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -160,
          left: -200,
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle at center, rgba(29, 158, 117, 0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              color: "#E8E8F0",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            How <span style={{ color: "#1D9E75" }}>Munero</span> works
          </h2>
          <p
            style={{
              marginTop: 10,
              fontSize: 14.5,
              color: "#9898A8",
            }}
          >
            Three connected layers. One intelligent workflow.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <LayerCard layer={LAYER_1} />
          <LayerCard layer={LAYER_2} />
          <LayerCard layer={LAYER_3} />
        </div>

        <p
          style={{
            marginTop: 32,
            textAlign: "center",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 14,
            color: "#9898A8",
          }}
        >
          Integrations and client dashboards keep every step{" "}
          <span style={{ color: "#1D9E75" }}>connected.</span>
        </p>
      </div>
    </section>
  );
}

function LayerCard({ layer }: { layer: Layer }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        {
          background: "#0A0A12",
          border: `0.5px solid #1E1E2E`,
          borderRadius: 22,
          padding: 32,
          boxShadow: "0 16px 40px -20px rgba(0,0,0,0.4)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition:
            "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms ease-out",
          ["--layer-color" as string]: layer.color,
        } as React.CSSProperties
      }
      className="layer-card"
    >
      <div className="layer-grid">
        {/* Left: copy */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 18,
                color: layer.color,
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              {layer.number}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 10,
                background: layer.iconBg,
                border: `0.5px solid ${layer.color}55`,
                color: layer.color,
              }}
              aria-hidden="true"
            >
              {layer.number === "01" ? <ScopeIcon /> : layer.number === "02" ? <SparkIcon /> : <TrendIcon />}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 26,
              color: "#E8E8F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {layer.title}
          </h3>
          <p
            style={{
              marginTop: 8,
              fontSize: 14.5,
              color: "#9898A8",
              lineHeight: 1.5,
            }}
          >
            {layer.line}
          </p>

          <ul
            style={{
              marginTop: 18,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              listStyle: "none",
              padding: 0,
            }}
          >
            {layer.chips.map((c) => (
              <li
                key={c}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12.5,
                  color: "#E8E8F0",
                  background: "#111118",
                  border: `0.5px solid ${layer.color}40`,
                  borderRadius: 999,
                  padding: "6px 14px",
                  letterSpacing: "-0.005em",
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: preview */}
        <div style={{ minWidth: 0 }}>{layer.preview}</div>
      </div>

      <style>{`
        .layer-card:hover { border-color: var(--layer-color) !important; }
        .layer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 900px) {
          .layer-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
            gap: 32px;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

/* ============== LAYER 1 — Market Research preview ============== */

function MarketBriefPreview() {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        padding: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <img src="/favicon.png" alt="" width={18} height={18} style={{ borderRadius: 4 }} aria-hidden="true" />
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#E8E8F0",
            fontWeight: 500,
          }}
        >
          Market Brief, Hydration Supplement
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <MiniStat label="Opportunity Score" value="82" suffix="/100" />
        <MiniStat label="Top Pain Points" value="15" hint="15 identified" />
        <MiniStat label="Search Demand" value="High" hint="+32%" hintColor="#1D9E75" />
      </div>

      <div
        style={{
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 8,
          padding: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            color: "#505068",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Buyer Signals
        </div>
        {[
          { label: "High price sensitivity", hue: "#1D9E75" },
          { label: "Clean ingredients", hue: "#1D9E75" },
          { label: "Fast results", hue: "#1D9E75" },
          { label: "Better absorption", hue: "#1D9E75" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 0",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11.5,
              color: "#9898A8",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: `${s.hue}30`,
                color: s.hue,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-hidden="true"
            >
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                <path d="M1 3 L2.5 4.4 L5 1.6" stroke={s.hue} strokeWidth="1" strokeLinecap="round" />
              </svg>
            </span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============== LAYER 2 — Creative Pack preview ============== */

function CreativePackPreview() {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        padding: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            width: 18,
            height: 18,
            background: "#8B5CF6",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
          }}
          aria-hidden="true"
        >
          <SparkIcon size={10} />
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#E8E8F0",
            fontWeight: 500,
          }}
        >
          Creative Pack
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
        }}
      >
        {/* Image with copy */}
        <div
          style={{
            background: "linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)",
            borderRadius: 8,
            padding: 12,
            minHeight: 130,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11.5,
              color: "#E8E8F0",
              fontWeight: 500,
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            Clean hydration.
            <br />
            Real energy.
            <br />
            Better every day.
          </p>
          {/* Mock bottle silhouette */}
          <div
            style={{
              position: "absolute",
              right: -6,
              bottom: -8,
              width: 38,
              height: 60,
              background: "rgba(255,255,255,0.18)",
              borderRadius: "20px 20px 6px 6px",
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              color: "#FFFFFF",
              padding: "2px 6px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: 4,
              alignSelf: "flex-start",
              letterSpacing: "0.06em",
              zIndex: 1,
            }}
          >
            Primary Hook
          </span>
        </div>

        {/* UGC Script */}
        <PreviewCard title="UGC Script" tag="30s Script">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 10.5,
              color: "#9898A8",
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            I&apos;ve tried everything.
            <br />
            This is the only one
            <br />
            that actually works.
          </p>
        </PreviewCard>

        {/* Ad Copy */}
        <PreviewCard title="Ad Copy" tag="Meta Ad">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 10.5,
              color: "#9898A8",
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            More energy.
            <br />
            No crash.
            <br />
            Just clean hydration.
          </p>
        </PreviewCard>
      </div>
    </div>
  );
}

function PreviewCard({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 8,
        padding: 10,
        minHeight: 130,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 10.5,
          color: "#E8E8F0",
          fontWeight: 500,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      {children}
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 8.5,
          color: "#505068",
          letterSpacing: "0.08em",
          marginTop: 6,
        }}
      >
        {tag}
      </span>
    </div>
  );
}

/* ============== LAYER 3 — Performance preview ============== */

function PerformancePreview() {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        padding: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            width: 18,
            height: 18,
            background: "#3B82F6",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
          }}
          aria-hidden="true"
        >
          <TrendIcon size={10} />
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#E8E8F0",
            fontWeight: 500,
          }}
        >
          Performance Overview
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <PerfStat label="ROAS" value="4.62x" delta="+18%" deltaColor="#1D9E75" hint="vs last 7 days" />
        <PerfStat label="Spend" value="$12,430" delta="+22%" deltaColor="#9898A8" hint="vs last 7 days" />
        <PerfStat label="CPA" value="$23.41" delta="-11%" deltaColor="#1D9E75" hint="vs last 7 days" />
      </div>

      <div
        style={{
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 8,
          padding: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11.5,
              color: "#E8E8F0",
              fontWeight: 500,
            }}
          >
            Winning Creatives
          </span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9.5,
              color: "#3B82F6",
              letterSpacing: "0.05em",
              cursor: "pointer",
            }}
          >
            View all
          </span>
        </div>
        <WinningRow name="Image 03" label="ROAS" value="5.21x" />
        <WinningRow name="Video 02" label="ROAS" value="4.45x" />
      </div>
    </div>
  );
}

function PerfStat({
  label,
  value,
  delta,
  deltaColor,
  hint,
}: {
  label: string;
  value: string;
  delta: string;
  deltaColor: string;
  hint: string;
}) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 8,
        padding: 10,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 10,
          color: "#9898A8",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 16,
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
            fontSize: 9.5,
            color: deltaColor,
          }}
        >
          {delta}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 9.5,
          color: "#505068",
          marginTop: 3,
        }}
      >
        {hint}
      </div>
    </div>
  );
}

function WinningRow({ name, label, value }: { name: string; label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "6px 0",
        borderBottom: "0.5px solid #1E1E2E",
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 5,
          background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11.5,
          color: "#E8E8F0",
          fontWeight: 500,
          flex: 1,
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10,
          color: "#505068",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#3B82F6",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function MiniStat({
  label,
  value,
  suffix,
  hint,
  hintColor,
}: {
  label: string;
  value: string;
  suffix?: string;
  hint?: string;
  hintColor?: string;
}) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 8,
        padding: 10,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 10,
          color: "#9898A8",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 18,
            color: "#E8E8F0",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {value}
        </span>
        {suffix ? (
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 10,
              color: "#505068",
            }}
          >
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? (
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9.5,
            color: hintColor ?? "#505068",
            marginTop: 3,
          }}
        >
          {hint}
        </div>
      ) : null}
    </div>
  );
}

/* ---------- Icons ---------- */

function ScopeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 0.5 V3.5 M10 16.5 V19.5 M0.5 10 H3.5 M16.5 10 H19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="currentColor" />
    </svg>
  );
}

function TrendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 15 L7 10 L11 13 L18 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 5 H18 V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* ---------- New Layer 1 preview: Signal sources scanning ---------- */

function SignalSourcesPreview() {
  const sources = [
    { name: "Reddit threads",         count: "12 active",    pct: 92 },
    { name: "Trustpilot reviews",     count: "184 quotes",   pct: 78 },
    { name: "Meta Ad Library",        count: "380 ads",      pct: 86 },
    { name: "Google Trends",          count: "24 mo data",   pct: 64 },
    { name: "YouTube comments",       count: "2,300+",       pct: 55 },
  ];

  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ScopeIcon size={16} />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 12.5,
              color: "#E8E8F0",
              fontWeight: 500,
            }}
          >
            Live Signal Sources
          </span>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            color: "#1D9E75",
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#1D9E75",
              animation: "src-pulse 1.8s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          SCANNING
        </span>
      </div>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        {sources.map((s, i) => (
          <li
            key={s.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 4,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 11.5,
                }}
              >
                <span style={{ color: "#E8E8F0" }}>{s.name}</span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    color: "#9898A8",
                  }}
                >
                  {s.count}
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "#1E1E2E",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${s.pct}%`,
                    background: "#1D9E75",
                    borderRadius: 2,
                    animation: `src-fill 1200ms ${i * 120}ms cubic-bezier(0.16, 1, 0.3, 1) both`,
                  }}
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1D9E75",
                boxShadow: "0 0 6px #1D9E75",
                animation: `src-pulse 1.8s ${i * 240}ms ease-in-out infinite`,
              }}
            />
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes src-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes src-fill {
          from { width: 0%; }
        }
      `}</style>
    </div>
  );
}

/* ---------- New Layer 3 preview: Execution Brief deliverables ---------- */

function ExecutionBriefPreview() {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <TrendIcon size={16} />
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#E8E8F0",
            fontWeight: 500,
          }}
        >
          Execution Brief
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            color: "#3B82F6",
            letterSpacing: "0.08em",
            padding: "2px 8px",
            borderRadius: 999,
            background: "rgba(59, 130, 246, 0.1)",
            border: "0.5px solid rgba(59, 130, 246, 0.4)",
          }}
        >
          READY
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        <BriefDeliverable label="Strategy"       value="3 angles"        color="#3B82F6" />
        <BriefDeliverable label="Hooks"          value="24 ranked"       color="#3B82F6" />
        <BriefDeliverable label="Offers"         value="5 variants"      color="#3B82F6" />
        <BriefDeliverable label="Creatives"      value="46 assets"       color="#3B82F6" />
        <BriefDeliverable label="Keywords"       value="20 priority"     color="#3B82F6" />
        <BriefDeliverable label="Launch plan"    value="30-day"          color="#3B82F6" />
      </div>

      <div
        style={{
          marginTop: 10,
          padding: "10px 12px",
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6 L5 9 L10 3" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11,
              color: "#9898A8",
            }}
          >
            Ready for ads manager
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            color: "#505068",
          }}
        >
          34 min 12 sec
        </span>
      </div>
    </div>
  );
}

function BriefDeliverable({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 10,
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11.5,
          color: "#9898A8",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color,
          letterSpacing: "0.02em",
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ---------- Layer definitions ---------- */

const LAYER_1: Layer = {
  number: "01",
  title: "Market Signals",
  line: "Scans pain points, search intent, competitors, trends, and customer language.",
  chips: ["Pain points", "Search intent", "Competitors", "Trends", "Language"],
  color: "#1D9E75",
  iconBg: "rgba(29, 158, 117, 0.12)",
  preview: <SignalSourcesPreview />,
};

const LAYER_2: Layer = {
  number: "02",
  title: "Intelligence Engine",
  line: "Connects the data, scores opportunities, and finds the strongest campaign direction.",
  chips: ["Connect", "Score", "Rank", "Direction"],
  color: "#8B5CF6",
  iconBg: "rgba(139, 92, 246, 0.12)",
  preview: <MarketBriefPreview />,
};

const LAYER_3: Layer = {
  number: "03",
  title: "Execution Brief",
  line: "Turns insight into strategy, hooks, offers, creatives, keywords, and launch plan.",
  chips: ["Strategy", "Hooks", "Offers", "Creatives", "Keywords", "Launch"],
  color: "#3B82F6",
  iconBg: "rgba(59, 130, 246, 0.12)",
  preview: <ExecutionBriefPreview />,
};
