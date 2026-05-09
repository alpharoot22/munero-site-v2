import { Section, Eyebrow, H2 } from "../Section";

const blocks = [
  {
    eyebrow: "Workspace",
    title: "Dashboard, runs, and a Next Best Action card.",
    body:
      "Every brief lives in a workspace tied to your brand. Cross-brief intelligence accumulates as market memory. The Next Best Action card tells you the single highest-leverage move to make today.",
    visual: (
      <BoxVisual>
        <RowMock label="Next best action" value="Refresh competitor X positioning" pulse />
        <RowMock label="Briefs run" value="28" />
        <RowMock label="Avg market opportunity" value="74 / 100" />
        <RowMock label="Cross-brand patterns" value="12 detected" />
      </BoxVisual>
    ),
  },
  {
    eyebrow: "Intelligence libraries",
    title: "Pain points, competitors, evidence, keywords, trends.",
    body:
      "Pain points ranked by frequency and emotion. Competitor watchlist with threat levels and attack angles. Evidence library with 50+ items per brief. Keyword and trend intelligence with progress bars on growth rate.",
    visual: (
      <BoxVisual>
        <BarRow label="High-intent / underserved" value={86} />
        <BarRow label="Threat level: Acme" value={62} />
        <BarRow label="'best [category] for x'" value={48} />
        <BarRow label="Trend: 18mo growth" value={34} />
      </BoxVisual>
    ),
  },
  {
    eyebrow: "Creative + plan",
    title: "Studio, action board, performance tracker.",
    body:
      "46 assets per brief with status tracking. Sliders for budget allocation. KPI cards with predicted vs actual once campaigns launch. Kill rules baked in. White-label reports for agencies.",
    visual: (
      <BoxVisual>
        <RowMock label="Assets shipped" value="38 of 46" />
        <RowMock label="ROAS predicted" value="2.4x" />
        <RowMock label="ROAS actual" value="2.7x" success />
        <RowMock label="Kill triggered" value="0 of 3" />
      </BoxVisual>
    ),
  },
  {
    eyebrow: "AI assistants",
    title: "8 specialists and a global navigator.",
    body:
      "Intelligence Analyst, Competitor Analyst, Creative Director, Media Buyer, Landing Advisor, Compliance Reviewer, Weekly Update, Board Report. Plus a persistent navigator with full workspace context across every page.",
    visual: (
      <BoxVisual>
        {[
          "Intelligence Analyst",
          "Competitor Analyst",
          "Creative Director",
          "Media Buyer",
          "Landing Advisor",
          "Compliance Reviewer",
          "Weekly Update",
          "Board Report",
        ].map((n) => (
          <div
            key={n}
            className="flex items-center gap-2.5 py-1.5 text-[12.5px]"
            style={{ color: "var(--text-2)" }}
          >
            <span className="num text-[10.5px]" style={{ color: "var(--text-3)" }}>
              {String(["Intelligence Analyst","Competitor Analyst","Creative Director","Media Buyer","Landing Advisor","Compliance Reviewer","Weekly Update","Board Report"].indexOf(n) + 1).padStart(2,"0")}
            </span>
            {n}
          </div>
        ))}
      </BoxVisual>
    ),
  },
];

export function Platform() {
  return (
    <Section bordered id="platform">
      <Eyebrow>The platform</Eyebrow>
      <H2 className="max-w-[20ch]">More than a one-shot brief. A workspace that compounds.</H2>

      <div className="mt-16 space-y-24">
        {blocks.map((b, i) => (
          <div
            key={b.title}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.16em] num mb-3"
                style={{ color: "var(--text-3)" }}
              >
                {b.eyebrow}
              </div>
              <h3 className="text-[26px] md:text-[30px] tracking-[-0.02em] leading-[1.1] font-medium">
                {b.title}
              </h3>
              <p
                className="mt-4 text-[15.5px] leading-relaxed max-w-[52ch]"
                style={{ color: "var(--text-2)" }}
              >
                {b.body}
              </p>
            </div>
            <div>{b.visual}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BoxVisual({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="hairline rounded-md p-5 md:p-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="flex items-center gap-1.5 mb-4">
        <span
          className="block w-2 h-2 rounded-full"
          style={{ background: "var(--text-3)", opacity: 0.4 }}
        />
        <span
          className="block w-2 h-2 rounded-full"
          style={{ background: "var(--text-3)", opacity: 0.4 }}
        />
        <span
          className="block w-2 h-2 rounded-full"
          style={{ background: "var(--text-3)", opacity: 0.4 }}
        />
        <span
          className="ml-3 text-[11px] num"
          style={{ color: "var(--text-3)" }}
        >
          munero.ai
        </span>
      </div>
      <div className="hairline-t pt-4 space-y-2.5">{children}</div>
    </div>
  );
}

function RowMock({
  label,
  value,
  pulse,
  success,
}: {
  label: string;
  value: string;
  pulse?: boolean;
  success?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between py-2 hairline-b last:border-b-0 text-[13px]"
    >
      <span style={{ color: "var(--text-2)" }} className="flex items-center gap-2">
        {pulse && (
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        )}
        {label}
      </span>
      <span
        className="num"
        style={{
          color: success ? "var(--score-high)" : "var(--text)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function BarRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="py-2">
      <div className="flex justify-between text-[12.5px] mb-1.5">
        <span style={{ color: "var(--text-2)" }}>{label}</span>
        <span className="num" style={{ color: "var(--text)" }}>
          {value}
        </span>
      </div>
      <div
        className="h-[3px] rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          className="h-full"
          style={{
            width: `${value}%`,
            background: "var(--accent)",
          }}
        />
      </div>
    </div>
  );
}
