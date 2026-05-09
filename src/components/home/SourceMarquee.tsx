/**
 * Infinite-scroll marquee of source logos shown in the hero.
 * Pure CSS animation — no JS. Pauses on hover. Respects
 * prefers-reduced-motion (animation halted by globals.css rule).
 *
 * Logos are minimalist, color-coded stand-ins rather than real
 * trademarks. Real brand SVGs can be swapped in per item.
 */

const SOURCES: { name: string; icon: React.ReactNode; color: string }[] = [
  { name: "Reddit",          color: "#FF4500", icon: <RedditIcon /> },
  { name: "Trustpilot",      color: "#00B67A", icon: <TrustpilotIcon /> },
  { name: "Meta Ad Library", color: "#0866FF", icon: <MetaIcon /> },
  { name: "TikTok",          color: "#E94560", icon: <TikTokIcon /> },
  { name: "YouTube",         color: "#FF0033", icon: <YouTubeIcon /> },
  { name: "Google Trends",   color: "#34A853", icon: <GoogleIcon /> },
  { name: "LinkedIn",        color: "#0A66C2", icon: <LinkedInIcon /> },
  { name: "App Store",       color: "#2997FF", icon: <AppStoreIcon /> },
  { name: "Google Play",     color: "#34A853", icon: <PlayIcon /> },
  { name: "Amazon",          color: "#FF9900", icon: <AmazonIcon /> },
  { name: "Walmart",         color: "#FFC220", icon: <WalmartIcon /> },
  { name: "Spotify",         color: "#1ED760", icon: <SpotifyIcon /> },
  { name: "Ahrefs",          color: "#FF7A00", icon: <AhrefsIcon /> },
  { name: "Perplexity",      color: "#20B8CD", icon: <PerplexityIcon /> },
];

export function SourceMarquee() {
  // Duplicate the list so the keyframe loops seamlessly.
  const loop = [...SOURCES, ...SOURCES];

  return (
    <section
      aria-label="Data sources Munero ingests from"
      className="relative overflow-hidden hairline-b"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-7">
        <p
          className="text-center num text-[10.5px] tracking-[0.16em] mb-5"
          style={{ color: "var(--text-3)" }}
        >
          PULLING INTELLIGENCE FROM LIVE DATA AND SIGNAL SOURCES
        </p>
      </div>

      {/* Marquee track. Edges fade to bg via mask so chips slide in/out. */}
      <div
        className="relative pb-8"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "marquee 60s linear infinite",
          }}
        >
          {loop.map((s, i) => (
            <SourceChip key={`${s.name}-${i}`} source={s} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        section[aria-label="Data sources Munero ingests from"] > div:nth-child(2):hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function SourceChip({
  source,
}: {
  source: { name: string; icon: React.ReactNode; color: string };
}) {
  return (
    <div
      className="flex items-center gap-2 px-4 shrink-0 hover-lift"
      style={{
        height: 44,
        background: "var(--surface)",
        border: "0.5px solid var(--border-2)",
        borderRadius: 999,
      }}
    >
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{
          width: 18,
          height: 18,
          color: source.color,
        }}
      >
        {source.icon}
      </span>
      <span
        className="text-[13px] font-medium tracking-tight whitespace-nowrap"
        style={{ color: "var(--text)" }}
      >
        {source.name}
      </span>
    </div>
  );
}

/* ---------- minimalist icon stand-ins (currentColor) ---------- */

function RedditIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <circle cx="9" cy="9" r="8" />
      <circle cx="6.5" cy="9" r="1.4" fill="#fff" />
      <circle cx="11.5" cy="9" r="1.4" fill="#fff" />
      <path d="M5.5 11.5 Q9 13.5 12.5 11.5" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function TrustpilotIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 1l2.2 5.4 5.8.5-4.4 3.9 1.4 5.7L9 13.4 3.9 16.5l1.4-5.7L1 6.9l5.8-.5z" />
    </svg>
  );
}
function MetaIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 13c2-7 5-9 7-5s5 5 7 0" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <path d="M11 2v8.5a2.5 2.5 0 1 1-2.5-2.5h.5V6a4.5 4.5 0 1 0 4 4.5V5a4 4 0 0 0 3 1.5V4a3 3 0 0 1-3-2z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <rect x="1" y="4" width="16" height="10" rx="2.5" />
      <path d="M7.5 6.5v5l4-2.5z" fill="#fff" />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M9 9h6.5" />
      <path d="M9 9V2.5" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <rect x="1" y="1" width="16" height="16" rx="2.5" />
      <rect x="3.5" y="7" width="2.2" height="7.5" fill="#fff" />
      <circle cx="4.6" cy="4.4" r="1.3" fill="#fff" />
      <path d="M8 7h2.1v1.1c.5-.7 1.4-1.3 2.6-1.3 2 0 2.8 1.3 2.8 3.4v4.3h-2.2v-3.8c0-1-.4-1.7-1.4-1.7-1 0-1.6.7-1.6 1.7v3.8H8z" fill="#fff" />
    </svg>
  );
}
function AppStoreIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="7.5" />
      <path d="M5.5 12.5 9 5l3.5 7.5M7 11h4" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      <path d="M3 1.5L13.5 9 3 16.5z" />
    </svg>
  );
}
function AmazonIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 13c3 2.5 11 2.5 14 0" />
      <path d="M3 14.5c.7.7 1.6.7 2.3 0" />
    </svg>
  );
}
function WalmartIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor">
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const x = 9 + Math.cos(angle) * 5;
        const y = 9 + Math.sin(angle) * 5;
        return <circle key={i} cx={x} cy={y} r="1.6" />;
      })}
    </svg>
  );
}
function SpotifyIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="9" cy="9" r="7.5" fill="currentColor" />
      <path d="M4.5 7.5c3-1 6-1 9 .5M5 10.2c2.5-.7 5-.5 7.5.6M5.5 12.5c2-.5 4-.4 6 .4" stroke="#fff" />
    </svg>
  );
}
function AhrefsIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="9" r="6" />
      <path d="M9 6v6M6.5 9h5" strokeLinecap="round" />
    </svg>
  );
}
function PerplexityIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 5h14M9 2v14M5 2v14" />
    </svg>
  );
}
