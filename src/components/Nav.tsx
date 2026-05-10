import Link from "next/link";
import { Logo } from "./Logo";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/#workspace", label: "The Workspace" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agency", label: "Agency" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 hairline-b backdrop-blur-md"
      style={{ background: "rgba(5, 5, 8, 0.78)" }}
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
              className="text-[14px] transition-colors hover:text-[var(--text)]"
              style={{ color: "var(--text-2)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/register"
            className="btn-secondary !h-11 !px-3.5 !text-[13px] hidden sm:inline-flex"
          >
            Get started free
          </Link>
          <a href={STRIPE_BRIEF} className="btn-primary !h-11 !px-3.5 !text-[13px]">
            Open workspace · $99
          </a>
        </div>
      </div>
    </header>
  );
}
