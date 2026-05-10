import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "../Section";

const OUTPUTS = [
  { stat: "15", label: "customer pain points" },
  { stat: "20", label: "search-intent keywords" },
  { stat: "12", label: "winning angles" },
  { stat: "24", label: "creative hooks" },
  { stat: "7-day", label: "campaign roadmap" },
  { stat: "Kill / scale", label: "rules" },
];

export function SampleProof() {
  return (
    <Section bordered id="sample-proof">
      <Eyebrow>Real sample</Eyebrow>
      <H2 className="max-w-[26ch]">See what Munero actually produces.</H2>
      <Lede>
        A real sample run shows how Munero turns market signals into pain
        points, search intent, competitor gaps, winning angles, creative
        hooks, and a campaign plan.
      </Lede>

      {/* Artifact preview card */}
      <div
        className="mt-10 rounded-xl overflow-hidden"
        style={{
          background: "var(--surface)",
          border: "0.5px solid var(--border-2)",
        }}
      >
        {/* Header bar — looks like a real workspace artifact */}
        <div
          className="flex items-center gap-3 px-5 py-3.5"
          style={{
            background: "var(--surface-2)",
            borderBottom: "0.5px solid var(--border)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent-light)",
              boxShadow: "0 0 6px var(--accent)",
            }}
          />
          <span
            className="num"
            style={{ fontSize: 11, color: "var(--text-3)" }}
          >
            app.munero.ai · Brief #SCN-2026-04
          </span>
          <span
            className="num ml-auto"
            style={{
              fontSize: 9,
              letterSpacing: "0.16em",
              color: "var(--accent-light)",
              background: "rgba(0, 229, 160, 0.1)",
              border: "0.5px solid rgba(0, 229, 160, 0.3)",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            DELIVERED
          </span>
        </div>

        {/* Brief identity */}
        <div className="px-5 py-5 md:px-7 md:py-6 hairline-b">
          <div
            className="num"
            style={{
              fontSize: 10,
              color: "var(--accent-light)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontWeight: 600,
            }}
          >
            MUNERO MARKET INTELLIGENCE BRIEF
          </div>
          <div
            className="mt-2"
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.015em",
            }}
          >
            SparkClean
          </div>
          <div
            className="num mt-1"
            style={{
              fontSize: 12,
              color: "var(--text-2)",
            }}
          >
            DTC cleaning brand · United States · $10K / mo budget
          </div>
        </div>

        {/* Outputs grid */}
        <ul
          className="grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {OUTPUTS.map((o) => (
            <li
              key={o.label}
              className="p-5"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="num"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {o.stat}
              </div>
              <div
                className="mt-1.5"
                style={{
                  fontSize: 12.5,
                  color: "rgba(184, 184, 200, 0.95)",
                  lineHeight: 1.4,
                }}
              >
                {o.label}
              </div>
            </li>
          ))}
        </ul>

        {/* Footer with SHA-256 trust line + CTA */}
        <div
          className="px-5 py-4 md:px-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "0.5px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="7"
                width="9"
                height="6.5"
                rx="1"
                stroke="var(--accent)"
                strokeWidth="1.25"
              />
              <path
                d="M5.5 7V5a2.5 2.5 0 015 0v2"
                stroke="var(--accent)"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="num"
              style={{
                fontSize: 11,
                color: "var(--text-3)",
                lineHeight: 1.5,
              }}
            >
              Every major claim traceable to source signals, confidence levels,
              and evidence notes. SHA-256 audit hash on every brief.
            </span>
          </div>
          <Link
            href="/sample"
            className="num shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded transition-colors"
            style={{
              fontSize: 12,
              color: "var(--accent-light)",
              background: "rgba(29, 158, 117, 0.12)",
              border: "0.5px solid var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            View sample brief
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
