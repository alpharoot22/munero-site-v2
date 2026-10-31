import Link from "next/link";
import { OctopusMark } from "../components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px", display: "grid", gap: 24, justifyItems: "start" }}>
      <OctopusMark size={48} color="var(--text)" />
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: "clamp(40px,7vw,72px)", lineHeight: 0.96, letterSpacing: "-0.04em", fontWeight: 500, margin: 0 }}>
        Nothing to detect here.
      </h1>
      <p style={{ color: "var(--text-2)", fontSize: 18, maxWidth: "48ch" }}>
        This page doesn&apos;t exist, or it was retired when Munero moved into private preview.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/" className="mn-cta" style={{ height: 48, padding: "0 24px", fontSize: 15 }}>Back to munero.ai</Link>
      </div>
    </section>
  );
}
