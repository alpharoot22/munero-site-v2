"use client";

import { useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const squads = [
  { n: "01", label: "Pain points", d: "Reddit + Trustpilot scrape" },
  { n: "02", label: "Search intent", d: "Autocomplete, PAA, related" },
  { n: "03", label: "Market trends", d: "Google Trends, 90d" },
  { n: "04", label: "Video", d: "YouTube hooks + comments" },
  { n: "05", label: "Meta ads", d: "Live Meta Ad Library" },
  { n: "06", label: "TikTok", d: "Live TikTok scrape" },
  { n: "07", label: "Google ads", d: "Live competitor PPC" },
  { n: "08", label: "LinkedIn", d: "B2B targeting signals" },
  { n: "09", label: "Competitors", d: "10 deep competitor dives" },
  { n: "10", label: "Market", d: "TAM, pricing, events" },
  { n: "11", label: "Deep research", d: "Perplexity + academic" },
  { n: "12", label: "E-commerce", d: "Amazon + Walmart data" },
  { n: "13", label: "Creative", d: "46 assets produced" },
  { n: "14", label: "Brief assembly", d: "All squads synthesized" },
  { n: "15", label: "Final strategy", d: "Campaign translation" },
  { n: "16", label: "Campaign plan", d: "Meta + Google + TikTok" },
];

export function Sources() {
  const [hover, setHover] = useState<number | null>(null);
  const cx = 320;
  const cy = 320;
  const radius = 240;

  // Position 16 squads on a circle
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
      <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-4">
        <H2>
          Every brief is built on 16 parallel{" "}
          <span className="italic-accent">intelligence</span> streams.
        </H2>
      </div>
      <Lede>
        Not a search wrapper. Real scraping, real APIs, real data assembled into one verifiable
        document.
      </Lede>

      <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-start">
        {/* Radial diagram */}
        <div className="relative w-full aspect-square max-w-[640px] mx-auto md:mx-0">
          <svg viewBox="0 0 640 640" className="w-full h-full" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="sCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5A0" stopOpacity="1" />
                <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Concentric guides */}
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
                stroke={hover === n.i ? "var(--accent)" : "var(--border-2)"}
                strokeWidth={hover === n.i ? 1.5 : 0.5}
                opacity={hover === n.i ? 1 : 0.6}
                style={{
                  transition: "all 200ms ease-out",
                  filter: hover === n.i ? "drop-shadow(0 0 4px rgba(29,158,117,0.6))" : "none",
                }}
              />
            ))}

            {/* Center BRIEF node */}
            <circle cx={cx} cy={cy} r="56" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="48" fill="url(#sCore)" opacity="0.9" />
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
              const isHover = hover === n.i;
              return (
                <g
                  key={n.i}
                  onMouseEnter={() => setHover(n.i)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isHover ? 8 : 5}
                    fill="var(--bg)"
                    stroke={isHover ? "var(--accent-light)" : "var(--accent)"}
                    strokeWidth={isHover ? 1.5 : 1}
                    style={{
                      transition: "all 200ms ease-out",
                      filter: isHover
                        ? "drop-shadow(0 0 8px rgba(0,229,160,0.8))"
                        : "drop-shadow(0 0 3px rgba(29,158,117,0.4))",
                    }}
                  />
                  {/* Label position based on angle */}
                  <text
                    x={n.x + (n.x - cx) * 0.12}
                    y={n.y + (n.y - cy) * 0.12 + 4}
                    textAnchor={n.x > cx + 5 ? "start" : n.x < cx - 5 ? "end" : "middle"}
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize="10.5"
                    letterSpacing="0.04em"
                    fill={isHover ? "var(--text)" : "var(--text-2)"}
                    style={{
                      transition: "fill 200ms ease-out",
                      textTransform: "uppercase",
                    }}
                  >
                    {n.n} · {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Side detail panel */}
        <aside
          className="hairline rounded-md p-6 md:w-[280px] sticky md:top-24 self-start"
          style={{ background: "var(--surface)" }}
        >
          <div className="num text-[10.5px] tracking-[0.16em]" style={{ color: "var(--accent)" }}>
            HOVER A NODE
          </div>
          <div className="mt-3 min-h-[140px]">
            {hover === null ? (
              <>
                <div className="text-[18px] font-medium tracking-tight">
                  16 squads, in parallel
                </div>
                <p className="mt-2 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                  Each squad owns one data source and runs simultaneously. The brief assembles
                  their outputs into one document.
                </p>
              </>
            ) : (
              <>
                <div
                  className="num text-[11px]"
                  style={{ color: "var(--accent)" }}
                >
                  SQUAD {squads[hover].n}
                </div>
                <div className="mt-1.5 text-[18px] font-medium tracking-tight">
                  {squads[hover].label}
                </div>
                <p className="mt-2 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                  {squads[hover].d}
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </Section>
  );
}
