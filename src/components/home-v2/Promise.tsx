const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function Hero() {
  return (
    <section style={{ position: "relative", background: "#050508", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -150,
          left: -200,
          width: 700,
          height: 700,
          background: "radial-gradient(circle at center, rgba(29,158,117,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto" style={{ maxWidth: 1280, padding: "56px 24px 80px", position: "relative" }}>
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              <Pill>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#1D9E75",
                    boxShadow: "0 0 6px #1D9E75",
                    animation: "live-pulse 1.8s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />
                Live workspace
              </Pill>
              <Pill subtle>12 teams online</Pill>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                color: "#E8E8F0",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Know your market.
              <br />
              Run better campaigns.
              <br />
              <span style={{ color: "#1D9E75" }}>Never guess again.</span>
            </h1>

            <p
              style={{
                marginTop: 22,
                fontSize: 16.5,
                color: "#9898A8",
                lineHeight: 1.55,
                maxWidth: "52ch",
              }}
            >
              Munero connects research, creative, and performance data in one workspace
              so your team can move faster and win more.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <a
                href={STRIPE_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  padding: "0 24px",
                  background: "#1D9E75",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: 10,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  transition: "background 150ms ease-out, transform 80ms ease-out",
                }}
                className="hero-primary"
              >
                Open workspace
                <Arrow />
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
                  background: "transparent",
                  color: "#E8E8F0",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  border: "0.5px solid #1E1E2E",
                  borderRadius: 10,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  transition: "border-color 150ms ease-out, background 150ms ease-out",
                }}
                className="hero-secondary"
              >
                View sample brief
                <Play />
              </a>
            </div>

            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 26px",
                marginTop: 28,
                listStyle: "none",
                padding: 0,
              }}
            >
              {["Real market data", "AI-powered insights", "Built for marketers"].map((label) => (
                <li
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 13.5,
                    color: "#9898A8",
                  }}
                >
                  <Check />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <DashboardPreview />
        </div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 56px; }
        }
        .hero-primary:hover { background: #25B889 !important; }
        .hero-primary:active { transform: scale(0.97); }
        .hero-secondary:hover { border-color: #353550 !important; background: #0A0A12 !important; }
        @keyframes live-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
      `}</style>
    </section>
  );
}

function Pill({ children, subtle }: { children: React.ReactNode; subtle?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "6px 14px",
        background: subtle ? "#0E0E18" : "rgba(29,158,117,0.08)",
        border: subtle ? "0.5px solid #1E1E2E" : "0.5px solid rgba(29,158,117,0.4)",
        borderRadius: 999,
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 12,
        fontWeight: 500,
        color: subtle ? "#9898A8" : "#1D9E75",
      }}
    >
      {children}
    </span>
  );
}

function Check() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "rgba(29,158,117,0.15)",
        color: "#1D9E75",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M2 5.2 L4 7.2 L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Play() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M3 2 L10 6 L3 10 Z" />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 20,
        padding: 14,
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55), 0 0 60px -20px rgba(29,158,117,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 10px 14px",
          borderBottom: "0.5px solid #1E1E2E",
          marginBottom: 12,
          gap: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <img src="/favicon.png" alt="" width={22} height={22} style={{ borderRadius: 5, flexShrink: 0 }} aria-hidden="true" />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 13.5,
              color: "#E8E8F0",
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Campaign Brief, Hydration Supplement
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          <TopBtn>
            <ShareIcon />
            Share
          </TopBtn>
          <TopBtn primary>
            <ExportIcon />
            Export
          </TopBtn>
        </div>
      </div>

      <div className="dash-grid">
        <aside>
          <ul style={{ display: "flex", flexDirection: "column", gap: 2, listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "Workspace", active: true },
              { label: "Research" },
              { label: "Campaigns" },
              { label: "Creatives" },
              { label: "Performance" },
              { label: "Reports" },
              { label: "Clients" },
            ].map((item) => (
              <li
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 10px",
                  background: item.active ? "rgba(29, 158, 117, 0.12)" : "transparent",
                  borderRadius: 6,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12,
                  color: item.active ? "#E8E8F0" : "#9898A8",
                  fontWeight: item.active ? 500 : 400,
                }}
              >
                <span
                  style={{
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

        <div style={{ minWidth: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            <Tile title="Market Summary">
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 13.5, color: "#E8E8F0", fontWeight: 500 }}>
                  High demand
                </span>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#1D9E75" }}>+32%</span>
              </div>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#505068", marginBottom: 6 }}>
                vs last 30 days
              </div>
              <svg width="100%" height="34" viewBox="0 0 160 34" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,28 L20,24 L40,26 L60,20 L80,22 L100,16 L120,11 L140,8 L160,4 L160,34 L0,34 Z" fill="url(#hero-area)" />
                <path d="M0,28 L20,24 L40,26 L60,20 L80,22 L100,16 L120,11 L140,8 L160,4" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
              </svg>
            </Tile>

            <Tile title="Top Pain Points">
              {["Expensive options", "Artificial ingredients", "Taste issues", "Not seeing results"].map((p) => (
                <PainRow key={p} label={p} />
              ))}
            </Tile>

            <Tile title="Winning Angles">
              {["Clean & natural", "Better absorption", "More energy", "Real results"].map((a) => (
                <AngleRow key={a} label={a} />
              ))}
            </Tile>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 8, marginTop: 8 }}>
            <Tile title="Recommended Hooks" headerExtra={<HeaderHint label="Score" />}>
              {[
                ["Finally, hydration that actually works.", "96"],
                ["Clean ingredients. Real results.", "92"],
                ["Feel the difference in 7 days.", "86"],
              ].map(([hook, score]) => (
                <div
                  key={hook}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4.5px 0",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 10.5,
                  }}
                >
                  <span style={{ color: "#E8E8F0" }}>&ldquo;{hook}&rdquo;</span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#1D9E75", fontSize: 10, flexShrink: 0, marginLeft: 6 }}>
                    {score}
                  </span>
                </div>
              ))}
            </Tile>

            <Tile title="Audience Insights">
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 9.5,
                  color: "#505068",
                  marginBottom: 2,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Primary Audience
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#E8E8F0", fontWeight: 500, marginBottom: 8 }}>
                Health-conscious adults
                <br />
                25–45
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 9.5,
                  color: "#505068",
                  marginBottom: 2,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Top Interests
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#E8E8F0", fontWeight: 500 }}>
                Fitness, Wellness, Nutrition
              </div>
            </Tile>
          </div>
        </div>
      </div>

      <style>{`
        .dash-grid { display: grid; grid-template-columns: 122px minmax(0, 1fr); gap: 10px; }
        @media (max-width: 540px) {
          .dash-grid { grid-template-columns: minmax(0, 1fr); }
          .dash-grid aside { display: none; }
        }
      `}</style>
    </div>
  );
}

function TopBtn({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 11px",
        background: primary ? "#1D9E75" : "transparent",
        border: primary ? "none" : "0.5px solid #1E1E2E",
        borderRadius: 6,
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 10.5,
        color: primary ? "#FFFFFF" : "#9898A8",
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function ShareIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 2 V8 M3 5 L6 2 L9 5 M3 10 H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 10 H10 M6 2 V8 M3 5 L6 8 L9 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function Tile({
  title,
  headerExtra,
  children,
}: {
  title: string;
  headerExtra?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#10101A", border: "0.5px solid #1E1E2E", borderRadius: 10, padding: 12 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, gap: 6 }}>
        <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#E8E8F0", fontWeight: 500 }}>
          {title}
        </span>
        {headerExtra}
      </div>
      {children}
    </div>
  );
}

function HeaderHint({ label }: { label: string }) {
  return (
    <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, color: "#505068", letterSpacing: "0.05em" }}>
      {label} →
    </span>
  );
}

function PainRow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontFamily: "var(--font-inter), sans-serif", fontSize: 10.5, color: "#9898A8" }}>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1D9E75", flexShrink: 0 }} aria-hidden="true" />
      {label}
    </div>
  );
}

function AngleRow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 0", fontFamily: "var(--font-inter), sans-serif", fontSize: 10.5, color: "#9898A8" }}>
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="4" stroke="#1D9E75" strokeWidth="1" />
        <path d="M3 5 L4.5 6.5 L7 3.5" stroke="#1D9E75" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  );
}
