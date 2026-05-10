import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "../Section";

const BULLETS = [
  "Multi-client workspace",
  "White-label outputs",
  "Team seats",
  "Unlimited briefs on Agency Workspace",
  "Faster pitch and strategy delivery",
];

export function AgencyTease() {
  return (
    <Section bordered id="agency-tease">
      <Eyebrow>For agencies</Eyebrow>
      <H2 className="max-w-[28ch]">
        Turn Munero into a{" "}
        <span style={{ color: "var(--accent)" }}>$500 to $1,500 / mo</span>{" "}
        strategy line item.
      </H2>
      <Lede>
        Run client intelligence briefs, white-label the output, and deliver
        campaign-ready strategy at near-100% margin, without adding research
        headcount.
      </Lede>

      <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {BULLETS.map((b) => (
            <li
              key={b}
              className="text-[14px] leading-relaxed grid grid-cols-[auto_1fr] gap-2.5"
              style={{ color: "var(--text)" }}
            >
              <Tick />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Link href="/agency" className="btn-secondary self-center">
          See agency workspace
          <Arrow />
        </Link>
      </div>
    </Section>
  );
}

function Tick() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-1"
    >
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

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
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
