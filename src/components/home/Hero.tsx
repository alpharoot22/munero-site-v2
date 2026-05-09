import Link from "next/link";
import { Octopus } from "../Octopus";
import { SourceMarquee } from "./SourceMarquee";
import { TypewriterHeadline } from "../TypewriterHeadline";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Committed teal radial — washes the left half */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 10% 50%, rgba(29,158,117,0.12) 0%, transparent 60%)",
        }}
      />
      {/* Massive ghost numeral behind the headline */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none num select-none hidden md:block"
        style={{
          fontSize: "30vw",
          lineHeight: 0.85,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          color: "var(--text-3)",
          opacity: 0.04,
          left: "-2vw",
          top: "8vw",
          zIndex: 0,
        }}
      >
        99
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-[140px] pb-[120px] grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">
        {/* Left 55% */}
        <div className="relative z-10">
          <div className="eyebrow mb-7">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            PRE-CAMPAIGN INTELLIGENCE
          </div>

          <TypewriterHeadline
            text="Know what message will work before you spend a dollar."
            durationMs={1200}
            className="font-bold tracking-[-0.04em] leading-[1.0]"
            style={{
              color: "var(--text)",
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 800,
            }}
          />

          <p
            className="mt-7 text-[17px] md:text-[18px] leading-relaxed max-w-[520px]"
            style={{ color: "var(--text-2)" }}
          >
            Munero scans your market, maps your competitors, and builds your complete campaign
            brief. Before a dollar moves.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Get my brief · $99
              <Arrow />
            </a>
            <Link href="/sample" className="btn-secondary">
              See sample output
              <Arrow />
            </Link>
          </div>
          <Link
            href="/register"
            className="inline-block mt-4 text-[13px] transition-colors"
            style={{ color: "var(--text-2)" }}
          >
            Or register free, choose your plan after{" "}
            <span style={{ color: "var(--accent)" }}>→</span>
          </Link>
          <p className="mt-5 text-[12.5px]" style={{ color: "var(--text-3)" }}>
            28 briefs run this month · One-time payment · No subscription
          </p>
        </div>

        {/* Right 45% — Octopus, scales in on mount */}
        <div className="relative z-10 octo-mount">
          <Octopus />
        </div>
      </div>

      <SourceMarquee />
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
