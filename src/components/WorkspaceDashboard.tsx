/**
 * Hero workspace dashboard mockup.
 * Shows what the user receives after paying — concrete artifacts, not a
 * conceptual radar.
 */

const CARDS = [
  {
    label: "Market Signals",
    stat: "82",
    statSuffix: "/100",
    desc: "Opportunity Score",
    accent: "var(--score-high)",
  },
  {
    label: "Competitor Gaps",
    stat: "6",
    desc: "gaps found",
    accent: "var(--accent-light)",
  },
  {
    label: "Winning Angles",
    stat: "12",
    desc: "angles generated",
    accent: "var(--accent-light)",
  },
  {
    label: "Creative Hooks",
    stat: "24",
    desc: "hooks ready",
    accent: "var(--accent-light)",
  },
  {
    label: "Campaign Plan",
    stat: "7",
    statSuffix: "-day",
    desc: "launch roadmap",
    accent: "var(--accent-light)",
  },
  {
    label: "KPI Targets",
    stat: "CPA · CTR · ROAS",
    desc: "targets set",
    accent: "var(--accent-light)",
    isText: true,
  },
];

export function WorkspaceDashboard() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border-2)",
        borderRadius: 10,
        overflow: "hidden",
        maxWidth: 520,
        margin: "0 auto",
        boxShadow: "0 0 40px -12px rgba(29, 158, 117, 0.25)",
      }}
    >
      {/* Top bar — browser chrome + LIVE pulse */}
      <div
        style={{
          background: "var(--surface-2)",
          borderBottom: "0.5px solid var(--border-2)",
          padding: "9px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--score-high)",
            boxShadow: "0 0 6px var(--score-high)",
          }}
        />
        <span
          className="num"
          style={{ fontSize: 11, color: "var(--text-3)" }}
        >
          app.munero.ai
        </span>
        <span
          className="num"
          style={{
            marginLeft: "auto",
            fontSize: 9,
            letterSpacing: "0.16em",
            color: "var(--score-high)",
            background: "rgba(0, 229, 160, 0.1)",
            border: "0.5px solid rgba(0, 229, 160, 0.3)",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          LIVE
        </span>
      </div>

      {/* Header */}
      <div
        style={{
          padding: "16px 18px 14px",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        <div
          className="num"
          style={{
            fontSize: 9.5,
            letterSpacing: "0.18em",
            color: "var(--accent-light)",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          MUNERO WORKSPACE
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 16,
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.01em",
          }}
        >
          SparkClean
          <span style={{ color: "var(--text-3)", fontWeight: 400 }}>
            {" "}
            · Market Intelligence Brief
          </span>
        </div>
        <div
          className="num"
          style={{
            marginTop: 4,
            fontSize: 11,
            color: "var(--text-3)",
          }}
        >
          First brief ready in 35 minutes
        </div>
      </div>

      {/* 2x3 card grid */}
      <div
        style={{
          padding: 12,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 6,
        }}
      >
        {CARDS.map((c) => (
          <div
            key={c.label}
            style={{
              background: "var(--surface-2)",
              border: "0.5px solid var(--border)",
              borderRadius: 6,
              padding: "12px 12px 11px",
              minHeight: 78,
            }}
          >
            <div
              className="num"
              style={{
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "var(--text-3)",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {c.label}
            </div>
            <div
              className="num"
              style={{
                marginTop: 6,
                fontSize: c.isText ? 13 : 22,
                fontWeight: 700,
                color: c.accent,
                letterSpacing: c.isText ? "0.04em" : "-0.02em",
                lineHeight: 1,
              }}
            >
              {c.stat}
              {c.statSuffix && (
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--text-3)",
                    marginLeft: 2,
                    letterSpacing: 0,
                  }}
                >
                  {c.statSuffix}
                </span>
              )}
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 11,
                color: "rgba(184, 184, 200, 0.95)",
                lineHeight: 1.35,
              }}
            >
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom status bar */}
      <div
        style={{
          background: "var(--surface-2)",
          borderTop: "0.5px solid var(--border)",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "block",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "var(--accent-light)",
            boxShadow: "0 0 6px var(--accent)",
          }}
        />
        <span
          className="num"
          style={{ fontSize: 10.5, color: "var(--text-2)" }}
        >
          Workspace updated with latest market signals
        </span>
      </div>
    </div>
  );
}
