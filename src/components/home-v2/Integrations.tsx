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
}

interface Brand {
  label: string;
  icon: SimpleIconShape | null;
}

interface Group {
  label: string;
  color: string;
  brands: Brand[];
}

// LinkedIn, OpenAI, Slack, Higgsfield, HeyGen are not in simple-icons —
// rendered as a 18x18 circle outline per spec.
const GROUPS: Group[] = [
  {
    label: "DATA IN",
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
        <h2
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 24,
            color: "#E8E8F0",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Connects to your stack.
        </h2>

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
        .brand-pill {
          transition: border-color 150ms ease-out, opacity 150ms ease-out;
        }
        .brand-pill .brand-icon {
          opacity: 0.55;
          transition: opacity 150ms ease-out;
        }
        .brand-pill:hover .brand-icon {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

function Group({ group }: { group: Group }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: group.color,
          letterSpacing: "0.14em",
          marginBottom: 14,
        }}
      >
        {group.label}
      </div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {group.brands.map((b) => (
          <li key={b.label}>
            <span
              className="brand-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 36,
                padding: "0 12px",
                background: "#111118",
                border: "0.5px solid #1E1E2E",
                borderRadius: 8,
                cursor: "default",
              }}
              onMouseEnter={undefined}
            >
              <BrandIcon icon={b.icon} />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "#9898A8",
                  letterSpacing: "0.02em",
                }}
              >
                {b.label}
              </span>
            </span>
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
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="7.5" stroke="#9898A8" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg
      className="brand-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
