interface Squad {
  id: string;
  name: string;
  source: string;
  detail: string;
  cluster: "pain" | "intent" | "trends" | "creative";
}

const SQUADS: Squad[] = [
  // Pain & buyer-language cluster (green)
  { id: "01", name: "Reddit Scout",          source: "Reddit",       detail: "Pain points and buyer language",         cluster: "pain"   },
  { id: "02", name: "Quora Scout",           source: "Quora",        detail: "Questions and unmet needs",              cluster: "pain"   },
  { id: "03", name: "Forum Scout",           source: "Forums",       detail: "Community discussions and reviews",      cluster: "pain"   },
  { id: "04", name: "Amazon Analyst",        source: "Amazon",       detail: "Reviews, pricing, market gaps",          cluster: "pain"   },
  { id: "05", name: "Trustpilot Analyst",    source: "Trustpilot",   detail: "Brand reputation and complaints",        cluster: "pain"   },
  { id: "06", name: "Yelp Analyst",          source: "Yelp",         detail: "Local market and behavior",              cluster: "pain"   },
  { id: "07", name: "Pain Synthesizer",      source: "Aggregator",   detail: "Ranks pain points across all sources",   cluster: "pain"   },

  // Search & intent cluster (purple)
  { id: "08", name: "Autocomplete Scanner",  source: "Google",       detail: "Buying signals from autocomplete",       cluster: "intent" },
  { id: "09", name: "PAA Scanner",           source: "Google",       detail: "People Also Ask content gaps",           cluster: "intent" },
  { id: "10", name: "Related Search",        source: "Google",       detail: "Search journey awareness → purchase",    cluster: "intent" },
  { id: "11", name: "Commercial Intent",     source: "Google",       detail: "CPC estimates and advertiser pressure",  cluster: "intent" },
  { id: "12", name: "AI Overview",           source: "Google",       detail: "Market consensus and strategic gaps",    cluster: "intent" },
  { id: "13", name: "Intent Synthesizer",    source: "Aggregator",   detail: "Unified keyword and intent strategy",    cluster: "intent" },

  // Trends & news cluster (blue)
  { id: "14", name: "Trends Tracker",        source: "Google Trends", detail: "Seasonality and campaign timing",       cluster: "trends" },
  { id: "15", name: "Rising Queries",        source: "Google Trends", detail: "Breakout trends and emerging demand",   cluster: "trends" },
  { id: "16", name: "News Scanner",          source: "Google News",   detail: "Newsjacking opportunities and PR risk", cluster: "trends" },
];

const CLUSTER_COLORS: Record<Squad["cluster"], { color: string; label: string }> = {
  pain:    { color: "#1D9E75", label: "Pain & buyer language" },
  intent:  { color: "#8B5CF6", label: "Search & intent" },
  trends:  { color: "#3B82F6", label: "Trends & news" },
  creative:{ color: "#F97316", label: "Creative" },
};

export function IntelligenceSquads() {
  return (
    <section style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "88px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40, maxWidth: 720 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Inside the engine
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
            16 intelligence squads,{" "}
            <span style={{ color: "#1D9E75" }}>working in parallel.</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 15,
              color: "#9898A8",
              lineHeight: 1.55,
              maxWidth: "60ch",
            }}
          >
            Each squad scans a specific source, ranks what it finds, and ships
            findings to the synthesizers. The result is a structured brief
            that cites every claim.
          </p>
        </div>

        {/* Cluster legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
          {(Object.keys(CLUSTER_COLORS) as Squad["cluster"][]).slice(0, 3).map((c) => (
            <span
              key={c}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 12px",
                background: "#0A0A12",
                border: `0.5px solid ${CLUSTER_COLORS[c].color}44`,
                borderRadius: 999,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 12,
                color: "#9898A8",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: CLUSTER_COLORS[c].color,
                }}
                aria-hidden="true"
              />
              {CLUSTER_COLORS[c].label}
            </span>
          ))}
        </div>

        <div className="sq-grid">
          {SQUADS.map((s) => (
            <SquadCard key={s.id} squad={s} />
          ))}
        </div>
      </div>

      <style>{`
        .sq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 560px)  { .sq-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px)  { .sq-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .sq-grid { grid-template-columns: repeat(4, 1fr); } }
        .sq-card { transition: border-color 150ms ease-out, transform 150ms ease-out; }
        .sq-card:hover { border-color: var(--sq-color); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function SquadCard({ squad }: { squad: Squad }) {
  const { color } = CLUSTER_COLORS[squad.cluster];
  return (
    <article
      className="sq-card"
      style={
        {
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 14,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          ["--sq-color" as string]: color,
        } as React.CSSProperties
      }
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10.5,
            color,
            letterSpacing: "0.06em",
          }}
        >
          {squad.id}
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9.5,
            color: "#505068",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "#10101A",
            border: "0.5px solid #1E1E2E",
            borderRadius: 999,
            padding: "2px 8px",
          }}
        >
          {squad.source}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: 14.5,
          color: "#E8E8F0",
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {squad.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 12.5,
          color: "#9898A8",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {squad.detail}
      </p>
    </article>
  );
}
