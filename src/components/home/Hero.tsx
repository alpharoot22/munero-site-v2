import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-radial-subtle">
      <div className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[820px]">
          <span className="tag">
            <span className="dot" />
            <span className="num">28 briefs run this month</span>
          </span>
          <h1 className="mt-6 text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.03em] font-medium">
            Know what works
            <br />
            <span style={{ color: "var(--text-2)" }}>before you spend.</span>
          </h1>
          <p
            className="mt-6 text-[18px] md:text-[19px] leading-relaxed max-w-[58ch]"
            style={{ color: "var(--text-2)" }}
          >
            Munero builds a complete campaign brief in 35 minutes using 16 intelligence
            sources. Every audience, hook, competitor angle, and creative tested against real
            market signal. So you launch ads that work the first time.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="https://munero.ai" className="btn-primary">
              Get my brief for $99
              <Arrow />
            </a>
            <Link href="/sample" className="btn-secondary">
              See a sample brief
            </Link>
          </div>
          <div
            className="mt-8 flex items-center gap-2 text-[13px]"
            style={{ color: "var(--text-3)" }}
          >
            <CheckIcon />
            <span>One-time payment. No subscription. Brief in 35 minutes.</span>
          </div>
        </div>
      </div>
      <ProofStrip />
    </section>
  );
}

function ProofStrip() {
  const items = [
    { num: "16", label: "intelligence sources" },
    { num: "46", label: "creative assets" },
    { num: "35", label: "minutes per brief" },
    { num: "$99", label: "one-time" },
    { num: "96%", label: "brief success rate" },
  ];
  return (
    <div className="hairline-t hairline-b">
      <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-6">
        {items.map((it) => (
          <div key={it.label} className="flex items-baseline gap-2">
            <span className="num text-[20px] tracking-tight" style={{ color: "var(--text-1)" }}>
              {it.num}
            </span>
            <span className="text-[12.5px]" style={{ color: "var(--text-3)" }}>
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5L6 11.5L13 4.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
