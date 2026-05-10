import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/data/blog/posts";

export const metadata: Metadata = {
  title: "Blog — Munero",
  description:
    "Intelligence, strategy, and research on marketing performance, synthetic audiences, and campaign execution.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          Munero Intelligence
        </p>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "var(--text)",
            letterSpacing: "-0.04em",
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          What we know about markets.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-2)",
            marginBottom: 64,
            lineHeight: 1.6,
          }}
        >
          Research, teardowns, and intelligence on campaign performance,
          synthetic audiences, and what actually works in paid media.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  padding: "32px 0",
                  borderTop: "0.5px solid var(--border)",
                  borderBottom:
                    i === posts.length - 1
                      ? "0.5px solid var(--border)"
                      : "none",
                  cursor: "pointer",
                  transition: "opacity 0.15s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      color: "var(--text-3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-2)",
                    lineHeight: 1.65,
                  }}
                >
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
