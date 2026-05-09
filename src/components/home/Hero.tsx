import Link from "next/link";
import { Octopus } from "../Octopus";
import { CountUp } from "../CountUp";
import { SourceMarquee } from "./SourceMarquee";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-14 md:pb-20 grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">
        {/* Left 55% */}
        <div>
          <div className="eyebrow mb-3">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            INTELLIGENCE ENGINE
          </div>
          <p
            className="num text-[11px] uppercase tracking-[0.12em] mb-6"
            style={{ color: "var(--text-3)" }}
          >
            For DTC · Agencies · In-house teams · $5K+ mo ad spend
          </p>

          <h1
            className="text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.03em] font-bold"
            style={{ color: "var(--text)" }}
          >
            Your market.
          </h1>
          <h1
            className="text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.03em] font-bold mt-1"
            style={{ color: "var(--text)" }}
          >
            Gathered.
          </h1>

          <p
            className="mt-6 text-[18px] leading-relaxed max-w-[480px]"
            style={{ color: "var(--text-2)" }}
          >
            16 intelligence squads. One campaign brief. In 35 minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

        {/* Right 45% — Octopus */}
        <div className="relative">
          <Octopus />
        </div>
      </div>

      <ProofStrip />
      <SourceMarquee />
    </section>
  );
}

function ProofStrip() {
  return (
    <div className="hairline-t hairline-b" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
        <Stat>
          <CountUp to={16} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>squads</span>
        </Stat>
        <Stat>
          <CountUp to={46} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>assets</span>
        </Stat>
        <Stat>
          <CountUp to={9} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>AI assistants</span>
        </Stat>
        <Stat>
          <span className="num text-[16px]">~</span>
          <CountUp to={35} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>min</span>
        </Stat>
        <Stat>
          <CountUp to={99} prefix="$" className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>one-time</span>
        </Stat>
      </div>
    </div>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-baseline gap-1.5" style={{ color: "var(--text)" }}>
      {children}
    </span>
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
