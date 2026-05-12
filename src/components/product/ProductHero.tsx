const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function ProductHero() {
  return (
    <section style={{ position: "relative", background: "#050508", overflow: "hidden", borderBottom: "0.5px solid #1E1E2E" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          background: "radial-gradient(circle at center, rgba(29,158,117,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 880, margin: "0 auto", padding: "88px 24px 64px", textAlign: "center" }}>
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
          The product, explained
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
          How <span style={{ color: "#1D9E75" }}>Munero</span> works.
        </h1>

        <p
          style={{
            marginTop: 20,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 17,
            color: "#9898A8",
            lineHeight: 1.6,
            maxWidth: "56ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          From scattered market signals to a launch-ready campaign brief in 35 minutes.
          16 intelligence squads, 9 AI assistants, one workspace. Here is exactly what
          happens under the hood.
        </p>

        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          <a
            href="/sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
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
            See a sample brief
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
