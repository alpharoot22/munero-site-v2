import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "../Section";

const STRIPE_AGENCY =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=agency";

const stats = [
  {
    n: "Unlimited",
    cadence: "briefs",
    label: "across all clients · no per-brief cost",
  },
  {
    n: "White-label",
    cadence: "outputs",
    label: "your brand · your domain · no Munero shown",
  },
  {
    n: "Multi-client",
    cadence: "command center",
    label: "team seats · client workspaces · repeatable workflows",
  },
];

export function AgencyTease() {
  return (
    <Section bordered id="agency-tease">
      <Eyebrow>For agencies</Eyebrow>
      <H2 className="max-w-[26ch]">
        One agency workspace. Every client. Unlimited briefs.
      </H2>
      <Lede>
        $499 / month opens an agency workspace built for client strategy.
        White-label outputs. Multi-client command center. Team seats.
        Repeatable intelligence workflows. Higher-margin strategy delivery.
      </Lede>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex items-baseline gap-2">
              <span
                className="num text-[36px] tracking-[-0.02em] leading-none"
                style={{ color: "var(--accent)" }}
              >
                {s.n}
              </span>
              <span
                className="num text-[12.5px]"
                style={{ color: "var(--text-3)" }}
              >
                {s.cadence}
              </span>
            </div>
            <p
              className="mt-3 text-[14px] leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <a href={STRIPE_AGENCY} className="btn-primary">
          Open agency workspace
          <Arrow />
        </a>
        <Link href="/agency" className="btn-secondary">
          See agency features
          <Arrow />
        </Link>
      </div>
    </Section>
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
