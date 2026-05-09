import Link from "next/link";

/**
 * Site-wide top banner that sits above the sticky Nav.
 * Scrolls out of view normally — only the Nav remains sticky.
 */
export function TopBanner() {
  return (
    <div
      className="hairline-b"
      style={{
        background: "var(--surface-2)",
        position: "relative",
        zIndex: 60,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 h-11 flex items-center justify-center gap-3 md:gap-4">
        <span
          className="block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
          aria-hidden="true"
        />
        <span
          className="text-[12.5px] md:text-[13px] truncate"
          style={{ color: "var(--text-2)" }}
        >
          <span className="hidden sm:inline">
            See a real Munero sample brief before you commit
          </span>
          <span className="sm:hidden">See a sample brief first</span>
        </span>
        <Link
          href="/sample"
          className="num text-[11px] tracking-[0.08em] uppercase shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors"
          style={{
            color: "var(--accent-light)",
            background: "rgba(29, 158, 117, 0.12)",
            border: "0.5px solid var(--accent)",
          }}
        >
          View sample
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
