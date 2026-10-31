import Link from "next/link";
import { OctopusMark } from "./Logo";

export function Footer() {
  return (
    <footer className="mn-foot">
      <div className="mn-foot__in">
        <div className="mn-foot__top">
          <div>
            <Link href="/" className="mn-logo" aria-label="Munero home">
              <OctopusMark color="#f3ede2" eye="#0b1522" />
              <span>munero</span>
            </Link>
            <p>The intelligence behind your next growth opportunity. Private preview; new client access closed.</p>
          </div>
          <nav aria-label="Footer">
            <a href="/#contact">Investor inquiries</a>
            <Link href="/blog">Insights</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/data-deletion">Data deletion</Link>
          </nav>
        </div>
        <div className="mn-foot__bot">
          <span>© 2026 Munero. All rights reserved.</span>
          <span>munero.ai</span>
        </div>
      </div>
    </footer>
  );
}
