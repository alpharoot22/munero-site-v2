import Link from "next/link";
import { WorkspaceDashboard } from "../WorkspaceDashboard";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 0% 50%, rgba(29,158,117,0.10) 0%, transparent 65%)",
      }}
    >
      {/* Ghost 35 numeral behind the dashboard */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none num select-none hidden md:block"
        style={{
          right: -40,
          top: "40%",
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

      <div className="relative mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-16 md:pb-20">
        {/* Top grid — copy left, dashboard right */}
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-start">
          {/* Left 55% — copy only */}
          <div className="relative z-10">
            <div
              className="eyebrow mb-7 animate-on-load"
              style={{ ["--delay" as string]: "0" }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 8px var(--accent)",
                }}
              />
              YOUR MARKETING INTELLIGENCE WORKSPACE
            </div>

            <h1
              className="font-bold tracking-[-0.035em] leading-[1.05] animate-on-load"
              style={{
                color: "var(--text)",
                fontSize: "clamp(40px, 5.4vw, 68px)",
                fontWeight: 800,
                ["--delay" as string]: "1",
              }}
            >
              Know your market.
              <br />
              Run better campaigns.
              <br />
              <span style={{ color: "var(--accent)" }}>Never guess again.</span>
            </h1>

            <p
              className="mt-6 animate-on-load"
              style={{
                fontSize: 19,
                fontWeight: 500,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                lineHeight: 1.45,
                maxWidth: 560,
                ["--delay" as string]: "2",
              }}
            >
              Munero is your marketing intelligence workspace. Built on real
              customer behavior. Your first brief is ready in 35 minutes. Your
              workspace opens immediately.
            </p>

            <p
              className="mt-5 animate-on-load"
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: 560,
                ["--delay" as string]: "3",
              }}
            >
              Competitors scanned. Buying signals mapped. Market gaps
              identified. Creative assets written. Campaign plan ready. All
              inside one workspace. Your research, competitors, creatives, and
              next moves stay organized in one place, so every launch gets
              sharper.
            </p>
          </div>

          {/* Right 45% — Workspace dashboard mockup */}
          <div className="relative z-10 octo-mount md:mt-6">
            <WorkspaceDashboard />
          </div>
        </div>

        {/* Full-width CTA row below the grid */}
        <div
          className="relative z-10 mt-10 md:mt-14 pt-8 md:pt-10 hairline-t flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-on-load"
          style={{ ["--delay" as string]: "4" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Open your workspace · $99
              <Arrow />
            </a>
            <a href="#what-you-get" className="btn-secondary">
              See what&apos;s inside
              <Arrow />
            </a>
            <Link
              href="/register"
              className="inline-block sm:ml-2 text-[13px] transition-colors"
              style={{ color: "var(--text-2)" }}
            >
              Register free, explore first{" "}
              <span style={{ color: "var(--accent)" }}>→</span>
            </Link>
          </div>

          <p
            className="num text-[12px] md:text-right md:max-w-[36ch]"
            style={{
              color: "var(--text-3)",
              lineHeight: 1.5,
            }}
          >
            28 workspaces opened this month · First brief ready in 35 min ·
            Upgrade anytime for ongoing intelligence
          </p>
        </div>
      </div>
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
