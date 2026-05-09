import Link from "next/link";
import { Octopus } from "../Octopus";
import { CountUp } from "../CountUp";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-14 md:pb-20 grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">
        {/* Left 55% */}
        <div>
          <div className="eyebrow mb-5">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            INTELLIGENCE ENGINE
          </div>

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
            16 intelligence sources. One campaign brief. In 35 minutes.
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
        </div>

        {/* Right 45% — Octopus */}
        <div className="relative">
          <Octopus />
        </div>
      </div>

      <ProofStrip />
    </section>
  );
}

function ProofStrip() {
  return (
    <div className="hairline-t hairline-b" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
        <Stat>
          <CountUp to={16} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>sources</span>
        </Stat>
        <Stat>
          <CountUp to={46} className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>creative assets</span>
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
        <Stat>
          <CountUp to={96} suffix="%" className="num text-[16px]" />
          <span className="text-[12.5px] num" style={{ color: "var(--text-3)" }}>success</span>
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
