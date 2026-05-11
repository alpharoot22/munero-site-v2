import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        background: "#0A0A12",
        borderTop: "0.5px solid #1E1E2E",
        marginTop: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px 48px",
        }}
      >
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label="Munero home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <img
                src="/favicon.png"
                alt=""
                width={32}
                height={32}
                style={{ display: "block", borderRadius: 7 }}
                aria-hidden="true"
              />
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
            <p
              style={{
                marginTop: 16,
                maxWidth: "28ch",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                color: "#9898A8",
                lineHeight: 1.55,
              }}
            >
              Marketing intelligence workspace. One-time briefs from $99.
              Weekly intelligence from $49 a month.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/sample", label: "Sample brief" },
              { href: "/agency", label: "Agency" },
            ]}
          />

          <FooterCol
            title="Resources"
            links={[
              { href: "/how-it-works", label: "How it works" },
              { href: "/blog", label: "Blog" },
              { href: "/guides", label: "All guides" },
              { href: "/guides/meta-ads", label: "Meta Ads guide" },
              { href: "/guides/tiktok-ads", label: "TikTok Ads guide" },
            ]}
          />

          <FooterCol
            title="Legal"
            links={[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/data-deletion", label: "Data Deletion" },
              { href: "mailto:hello@munero.ai", label: "hello@munero.ai" },
            ]}
          />
        </div>
      </div>

      <div style={{ borderTop: "0.5px solid #1E1E2E" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11.5,
              color: "#505068",
              letterSpacing: "0.04em",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#9898A8" }}>Works with</span>
            {["Slack", "Notion", "Google Drive", "Google Sheets", "Canva", "Higgsfield"].map(
              (name, i, arr) => (
                <span key={name} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#9898A8" }}>{name}</span>
                  {i < arr.length - 1 ? <span aria-hidden="true">·</span> : null}
                </span>
              )
            )}
          </div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11.5,
              color: "#505068",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Munero  ·  hello@munero.ai
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 32px;
        }
        @media (min-width: 720px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 40px; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10.5,
          color: "#505068",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                color: "#9898A8",
                textDecoration: "none",
                transition: "color 150ms ease-out",
              }}
              className="footer-link"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <style>{`
        .footer-link:hover { color: #E8E8F0 !important; }
      `}</style>
    </div>
  );
}
