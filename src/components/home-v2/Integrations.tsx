import {
  siMeta,
  siGoogleads,
  siGoogleanalytics,
  siTiktok,
  siShopify,
  siGooglegemini,
  siClaude,
  siElevenlabs,
  siNotion,
  siGoogledrive,
  siGooglesheets,
  siZapier,
} from "simple-icons";

interface SimpleIconShape {
  path: string;
  hex: string;
}

interface Brand {
  label: string;
  icon: SimpleIconShape | null;
}

interface Group {
  label: string;
  helper: string;
  color: string;
  brands: Brand[];
}

// LinkedIn, OpenAI, Slack, Higgsfield, HeyGen are not in simple-icons —
// rendered as a 18x18 circle outline per spec.
const GROUPS: Group[] = [
  {
    label: "DATA IN",
    helper: "Pulls in market and performance signals",
    color: "#1D9E75",
    brands: [
      { label: "Meta", icon: siMeta as SimpleIconShape },
      { label: "Google Ads", icon: siGoogleads as SimpleIconShape },
      { label: "GA4", icon: siGoogleanalytics as SimpleIconShape },
      { label: "TikTok", icon: siTiktok as SimpleIconShape },
      { label: "Shopify", icon: siShopify as SimpleIconShape },
      { label: "LinkedIn", icon: null },
    ],
  },
  {
    label: "CREATIVE",
    helper: "Powers copy, image, and video generation",
    color: "#8B5CF6",
    brands: [
      { label: "Gemini", icon: siGooglegemini as SimpleIconShape },
      { label: "OpenAI", icon: null },
      { label: "Claude", icon: siClaude as SimpleIconShape },
      { label: "Higgsfield", icon: null },
      { label: "HeyGen", icon: null },
      { label: "ElevenLabs", icon: siElevenlabs as SimpleIconShape },
    ],
  },
  {
    label: "OUTPUT",
    helper: "Exports strategy, reports, and assets",
    color: "#3B82F6",
    brands: [
      { label: "Slack", icon: null },
      { label: "Notion", icon: siNotion as SimpleIconShape },
      { label: "Google Drive", icon: siGoogledrive as SimpleIconShape },
      { label: "Google Sheets", icon: siGooglesheets as SimpleIconShape },
      { label: "Zapier", icon: siZapier as SimpleIconShape },
    ],
  },
];

export function Integrations() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 34px)",
              color: "#E8E8F0",
              letterSpacing: "-0.022em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Connect the tools. Keep the strategy in{" "}
            <span style={{ color: "#1D9E75" }}>one place.</span>
          </h2>
        </div>

        <div className="integrations-grid">
          {GROUPS.map((g) => (
            <Group key={g.label} group={g} />
          ))}
        </div>
      </div>

      <style>{`
        .integrations-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .integrations-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }
        .brand-tile .brand-icon { opacity: 0.7; transition: opacity 150ms ease-out; }
        .brand-tile:hover .brand-tile-icon { border-color: var(--group-color); transform: translateY(-1px); }
        .brand-tile:hover .brand-icon { opacity: 1; }
      `}</style>
    </section>
  );
}

function Group({ group }: { group: Group }) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 14,
        padding: 24,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: group.color,
          letterSpacing: "0.16em",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        {group.label}
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 12.5,
          color: "#9898A8",
          textAlign: "center",
          marginBottom: 18,
          lineHeight: 1.4,
        }}
      >
        {group.helper}
      </p>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          margin: 0,
          padding: 0,
          listStyle: "none",
          justifyContent: "center",
        }}
      >
        {group.brands.slice(0, 5).map((b) => (
          <li key={b.label}>
            <div
              className="brand-tile"
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  width: 64,
                  paddingTop: 4,
                  ["--group-color" as string]: group.color,
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
                  background: "#111118",
                  border: "0.5px solid #1E1E2E",
                  borderRadius: 10,
                  transition: "border-color 150ms ease-out, transform 150ms ease-out",
                }}
                className="brand-tile-icon"
              >
                <BrandIcon icon={b.icon} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 11.5,
                  color: "#9898A8",
                  textAlign: "center",
                  letterSpacing: "-0.005em",
                }}
              >
                {b.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandIcon({ icon }: { icon: SimpleIconShape | null }) {
  if (!icon) {
    return (
      <svg
        className="brand-icon"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="9" stroke="#9898A8" strokeWidth="1.1" />
      </svg>
    );
  }
  return (
    <svg
      className="brand-icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
