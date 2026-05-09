import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "../../components/guides/GuidePrimitives";

export const metadata: Metadata = {
  title: "Campaign Launch Guides",
  description:
    "Free step-by-step guides for solo marketers launching their first campaign on Meta, TikTok, Google, LinkedIn, and Email. Written for people doing it themselves.",
};

export default function GuidesIndex() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "60px 24px 80px",
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
        FREE RESOURCES
      </div>
      <h1
        className="font-bold tracking-[-0.02em] leading-[1.1]"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          color: "var(--text)",
        }}
      >
        Campaign Launch Guides
      </h1>
      <p
        className="mt-4 leading-relaxed"
        style={{
          fontSize: 17,
          color: "var(--text-2)",
          maxWidth: "60ch",
        }}
      >
        Everything a solo marketer needs to launch on the right platform.
        Written for people doing it themselves for the first time.
      </p>

      <ul
        style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
          listStyle: "none",
          padding: 0,
        }}
      >
        {GUIDES.map((g) => (
          <li
            key={g.slug}
            className="hover-lift"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <Link
              href={`/guides/${g.slug}`}
              style={{
                textDecoration: "none",
                display: "block",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: g.platformColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="num"
                  style={{
                    fontSize: 11,
                    color: "var(--text-3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {g.platform}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {g.title}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-2)",
                  lineHeight: 1.55,
                  marginBottom: 16,
                }}
              >
                {g.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 12,
                  borderTop: "0.5px solid var(--border)",
                }}
              >
                <span
                  className="num"
                  style={{ fontSize: 11, color: "var(--text-3)" }}
                >
                  {g.readTime}
                </span>
                <span
                  className="num"
                  style={{
                    fontSize: 12,
                    color: "var(--accent)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Read the guide →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
