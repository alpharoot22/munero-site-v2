import Link from "next/link";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/#meet", label: "Platform" },
  { href: "/#opportunity", label: "Opportunity" },
  { href: "/#vision", label: "Vision" },
  { href: "/blog", label: "Insights" },
];

export function Nav() {
  return (
    <header className="mn-navwrap">
      <div className="mn-nav">
        <Link href="/" aria-label="Munero home" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <nav className="mn-links" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="mn-cta" href="/#contact">Investor inquiries</a>
      </div>
    </header>
  );
}
