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

      <div className="relative mx-auto max-w-6xl px-6 pt-12 md:pt-16 pb-12 md:pb-16">
        {/* Top grid — copy left, dashboard right */}
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 md:gap-14 items-start">
          {/* Left 55% — copy */}
          <div className="relative z-10">
            <div
              className="eyebrow mb-2 animate-on-load"
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

            {/* ICP qualifier — restored above the fold */}
            <p
              className="num animate-on-load mb-6"
              style={{
                fontSize: 10.5,
                color: "var(--text-3)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                ["--delay" as string]: "0",
              }}
            >
              FOR DTC FOUNDERS · AGENCIES · IN-HOUSE TEAMS{" "}
              <span style={{ color: "var(--text-2)" }}>·</span>{" "}
              <span style={{ color: "var(--accent)" }}>
                $5K+ MONTHLY AD SPEND
              </span>
            </p>

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
              className="mt-5 animate-on-load"
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                lineHeight: 1.45,
                maxWidth: 540,
                ["--delay" as string]: "2",
              }}
            >
              Munero is your marketing intelligence workspace. Built on real
              customer behavior. Your first brief is ready in 35 minutes. Your
              workspace opens immediately.
            </p>

            <p
              className="mt-4 animate-on-load"
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--text-2)",
                lineHeight: 1.65,
                maxWidth: 540,
                ["--delay" as string]: "3",
              }}
            >
              Competitors scanned. Buying signals mapped. Market gaps
              identified. Creative assets written. Campaign plan ready. All
              inside one workspace.
            </p>

            {/* Primary CTA pulled into the copy column so it sits above the fold */}
            <div
              className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 animate-on-load"
              style={{ ["--delay" as string]: "4" }}
            >
              <a href={STRIPE_BRIEF} className="btn-primary">
                Open your workspace · $99
                <Arrow />
              </a>
              <a href="#what-you-get" className="btn-secondary">
                See what you get
                <Arrow />
              </a>
            </div>
            <Link
              href="/register"
              className="inline-flex items-center mt-3 transition-colors animate-on-load"
              style={{
                color: "var(--text-2)",
                fontSize: 13,
                minHeight: 44,
                ["--delay" as string]: "5",
              }}
            >
              Register free, explore first{" "}
              <span style={{ color: "var(--accent)", marginLeft: 6 }}>→</span>
            </Link>
          </div>

          {/* Right 45% — Workspace dashboard mockup */}
          <div className="relative z-10 octo-mount md:mt-6">
            <WorkspaceDashboard />
          </div>
        </div>

        {/* Trust strip below grid — small, full-width */}
        <p
          className="num animate-on-load mt-8 md:mt-10 pt-6 hairline-t text-center md:text-left"
          style={{
            fontSize: 11.5,
            color: "var(--text-3)",
            letterSpacing: "0.04em",
            ["--delay" as string]: "5",
          }}
        >
          28 workspaces opened this month · First brief ready in 35 min ·
          Upgrade anytime for ongoing intelligence
        </p>
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
