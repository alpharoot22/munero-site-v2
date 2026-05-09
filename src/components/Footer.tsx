import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="hairline-t mt-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-[13px]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-3 max-w-[28ch] text-[12.5px]" style={{ color: "var(--text-3)" }}>
            AI marketing intelligence. 16 squads. Know before you spend.
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
            { href: "/#brief", label: "What you get" },
            { href: "/#faq", label: "FAQ" },
          ]}
        />
        <FooterCol
          title="Contact"
          links={[
            { href: "mailto:hello@munero.ai", label: "hello@munero.ai" },
            { href: "https://munero.ai", label: "Sign in" },
          ]}
        />
      </div>
      <div className="hairline-t">
        <div
          className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between text-[11.5px] num"
          style={{ color: "var(--text-3)" }}
        >
          <span>© {new Date().getFullYear()} Munero · hello@munero.ai</span>
          <span>v2.1 · bioluminescent</span>
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
            <Link href={l.href} style={{ color: "var(--text-2)" }} className="hover:text-[var(--text)] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
