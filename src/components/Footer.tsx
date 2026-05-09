import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="hairline-t mt-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-[13px]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-3 max-w-[28ch] text-[12.5px]" style={{ color: "var(--text-3)" }}>
            Know what message will work before you spend a dollar.
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
            { href: "/#how", label: "How it works" },
            { href: "/#what-you-get", label: "What you get" },
            { href: "/#faq", label: "FAQ" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { href: "https://munero.ai/privacy", label: "Privacy Policy" },
            { href: "https://munero.ai/terms", label: "Terms of Service" },
            { href: "mailto:hello@munero.ai", label: "hello@munero.ai" },
          ]}
        />
      </div>
      <div className="hairline-t">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p
            className="num text-[12px]"
            style={{ color: "var(--text-3)" }}
          >
            Works with: Slack · Notion · Google Drive · Canva · Google Sheets · Higgsfield
          </p>
          <p
            className="text-[12px]"
            style={{ color: "var(--text-3)" }}
          >
            © {new Date().getFullYear()} Munero · hello@munero.ai
          </p>
        </div>
      </div>
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
        className="text-[10.5px] uppercase tracking-[0.16em] num mb-3"
        style={{ color: "var(--text-3)" }}
      >
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={{ color: "var(--text-2)" }}
              className="hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
