import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sample", label: "Sample brief" },
  { href: "/agency", label: "Agency" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 hairline-b backdrop-blur-md"
      style={{ background: "rgba(10, 10, 15, 0.72)" }}
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" aria-label="Munero home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13.5px] transition-colors"
              style={{ color: "var(--text-2)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://munero.ai"
            className="hidden sm:inline-flex text-[13.5px]"
            style={{ color: "var(--text-2)" }}
          >
            Sign in
          </a>
          <a href="https://munero.ai" className="btn-primary !py-2 !px-3.5 !text-[13px]">
            Get my brief
          </a>
        </div>
      </div>
    </header>
  );
}
