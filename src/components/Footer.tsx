import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer style={{ background: "#0A0A12", borderTop: "0.5px solid #1E1E2E" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="ft-grid">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Munero home"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            >
              <img src="/favicon.png" alt="" width={28} height={28} style={{ borderRadius: 6 }} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
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
                marginTop: 14,
                maxWidth: "24ch",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                color: "#9898A8",
                lineHeight: 1.55,
              }}
            >
              The connected workspace for modern marketers.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "What's new" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { href: "/blog", label: "Blog" },
              { href: "/guides", label: "Guides" },
              { href: "/sample", label: "Templates" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/blog", label: "About" },
              { href: "mailto:hello@munero.ai", label: "Careers" },
              { href: "mailto:hello@munero.ai", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/data-deletion", label: "Security" },
            ]}
          />

          {/* Newsletter */}
          <div className="ft-newsletter">
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                color: "#E8E8F0",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Stay ahead
            </div>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 12.5, color: "#9898A8", marginBottom: 12 }}>
              Get weekly growth insights.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "0.5px solid #1E1E2E",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <SocialBtn label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </SocialBtn>
            <SocialBtn label="X">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26L23 21.75h-6.732l-5.243-6.864L4.96 21.75H1.65l7.73-8.834L1 2.25h6.91l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
            </SocialBtn>
            <SocialBtn label="GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg>
            </SocialBtn>
            <SocialBtn label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.5 15.5v-7l6.5 3.5-6.5 3.5Z"/></svg>
            </SocialBtn>
          </div>

          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11.5,
              color: "#505068",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Munero  ·  All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .ft-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .ft-newsletter { grid-column: 1 / -1; }
        @media (min-width: 768px) {
          .ft-grid { grid-template-columns: 1.4fr repeat(4, 1fr); gap: 32px; }
          .ft-newsletter { grid-column: auto; grid-row: 1; grid-column-end: -1; justify-self: end; min-width: 240px; }
        }
        @media (min-width: 1100px) {
          .ft-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1.3fr; }
          .ft-newsletter { grid-column: 6; grid-row: 1; justify-self: stretch; }
        }
        .news-btn:hover { background: #25B889 !important; }
        .footer-link { transition: color 150ms ease-out; }
        .footer-link:hover { color: #E8E8F0 !important; }
        .social-btn { transition: border-color 150ms ease-out, color 150ms ease-out; }
        .social-btn:hover { border-color: #1D9E75 !important; color: #E8E8F0 !important; }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 12.5,
          color: "#E8E8F0",
          fontWeight: 500,
          marginBottom: 14,
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
              }}
              className="footer-link"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBtn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="/"
      aria-label={label}
      className="social-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        background: "transparent",
        border: "0.5px solid #1E1E2E",
        borderRadius: 8,
        color: "#9898A8",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}
