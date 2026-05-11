import type { ReactNode } from "react";
import {
  siMeta,
  siGoogleads,
  siGoogleanalytics,
  siTiktok,
  siShopify,
  siGooglegemini,
  siClaude,
  siNotion,
  siGoogledrive,
  siGooglesheets,
  siZapier,
} from "simple-icons";

interface SimpleIconShape { path: string; hex: string }

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

const HiggsfieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="hgs" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#hgs)" />
    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i / 8) * Math.PI * 2;
      const x1 = 12 + Math.cos(a) * 4;
      const y1 = 12 + Math.sin(a) * 4;
      const x2 = 12 + Math.cos(a) * 7;
      const y2 = 12 + Math.sin(a) * 7;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />;
    })}
  </svg>
);

const HeyGenIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#1A1A28" />
    <circle cx="9" cy="11" r="1.4" fill="#E8E8F0" />
    <circle cx="15" cy="11" r="1.4" fill="#E8E8F0" />
    <path d="M9 16 Q12 18 15 16" stroke="#E8E8F0" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  </svg>
);

interface Brand {
  label: string;
  icon: SimpleIconShape | { custom: ReactNode } | null;
}

interface Group {
  label: string;
  color: string;
  brands: Brand[];
  hasMore?: boolean;
}

const GROUPS: Group[] = [
  {
    label: "DATA IN",
    color: "#1D9E75",
    hasMore: true,
    brands: [
      { label: "Meta Ads", icon: siMeta as SimpleIconShape },
      { label: "Google Ads", icon: siGoogleads as SimpleIconShape },
      { label: "GA4", icon: siGoogleanalytics as SimpleIconShape },
      { label: "TikTok Ads", icon: siTiktok as SimpleIconShape },
      { label: "Shopify", icon: siShopify as SimpleIconShape },
    ],
  },
  {
    label: "CREATIVE",
    color: "#8B5CF6",
    brands: [
      { label: "Gemini", icon: siGooglegemini as SimpleIconShape },
      { label: "OpenAI", icon: { custom: OpenAIIcon } },
      { label: "Claude", icon: siClaude as SimpleIconShape },
      { label: "Higgsfield", icon: { custom: HiggsfieldIcon } },
      { label: "HeyGen", icon: { custom: HeyGenIcon } },
    ],
  },
  {
    label: "OUTPUT",
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
    <section style={{ background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#8B5CF6",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Connect your stack
          </span>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 17,
              color: "#9898A8",
            }}
          >
            Bring your data in. Push results out.
          </p>
        </div>

        <div className="int-flow">
          <GroupCard group={GROUPS[0]} />
          <FlowDots />
          <GroupCard group={GROUPS[1]} />
          <FlowDots />
          <GroupCard group={GROUPS[2]} />
        </div>
      </div>

      <style>{`
        .int-flow {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: center;
        }
        .int-dots { display: none; }
        @media (min-width: 1024px) {
          .int-flow { grid-template-columns: 1fr auto 1fr auto 1fr; gap: 12px; }
          .int-dots { display: inline-flex; }
        }
      `}</style>
    </section>
  );
}

function FlowDots() {
  return (
    <span
      className="int-dots"
      aria-hidden="true"
      style={{ alignItems: "center", gap: 6, padding: "0 4px" }}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#1E1E2E",
          }}
        />
      ))}
    </span>
  );
}

function GroupCard({ group }: { group: Group }) {
  return (
    <div
      style={{
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: group.color,
          letterSpacing: "0.18em",
          textAlign: "center",
          marginBottom: 18,
        }}
      >
        {group.label}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        {group.brands.map((b) => (
          <BrandTile key={b.label} brand={b} groupColor={group.color} />
        ))}
        {group.hasMore ? (
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              width: 60,
              paddingTop: 4,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                background: "#111118",
                border: "0.5px dashed #1E1E2E",
                borderRadius: 10,
                color: "#505068",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 14,
              }}
              aria-hidden="true"
            >
              +
            </span>
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 11, color: "#505068" }}>
              more
            </span>
          </span>
        ) : null}
      </div>
    </div>
  );
}

function BrandTile({ brand, groupColor }: { brand: Brand; groupColor: string }) {
  return (
    <div
      className="brand-tile"
      style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          width: 60,
          paddingTop: 4,
          ["--group-color" as string]: groupColor,
        } as React.CSSProperties
      }
    >
      <span
        className="brand-tile-icon"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 42,
          height: 42,
          background: "#111118",
          border: "0.5px solid #1E1E2E",
          borderRadius: 10,
          transition: "border-color 150ms ease-out, transform 150ms ease-out",
        }}
      >
        <BrandIcon icon={brand.icon} />
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11,
          color: "#9898A8",
          textAlign: "center",
          letterSpacing: "-0.005em",
        }}
      >
        {brand.label}
      </span>
      <style>{`
        .brand-tile:hover .brand-tile-icon { border-color: var(--group-color); transform: translateY(-1px); }
      `}</style>
    </div>
  );
}

function BrandIcon({ icon }: { icon: Brand["icon"] }) {
  if (!icon) {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#9898A8" strokeWidth="1.1" />
      </svg>
    );
  }
  if ("custom" in icon) {
    return <>{icon.custom}</>;
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
