import { Section, Eyebrow, H2, Lede } from "../Section";

const cards = [
  {
    n: "46",
    u: "hrs/mo",
    t: "Hours lost to manual synthesis",
    b: "Agency strategists spend significant time manually building campaign briefs from disconnected tools.",
    src: "Fluency, 2025",
  },
  {
    n: "Too",
    u: "much",
    t: "Budget wasted before learning",
    b: "Most campaigns only reveal weak messaging after the media spend has already started.",
    src: "",
  },
  {
    n: "95",
    u: "%",
    t: "Marketers struggling to target effectively",
    b: "Most marketers struggle to find and target audiences in a fragmented attention economy.",
    src: "Hightouch, 2026",
  },
  {
    n: "1 in 4",
    u: "",
    t: "Agencies launch too slowly",
    b: "Too many agencies take more than a week from campaign kickoff to live.",
    src: "Fluency, 2025",
  },
  {
    n: "40",
    u: "%",
    t: "Juggling too many budget tools",
    b: "Agencies use multiple tools just to pace budgets before any creative work starts.",
    src: "Fluency, 2025",
  },
  {
    n: "10",
    u: "%",
    t: "AI adoption gap",
    b: "Only 10% of marketers feel they use AI effectively, while 75% say they want to.",
    src: "Hightouch, 2026",
  },
];

export function Problem() {
  return (
    <Section bordered id="problem">
      <Eyebrow>The problem</Eyebrow>
      <H2 className="max-w-[20ch]">
        The problem every marketer <span className="italic-accent">knows</span>.
      </H2>
      <Lede>
        You don't need more dashboards. You need the brief that turns scattered signal into a
        launch-ready plan, before the money moves.
      </Lede>

      <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px hairline">
        {cards.map((c) => (
          <li
            key={c.t}
            className="relative p-7 hover-lift overflow-hidden"
            style={{ background: "var(--surface)" }}
          >
            {/* Subtle red ambient glow per card */}
            <span
              aria-hidden
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 87, 87, 0.06) 0%, transparent 70%)",
              }}
            />
            <div className="num text-[36px] md:text-[42px] leading-none flex items-baseline gap-1.5">
              <span style={{ color: "var(--text)" }}>{c.n}</span>
              {c.u && (
                <span className="text-[14px]" style={{ color: "var(--text-3)" }}>
                  {c.u}
                </span>
              )}
            </div>
            <div className="mt-4 text-[15px] font-medium tracking-tight">{c.t}</div>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              {c.b}
            </p>
            {c.src && (
              <div className="mt-5 num text-[10.5px]" style={{ color: "var(--text-3)" }}>
                {c.src}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
