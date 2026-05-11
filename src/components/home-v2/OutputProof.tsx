interface Output {
  count: string;
  label: string;
  detail: string;
  color: string;
}

const OUTPUTS: Output[] = [
  { count: "47",    label: "Pain points",       detail: "Ranked by frequency + intensity",   color: "#1D9E75" },
  { count: "12",    label: "Winning angles",    detail: "With opportunity scores",            color: "#1D9E75" },
  { count: "24",    label: "Hooks ranked",      detail: "Pre-tested against your audience",   color: "#8B5CF6" },
  { count: "46",    label: "Creative assets",   detail: "Copy, images, video concepts",       color: "#8B5CF6" },
  { count: "30",    label: "Day campaign plan", detail: "With kill and scale rules",          color: "#3B82F6" },
  { count: "6",     label: "Audience segments", detail: "With intent scores",                 color: "#3B82F6" },
];

export function OutputProof() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              color: "#E8E8F0",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            See what Munero{" "}
            <span style={{ color: "#1D9E75" }}>actually produces.</span>
          </h2>
          <p
            style={{
              marginTop: 10,
              fontSize: 14.5,
              color: "#9898A8",
            }}
          >
            One brief. One workspace. Everything you need to launch.
          </p>
        </div>

        <div
          style={{
            background: "#0A0A12",
            border: "1px solid #1E1E2E",
            borderRadius: 20,
            padding: 28,
            boxShadow:
              "0 24px 60px -24px rgba(0,0,0,0.55), 0 0 40px -12px rgba(29,158,117,0.06)",
          }}
        >
          {/* Brief header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              paddingBottom: 18,
              marginBottom: 22,
              borderBottom: "0.5px solid #1E1E2E",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/favicon.png"
                alt=""
                width={28}
                height={28}
                style={{ borderRadius: 6 }}
                aria-hidden="true"
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 15,
                    color: "#E8E8F0",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Sample Brief, Hydration Supplement
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10.5,
                    color: "#505068",
                    letterSpacing: "0.06em",
                    marginTop: 2,
                  }}
                >
                  DTC · $18K monthly ad spend · United States
                </div>
              </div>
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
              className="proof-link"
            >
              View full sample brief
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

          {/* Output grid */}
          <div className="proof-grid">
            {OUTPUTS.map((o) => (
              <OutputBlock key={o.label} output={o} />
            ))}
          </div>

          {/* SHA hash footer */}
          <div
            style={{
              marginTop: 22,
              paddingTop: 18,
              borderTop: "0.5px solid #1E1E2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                  fontSize: 12,
                  color: "#9898A8",
                }}
              >
                Generated in{" "}
                <span style={{ color: "#E8E8F0", fontWeight: 500 }}>34 min 12 sec</span>
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: "#505068",
                letterSpacing: "0.08em",
              }}
            >
              SHA-256  a4f1c8e2…6d3c082
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .proof-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 540px)  { .proof-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px)  { .proof-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .proof-grid { grid-template-columns: repeat(6, 1fr); } }
        .proof-link:hover { color: #25B889 !important; }
      `}</style>
    </section>
  );
}

function OutputBlock({ output }: { output: Output }) {
  return (
    <div
      style={{
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 10,
        padding: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 28,
          height: 2,
          background: output.color,
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: 30,
          color: output.color,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginTop: 6,
        }}
      >
        {output.count}
      </div>
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13,
          color: "#E8E8F0",
          fontWeight: 500,
          marginTop: 6,
          letterSpacing: "-0.005em",
        }}
      >
        {output.label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11.5,
          color: "#9898A8",
          marginTop: 4,
          lineHeight: 1.4,
        }}
      >
        {output.detail}
      </div>
    </div>
  );
}
