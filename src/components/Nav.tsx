import Link from "next/link";
import { Logo } from "./Logo";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#brief", label: "What you get" },
  { href: "/#compare", label: "Compare" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agency", label: "Agency" },
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
              className="text-[13px] transition-colors hover:text-[var(--text)]"
              style={{ color: "var(--text-2)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={STRIPE_BRIEF} className="btn-primary !h-9 !px-3.5 !text-[13px]">
          Get my brief · $99
        </a>
      </div>
    </header>
  );
}
