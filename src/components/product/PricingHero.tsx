const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function PricingHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        overflow: "hidden",
        borderBottom: "0.5px solid #1E1E2E",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -180,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle at center, rgba(29,158,117,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 880,
          margin: "0 auto",
          padding: "88px 24px 56px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#1D9E75",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "5px 12px",
            background: "rgba(29,158,117,0.06)",
            border: "0.5px solid rgba(29,158,117,0.25)",
            borderRadius: 999,
            marginBottom: 20,
          }}
        >
          Pricing
        </span>

        <h1
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            color: "#E8E8F0",
            fontSize: "clamp(38px, 5.2vw, 64px)",
            letterSpacing: "-0.035em",
            lineHeight: 1.04,
            margin: 0,
          }}
        >
          Plans built around{" "}
          <span style={{ color: "#1D9E75" }}>how you work.</span>
        </h1>

        <p
          style={{
            marginTop: 20,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 17,
            color: "#9898A8",
            lineHeight: 1.6,
            maxWidth: "52ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Start with a brief. Keep the signals running. Launch creative assets.
          Scale across clients. Every plan opens the full workspace.
        </p>

        <ul
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px 24px",
            marginTop: 28,
            listStyle: "none",
            padding: 0,
          }}
        >
          {[
            "No subscription required",
            "Cancel anytime",
            "All plans open the workspace immediately",
          ].map((label) => (
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
                  <path
                    d="M2 5.2 L4 7.2 L8 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {label}
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <a
            href="#pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              height: 48,
              padding: "0 22px",
              background: "#1D9E75",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 14.5,
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              transition: "background 150ms ease-out",
            }}
            className="ph-primary"
          >
            See the plans
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 3 V13 M4 9 L8 13 L12 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={STRIPE_STARTER}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              padding: "0 22px",
              background: "transparent",
              color: "#E8E8F0",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 14.5,
              border: "0.5px solid #1E1E2E",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              transition: "border-color 150ms ease-out, background 150ms ease-out",
            }}
            className="ph-secondary"
          >
            Start for $99
          </a>
        </div>
      </div>

      <style>{`
        .ph-primary:hover { background: #25B889 !important; }
        .ph-secondary:hover { border-color: #353550 !important; background: #0A0A12 !important; }
      `}</style>
    </section>
  );
}
