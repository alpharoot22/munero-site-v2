import type { ReactNode } from "react";
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
  /** Either a simple-icons object OR a custom inline SVG. */
  icon: SimpleIconShape | { custom: ReactNode } | null;
}

interface Group {
  label: string;
  helper: string;
  color: string;
  brands: Brand[];
}

// LinkedIn, OpenAI, Slack, Higgsfield, HeyGen were removed from simple-icons
// over brand-policy disputes. Rendered as custom inline SVGs below.

const SlackIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#E01E5A" d="M5 15.2A2.5 2.5 0 1 1 2.5 12.7H5v2.5z M6.3 15.2a2.5 2.5 0 1 1 5 0v6.3a2.5 2.5 0 1 1-5 0v-6.3z" />
    <path fill="#36C5F0" d="M8.8 5A2.5 2.5 0 1 1 11.3 2.5V5H8.8z M8.8 6.3a2.5 2.5 0 1 1 0 5H2.5a2.5 2.5 0 1 1 0-5h6.3z" />
    <path fill="#2EB67D" d="M19 8.8A2.5 2.5 0 1 1 21.5 11.3H19V8.8z M17.7 8.8a2.5 2.5 0 1 1-5 0V2.5a2.5 2.5 0 1 1 5 0v6.3z" />
    <path fill="#ECB22E" d="M15.2 19a2.5 2.5 0 1 1-2.5 2.5V19h2.5z M15.2 17.7a2.5 2.5 0 1 1 0-5h6.3a2.5 2.5 0 1 1 0 5h-6.3z" />
  </svg>
);

const OpenAIIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8E8F0" aria-hidden="true">
    <path d="M22.28 9.82a5.99 5.99 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.99 5.99 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.99 5.99 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07ZM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.84 2.8a4.5 4.5 0 0 1-6.14-1.65ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.98v5.69a.77.77 0 0 0 .39.67l5.81 3.36-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.87ZM18.94 11.75l-5.83-3.39 2.01-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.11v-5.68a.79.79 0 0 0-.4-.67ZM20.95 8.72l-.14-.08-4.78-2.78a.78.78 0 0 0-.78 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.31 12.86l-2.02-1.17a.08.08 0 0 1-.04-.05V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.8.8 0 0 0-.4.68v6.72ZM9.41 10.5l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5v-3Z" />
  </svg>
);

const LinkedInIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

// Higgsfield: their mark is a stylized "H" with a connecting motion line.
// Approximating a distinctive geometric H + spark.
const HiggsfieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#1A1A28" />
    <path d="M7.5 7v10 M16.5 7v10 M7.5 12 H16.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.4" fill="#1D9E75" />
  </svg>
);

// HeyGen: stylized "HG" tile in their signature gradient feel.
const HeyGenIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#5B5BF9" />
    <path
      d="M7 7.5 L7 16.5 M7 12 L11 12 M11 7.5 L11 16.5 M14 16.5 L14 9 C14 8 14.8 7.5 15.6 7.5 L17 7.5 M14 12 L17 12"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
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
      { label: "LinkedIn", icon: { custom: LinkedInIcon } },
    ],
  },
  {
    label: "CREATIVE",
    helper: "Powers copy, image, and video generation",
    color: "#8B5CF6",
    brands: [
      { label: "Gemini", icon: siGooglegemini as SimpleIconShape },
      { label: "OpenAI", icon: { custom: OpenAIIcon } },
      { label: "Claude", icon: siClaude as SimpleIconShape },
      { label: "Higgsfield", icon: { custom: HiggsfieldIcon } },
      { label: "HeyGen", icon: { custom: HeyGenIcon } },
      { label: "ElevenLabs", icon: siElevenlabs as SimpleIconShape },
    ],
  },
  {
    label: "OUTPUT",
    helper: "Exports strategy, reports, and assets",
    color: "#3B82F6",
    brands: [
      { label: "Slack", icon: { custom: SlackIcon } },
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
        {group.brands.slice(0, 6).map((b) => (
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

function BrandIcon({ icon }: { icon: Brand["icon"] }) {
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
  if ("custom" in icon) {
    return <span className="brand-icon">{icon.custom}</span>;
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
