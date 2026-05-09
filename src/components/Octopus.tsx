"use client";

/**
 * Bioluminescent Intelligence — animated SVG octopus.
 * 8 tentacles reaching to data sources. CSS-only animation.
 * Each tentacle: bezier path with stroke-dasharray draw, plus a "data dot"
 * that travels along the path via offset-path/offset-distance.
 */
// 8 source clusters that span the 16 underlying intelligence squads.
// Each cluster groups 1-2 squads thematically.
const SOURCES = [
  { id: "pain",  label: "Pain + Reviews",    angle: -90,  dist: 240 },
  { id: "meta",  label: "Meta + TikTok",     angle: -45,  dist: 230 },
  { id: "ggl",   label: "Google + LinkedIn", angle: 0,    dist: 250 },
  { id: "comm",  label: "E-com + Creative",  angle: 45,   dist: 230 },
  { id: "video", label: "Video",             angle: 90,   dist: 220 },
  { id: "comp",  label: "Competitors",       angle: 135,  dist: 230 },
  { id: "mkt",   label: "Market + Research", angle: 180,  dist: 250 },
  { id: "srch",  label: "Search + Trends",   angle: -135, dist: 230 },
];

// Returns {x,y} for a tentacle tip given angle/distance from center
function tip(angle: number, dist: number, cx: number, cy: number) {
  const r = (angle * Math.PI) / 180;
  return { x: cx + Math.cos(r) * dist, y: cy + Math.sin(r) * dist };
}

// Curved path from center to tip with a small wiggle for organic feel
function tentaclePath(cx: number, cy: number, tx: number, ty: number) {
  const mx = (cx + tx) / 2;
  const my = (cy + ty) / 2;
  // perpendicular offset for control point — alternating sign by tx-cx
  const dx = tx - cx;
  const dy = ty - cy;
  const len = Math.hypot(dx, dy);
  const px = -dy / len;
  const py = dx / len;
  const off = Math.min(40, len * 0.25);
  const c1x = cx + dx * 0.25 + px * off;
  const c1y = cy + dy * 0.25 + py * off;
  const c2x = cx + dx * 0.75 - px * off * 0.6;
  const c2y = cy + dy * 0.75 - py * off * 0.6;
  return `M ${cx} ${cy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${tx} ${ty}`;
}

export function Octopus() {
  const cx = 300;
  const cy = 280;
  const tentacles = SOURCES.map((s, i) => {
    const t = tip(s.angle, s.dist, cx, cy);
    const d = tentaclePath(cx, cy, t.x, t.y);
    // approximate length for stroke-dash
    const len = Math.hypot(t.x - cx, t.y - cy) * 1.08;
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
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="1" />
            <stop offset="40%" stopColor="#1D9E75" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#1D9E75" stopOpacity="0.04" />
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

        {/* Concentric rings — scientific diagram */}
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
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeOpacity="0.85"
              filter="url(#glow)"
              style={{
                strokeDasharray: t.len,
                ["--len" as string]: `${t.len}`,
                animation: `tentacleDraw 10s ease-in-out infinite`,
                animationDelay: `${t.idx * 0.6}s`,
              }}
            />
            {/* Data dot traveling along path */}
            <circle
              r="3"
              fill="var(--accent-light)"
              filter="url(#glow)"
              style={{
                offsetPath: `path('${t.d}')`,
                offsetDistance: "0%",
                animation: `dataFlow 4s linear infinite`,
                animationDelay: `${t.idx * 0.5 + 1}s`,
              }}
            />
            {/* Tip node — small ring with inner dot */}
            <circle cx={t.x} cy={t.y} r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" />
            <circle
              cx={t.x}
              cy={t.y}
              r="2"
              fill="var(--accent-light)"
              style={{
                animation: `nodeFlicker 3s ease-in-out infinite`,
                animationDelay: `${t.idx * 0.3}s`,
              }}
            />
            {/* Label */}
            <text
              x={t.x + (t.x > cx ? 12 : t.x < cx ? -12 : 0)}
              y={t.y + (t.y > cy ? 16 : t.y < cy ? -8 : 4)}
              fontFamily="var(--font-jetbrains), monospace"
              fontSize="10.5"
              letterSpacing="0.06em"
              fill="var(--text-2)"
              textAnchor={t.x > cx + 10 ? "start" : t.x < cx - 10 ? "end" : "middle"}
              style={{ textTransform: "uppercase" }}
            >
              {t.label}
            </text>
          </g>
        ))}

        {/* Core / brain */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "corePulse 3s ease-in-out infinite" }}>
          {/* Outer ring */}
          <circle cx={cx} cy={cy} r="50" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" />
          {/* Inner gradient core */}
          <circle cx={cx} cy={cy} r="42" fill="url(#coreGrad)" opacity="0.95" />
          {/* Crosshair */}
          <line x1={cx - 30} y1={cy} x2={cx + 30} y2={cy} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          <line x1={cx} y1={cy - 30} x2={cx} y2={cy + 30} stroke="var(--bg)" strokeWidth="0.75" opacity="0.6" />
          {/* Center mark */}
          <circle cx={cx} cy={cy} r="3" fill="var(--bg)" stroke="var(--accent-light)" strokeWidth="1" />
        </g>

        {/* Center label */}
        <text
          x={cx}
          y={cy + 75}
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="10"
          letterSpacing="0.18em"
          fill="var(--accent)"
          style={{ textTransform: "uppercase" }}
        >
          BRIEF
        </text>
        <text
          x={cx}
          y={cy + 92}
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="9"
          letterSpacing="0.1em"
          fill="var(--text-3)"
        >
          8 clusters · 16 squads
        </text>
      </svg>
    </div>
  );
}
