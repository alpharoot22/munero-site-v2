import Link from "next/link";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function FinalCTA() {
  return (
    <section className="hairline-t relative overflow-hidden">
      {/* Faint octopus silhouette in background */}
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

      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40 relative">
        <div className="max-w-[24ch]">
          <h2 className="text-[44px] md:text-[72px] tracking-[-0.03em] leading-[1.02] font-bold">
            Your next brief is{" "}
            <span className="italic-accent">35 minutes</span> away.
          </h2>
          <p
            className="mt-6 text-[17px] leading-relaxed max-w-[48ch]"
            style={{ color: "var(--text-2)" }}
          >
            16 squads. 46 creative assets. One defensible plan. Built before you spend a dollar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Get my brief · $99
            </a>
            <Link href="/sample" className="btn-secondary">
              See a sample first
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
