import { Section, Eyebrow, H2, Lede } from "../Section";

const specialists = [
  { name: "Intelligence Analyst",  spec: "Strategy + signal",     ex: "What should I test this week?" },
  { name: "Competitor Analyst",    spec: "Watchlist + threats",   ex: "Who is copying our angles?" },
  { name: "Creative Director",     spec: "Hooks + variants",      ex: "Which hook is strongest?" },
  { name: "Media Buyer",           spec: "Allocation + pacing",   ex: "How should I split my $5K?" },
  { name: "Landing Page Advisor",  spec: "Page copy + structure", ex: "What should my hero say?" },
  { name: "Compliance Reviewer",   spec: "Policy + claims",       ex: "Does this ad pass Meta?" },
  { name: "Weekly Update",         spec: "Digest generator",      ex: "Generate this week's update" },
  { name: "Board Report",          spec: "Exec summary",          ex: "Build my board deck" },
];

export function Assistants() {
  return (
    <Section bordered id="assistants">
      <Eyebrow>AI assistants</Eyebrow>
      <H2 className="max-w-[24ch]">9 AI assistants, always on.</H2>
      <Lede>
        8 specialists for the work itself. 1 navigator with full workspace context, on every
        page.
      </Lede>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
        {/* Global Navigator — large card with mock chat */}
        <div
          className="hairline rounded-md p-6 md:p-7 flex flex-col"
          style={{ background: "var(--surface)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
                09
              </div>
              <div className="mt-1 text-[18px] font-semibold tracking-tight">
                Global AI Navigator
              </div>
              <div className="text-[13px] mt-1" style={{ color: "var(--text-2)" }}>
                Persistent on every page, full workspace context.
              </div>
            </div>
            <span
              className="num text-[9.5px] tracking-[0.12em] px-2 py-1 rounded"
              style={{
                background: "var(--accent-glow)",
                color: "var(--accent-light)",
                border: "0.5px solid var(--accent)",
              }}
            >
              ALWAYS ON
            </span>
          </div>

          {/* Mock chat — Intelligence Analyst conversation */}
          <div
            className="hairline rounded-md p-4 space-y-3 flex-1"
            style={{ background: "var(--surface-2)" }}
          >
            <div className="flex gap-3 items-start">
              <span
                className="num text-[10px] mt-1 shrink-0"
                style={{ color: "var(--text-3)" }}
              >
                YOU
              </span>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                What should I test this week given last week's CPA?
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span
                className="num text-[10px] mt-1 shrink-0"
                style={{ color: "var(--accent)" }}
              >
                MUN
              </span>
              <div className="text-[13.5px] leading-relaxed" style={{ color: "var(--text)" }}>
                Hook 03 (durability proof) is converting at $42 CPA, 38% under target. Pause
                hooks 07 and 09. Reallocate $1,400 from underperformers into Hook 03 variants.
                I drafted 4 variant headlines in your{" "}
                <span style={{ color: "var(--accent-light)" }}>Variation Generator</span>.
              </div>
            </div>
            <div
              className="num text-[10px] pt-2 hairline-t"
              style={{ color: "var(--text-3)" }}
            >
              Citations: Day 7 review · Hook leaderboard · Decision log
            </div>
          </div>
        </div>

        {/* 8 specialists */}
        <ul className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-px hairline rounded-md overflow-hidden">
          {specialists.map((s, i) => (
            <li
              key={s.name}
              className="p-4 hover-lift"
              style={{ background: "var(--surface)" }}
            >
              <div className="num text-[10px]" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[13.5px] font-semibold tracking-tight leading-tight">
                {s.name}
              </div>
              <div className="text-[11.5px] mt-1" style={{ color: "var(--text-3)" }}>
                {s.spec}
              </div>
              <div
                className="mt-2 text-[12px] italic leading-snug"
                style={{ color: "var(--text-2)" }}
              >
                &ldquo;{s.ex}&rdquo;
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
