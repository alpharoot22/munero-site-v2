const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 900,
          height: 600,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(29,158,117,0.10) 0%, rgba(29,158,117,0.04) 35%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Faded product preview behind */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -120,
          top: 40,
          bottom: 40,
          width: 480,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(135deg, transparent 20%, #1D9E75 21%, #1D9E75 22%, transparent 23%), linear-gradient(45deg, transparent 40%, #8B5CF6 41%, #8B5CF6 42%, transparent 43%)",
          backgroundSize: "60px 60px, 80px 80px",
          maskImage: "radial-gradient(ellipse at right center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at right center, black 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <img
          src="/favicon.png"
          alt=""
          width={56}
          height={56}
          style={{
            borderRadius: 12,
            margin: "0 auto 28px",
            display: "block",
          }}
          aria-hidden="true"
        />

        <h2
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(34px, 4.6vw, 56px)",
            color: "#E8E8F0",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            margin: 0,
            maxWidth: "20ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your market. Your workspace.
          <br />
          <span style={{ color: "#1D9E75" }}>Your edge.</span>
        </h2>

        <p
          style={{
            marginTop: 22,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 17,
            color: "#9898A8",
            lineHeight: 1.55,
            maxWidth: "48ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          First brief in 35 minutes. Built on real buyer behavior. Ready before
          you spend.
        </p>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
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
              height: 52,
              padding: "0 26px",
              background: "#1D9E75",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 15.5,
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              boxShadow: "0 12px 32px -10px rgba(29,158,117,0.45)",
              transition: "background 150ms ease-out, transform 80ms ease-out",
            }}
            className="final-primary"
          >
            Start for $99
          </a>
          <a
            href="/sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              height: 52,
              padding: "0 24px",
              background: "transparent",
              color: "#E8E8F0",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 15.5,
              border: "0.5px solid #1E1E2E",
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              transition: "border-color 150ms ease-out, background 150ms ease-out",
            }}
            className="final-secondary"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M3 2 L10 6 L3 10 Z" />
            </svg>
            View sample brief
          </a>
        </div>

        <p
          style={{
            marginTop: 24,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#505068",
            letterSpacing: "0.06em",
          }}
        >
          No subscription required  ·  hello@munero.ai
        </p>
      </div>

      <style>{`
        .final-primary:hover { background: #25B889 !important; }
        .final-primary:active { transform: scale(0.97); }
        .final-secondary:hover { border-color: #353550 !important; background: #0A0A12 !important; }
      `}</style>
    </section>
  );
}
