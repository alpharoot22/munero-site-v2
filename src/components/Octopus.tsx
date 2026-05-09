"use client";

/**
 * Bioluminescent Intelligence — animated SVG octopus.
 * 8 tentacles per spec, each labeled to a specific data source.
 * Stagger 1s per tentacle, total loop 10s. CSS-only.
 */

// 8 cluster labels — short for mobile readability. Each spans 1-2 of the
// 16 underlying squads.
const SOURCES = [
  { id: "pain",  label: "Pain",        angle: -90,  dist: 235 },
  { id: "meta",  label: "Meta/TikTok", angle: -45,  dist: 230 },
  { id: "ggl",   label: "Google",      angle: 0,    dist: 250 },
  { id: "video", label: "Video",       angle: 45,   dist: 230 },
  { id: "yt",    label: "YouTube",     angle: 90,   dist: 215 },
  { id: "comp",  label: "Rivals",      angle: 135,  dist: 230 },
  { id: "mkt",   label: "Market",      angle: 180,  dist: 250 },
  { id: "srch",  label: "Search",      angle: -135, dist: 230 },
];

function tip(angle: number, dist: number, cx: number, cy: number) {
  const r = (angle * Math.PI) / 180;
  return { x: cx + Math.cos(r) * dist, y: cy + Math.sin(r) * dist };
}

function tentaclePath(cx: number, cy: number, tx: number, ty: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  const len = Math.hypot(dx, dy);
  const px = -dy / len;
  const py = dx / len;
  const off = Math.min(38, len * 0.22);
  const c1x = cx + dx * 0.25 + px * off;
  const c1y = cy + dy * 0.25 + py * off;
  const c2x = cx + dx * 0.75 - px * off * 0.55;
  const c2y = cy + dy * 0.75 - py * off * 0.55;
  return `M ${cx} ${cy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${tx} ${ty}`;
}

export function Octopus() {
  const cx = 300;
  const cy = 280;

  const tentacles = SOURCES.map((s, i) => {
    const t = tip(s.angle, s.dist, cx, cy);
    const d = tentaclePath(cx, cy, t.x, t.y);
    const len = Math.round(Math.hypot(t.x - cx, t.y - cy) * 1.08);
    return { ...s, ...t, d, len, idx: i };
  });

  return (
    <div className="relative w-full" aria-hidden="true">
      <svg
        viewBox="0 0 600 560"
        className="w-full h-auto"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#1D9E75" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="1" />
            <stop offset="40%" stopColor="#1D9E75" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Atmospheric halo */}
        <circle cx={cx} cy={cy} r="220" fill="url(#haloGrad)" />

        {/* Concentric scientific-diagram rings */}
        <circle cx={cx} cy={cy} r="120" fill="none" stroke="var(--border-2)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
        <circle cx={cx} cy={cy} r="180" fill="none" stroke="var(--border-2)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.35" />
        <circle cx={cx} cy={cy} r="240" fill="none" stroke="var(--border-2)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />

        {/* Tentacles */}
        {tentacles.map((t) => (
          <g key={t.id}>
            {/* Tentacle path */}
            <path
              d={t.d}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                strokeDasharray: t.len,
                ["--len" as string]: `${t.len}`,
                animation: `tentacle-draw 10s ease-in-out infinite`,
                animationDelay: `${t.idx * 1}s`,
              }}
            />
            {/* Data dot — travels along path */}
            <circle
              r="3"
              fill="var(--accent-light)"
              filter="url(#glow)"
              style={{
                offsetPath: `path('${t.d}')`,
                offsetDistance: "0%",
                animation: `data-flow 4s linear infinite`,
                animationDelay: `${t.idx * 1 + 1}s`,
              }}
            />
            {/* Tip node ring + inner pulsing dot */}
            <circle cx={t.x} cy={t.y} r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.25" />
            <circle
              cx={t.x}
              cy={t.y}
              fill="var(--accent-light)"
              style={{
                animation: `tip-pulse 3s ease-in-out infinite`,
                animationDelay: `${t.idx * 0.4}s`,
              }}
            />
            {/* Label — bright, semibold, pulled closer to tip for clear coupling */}
            <text
              x={t.x + (t.x > cx + 5 ? 14 : t.x < cx - 5 ? -14 : 0)}
              y={t.y + (t.y > cy + 5 ? 20 : t.y < cy - 5 ? -12 : 4)}
              fontFamily="var(--font-jetbrains), monospace"
              fontSize="12"
              fontWeight="600"
              letterSpacing="0.08em"
              fill="var(--text)"
              textAnchor={t.x > cx + 10 ? "start" : t.x < cx - 10 ? "end" : "middle"}
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(11px, 1.8vw, 12.5px)",
                paintOrder: "stroke",
                stroke: "var(--bg)",
                strokeWidth: 3,
                strokeLinejoin: "round",
              }}
            >
              {t.label}
            </text>
          </g>
        ))}

        {/* Central brain */}
        <g
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: "core-pulse 3s ease-in-out infinite",
          }}
        >
          <circle cx={cx} cy={cy} r="50" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r="42" fill="url(#coreGrad)" opacity="0.95" />
          {/* Crosshair — recessed so the CORE label reads cleanly */}
          <line x1={cx - 30} y1={cy} x2={cx - 18} y2={cy} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          <line x1={cx + 18} y1={cy} x2={cx + 30} y2={cy} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          <line x1={cx} y1={cy - 30} x2={cx} y2={cy - 14} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          <line x1={cx} y1={cy + 14} x2={cx} y2={cy + 30} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          {/* Center label — inside the circle */}
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="var(--font-jetbrains), monospace"
            fontSize="13"
            letterSpacing="0.22em"
            fill="var(--text)"
            fontWeight="600"
            style={{ textTransform: "uppercase" }}
          >
            CORE
          </text>
        </g>
      </svg>
    </div>
  );
}
