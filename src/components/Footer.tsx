import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="hairline-t mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-[13.5px]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-3 max-w-[28ch]" style={{ color: "var(--text-3)" }}>
            AI marketing intelligence for performance teams.
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
          title="Company"
          links={[
            { href: "https://munero.ai", label: "App" },
            { href: "/sample", label: "How it works" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { href: "#", label: "Terms" },
            { href: "#", label: "Privacy" },
          ]}
        />
      </div>
      <div className="hairline-t">
        <div
          className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between text-[12px]"
          style={{ color: "var(--text-3)" }}
        >
          <span className="num">© {new Date().getFullYear()} Munero</span>
          <span className="num">v2.0</span>
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
        className="text-[11px] uppercase tracking-[0.12em] mb-3"
        style={{ color: "var(--text-3)" }}
      >
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} style={{ color: "var(--text-2)" }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
