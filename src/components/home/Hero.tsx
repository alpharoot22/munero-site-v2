import Link from "next/link";
import { Octopus } from "../Octopus";
import { ReplaceDeliverMarquee } from "./ReplaceDeliverMarquee";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 0% 50%, rgba(29,158,117,0.10) 0%, transparent 65%)",
        }}
      >
        {/* Ghost 35 numeral behind the octopus */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none num select-none hidden md:block"
          style={{
            right: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(160px, 22vw, 280px)",
            fontWeight: 800,
            color: "rgba(29, 158, 117, 0.04)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            zIndex: 0,
          }}
        >
          35
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-[140px] pb-[120px] grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-center">
          {/* Left 55% */}
          <div className="relative z-10">
            <div
              className="eyebrow mb-7 animate-on-load"
              style={{ ["--delay" as string]: "0" }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
              />
              PRE-CAMPAIGN INTELLIGENCE · BUILT ON REAL CUSTOMER BEHAVIOR
            </div>

            <h1
              className="font-bold tracking-[-0.04em] leading-[1.0] animate-on-load"
              style={{
                color: "var(--text)",
                fontSize: "clamp(52px, 7.5vw, 92px)",
                fontWeight: 800,
                ["--delay" as string]: "1",
              }}
            >
              From zero to running
              <br />
              campaign in{" "}
              <span style={{ color: "var(--accent)" }}>35 minutes.</span>
            </h1>

            <p
              className="mt-2 mb-4 animate-on-load"
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: "var(--text-2)",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
                ["--delay" as string]: "2",
              }}
            >
              Know what message will work before you spend a dollar.
            </p>

            <p
              className="mb-2 animate-on-load"
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--text)",
                ["--delay" as string]: "3",
              }}
            >
              Tell us your brand. Munero handles the rest.
            </p>

            <p
              className="animate-on-load"
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: 520,
                ["--delay" as string]: "3",
              }}
            >
              Competitors scanned. Buying signals mapped. Market gaps identified. Creative
              assets written. Images generated. Pushed to your ads manager. Ready to launch.
            </p>

            <p
              className="mt-4 animate-on-load"
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--accent)",
                ["--delay" as string]: "4",
              }}
            >
              Hours of research. Hours of creative work. One click.
              <br />
              Built on real customer behavior, not guesses.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 animate-on-load"
              style={{ ["--delay" as string]: "4" }}
            >
              <a href={STRIPE_BRIEF} className="btn-primary">
                Get my brief · $99
                <Arrow />
              </a>
              <a href="#what-you-get" className="btn-secondary">
                See what you get
                <Arrow />
              </a>
            </div>
            <Link
              href="/register"
              className="inline-block mt-4 text-[13px] transition-colors animate-on-load"
              style={{ color: "var(--text-2)", ["--delay" as string]: "5" }}
            >
              Or register free, choose your plan after{" "}
              <span style={{ color: "var(--accent)" }}>→</span>
            </Link>

            <p
              className="num animate-on-load mt-6"
              style={{
                fontSize: 12,
                color: "var(--text-3)",
                ["--delay" as string]: "5",
              }}
            >
              28 briefs run this month · $99 one-time · No subscription · 96% complete
              error-free
            </p>
          </div>

          {/* Right 45% — Octopus, scales in on mount */}
          <div className="relative z-10 octo-mount">
            <Octopus />
          </div>
        </div>
      </section>

      <ReplaceDeliverMarquee />
    </>
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
