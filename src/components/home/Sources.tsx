"use client";

import { useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const squads = [
  { n: "01", source: "Reddit + Trustpilot",   finds: "Customer pain points, ranked by frequency and emotion." },
  { n: "02", source: "Search intent",         finds: "Keywords, modifiers, intent classification, CPC ranges." },
  { n: "03", source: "Google Trends",         finds: "Market trajectory, seasonality, breakout queries." },
  { n: "04", source: "YouTube",               finds: "Video hooks that hold attention, comment sentiment." },
  { n: "05", source: "Meta Ad Library",       finds: "Real ads competitors are running this week." },
  { n: "06", source: "TikTok",                finds: "Creator angles, format trends, viral mechanics." },
  { n: "07", source: "Google Ads",            finds: "Auction insights, ad copy patterns, landing page tests." },
  { n: "08", source: "LinkedIn",              finds: "B2B narrative, decision-maker language, hiring signal." },
  { n: "09", source: "Competitor deep dive",  finds: "10 competitors analyzed across positioning, pricing, gaps." },
  { n: "10", source: "Market intelligence",   finds: "TAM, SAM, SOM. Market structure and consolidation." },
  { n: "11", source: "Deep research",         finds: "White papers, analyst reports, regulatory shifts." },
  { n: "12", source: "Amazon + Walmart",      finds: "Review themes, price elasticity, attribute importance." },
  { n: "13", source: "Creative generation",   finds: "46 assets across Meta, TikTok, Google. Tagged by funnel." },
  { n: "14", source: "Brief assembly",        finds: "Synthesizes signal into one defensible document." },
  { n: "15", source: "Final strategy",        finds: "Budget split, channel mix, kill and scale rules." },
  { n: "16", source: "Campaign translation",  finds: "Direct import format for Meta, Google, TikTok." },
];

export function Sources() {
  const [active, setActive] = useState<number | null>(null);
  const cx = 320;
  const cy = 320;
  const radius = 240;

  const nodes = squads.map((s, i) => {
    const angle = (i / 16) * Math.PI * 2 - Math.PI / 2;
    return {
      ...s,
      i,
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  });

  return (
    <Section bordered id="sources">
      <Eyebrow>The 16 squads</Eyebrow>
      <H2 className="max-w-[26ch]">Every brief is built on 16 parallel intelligence streams.</H2>
      <Lede>
        Not a search wrapper. Real scraping, real APIs, real data assembled into one verifiable
        document.
      </Lede>

      <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-start">
        <div className="relative w-full aspect-square max-w-[640px] mx-auto md:mx-0">
          <svg viewBox="0 0 640 640" className="w-full h-full" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="sourcesCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5A0" stopOpacity="1" />
                <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Concentric guide circles */}
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
            <circle cx={cx} cy={cy} r={radius * 0.6} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

            {/* Spokes */}
            {nodes.map((n) => (
              <line
                key={`spoke-${n.i}`}
                x1={cx}
                y1={cy}
                x2={n.x}
                y2={n.y}
                stroke={active === n.i ? "var(--accent)" : "var(--border-2)"}
                strokeWidth={active === n.i ? 1.5 : 0.5}
                opacity={active === n.i ? 1 : 0.6}
                style={{
                  transition: "all 200ms ease-out",
                  filter: active === n.i ? "drop-shadow(0 0 4px rgba(29,158,117,0.6))" : "none",
                }}
              />
            ))}

            {/* Center BRIEF */}
            <circle cx={cx} cy={cy} r="56" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="48" fill="url(#sourcesCore)" opacity="0.9" />
            <text
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains), monospace"
              fontSize="13"
              letterSpacing="0.18em"
              fill="var(--text)"
              fontWeight="600"
              style={{ textTransform: "uppercase" }}
            >
              BRIEF
            </text>

            {/* Source nodes */}
            {nodes.map((n) => {
              const isActive = active === n.i;
              return (
                <g
                  key={n.i}
                  onMouseEnter={() => setActive(n.i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === n.i ? null : n.i)}
                  onTouchStart={() => setActive(n.i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.source}: ${n.finds}`}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isActive ? 8 : 5}
                    fill="var(--bg)"
                    stroke={isActive ? "var(--accent-light)" : "var(--accent)"}
                    strokeWidth={isActive ? 1.5 : 1}
                    style={{
                      transition: "all 200ms ease-out",
                      filter: isActive
                        ? "drop-shadow(0 0 8px rgba(0,229,160,0.8))"
                        : "drop-shadow(0 0 3px rgba(29,158,117,0.4))",
                    }}
                  />
                  <text
                    x={n.x + (n.x - cx) * 0.12}
                    y={n.y + (n.y - cy) * 0.12 + 4}
                    textAnchor={n.x > cx + 5 ? "start" : n.x < cx - 5 ? "end" : "middle"}
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize="10.5"
                    letterSpacing="0.04em"
                    fill={isActive ? "var(--text)" : "var(--text-2)"}
                    style={{
                      transition: "fill 200ms ease-out",
                      textTransform: "uppercase",
                    }}
                  >
                    {n.n} · {n.source}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <aside
          className="hairline rounded-md p-6 md:w-[280px] sticky md:top-24 self-start"
          style={{ background: "var(--surface)" }}
        >
          <div className="num text-[10.5px] tracking-[0.16em]" style={{ color: "var(--accent)" }}>
            <span className="hidden md:inline">HOVER A SQUAD</span>
            <span className="md:hidden">TAP A SQUAD</span>
          </div>
          <div className="mt-3 min-h-[140px]">
            {active === null ? (
              <>
                <div className="text-[18px] font-semibold tracking-tight">16 squads, in parallel</div>
                <p className="mt-2 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                  Each squad owns one data source and runs simultaneously. The brief assembles
                  their outputs into one document.
                </p>
              </>
            ) : (
              <>
                <div className="num text-[11px]" style={{ color: "var(--accent)" }}>
                  SQUAD {squads[active].n}
                </div>
                <div className="mt-1.5 text-[18px] font-semibold tracking-tight">
                  {squads[active].source}
                </div>
                <p className="mt-2 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                  {squads[active].finds}
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </Section>
  );
}
