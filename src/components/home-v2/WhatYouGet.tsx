interface Deliverable {
  name: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
  /** Bento span on the 6-col large-screen grid. */
  span: 4 | 2;
  /** Extra side-visual for wide cards. */
  sideVisual?: React.ReactNode;
}

function MarketBriefVisual() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: 14,
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        minWidth: 200,
      }}
    >
      {["Pain points", "Competitor gaps", "Keywords", "Trends"].map((label, i) => {
        const pcts = [88, 72, 64, 51];
        return (
          <div key={label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 10.5,
                marginBottom: 3,
              }}
            >
              <span style={{ color: "#9898A8" }}>{label}</span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 9.5,
                  color: "#1D9E75",
                }}
              >
                {pcts[i]}
              </span>
            </div>
            <div style={{ height: 2, background: "#1E1E2E", borderRadius: 1, overflow: "hidden" }}>
              <div style={{ width: `${pcts[i]}%`, height: "100%", background: "#1D9E75", borderRadius: 1 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LearningLoopVisual() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 14,
        background: "#10101A",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        minWidth: 220,
      }}
    >
      {[
        { label: "Brief 1",   value: "2.1x", state: "shipped" },
        { label: "Brief 2",   value: "3.4x", state: "shipped" },
        { label: "Brief 3",   value: "4.6x", state: "active",  highlight: true },
        { label: "Next",      value: "—",   state: "queued" },
      ].map((step, i, arr) => (
        <span key={step.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: step.highlight ? "rgba(99,102,241,0.18)" : "#0A0A12",
                border: step.highlight ? "0.5px solid #6366F1" : "0.5px solid #1E1E2E",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: step.highlight ? "#6366F1" : "#9898A8",
              }}
            >
              {step.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 9,
                color: step.state === "queued" ? "#505068" : "#9898A8",
                letterSpacing: "-0.005em",
              }}
            >
              {step.label}
            </span>
          </span>
          {i < arr.length - 1 ? (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
              <path
                d="M1 4 H8 M6 1 L8 4 L6 7"
                stroke="#505068"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
      ))}
    </div>
  );
}

const DELIVERABLES: Deliverable[] = [
  {
    name: "Market Brief",
    desc: "Pain points, competitor gaps, keywords, and trends.",
    color: "#1D9E75",
    span: 4,
    sideVisual: <MarketBriefVisual />,
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
    span: 2,
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
    span: 2,
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
    span: 4,
    sideVisual: <LearningLoopVisual />,
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
        @media (min-width: 1100px) { .get-grid { grid-template-columns: repeat(6, 1fr); } }
        .get-card { transition: border-color 200ms ease-out, transform 200ms ease-out; }
        .get-card:hover { border-color: var(--card-color); transform: translateY(-2px); }
        @media (min-width: 1100px) {
          .get-span-4 { grid-column: span 4; }
          .get-span-2 { grid-column: span 2; }
        }
      `}</style>
    </section>
  );
}

function DeliverableCard({ item }: { item: Deliverable }) {
  const wide = item.span === 4;
  return (
    <article
      className={`get-card get-span-${item.span}`}
      style={
        {
          position: "relative",
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 20,
          padding: 26,
          minHeight: 180,
          display: "flex",
          flexDirection: wide ? "row" : "column",
          alignItems: wide ? "center" : "flex-start",
          gap: wide ? 24 : 0,
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flex: wide ? "1 1 0" : "0 0 auto",
          minWidth: 0,
        }}
      >
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
            maxWidth: wide ? "26ch" : "auto",
          }}
        >
          {item.desc}
        </p>
      </div>
      {wide && item.sideVisual ? (
        <div
          className="get-side"
          style={{
            display: "flex",
            flexShrink: 0,
          }}
        >
          {item.sideVisual}
        </div>
      ) : null}

      <style>{`
        .get-side { display: none; }
        @media (min-width: 1100px) { .get-side { display: flex !important; } }
      `}</style>
    </article>
  );
}
