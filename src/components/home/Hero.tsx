import Link from "next/link";
import { Octopus } from "../Octopus";
import { CountUp } from "../CountUp";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-16 md:pb-24 grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">
        {/* Left */}
        <div>
          <div className="eyebrow flex items-center gap-2.5 mb-3">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            INTELLIGENCE ENGINE
          </div>
          <div
            className="num text-[10.5px] tracking-[0.16em] mb-5"
            style={{ color: "var(--text-3)", textTransform: "uppercase" }}
          >
            FOR DTC · AGENCIES · IN-HOUSE TEAMS · $5K+ MO AD SPEND
          </div>
          <h1
            className="text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.03em] font-bold"
            style={{ color: "var(--text)" }}
          >
            Your market.
            <br />
            <span className="italic-accent" style={{ fontWeight: 300, fontStyle: "italic" }}>
              Gathered.
            </span>
          </h1>
          <p
            className="mt-6 text-[18px] leading-relaxed max-w-[480px]"
            style={{ color: "var(--text-2)" }}
          >
            16 intelligence squads scan your market. One brief tells you exactly
            what message will work. Before you spend a dollar.
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
          <div
            className="mt-6 text-[12.5px] num"
            style={{ color: "var(--text-3)" }}
          >
            One-time payment · No subscription · 28 briefs run · 96% complete error-free
          </div>
        </div>

        {/* Right — Octopus */}
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
    <div className="hairline-t hairline-b" style={{ background: "rgba(8, 8, 14, 0.5)" }}>
      <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 justify-between">
        <Stat>
          <CountUp to={16} className="num text-[18px]" />{" "}
          <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>squads</span>
        </Stat>
        <Stat>
          <CountUp to={46} className="num text-[18px]" />{" "}
          <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>creative assets</span>
        </Stat>
        <Stat>
          <span className="num text-[18px]">~</span>
          <CountUp to={35} className="num text-[18px]" />{" "}
          <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>minutes</span>
        </Stat>
        <Stat>
          <CountUp to={99} prefix="$" className="num text-[18px]" />{" "}
          <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>one-time</span>
        </Stat>
        <Stat>
          <CountUp to={96} suffix="%" className="num text-[18px]" />{" "}
          <span
            className="text-[12.5px]"
            style={{ color: "var(--text-3)" }}
            title="Defined as: brief completes all 16 squads with no failed nodes"
          >
            briefs complete error-free
          </span>
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
