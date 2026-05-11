const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

const COMPLETED_STEPS = [
  "Scanning Reddit pain signals",
  "Analyzing competitor ads",
  "Mapping search intent",
  "Profiling market gaps",
  "Building audience segments",
];

export function Hero() {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "100dvh", background: "#050508" }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: 1280,
          padding: "32px 24px 48px",
        }}
      >
        {/* Logo row */}
        <div
          className="flex items-center"
          style={{ gap: 10, marginBottom: 48 }}
        >
          <img
            src="/favicon.png"
            alt="Munero"
            width={28}
            height={28}
            style={{ display: "block", borderRadius: 6 }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: 18,
              color: "#1D9E75",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            munero
          </span>
        </div>

        {/* Grid: 55/45 desktop, stacked mobile */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div className="promise-grid">
            {/* Left content */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  color: "#E8E8F0",
                  fontSize: "clamp(38px, 5.5vw, 68px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Know what to say
                <br />
                before you spend.
              </h1>

              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "#9898A8",
                  lineHeight: 1.55,
                  maxWidth: "32ch",
                }}
              >
                Turn market signals into campaigns. One workspace.
              </p>

              <a
                href={STRIPE_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 32,
                  width: 200,
                  height: 52,
                  background: "#1D9E75",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "transform 80ms ease-out, background 150ms ease-out",
                }}
              >
                Start for $99
              </a>

              <p
                style={{
                  marginTop: 16,
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "#505068",
                  letterSpacing: "0.04em",
                }}
              >
                First brief in 35 minutes  ·  No subscription required
              </p>
            </div>

            {/* Right: live brief card */}
            <BriefCard />
          </div>
        </div>
      </div>

      <style>{`
        .promise-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .promise-grid {
            grid-template-columns: 55fr 45fr;
            gap: 56px;
          }
        }
      `}</style>
    </section>
  );
}

function BriefCard() {
  return (
    <div
      style={{
        background: "#0D0D18",
        border: "1px solid #1E1E2E",
        borderRadius: 12,
        padding: 24,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: 20 }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#1D9E75",
            letterSpacing: "0.06em",
          }}
        >
          munero
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#9898A8",
            letterSpacing: "0.02em",
          }}
        >
          Composing your brief...
        </span>
      </div>

      {/* Steps */}
      <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {COMPLETED_STEPS.map((step, i) => (
          <li
            key={step}
            className="brief-step"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity: 0,
              animation: "brief-fade-in 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: `${i * 400}ms`,
            }}
          >
            <CheckCircle />
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 13,
                color: "#9898A8",
              }}
            >
              {step}
            </span>
          </li>
        ))}

        {/* Active step */}
        <li
          className="brief-step"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: 0,
            animation: "brief-fade-in 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: `${COMPLETED_STEPS.length * 400}ms`,
          }}
        >
          <SpinCircle />
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
              color: "#E8E8F0",
            }}
          >
            Writing campaign brief
          </span>
        </li>
      </ul>

      {/* Progress bar */}
      <div
        style={{
          marginTop: 24,
          height: 3,
          width: "100%",
          background: "#1E1E2E",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: 0,
            background: "#1D9E75",
            animation: "brief-progress 5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "200ms",
            borderRadius: 2,
          }}
        />
      </div>

      <p
        style={{
          marginTop: 14,
          textAlign: "center",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10,
          color: "#505068",
          letterSpacing: "0.08em",
        }}
      >
        16 intelligence squads  ·  35 minutes
      </p>

      <style>{`
        @keyframes brief-fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes brief-progress {
          from { width: 0%; }
          to   { width: 70%; }
        }
        @keyframes brief-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brief-step { opacity: 1 !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}

function CheckCircle() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "#1D9E75",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2 4 7.2 8 3"
          stroke="#050508"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function SpinCircle() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "1.5px solid #1E1E2E",
        borderTopColor: "#1D9E75",
        animation: "brief-spin 900ms linear infinite",
        flexShrink: 0,
      }}
      aria-hidden="true"
    />
  );
}
