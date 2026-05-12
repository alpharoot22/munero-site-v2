interface Section {
  num: string;
  name: string;
  detail: string;
}

const SECTIONS: Section[] = [
  { num: "01", name: "Executive summary",      detail: "Strategy in one page, with the recommended attack and budget shift." },
  { num: "02", name: "Market opportunity score", detail: "0–100 score across demand, saturation, whitespace, and pain intensity." },
  { num: "03", name: "Audience segments",      detail: "Three primary segments with pain language, channel weighting, and intent scores." },
  { num: "04", name: "Pain point library",     detail: "47 pain points ranked by frequency and emotional intensity. Source-cited." },
  { num: "05", name: "Search intent keywords", detail: "Buy / Research / Brand-aware split with CPC + trend direction." },
  { num: "06", name: "Competitor gaps",        detail: "10 competitor deep-dives. Coverage scores. Open lanes flagged." },
  { num: "07", name: "Winning angles",         detail: "5 angles ranked by predicted opportunity, validated against 380 winning ads." },
  { num: "08", name: "Hooks ranked by signal", detail: "24 hooks scored against your audience clusters, top 5 highlighted." },
  { num: "09", name: "Creative briefs",        detail: "46 assets briefed across Meta, TikTok, Google. Each with hook, body, CTA, spec." },
  { num: "10", name: "Image + video kit",      detail: "Generated images and Higgsfield-ready scripts. Direct-import zip." },
  { num: "11", name: "Landing page direction", detail: "Hero hook, 4 modules briefed for the highest-scoring angle." },
  { num: "12", name: "Campaign plan",          detail: "30-day rollout across channels with daily cadence and budget allocation." },
  { num: "13", name: "KPI targets",            detail: "Per-channel targets and floors. Drives the kill / scale rules below." },
  { num: "14", name: "Kill & scale rules",     detail: "Quantified rules. No emotional spend. Re-evaluated against your actuals." },
  { num: "15", name: "Evidence library",       detail: "57 cited sources across Reddit, Trustpilot, Meta Ad Library, and more." },
  { num: "16", name: "SHA-256 audit hash",     detail: "Tamper-proof signature on every brief. Shareable with legal and clients." },
];

export function BriefAnatomy() {
  return (
    <section style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "88px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40, maxWidth: 720 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#3B82F6",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            The deliverable
          </span>
          <h2
            style={{
              marginTop: 14,
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: "#E8E8F0",
              letterSpacing: "-0.028em",
              lineHeight: 1.15,
            }}
          >
            Anatomy of a Munero brief.{" "}
            <span style={{ color: "#3B82F6" }}>16 sections.</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 15,
              color: "#9898A8",
              lineHeight: 1.55,
              maxWidth: "62ch",
            }}
          >
            Every brief lands with the same structure. Run it once and your team
            knows exactly where to look for the angle, the hook, the budget, and
            the proof.
          </p>
        </div>

        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 0,
            listStyle: "none",
            padding: 0,
            margin: 0,
            background: "#0A0A12",
            border: "0.5px solid #1E1E2E",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {SECTIONS.map((s, i) => (
            <li
              key={s.num}
              style={{
                display: "grid",
                gridTemplateColumns: "62px minmax(0, 1.2fr) minmax(0, 2fr)",
                alignItems: "center",
                gap: 18,
                padding: "18px 24px",
                borderTop: i === 0 ? "none" : "0.5px solid #1E1E2E",
              }}
              className="anat-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "#505068",
                  letterSpacing: "0.08em",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 14.5,
                  color: "#E8E8F0",
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                }}
              >
                {s.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 13,
                  color: "#9898A8",
                  lineHeight: 1.5,
                }}
              >
                {s.detail}
              </span>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: 28, textAlign: "center" }}>
          <a
            href="/sample"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              color: "#1D9E75",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 150ms ease-out",
            }}
            className="anat-link"
          >
            See a full sample brief
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .anat-row:hover { background: rgba(29,158,117,0.03); }
        .anat-link:hover { color: #25B889 !important; }
        @media (max-width: 720px) {
          .anat-row {
            grid-template-columns: 48px minmax(0, 1fr) !important;
          }
          .anat-row > *:last-child {
            grid-column: 2 / -1;
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
