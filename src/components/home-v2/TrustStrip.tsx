const SOURCES = [
  "Reddit",
  "Trustpilot",
  "Meta Ad Library",
  "Google Trends",
  "TikTok Creative Center",
  "YouTube",
  "Amazon reviews",
  "LinkedIn",
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
        position: "relative",
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "88px 0",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 800,
          height: 400,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(29,158,117,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Eyebrow row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: 24,
              height: 1,
              background: "#1D9E75",
              boxShadow: "0 0 6px #1D9E75",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Built on real buyer behavior
          </span>
        </div>

        {/* Anchor statement */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "#E8E8F0",
            letterSpacing: "-0.025em",
            lineHeight: 1.25,
            margin: 0,
            maxWidth: "30ch",
          }}
        >
          Every brief cites its sources. We pull from the places your
          buyers <span style={{ color: "#1D9E75" }}>actually live.</span>
        </p>

        {/* Source flow */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px 8px",
          }}
        >
          {SOURCES.map((s, i) => (
            <SourceChip key={s} label={s} delay={i * 60} />
          ))}
        </div>

        {/* Divider with audience */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "0.5px solid #1E1E2E",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              color: "#9898A8",
            }}
          >
            Currently running for{" "}
            {AUDIENCES.map((a, i) => (
              <span key={a}>
                <span style={{ color: "#E8E8F0", fontWeight: 500 }}>{a}</span>
                {i < AUDIENCES.length - 1 ? (
                  <span style={{ color: "#505068" }}>
                    {i === AUDIENCES.length - 2 ? ", and " : ", "}
                  </span>
                ) : (
                  "."
                )}
              </span>
            ))}
          </div>

          <a
            href="/sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 13,
              color: "#1D9E75",
              textDecoration: "none",
              fontWeight: 500,
              letterSpacing: "-0.005em",
              transition: "color 150ms ease-out",
            }}
            className="trust-link"
          >
            See a real brief
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M3 6 H9 M7 4 L9 6 L7 8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .trust-link:hover { color: #25B889 !important; }
      `}</style>
    </section>
  );
}

function SourceChip({ label, delay }: { label: string; delay: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        background: "#0E0E18",
        border: "0.5px solid #1E1E2E",
        borderRadius: 999,
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 13,
        color: "#9898A8",
        animation: `chip-in 500ms ${delay}ms cubic-bezier(0.16, 1, 0.3, 1) both`,
      }}
      className="source-chip"
    >
      <span
        style={{
          display: "inline-block",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#1D9E75",
          boxShadow: "0 0 4px #1D9E75",
        }}
        aria-hidden="true"
      />
      {label}
      <style>{`
        @keyframes chip-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </span>
  );
}
