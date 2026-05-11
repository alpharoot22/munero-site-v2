interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "35 min",     label: "First brief ready" },
  { value: "16 squads",  label: "Intelligence sources" },
  { value: "46 assets",  label: "Per Creative brief" },
  { value: "100%",       label: "Built on real buyer behavior" },
];

const AUDIENCES = [
  "DTC founders",
  "Performance agencies",
  "In-house growth teams",
];

export function TrustStrip() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "56px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#505068",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Trusted by marketers building real campaigns
          </span>
        </div>

        <div
          className="trust-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 0,
            border: "0.5px solid #1E1E2E",
            borderRadius: 18,
            background: "#0A0A12",
            overflow: "hidden",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "22px 20px",
                borderRight: i === STATS.length - 1 ? "none" : "0.5px solid #1E1E2E",
                borderBottom: i < STATS.length - 2 ? "0.5px solid #1E1E2E" : "none",
                textAlign: "center",
              }}
              className="trust-stat-cell"
            >
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  color: "#1D9E75",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12.5,
                  color: "#9898A8",
                  letterSpacing: "-0.005em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 22,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px 16px",
          }}
        >
          {AUDIENCES.map((a, i) => (
            <span
              key={a}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                color: "#9898A8",
              }}
            >
              {a}
              {i < AUDIENCES.length - 1 ? (
                <span
                  aria-hidden="true"
                  style={{ color: "#505068", fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .trust-stats { grid-template-columns: repeat(4, 1fr) !important; }
          .trust-stat-cell { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
