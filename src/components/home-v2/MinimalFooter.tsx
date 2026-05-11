import Link from "next/link";

export function MinimalFooter() {
  return (
    <footer
      style={{
        height: 56,
        background: "#0D0D18",
        borderTop: "0.5px solid #1E1E2E",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#505068",
          letterSpacing: "0.04em",
        }}
      >
        © 2026 Munero
      </span>

      <img
        src="/favicon.png"
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        style={{
          display: "none",
          opacity: 0.4,
          borderRadius: 4,
        }}
        className="footer-logo"
      />

      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#505068",
          letterSpacing: "0.04em",
          display: "flex",
          gap: 14,
        }}
      >
        <Link href="/privacy" style={{ color: "#505068", textDecoration: "none" }}>
          Privacy
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" style={{ color: "#505068", textDecoration: "none" }}>
          Terms
        </Link>
        <span aria-hidden="true">·</span>
        <a
          href="mailto:hello@munero.ai"
          style={{ color: "#505068", textDecoration: "none" }}
        >
          hello@munero.ai
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-logo { display: block !important; }
        }
      `}</style>
    </footer>
  );
}
