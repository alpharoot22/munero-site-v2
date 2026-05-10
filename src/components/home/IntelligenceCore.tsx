"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SOURCES = [
  { Icon: PersonIcon,  title: "Customer Pain",   desc: "What customers struggle with and talk about" },
  { Icon: SearchIcon,  title: "Search Intent",   desc: "What people are searching for right now" },
  { Icon: MegaIcon,    title: "Competitor Ads",  desc: "What competitors are saying, testing and scaling" },
  { Icon: BarsIcon,    title: "Market Demand",   desc: "Where demand is growing and money is moving" },
  { Icon: TikTokIcon,  title: "TikTok Trends",   desc: "What is gaining traction and why" },
  { Icon: PlayIcon,    title: "YouTube Angles",  desc: "What content performs and converts" },
  { Icon: GIcon,       title: "Google Signals",  desc: "Topics, autocomplete and topical relevance" },
  { Icon: StarIcon,    title: "Review Data",     desc: "What customers love, hate and wish existed" },
];

const OUTPUTS = [
  { Icon: BulbIcon,       title: "Winning Angles",        desc: "Angles proven to resonate with your market" },
  { Icon: TargetIcon,     title: "Competitor Gaps",       desc: "White space opportunities you can own" },
  { Icon: PencilIcon,     title: "Creative Hooks",        desc: "Hooks, headlines and concepts that stop the scroll" },
  { Icon: ClipboardIcon,  title: "Campaign Plan",         desc: "Channel, offer, audience and testing roadmap" },
  { Icon: PageIcon,       title: "Landing Page Direction", desc: "Message hierarchy and page structure guidance" },
  { Icon: TrendIcon,      title: "KPI Targets",           desc: "Benchmarks and targets based on real market data" },
  { Icon: ScaleIcon,      title: "Kill / Scale Rules",    desc: "Clear rules for what to cut, what to scale and why" },
  { Icon: FilmIcon,       title: "Creative & Video Kit",   desc: "Image concepts, video scripts, UGC briefs, and hook formats, ready to produce" },
];

export function IntelligenceCore() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="intelligence-core"
      className="hairline-t scroll-mt-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(29,158,117,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Top header — headline left, WHY IT MATTERS card right */}
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-10 items-start">
          <div>
            <div className="eyebrow mb-4">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 8px var(--accent)",
                }}
              />
              03 / INTELLIGENCE CORE
            </div>
            <h2
              className="font-bold tracking-[-0.03em] leading-[1.05]"
              style={{
                fontSize: "clamp(30px, 3.8vw, 44px)",
                fontWeight: 800,
                color: "var(--text)",
              }}
            >
              Your market is already talking.
              <br />
              Munero listens{" "}
              <span style={{ color: "var(--accent)" }}>before</span> you spend.
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{
                fontSize: 16,
                color: "var(--text-2)",
                maxWidth: 520,
              }}
            >
              Munero scans customer pain, search intent, competitor ads, social
              trends, reviews, and market demand, then turns those signals into
              a campaign-ready workspace.
            </p>
          </div>

          {/* WHY IT MATTERS card — sits right beside the headline, no extra top margin */}
          <aside
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border-2)",
              borderRadius: 10,
              padding: "18px 20px",
            }}
          >
            <div
              className="num"
              style={{
                fontSize: 10,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 12,
              }}
            >
              WHY IT MATTERS
            </div>
            <ul className="space-y-2.5">
              {[
                "Real signals. Not guesses.",
                "One intelligence layer.",
                "Campaign plans with proof.",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2.5"
                  style={{
                    fontSize: 13.5,
                    color: "var(--text)",
                    lineHeight: 1.4,
                  }}
                >
                  <CheckBadge />
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Visual container — wraps the 3-col body + bottom strip as one unified system */}
        <div
          className="mt-6 rounded-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,24,0.6) 0%, rgba(8,8,14,0.4) 100%)",
            border: "0.5px solid var(--border-2)",
            padding: "20px",
          }}
        >
          {/* Three columns — tighter gap */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4 lg:gap-3 items-start">
            {/* LEFT — Signal Sources */}
            <div>
              <div
                className="num"
                style={{
                  fontSize: 11,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  marginBottom: 14,
                  paddingLeft: 4,
                  fontWeight: 600,
                }}
              >
                SIGNAL SOURCES
              </div>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {SOURCES.map(({ Icon, title, desc }, i) => (
                  <li
                    key={title}
                    className="hover-lift relative grid grid-cols-[36px_1fr_auto] items-center gap-3 p-3 pr-2"
                    style={{
                      background: "var(--surface)",
                      border: "0.5px solid var(--border-2)",
                      borderRadius: 8,
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "translateX(0)" : "translateX(-12px)",
                      transition: `opacity 400ms ease-out ${i * 50}ms, transform 400ms ease-out ${i * 50}ms`,
                    }}
                  >
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 32,
                        height: 32,
                        background: "rgba(29, 158, 117, 0.1)",
                        borderRadius: 6,
                        color: "var(--accent-light)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="font-semibold tracking-tight"
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          letterSpacing: "-0.005em",
                          margin: 0,
                        }}
                      >
                        {title}
                      </h3>
                      <div
                        className="leading-snug"
                        style={{ fontSize: 12.5, color: "rgba(184, 184, 200, 0.95)" }}
                      >
                        {desc}
                      </div>
                    </div>
                    {/* Connector: dot + short outward line */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:flex items-center"
                    >
                      <span
                        style={{
                          display: "block",
                          width: 22,
                          height: 1,
                          background:
                            "linear-gradient(90deg, var(--accent-light) 0%, rgba(29,158,117,0.2) 100%)",
                          boxShadow: "0 0 4px rgba(29,158,117,0.4)",
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--accent-light)",
                          boxShadow: "0 0 8px var(--accent)",
                          marginLeft: 4,
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER — Intelligence Core */}
            <div className="flex flex-col items-center justify-center min-h-full">
              <div
                className="num"
                style={{
                  fontSize: 11,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  marginBottom: 8,
                  fontWeight: 600,
                }}
              >
                MUNERO INTELLIGENCE CORE
              </div>

              <CoreSVG revealed={revealed} />

              {/* Caption tight under core */}
              <div className="mt-3 text-center">
                <div
                  className="num inline-flex items-center gap-2.5"
                  style={{
                    fontSize: 12.5,
                    color: "var(--text)",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  Raw signals
                  <span
                    style={{
                      color: "var(--accent-light)",
                      fontSize: 16,
                      filter: "drop-shadow(0 0 4px rgba(0, 229, 160, 0.5))",
                    }}
                  >
                    →
                  </span>
                  Campaign decisions
                </div>
              </div>
            </div>

            {/* RIGHT — Campaign-Ready Outputs */}
            <div>
              <div
                className="num lg:text-right"
                style={{
                  fontSize: 11,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  marginBottom: 14,
                  paddingRight: 4,
                  fontWeight: 600,
                }}
              >
                CAMPAIGN-READY OUTPUTS
              </div>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {OUTPUTS.map(({ Icon, title, desc }, i) => (
                  <li
                    key={title}
                    className="hover-lift relative grid grid-cols-[auto_36px_1fr] items-center gap-3 p-3 pl-2"
                    style={{
                      background: "var(--surface)",
                      border: "0.5px solid var(--border-2)",
                      borderRadius: 8,
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "translateX(0)" : "translateX(12px)",
                      transition: `opacity 400ms ease-out ${i * 50}ms, transform 400ms ease-out ${i * 50}ms`,
                    }}
                  >
                    {/* Connector: dot + short outward line */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:flex items-center"
                    >
                      <span
                        style={{
                          display: "block",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--accent-light)",
                          boxShadow: "0 0 8px var(--accent)",
                          marginRight: 4,
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: 22,
                          height: 1,
                          background:
                            "linear-gradient(90deg, rgba(29,158,117,0.2) 0%, var(--accent-light) 100%)",
                          boxShadow: "0 0 4px rgba(29,158,117,0.4)",
                        }}
                      />
                    </span>
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 32,
                        height: 32,
                        background: "rgba(29, 158, 117, 0.1)",
                        borderRadius: 6,
                        color: "var(--accent-light)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="font-semibold tracking-tight"
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          letterSpacing: "-0.005em",
                          margin: 0,
                        }}
                      >
                        {title}
                      </h3>
                      <div
                        className="leading-snug"
                        style={{ fontSize: 12.5, color: "rgba(184, 184, 200, 0.95)" }}
                      >
                        {desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom strip — inside the same container */}
          <BottomStrip
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(12px)",
              transition:
                "opacity 500ms ease-out 600ms, transform 500ms ease-out 600ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Core SVG -------------------------- */

function CoreSVG({ revealed }: { revealed: boolean }) {
  return (
    <div
      className="relative"
      style={{
        width: "100%",
        maxWidth: 560,
        aspectRatio: "1 / 1",
        transform: revealed ? "scale(1)" : "scale(0.85)",
        opacity: revealed ? 1 : 0.4,
        transition:
          "transform 600ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, opacity 600ms ease-out 200ms",
      }}
    >
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="core-glow-outer" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#1D9E75" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="core-glow-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#1D9E75" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Strong outer halo */}
        <circle cx="210" cy="210" r="200" fill="url(#core-glow-outer)" />

        {/* Spoke fans — left side (8) reaching toward source column */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = -Math.PI + (i / 7) * Math.PI * 0.7;
          const x1 = 210 + Math.cos(a) * 130;
          const y1 = 210 + Math.sin(a) * 130;
          const x2 = 210 + Math.cos(a) * 205;
          const y2 = 210 + Math.sin(a) * 205;
          return (
            <g key={`L${i}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.55"
              />
              {/* Bright tip dot */}
              <circle cx={x2} cy={y2} r="2" fill="var(--accent-light)" opacity="0.8" />
            </g>
          );
        })}
        {/* Spoke fans — right side (7) reaching toward output column */}
        {Array.from({ length: 7 }).map((_, i) => {
          const a = -Math.PI * 0.3 + (i / 6) * Math.PI * 0.6;
          const x1 = 210 + Math.cos(a) * 130;
          const y1 = 210 + Math.sin(a) * 130;
          const x2 = 210 + Math.cos(a) * 205;
          const y2 = 210 + Math.sin(a) * 205;
          return (
            <g key={`R${i}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.55"
              />
              <circle cx={x2} cy={y2} r="2" fill="var(--accent-light)" opacity="0.8" />
            </g>
          );
        })}

        {/* Slow-rotating dashed ring */}
        <g
          style={{
            transformOrigin: "210px 210px",
            animation: "core-rotate 30s linear infinite",
          }}
        >
          <circle
            cx="210"
            cy="210"
            r="160"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.75"
            strokeDasharray="3 6"
            opacity="0.4"
          />
        </g>

        {/* Outer ring with slow pulse */}
        <g
          style={{
            transformOrigin: "210px 210px",
            animation: "core-pulse-ring 3s ease-in-out infinite",
          }}
        >
          <circle
            cx="210"
            cy="210"
            r="130"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            opacity="0.7"
          />
        </g>

        {/* Inner glow disc */}
        <circle
          cx="210"
          cy="210"
          r="105"
          fill="url(#core-glow-inner)"
          stroke="var(--accent-light)"
          strokeWidth="1.75"
          opacity="0.95"
        />

        {/* Inner-most ring */}
        <circle
          cx="210"
          cy="210"
          r="105"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      {/* Center label — HTML over SVG */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="num"
          style={{
            fontSize: 10,
            letterSpacing: "0.28em",
            color: "var(--accent-light)",
          }}
        >
          MUNERO
        </div>
        <div
          className="num"
          style={{
            fontSize: 16,
            letterSpacing: "0.2em",
            color: "var(--text)",
            fontWeight: 700,
            marginTop: 6,
          }}
        >
          INTELLIGENCE
        </div>
        <div
          className="num"
          style={{
            fontSize: 16,
            letterSpacing: "0.2em",
            color: "var(--text)",
            fontWeight: 700,
          }}
        >
          CORE
        </div>
      </div>
    </div>
  );
}

/* -------------------------- Bottom strip -------------------------- */

function BottomStrip({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="hairline-t mt-8 pt-8 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center"
      style={style}
    >
      {/* Left: M mark + manifesto */}
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 grid place-items-center wordmark"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "1px solid var(--accent)",
            background: "rgba(29,158,117,0.08)",
            color: "var(--accent)",
            fontSize: 20,
            boxShadow: "0 0 16px rgba(29,158,117,0.3)",
          }}
        >
          M
        </div>
        <p
          style={{
            fontSize: 15.5,
            color: "var(--text)",
            lineHeight: 1.6,
            maxWidth: "52ch",
          }}
        >
          Munero does not just collect data. It explains{" "}
          <span style={{ color: "var(--accent)" }}>what</span> to run,{" "}
          <span style={{ color: "var(--accent)" }}>why</span> it should work,
          and <span style={{ color: "var(--accent)" }}>when to kill or scale</span>{" "}
          it.
        </p>
      </div>

      {/* Right: 3 metrics */}
      <ul className="grid grid-cols-3 gap-3">
        <Metric
          icon={<ClockIcon />}
          label="35 MINUTES"
          desc="First brief ready"
        />
        <Metric
          icon={<DocIcon />}
          label="ONE WORKSPACE"
          desc="Everything organized"
        />
        <Metric
          icon={<ChartIcon />}
          label="SHARPER WITH HISTORY"
          desc="Available on ongoing workspaces"
        />
      </ul>
    </div>
  );
}

function Metric({
  icon,
  label,
  desc,
}: {
  icon: ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <li className="flex flex-col gap-2">
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(29,158,117,0.1)",
          border: "0.5px solid var(--accent)",
          color: "var(--accent)",
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span
        className="num"
        style={{
          fontSize: 12,
          color: "var(--accent-light)",
          letterSpacing: "0.14em",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 12,
          color: "rgba(184, 184, 200, 0.95)",
          lineHeight: 1.5,
        }}
      >
        {desc}
      </span>
    </li>
  );
}

/* -------------------------- Check badge -------------------------- */

function CheckBadge() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "var(--accent)",
        boxShadow: "0 0 8px rgba(29,158,117,0.4)",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8.5L6 11.5L13 4.5"
          stroke="#051410"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* -------------------------- Icons (stroke-based, currentColor) -------------------------- */

const sw = 1.6;
function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="6" r="2.8" />
      <path d="M3 15c.8-3 3-4.5 6-4.5s5.2 1.5 6 4.5" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="7.5" r="4.5" />
      <path d="M14 14l-3.2-3.2" />
    </svg>
  );
}
function MegaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v4l8 3.5V3.5z" />
      <path d="M11 6c1.5.5 1.5 5 0 5.5" />
      <path d="M5 11v3" />
    </svg>
  );
}
function BarsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14V9" />
      <path d="M7.5 14V6" />
      <path d="M12 14V10" />
      <path d="M3 14h12" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3v8.5a2.5 2.5 0 1 1-2.5-2.5h.5V7a4.5 4.5 0 1 0 4 4.5V6a4 4 0 0 0 3 1.5V5a3 3 0 0 1-3-2z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4.5" width="14" height="9" rx="2" />
      <path d="M7.5 7l4 2-4 2z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function GIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9a5 5 0 1 1-1.5-3.5" />
      <path d="M14 5v4h-4" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2l2.2 4.5 5 .7-3.6 3.5.9 5L9 13.5 4.5 15.7l.9-5L1.8 7.2l5-.7z" />
    </svg>
  );
}
function BulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 12.5a4.5 4.5 0 1 1 5 0V14h-5z" />
      <path d="M7 16h4" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="6" />
      <circle cx="9" cy="9" r="3" />
      <circle cx="9" cy="9" r="0.8" fill="currentColor" />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3l4 4-9 9H2v-4z" />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3.5" width="10" height="12" rx="1.5" />
      <path d="M6.5 3.5V2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1" />
      <path d="M7 8h4M7 11h4" />
    </svg>
  );
}
function PageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="10" rx="1.5" />
      <path d="M2 6h14" />
      <path d="M9 13v3M6 16h6" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 13l4-4 3 2 5-6" />
      <path d="M11 5h3v3" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v12" />
      <path d="M5 15h8" />
      <path d="M3 7l3-2 3 2-3 4z" />
      <path d="M9 7l3-2 3 2-3 4z" />
    </svg>
  );
}
function FilmIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="12" rx="1.5" />
      <path d="M2 7h14" />
      <path d="M5.5 3v4M9 3v4M12.5 3v4" />
      <path d="M7.5 9.5l3.5 2-3.5 2z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="6" />
      <path d="M9 5v4l2.5 1.5" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2.5" width="12" height="13" rx="1.5" />
      <path d="M5.5 6h7M5.5 9h7M5.5 12h4" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14L7 10L10 12L15 6" />
      <path d="M11 6h4v4" />
    </svg>
  );
}
