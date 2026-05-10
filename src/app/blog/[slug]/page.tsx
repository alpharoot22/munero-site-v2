import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/data/blog/posts";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=starter";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Munero`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        padding: "120px 24px 80px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Munero",
              url: "https://munero.ai",
            },
          }),
        }}
      />

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <Link
          href="/blog"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--text-3)",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 48,
          }}
        >
          ← All posts
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
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
            }}
          >
            {post.date} · {post.readTime}
          </span>
        </div>

        <h1
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "var(--text)",
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            height: "0.5px",
            background: "var(--border)",
            marginBottom: 40,
          }}
        />

        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div
          style={{
            marginTop: 64,
            padding: 32,
            background: "var(--surface)",
            border: "0.5px solid var(--border)",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 12,
            }}
          >
            Run your own brief
          </p>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: 8,
              letterSpacing: "-0.03em",
            }}
          >
            Know what message will work before you spend a dollar.
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-2)",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            16 intelligence squads. 35 minutes. Starting at $99.
          </p>
          <a
            href={STRIPE_BRIEF}
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "white",
              fontSize: 14,
              fontWeight: 500,
              padding: "12px 28px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Open workspace · $99
          </a>
        </div>
      </div>
    </main>
  );
}
