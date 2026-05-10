import type { Metadata } from "next";
import { Section, Eyebrow, H2, Lede } from "../../components/Section";
import { Pricing } from "../../components/home/Pricing";
import { FAQ } from "../../components/home/FAQ";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pay per brief at $99, $149, or $299. Or run unlimited briefs on the $499 Agency plan.",
};

interface MatrixRow {
  feature: string;
  starter: boolean;
  feed: boolean;
  creative: boolean;
  agency: boolean;
}

const matrix: MatrixRow[] = [
  // Brief + workspace features
  { feature: "Workspace opens immediately",          starter: true,  feed: false, creative: true,  agency: true },
  { feature: "First brief included",                 starter: true,  feed: false, creative: true,  agency: true },
  { feature: "16 intelligence squads (per brief)",   starter: true,  feed: false, creative: true,  agency: true },
  { feature: "Audience + pain point library",        starter: true,  feed: false, creative: true,  agency: true },
  { feature: "Competitor analysis (10 deep dives)",  starter: true,  feed: false, creative: true,  agency: true },
  { feature: "Final strategy + opportunity score",   starter: true,  feed: false, creative: true,  agency: true },
  { feature: "30-day campaign plan + kill rules",    starter: true,  feed: false, creative: true,  agency: true },
  { feature: "SHA-256 audit hash",                   starter: true,  feed: false, creative: true,  agency: true },

  // Intelligence Feed (recurring signals)
  { feature: "Weekly intelligence digest",           starter: false, feed: true,  creative: false, agency: true },
  { feature: "Competitor ad change alerts (real-time)", starter: false, feed: true, creative: false, agency: true },
  { feature: "Rising pain point detection",          starter: false, feed: true,  creative: false, agency: true },
  { feature: "Buy alerts when demand spikes",        starter: false, feed: true,  creative: false, agency: true },
  { feature: "Market gap notifications",             starter: false, feed: true,  creative: false, agency: true },
  { feature: "Cancel anytime",                       starter: false, feed: true,  creative: false, agency: true },

  // Creative production
  { feature: "Deep research module",                 starter: false, feed: false, creative: true,  agency: true },
  { feature: "Extended competitor deep dive",        starter: false, feed: false, creative: true,  agency: true },
  { feature: "46 creative assets",                   starter: false, feed: false, creative: true,  agency: true },
  { feature: "Auto image generation",                starter: false, feed: false, creative: true,  agency: true },
  { feature: "Video credits (Higgsfield AI)",        starter: false, feed: false, creative: true,  agency: true },
  { feature: "Direct-import ad files",               starter: false, feed: false, creative: true,  agency: true },
  { feature: "Compliance review",                    starter: false, feed: false, creative: true,  agency: true },

  // Agency-only
  { feature: "Unlimited briefs",                     starter: false, feed: false, creative: false, agency: true },
  { feature: "White-label reports",                  starter: false, feed: false, creative: false, agency: true },
  { feature: "Multi-client command center",          starter: false, feed: false, creative: false, agency: true },
  { feature: "Team seats + role permissions",        starter: false, feed: false, creative: false, agency: true },
  { feature: "Slack / Notion / Drive / Canva",       starter: false, feed: false, creative: false, agency: true },
];

type SearchParams = Promise<{ registered?: string; name?: string }>;

export default async function PricingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const isRegistered = params.registered === "true";
  const visitorName =
    typeof params.name === "string" ? params.name.trim().slice(0, 60) : "";

  return (
    <>
      {isRegistered && (
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <div
            className="text-center py-5 px-6 rounded-md hairline"
            style={{
              background: "var(--surface)",
              borderColor: "rgba(29, 158, 117, 0.4)",
            }}
          >
            <p
              className="num text-[10.5px] uppercase tracking-[0.16em] mb-1.5"
              style={{ color: "var(--accent)" }}
            >
              You're registered
            </p>
            <p
              className="text-[16.5px] font-semibold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Welcome{visitorName ? `, ${visitorName}` : ""}. Choose your plan to get started.
            </p>
            <p className="text-[13px] mt-1" style={{ color: "var(--text-2)" }}>
              Your details are saved. You can come back anytime.
            </p>
          </div>
        </div>
      )}

      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <H2 className="max-w-[22ch]">No subscription unless you want one.</H2>
        <Lede>
          Starter and Creative Workspaces are one-time payments. Intelligence Feed and Agency
          Workspace are monthly subscriptions. Mix and match as you scale.
        </Lede>
      </Section>

      <Pricing />

      <Section bordered>
        <Eyebrow>Side by side</Eyebrow>
        <H2>What's in each tier.</H2>

        <div className="mt-12 hairline rounded-md overflow-x-auto" style={{ background: "var(--surface)" }}>
          <table className="w-full text-left text-[14px]">
            <thead className="hairline-b">
              <tr>
                <th
                  className="py-4 px-5 font-medium num text-[10.5px] tracking-[0.12em]"
                  style={{ color: "var(--text-3)" }}
                >
                  FEATURE
                </th>
                <th className="py-4 px-5 font-semibold text-left">
                  Starter
                  <div
                    className="num text-[10px]"
                    style={{ color: "var(--text-3)", letterSpacing: "0.04em" }}
                  >
                    $99 one-time
                  </div>
                </th>
                <th className="py-4 px-5 font-semibold text-left" style={{ color: "#FFB547" }}>
                  Feed
                  <div
                    className="num text-[10px]"
                    style={{ color: "rgba(255,183,71,0.7)", letterSpacing: "0.04em" }}
                  >
                    $49 / mo
                  </div>
                </th>
                <th className="py-4 px-5 font-semibold text-left" style={{ color: "var(--accent-light)" }}>
                  Creative
                  <div
                    className="num text-[10px]"
                    style={{ color: "var(--text-3)", letterSpacing: "0.04em" }}
                  >
                    $299 one-time
                  </div>
                </th>
                <th className="py-4 px-5 font-semibold text-left">
                  Agency
                  <div
                    className="num text-[10px]"
                    style={{ color: "var(--score-mid)", letterSpacing: "0.04em" }}
                  >
                    $499 / mo
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.feature} className="hairline-b last:border-b-0">
                  <td className="py-3.5 px-5" style={{ color: "var(--text-2)" }}>
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5">{row.starter ? <Tick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.feed ? <FeedTick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.creative ? <Tick /> : <Dash />}</td>
                  <td className="py-3.5 px-5">{row.agency ? <Tick /> : <Dash />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FAQ />
    </>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

function FeedTick() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5L6 11.5L13 4.5"
        stroke="#FFB547"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dash() {
  return (
    <span style={{ color: "var(--text-3)" }} className="num text-[12px]">
      ·
    </span>
  );
}
