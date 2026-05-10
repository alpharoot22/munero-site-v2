import Link from "next/link";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export function FinalCTA() {
  return (
    <section
      className="hairline-t relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(29,158,117,0.08) 0%, transparent 70%)",
      }}
    >
      {/* Subtle octopus silhouette */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 600"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.03, mixBlendMode: "screen" }}
      >
        <defs>
          <radialGradient id="silG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="300" r="280" fill="url(#silG)" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x2 = 400 + Math.cos(angle) * 380;
          const y2 = 300 + Math.sin(angle) * 380;
          return (
            <line
              key={i}
              x1="400"
              y1="300"
              x2={x2}
              y2={y2}
              stroke="#1D9E75"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          );
        })}
        <circle cx="400" cy="300" r="60" fill="none" stroke="#1D9E75" strokeWidth="2" />
      </svg>

      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 relative">
        <div className="max-w-[36ch] mx-auto text-center">
          <h2
            className="font-bold tracking-[-0.03em] leading-[1.0]"
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              color: "var(--text)",
            }}
          >
            Your workspace.
            <br />
            Your market.
            <br />
            <span style={{ color: "var(--accent)" }}>Your edge.</span>
          </h2>

          <p
            className="mt-6 mx-auto"
            style={{
              fontSize: 18,
              color: "var(--text-2)",
              maxWidth: 560,
              lineHeight: 1.55,
            }}
          >
            Open your Munero workspace today. Your first intelligence brief is
            ready in 35 minutes. Built on real customer behavior. Organized
            for action. Ready before you spend.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Open your workspace · $99
            </a>
            <Link href="/register" className="btn-secondary">
              Register free · explore first
            </Link>
          </div>
          <Link
            href="/how-it-works#what-you-get"
            className="inline-block mt-5 transition-colors"
            style={{ fontSize: 13, color: "var(--text-3)" }}
          >
            See what&apos;s inside{" "}
            <span style={{ color: "var(--accent)" }}>→</span>
          </Link>

          <p
            className="num mt-8"
            style={{ fontSize: 11, color: "var(--text-3)" }}
          >
            28 workspaces opened this month · 16 intelligence squads · 9 AI
            assistants · First brief ready in 35 min
          </p>
        </div>
      </div>
    </section>
  );
}
