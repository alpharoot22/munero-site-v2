import Link from "next/link";
import type { ReactNode } from "react";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export type GuideMeta = {
  slug: string;
  platform: string;
  platformColor: string;
  title: string;
  description: string;
  readTime: string;
};

export const GUIDES: GuideMeta[] = [
  {
    slug: "meta-ads",
    platform: "Meta Ads",
    platformColor: "#1877F2",
    title: "How to Launch Your First Meta Campaign",
    description:
      "Audience targeting, campaign structure, budget allocation, creative formats, and what to measure on Day 7.",
    readTime: "10 min read",
  },
  {
    slug: "tiktok-ads",
    platform: "TikTok Ads",
    platformColor: "#E94560",
    title: "How to Launch Your First TikTok Campaign",
    description:
      "Hook strategy, video formats, audience setup, and why TikTok rewards creative testing over budget.",
    readTime: "8 min read",
  },
  {
    slug: "google-ads",
    platform: "Google Ads",
    platformColor: "#34A853",
    title: "How to Launch Your First Google Ads Campaign",
    description:
      "Keyword intent, match types, campaign structure, Quality Score, and how to avoid burning budget on day one.",
    readTime: "12 min read",
  },
  {
    slug: "linkedin-ads",
    platform: "LinkedIn Ads",
    platformColor: "#0A66C2",
    title: "How to Launch Your First LinkedIn Campaign",
    description:
      "B2B targeting, ad formats, cost expectations, and why LinkedIn requires a different creative strategy.",
    readTime: "8 min read",
  },
  {
    slug: "email-marketing",
    platform: "Email Marketing",
    platformColor: "#1D9E75",
    title: "How to Build Your First Email Campaign",
    description:
      "List building, segmentation, subject lines, send timing, and the metrics that actually matter.",
    readTime: "9 min read",
  },
];

export function GuideHero({
  platform,
  title,
  description,
  readTime,
}: {
  platform: string;
  title: string;
  description: string;
  readTime: string;
}) {
  return (
    <header
      style={{
        marginBottom: 64,
        paddingBottom: 48,
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div className="eyebrow mb-5">
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--accent)",
            boxShadow: "0 0 8px var(--accent)",
          }}
        />
        {platform.toUpperCase()} · CAMPAIGN GUIDE
      </div>
      <h1
        className="font-bold tracking-[-0.02em] leading-[1.1]"
        style={{
          fontSize: "clamp(32px, 4.5vw, 48px)",
          color: "var(--text)",
        }}
      >
        {title}
      </h1>
      <p
        className="mt-4 leading-relaxed"
        style={{
          fontSize: 17,
          color: "var(--text-2)",
          maxWidth: "60ch",
        }}
      >
        {description}
      </p>
      <p
        className="num mt-5"
        style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em" }}
      >
        {readTime} · UPDATED MAY 2026 · FREE
      </p>
    </header>
  );
}

export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav
      aria-label="On this page"
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        borderRadius: 8,
        padding: 24,
        marginBottom: 48,
      }}
    >
      <div
        className="num"
        style={{
          fontSize: 10,
          color: "var(--text-3)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 12,
        }}
      >
        ON THIS PAGE
      </div>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={item.id}
            style={{
              padding: "5px 0",
              borderTop: i === 0 ? "none" : "0.5px solid var(--border)",
              fontSize: 14,
            }}
          >
            <a
              href={`#${item.id}`}
              style={{ color: "var(--text-2)", textDecoration: "none" }}
            >
              <span
                className="num"
                style={{
                  color: "var(--text-3)",
                  marginRight: 12,
                  fontSize: 11,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Callout({
  label = "Heads up",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="guide-callout">
      <span className="guide-callout-label">{label}</span>
      {children}
    </aside>
  );
}

export function AlsoInSeries({ currentSlug }: { currentSlug: string }) {
  const others = GUIDES.filter((g) => g.slug !== currentSlug);
  return (
    <div
      style={{
        marginTop: 80,
        paddingTop: 32,
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div
        className="num"
        style={{
          fontSize: 10,
          color: "var(--text-3)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 16,
        }}
      >
        ALSO IN THIS SERIES
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {others.map((g) => (
          <li
            key={g.slug}
            style={{
              padding: "10px 0",
              borderBottom: "0.5px solid var(--border)",
            }}
          >
            <Link
              href={`/guides/${g.slug}`}
              className="num"
              style={{
                color: "var(--text-2)",
                fontSize: 13,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: g.platformColor,
                  flexShrink: 0,
                }}
              />
              <span>{g.title}</span>
              <span style={{ color: "var(--accent)", marginLeft: "auto" }}>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MuneroCTA({ platformLine }: { platformLine: string }) {
  return (
    <section
      style={{
        marginTop: 64,
        padding: 32,
        borderRadius: 12,
        background:
          "linear-gradient(180deg, rgba(29,158,117,0.08) 0%, rgba(29,158,117,0.02) 100%)",
        border: "0.5px solid rgba(29,158,117,0.3)",
      }}
    >
      <div
        className="num"
        style={{
          fontSize: 10,
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          marginBottom: 12,
        }}
      >
        SKIP THE GUESSWORK
      </div>
      <h2
        className="font-bold tracking-[-0.01em] leading-[1.15]"
        style={{
          fontSize: "clamp(22px, 3vw, 30px)",
          color: "var(--text)",
        }}
      >
        {platformLine}
      </h2>
      <ul
        style={{
          marginTop: 20,
          padding: 0,
          listStyle: "none",
          fontSize: 14,
          color: "var(--text-2)",
          lineHeight: 1.7,
        }}
      >
        {[
          "Which audience segment has the highest intent score in your market",
          "What your top 10 competitors are running right now",
          "The 3 hooks most likely to win based on Reddit complaints and review data",
          "Exact budget allocation by platform with kill rules built in",
          "46 creative assets generated, ready to upload",
        ].map((b) => (
          <li
            key={b}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 10,
              padding: "4px 0",
            }}
          >
            <span style={{ color: "var(--accent)" }}>✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p
        style={{
          marginTop: 20,
          fontSize: 13,
          color: "var(--text-3)",
        }}
      >
        Built on real customer behavior. In 35 minutes. For $99.
      </p>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <a href={STRIPE_BRIEF} className="btn-primary">
          Get my brief · $99
        </a>
        <Link href="/sample" className="btn-secondary">
          See a sample brief first
        </Link>
      </div>
    </section>
  );
}

export function GuideShell({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "60px 24px 80px",
      }}
    >
      {children}
    </main>
  );
}
