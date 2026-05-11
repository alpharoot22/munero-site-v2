interface Item {
  name: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    name: "Market Brief",
    desc: "Data-backed insights on demand, trends, pain points, and competitors.",
    color: "#1D9E75",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9 H15 M9 12 H15 M9 15 H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Creative Pack",
    desc: "High-performing hooks, ad copy, visuals, and variations.",
    color: "#8B5CF6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2 L14 9 L21 10 L14 11 L12 18 L10 11 L3 10 L10 9 Z" fill="currentColor" />
        <circle cx="19" cy="5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Campaign Plan",
    desc: "Audience targeting, offer strategy, and channel recommendations.",
    color: "#3B82F6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9 H21 M8 4 V20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Learning Loop",
    desc: "Performance tracking, insights, and next-best actions.",
    color: "#F97316",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 12 A8 8 0 1 1 12 4 M20 4 V12 H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export function WhatYouGet() {
  return (
    <section style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#1D9E75",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            What you get
          </span>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 17,
              color: "#9898A8",
            }}
          >
            Everything you need to launch and scale with confidence.
          </p>
        </div>

        <div className="get-grid">
          {ITEMS.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        .get-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 720px)  { .get-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .get-grid { grid-template-columns: repeat(4, 1fr); } }
        .get-card { transition: border-color 200ms ease-out, transform 200ms ease-out; }
        .get-card:hover { border-color: var(--card-color); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <article
      className="get-card"
      style={
        {
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 16,
          padding: 24,
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          ["--card-color" as string]: item.color,
        } as React.CSSProperties
      }
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${item.color}1A`,
          border: `0.5px solid ${item.color}33`,
          color: item.color,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <div style={{ minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: 16,
            color: "#E8E8F0",
            letterSpacing: "-0.012em",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            marginTop: 6,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#9898A8",
            lineHeight: 1.5,
          }}
        >
          {item.desc}
        </p>
      </div>
    </article>
  );
}
