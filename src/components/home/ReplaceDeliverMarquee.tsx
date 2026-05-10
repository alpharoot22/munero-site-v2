/**
 * Two-row marquee directly below the hero.
 * Top row scrolls left at 40s — what Munero REPLACES.
 * Bottom row scrolls right at 35s — what Munero DELIVERS.
 * Pause on hover. prefers-reduced-motion halts via globals.css.
 */

const REPLACES = [
  { name: "Market Research Agency", detail: "$5,000 · 2 weeks" },
  { name: "Freelance Strategist",   detail: "$2,000 · 1 week" },
  { name: "Semrush",                detail: "$499 / mo · data only" },
  { name: "SimilarWeb",             detail: "$833 / mo · no strategy" },
  { name: "SpyFu",                  detail: "$299 / mo · Google only" },
  { name: "ChatGPT",                detail: "No live data · guesses" },
  { name: "Agency Brief Deck",      detail: "30 pages · gut feel" },
  { name: "2 Weeks Manual Research", detail: "$0 · your time" },
];

const DELIVERS = [
  { name: "Competitor Analysis", icon: "⊕" },
  { name: "Buying Signals",      icon: "◉" },
  { name: "Market Gaps",         icon: "◈" },
  { name: "46 Creative Assets",  icon: "✦" },
  { name: "Campaign Plan",       icon: "▣" },
  { name: "Kill Rules",          icon: "⚡" },
  { name: "Ads Manager Ready",   icon: "→" },
  { name: "9 AI Assistants",     icon: "◆" },
  { name: "Image Generation",    icon: "◎" },
  { name: "Video Credits",       icon: "▶" },
];

export function ReplaceDeliverMarquee() {
  // First copy is read by screen readers + crawlers. The duplicated copy is
  // for seamless visual loop only and is marked aria-hidden.
  const replaces = REPLACES.map((r) => ({ ...r, dup: false })).concat(
    REPLACES.map((r) => ({ ...r, dup: true }))
  );
  const delivers = DELIVERS.map((d) => ({ ...d, dup: false })).concat(
    DELIVERS.map((d) => ({ ...d, dup: true }))
  );

  return (
    <section
      aria-label="What Munero replaces and delivers"
      className="hairline-t hairline-b overflow-hidden relative"
      style={{ background: "var(--surface)" }}
    >
      {/* Edge fade */}
      <style>{`
        .marquee-fade {
          mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* Row 1 — REPLACES (scrolls left) */}
      <div className="relative h-[44px] flex items-center marquee-fade">
        <div
          className="absolute left-4 z-10 num text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded"
          style={{
            color: "var(--score-low)",
            background: "var(--surface)",
            border: "0.5px solid rgba(255, 87, 87, 0.25)",
          }}
        >
          REPLACES
        </div>
        <div
          className="marquee-track flex gap-8 w-max pl-[140px]"
          style={{ animation: "scroll-left 40s linear infinite" }}
        >
          {replaces.map((r, i) => (
            <ReplaceItem key={`r-${i}`} item={r} ariaHidden={r.dup} />
          ))}
        </div>
      </div>

      <div className="hairline-t" />

      {/* Row 2 — DELIVERS (scrolls right) */}
      <div className="relative h-[44px] flex items-center marquee-fade">
        <div
          className="absolute left-4 z-10 num text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded"
          style={{
            color: "var(--score-high)",
            background: "var(--surface)",
            border: "0.5px solid rgba(0, 229, 160, 0.25)",
          }}
        >
          DELIVERS
        </div>
        <div
          className="marquee-track flex gap-8 w-max pl-[140px]"
          style={{ animation: "scroll-right 35s linear infinite" }}
        >
          {delivers.map((d, i) => (
            <DeliverItem key={`d-${i}`} item={d} ariaHidden={d.dup} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReplaceItem({
  item,
  ariaHidden,
}: {
  item: { name: string; detail: string };
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2.5 whitespace-nowrap shrink-0"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <span
        className="text-[12px] font-medium tracking-tight"
        style={{ color: "var(--text-2)" }}
      >
        {item.name}
      </span>
      <span className="num text-[10px]" style={{ color: "var(--text-3)" }}>
        {item.detail}
      </span>
      <span style={{ color: "var(--accent)" }}>·</span>
    </div>
  );
}

function DeliverItem({
  item,
  ariaHidden,
}: {
  item: { name: string; icon: string };
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2.5 whitespace-nowrap shrink-0"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <span
        className="text-[14px] leading-none"
        style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains), monospace" }}
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <span
        className="text-[12px] font-medium tracking-tight"
        style={{ color: "var(--text-2)" }}
      >
        {item.name}
      </span>
      <span style={{ color: "var(--accent)" }}>·</span>
    </div>
  );
}
