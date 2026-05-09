import Link from "next/link";
import { Section, Eyebrow, H2, Lede } from "../Section";

const points = [
  {
    h: "Win pitches with research competitors don't have",
    b: "Walk into pitches with buying signal data your competitors literally cannot produce. Real Reddit complaints, live competitor ad analysis, audience pain mapping.",
  },
  {
    h: "White-label briefs under your agency brand",
    b: "Reports delivered with your logo, your colors, your domain. Clients never see Munero unless you want them to.",
  },
  {
    h: "Add a $500 to $1,500 / month research line item",
    b: "Charge clients for pre-campaign intelligence at near-100% margin. One Munero subscription covers your entire roster.",
  },
  {
    h: "One subscription, every client",
    b: "Multi-client command center, team seats, role-based access. Built for shops running 5 to 50 clients in parallel.",
  },
];

export function AgencyTease() {
  return (
    <Section bordered id="agency">
      <Eyebrow>For agencies</Eyebrow>
      <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
        <div>
          <H2>
            A productized intelligence layer for your <span className="italic-accent">agency</span>.
          </H2>
          <Lede>
            $499 / month covers unlimited briefs across your entire client roster. White-label,
            multi-seat, integrations included.
          </Lede>
          <div className="mt-8 flex gap-3">
            <Link href="/agency" className="btn-primary">
              See agency pricing
            </Link>
          </div>
        </div>

        <ol className="space-y-6">
          {points.map((p, i) => (
            <li key={p.h} className="grid grid-cols-[auto_1fr] gap-5 items-start">
              <span className="num text-[13px] mt-1" style={{ color: "var(--accent)" }}>
                0{i + 1}
              </span>
              <div>
                <h3 className="text-[16.5px] tracking-tight font-medium">{p.h}</h3>
                <p
                  className="mt-1.5 text-[14px] leading-relaxed max-w-[55ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {p.b}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
