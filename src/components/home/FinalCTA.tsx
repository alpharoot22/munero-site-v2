import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="hairline-t bg-radial-subtle">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="max-w-[28ch]">
          <h2 className="text-[40px] md:text-[64px] tracking-[-0.03em] leading-[1.02] font-medium">
            Stop shipping ads
            <br />
            <span style={{ color: "var(--text-2)" }}>built on guesses.</span>
          </h2>
          <p
            className="mt-6 text-[17px] leading-relaxed max-w-[52ch]"
            style={{ color: "var(--text-2)" }}
          >
            Get a complete, defensible campaign brief in 35 minutes. $99 one-time. If it doesn't
            pass our quality bar, we re-run it on us.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="https://munero.ai" className="btn-primary">
              Get my brief for $99
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
