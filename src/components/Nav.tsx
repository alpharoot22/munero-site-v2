import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

const NAV_LINKS = [
  { href: "/features",     label: "Product",   hasDropdown: true },
  { href: "/how-it-works", label: "Solutions", hasDropdown: true },
  { href: "/guides",       label: "Resources", hasDropdown: true },
  { href: "/pricing",      label: "Pricing" },
  { href: "/blog",         label: "About" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: "rgba(5, 5, 8, 0.8)",
        borderBottom: "0.5px solid #1E1E2E",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: "0 24px", height: 64 }}
      >
        <Link
          href="/"
          aria-label="Munero home"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <img src="/favicon.png" alt="" width={30} height={30} style={{ borderRadius: 7 }} aria-hidden="true" />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: 20,
              color: "#1D9E75",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            munero
          </span>
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: 30 }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#9898A8",
                textDecoration: "none",
                letterSpacing: "-0.005em",
                transition: "color 150ms ease-out",
              }}
              className="nav-link"
            >
              {l.label}
              {l.hasDropdown ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ marginTop: 1, opacity: 0.55 }}>
                  <path d="M2.5 4 L5 6.5 L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center" style={{ gap: 18 }}>
          <Link
            href="/register"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              color: "#E8E8F0",
              textDecoration: "none",
            }}
            className="nav-link"
          >
            Log in
          </Link>
          <a
            href={STRIPE_STARTER}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 38,
              padding: "0 18px",
              background: "#1D9E75",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              transition: "background 150ms ease-out, transform 80ms ease-out",
            }}
            className="nav-cta"
          >
            Open workspace
          </a>
        </div>

        <MobileMenu />
      </div>

      <style>{`
        .nav-link:hover { color: #E8E8F0 !important; }
        .nav-cta:hover { background: #25B889 !important; }
        .nav-cta:active { transform: scale(0.97); }
      `}</style>
    </header>
  );
}
