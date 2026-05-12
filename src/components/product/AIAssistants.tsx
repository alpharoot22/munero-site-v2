interface Assistant {
  name: string;
  role: string;
  prompt: string;
  color: string;
  icon: React.ReactNode;
}

const ASSISTANTS: Assistant[] = [
  {
    name: "Market Analyst",
    role: "Strategy and signal interpretation",
    prompt: "What should I test this week?",
    color: "#1D9E75",
    icon: <ScopeIcon />,
  },
  {
    name: "Competitor Analyst",
    role: "Watches competitor moves and gaps",
    prompt: "Which competitor angle is open?",
    color: "#1D9E75",
    icon: <EyeIcon />,
  },
  {
    name: "Creative Director",
    role: "Hooks, angles, and creative direction",
    prompt: "Give me three angles for this audience.",
    color: "#8B5CF6",
    icon: <SparkIcon />,
  },
  {
    name: "Media Buyer",
    role: "Budget allocation and channel mix",
    prompt: "Where should I move spend this week?",
    color: "#3B82F6",
    icon: <CoinIcon />,
  },
  {
    name: "Landing Advisor",
    role: "Landing page critique and rewrites",
    prompt: "What is hurting conversion on this LP?",
    color: "#8B5CF6",
    icon: <PageIcon />,
  },
  {
    name: "Compliance Reviewer",
    role: "Ad-platform policy checks",
    prompt: "Will this hook clear Meta review?",
    color: "#F97316",
    icon: <ShieldIcon />,
  },
  {
    name: "Weekly Intelligence Agent",
    role: "Generates your weekly digest",
    prompt: "Run this week's market update.",
    color: "#1D9E75",
    icon: <DigestIcon />,
  },
  {
    name: "Executive Summary Agent",
    role: "Board-ready summary of every brief",
    prompt: "Build my board deck for Tuesday.",
    color: "#3B82F6",
    icon: <SlidesIcon />,
  },
  {
    name: "Global Navigator",
    role: "Persistent context across every page",
    prompt: "Where is the keyword priority list?",
    color: "#6366F1",
    icon: <CompassIcon />,
  },
];

export function AIAssistants() {
  return (
    <section style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "88px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40, maxWidth: 720 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#8B5CF6",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Always on
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
            9 AI assistants{" "}
            <span style={{ color: "#8B5CF6" }}>with full workspace context.</span>
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
            Each one is specialized, reads from the same brief, and can answer in plain
            language. Ask them anything from a hook critique to a media plan tweak.
          </p>
        </div>

        <div className="ai-grid">
          {ASSISTANTS.map((a) => (
            <AssistantCard key={a.name} assistant={a} />
          ))}
        </div>
      </div>

      <style>{`
        .ai-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 700px)  { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .ai-grid { grid-template-columns: repeat(3, 1fr); } }
        .ai-card { transition: border-color 150ms ease-out, transform 150ms ease-out; }
        .ai-card:hover { border-color: var(--ai-color); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function AssistantCard({ assistant }: { assistant: Assistant }) {
  return (
    <article
      className="ai-card"
      style={
        {
          background: "#0A0A12",
          border: "0.5px solid #1E1E2E",
          borderRadius: 16,
          padding: 22,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          ["--ai-color" as string]: assistant.color,
        } as React.CSSProperties
      }
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            background: `${assistant.color}1A`,
            border: `0.5px solid ${assistant.color}40`,
            borderRadius: 10,
            color: assistant.color,
          }}
          aria-hidden="true"
        >
          {assistant.icon}
        </span>
        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: 15,
              color: "#E8E8F0",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {assistant.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 12,
              color: "#9898A8",
              margin: "2px 0 0",
            }}
          >
            {assistant.role}
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#10101A",
          border: "0.5px solid #1E1E2E",
          borderRadius: 10,
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 9.5,
            color: assistant.color,
            letterSpacing: "0.08em",
            flexShrink: 0,
          }}
        >
          YOU
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12.5,
            color: "#9898A8",
            fontStyle: "italic",
          }}
        >
          &ldquo;{assistant.prompt}&rdquo;
        </span>
      </div>
    </article>
  );
}

/* ---------- Icons ---------- */

function ScopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.4" fill="currentColor" />
      <path d="M10 0.5 V3 M10 17 V19.5 M0.5 10 H3 M17 10 H19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M1 10 C3 5 6.5 3 10 3 C13.5 3 17 5 19 10 C17 15 13.5 17 10 17 C6.5 17 3 15 1 10 Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="currentColor" />
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8 H11 A2 2 0 0 1 11 12 H8 M8 12 H12 A2 2 0 0 1 12 16 M10 6 V16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function PageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 6 H14 M6 9 H14 M6 12 H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1 L17 4 V10 C17 14.5 13.5 17.5 10 19 C6.5 17.5 3 14.5 3 10 V4 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7 10 L9 12 L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function DigestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 8 H18 M6 12 H10 M6 14 H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function SlidesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 18 H14 M10 15 V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 11 L7 8 L10 10 L13 6 L15 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 7 L11 11 L7 13 L9 9 Z" fill="currentColor" />
    </svg>
  );
}
