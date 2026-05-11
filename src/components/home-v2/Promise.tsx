const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -100,
          left: -200,
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle at center, rgba(29,158,117,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="mx-auto"
        style={{
          maxWidth: 1280,
          padding: "48px 24px 80px",
          position: "relative",
        }}
      >
        <div className="hero-grid">
          {/* Left column */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                background: "rgba(29, 158, 117, 0.08)",
                border: "0.5px solid rgba(29, 158, 117, 0.35)",
                borderRadius: 999,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 12,
                color: "#1D9E75",
                fontWeight: 500,
              }}
            >
              <BoltIcon />
              First brief ready in 35 minutes
            </span>

            <h1
              style={{
                marginTop: 24,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                color: "#E8E8F0",
                fontSize: "clamp(40px, 5.4vw, 68px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.04,
              }}
            >
              Launch new campaigns
              <br />
              <span style={{ color: "#1D9E75" }}>with confidence</span>
              <span style={{ color: "#E8E8F0" }}>.</span>
            </h1>

            <p
              style={{
                marginTop: 22,
                fontSize: 17,
                color: "#9898A8",
                lineHeight: 1.55,
                maxWidth: "46ch",
              }}
            >
              Stop guessing your GTM.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 32,
              }}
            >
              <a
                href={STRIPE_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  padding: "0 24px",
                  background: "#1D9E75",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  transition: "background 150ms ease-out, transform 80ms ease-out",
                }}
                className="hero-primary"
              >
                Start for $99
              </a>
              <a
                href="/sample"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  padding: "0 22px",
                  background: "#111118",
                  color: "#E8E8F0",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  border: "0.5px solid #1E1E2E",
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  transition: "border-color 150ms ease-out",
                }}
                className="hero-secondary"
              >
                <PlayIcon />
                View sample brief
              </a>
            </div>

            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 24px",
                marginTop: 28,
                listStyle: "none",
                padding: 0,
              }}
            >
              <ProofBadge icon={<SquadsIcon />} label="16 intelligence squads" />
              <ProofBadge icon={<ClockIcon />} label="First brief in 35 min" />
              <ProofBadge icon={<AssetIcon />} label="46 creative assets" />
              <ProofBadge icon={<SignalIcon />} label="Real buyer signals" />
            </ul>
          </div>

          {/* Right column: dashboard preview */}
          <DashboardPreview />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
            gap: 56px;
          }
        }
        .hero-primary:hover { background: #25B889 !important; }
        .hero-primary:active { transform: scale(0.97); }
        .hero-secondary:hover { border-color: #353550 !important; }
      `}</style>
    </section>
  );
}

function ProofBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 13,
        color: "#9898A8",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          borderRadius: 6,
          background: "rgba(29, 158, 117, 0.1)",
          color: "#1D9E75",
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      {label}
    </li>
  );
}

function DashboardPreview() {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 16,
        padding: 16,
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.5), 0 0 40px -10px rgba(29,158,117,0.08)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 8px 14px",
          borderBottom: "0.5px solid #1E1E2E",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/favicon.png"
            alt=""
            width={22}
            height={22}
            style={{ display: "block", borderRadius: 5 }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              color: "#E8E8F0",
              fontWeight: 500,
            }}
          >
            Composing your brief...
          </span>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "3px 10px",
            background: "rgba(29, 158, 117, 0.12)",
            border: "0.5px solid rgba(29, 158, 117, 0.4)",
            borderRadius: 999,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            color: "#1D9E75",
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#1D9E75",
              animation: "pulse-dot 1.8s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          LIVE
        </span>
      </div>

      <div className="dash-grid">
        {/* Sidebar */}
        <aside>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              { label: "Overview", active: true },
              { label: "Research" },
              { label: "Campaigns" },
              { label: "Creatives" },
              { label: "Performance" },
              { label: "Reports" },
              { label: "Clients" },
              { label: "Integrations" },
            ].map((item) => (
              <li
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  background: item.active ? "rgba(29, 158, 117, 0.12)" : "transparent",
                  borderRadius: 6,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12.5,
                  color: item.active ? "#E8E8F0" : "#9898A8",
                  fontWeight: item.active ? 500 : 400,
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: item.active ? "#1D9E75" : "#505068",
                  }}
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div style={{ minWidth: 0 }}>
          {/* Stat row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 8,
            }}
          >
            <StatBlock label="Opportunity Score" value="82" suffix="/100" sparkline="up" color="#1D9E75" />
            <StatBlock label="Competitor Gaps" value="6" hint="high value gaps" color="#1D9E75" />
            <StatBlock label="Winning Angles" value="12" hint="ready to test" color="#1D9E75" />
          </div>

          {/* Pain Points + Search Demand */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginTop: 10,
            }}
          >
            <div
              style={{
                background: "#10101A",
                border: "0.5px solid #1E1E2E",
                borderRadius: 10,
                padding: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 11.5,
                  color: "#E8E8F0",
                  fontWeight: 500,
                  marginBottom: 10,
                }}
              >
                Top Pain Points
              </div>
              {[
                { label: "Expensive options", pct: 73 },
                { label: "Artificial ingredients", pct: 61 },
                { label: "Better absorption", pct: 48 },
              ].map((p) => (
                <div key={p.label} style={{ marginBottom: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: 10.5,
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ color: "#9898A8" }}>{p.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        color: "#1D9E75",
                        fontSize: 10,
                      }}
                    >
                      {p.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "#1E1E2E",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${p.pct}%`,
                        height: "100%",
                        background: "#1D9E75",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#10101A",
                border: "0.5px solid #1E1E2E",
                borderRadius: 10,
                padding: 12,
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
                    fontSize: 11.5,
                    color: "#E8E8F0",
                    fontWeight: 500,
                  }}
                >
                  Search Demand
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    color: "#1D9E75",
                  }}
                >
                  +32%
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 18,
                  color: "#E8E8F0",
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                High
              </div>
              {/* Mini chart */}
              <svg width="100%" height="42" viewBox="0 0 180 42" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-line-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,34 L18,30 L36,32 L54,26 L72,24 L90,22 L108,20 L126,14 L144,10 L162,7 L180,4 L180,42 L0,42 Z"
                  fill="url(#hero-line-fill)"
                />
                <path
                  d="M0,34 L18,30 L36,32 L54,26 L72,24 L90,22 L108,20 L126,14 L144,10 L162,7 L180,4"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1.6"
                />
              </svg>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 9.5,
                  color: "#505068",
                  marginTop: 4,
                }}
              >
                vs last 30 days
              </div>
            </div>
          </div>

          {/* Status strip */}
          <div
            style={{
              marginTop: 10,
              padding: "10px 12px",
              background: "#10101A",
              border: "0.5px solid #1E1E2E",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1D9E75",
                  boxShadow: "0 0 6px #1D9E75",
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 11,
                  color: "#9898A8",
                }}
              >
                Workspace updated with latest market signals
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: "#505068",
              }}
            >
              2 min ago
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .dash-grid {
          display: grid;
          grid-template-columns: 130px minmax(0, 1fr);
          gap: 12px;
        }
        @media (max-width: 640px) {
          .dash-grid { grid-template-columns: minmax(0, 1fr); }
          .dash-grid aside { display: none; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
}

function StatBlock({
  label,
  value,
  suffix,
  hint,
  sparkline,
  color,
}: {
  label: string;
  value: string;
  suffix?: string;
  hint?: string;
  sparkline?: "up" | "down";
  color: string;
}) {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 10,
        padding: 12,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11,
          color: "#9898A8",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 24,
            color: "#E8E8F0",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          {value}
        </span>
        {suffix ? (
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#505068",
            }}
          >
            {suffix}
          </span>
        ) : null}
      </div>
      {sparkline ? (
        <svg width="100%" height="22" viewBox="0 0 100 22" preserveAspectRatio="none" style={{ marginTop: 4 }}>
          <path
            d="M0,16 L14,14 L28,15 L42,11 L56,10 L70,7 L84,5 L100,3"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
          />
        </svg>
      ) : hint ? (
        <div
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 10.5,
            color: "#505068",
            marginTop: 4,
          }}
        >
          {hint}
        </div>
      ) : null}
    </div>
  );
}

/* ---------- Inline icons ---------- */

function BoltIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M7 1 L3 7 H6 L5 11 L9 5 H6 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 2 L10 6 L3 10 Z" fill="currentColor" />
    </svg>
  );
}

function SquadsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="4" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 12 C2 10 4 9 7 9 C10 9 12 10 13 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 3.5 V7 L9.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AssetIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="10" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 9 L5 6 L8 8.5 L12 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12 L5 8 L8 11 L12 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="4" r="1.4" fill="currentColor" />
    </svg>
  );
}
