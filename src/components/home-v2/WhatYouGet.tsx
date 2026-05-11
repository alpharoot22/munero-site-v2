interface Deliverable {
  name: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

const DELIVERABLES: Deliverable[] = [
  {
    name: "Market Brief",
    desc: "Pain points, competitor gaps, keywords, and trends.",
    color: "#1D9E75",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Creative Pack",
    desc: "Hooks, ad copy, UGC scripts, images, and videos.",
    color: "#8B5CF6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Campaign Plan",
    desc: "Audience, offer, channel plan, and kill / scale rules.",
    color: "#3B82F6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8 H17 M7 3 V17" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "Learning Loop",
    desc: "Performance insights, reports, playbooks, next actions.",
    color: "#6366F1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M17 10 A7 7 0 1 1 10 3 M17 4 V10 H11"
          stroke="currentColor"
          strokeWidth="1.4"
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
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              color: "#E8E8F0",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            What Munero <span style={{ color: "#1D9E75" }}>gives you.</span>
          </h2>
          <p
            style={{
              marginTop: 10,
              fontSize: 14.5,
              color: "#9898A8",
            }}
          >
            Four deliverables. One workspace.
          </p>
        </div>

        <div className="get-grid">
          {DELIVERABLES.map((d) => (
            <DeliverableCard key={d.name} item={d} />
          ))}
        </div>
      </div>

      <style>{`
        .get-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 720px)  { .get-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .get-grid { grid-template-columns: repeat(4, 1fr); } }
        .get-card { transition: border-color 200ms ease-out, transform 200ms ease-out; }
        .get-card:hover { border-color: var(--card-color); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function DeliverableCard({ item }: { item: Deliverable }) {
  return (
    <article
      className="get-card"
      style={
        {
          position: "relative",
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 14,
          padding: 26,
          minHeight: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ["--card-color" as string]: item.color,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 36,
          height: 2,
          background: item.color,
        }}
      />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 10,
          background: `${item.color}14`,
          border: `0.5px solid ${item.color}40`,
          color: item.color,
          marginBottom: 18,
        }}
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: 19,
          color: "#E8E8F0",
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          marginTop: 8,
          fontSize: 13.5,
          color: "#9898A8",
          lineHeight: 1.5,
        }}
      >
        {item.desc}
      </p>
    </article>
  );
}
