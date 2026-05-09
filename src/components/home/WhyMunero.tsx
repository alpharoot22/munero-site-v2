"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow } from "../Section";

const WHY = [
  {
    number: "01",
    headline: "Reads real customer behavior.",
    body: "Reddit complaints. Trustpilot reviews. Meta ad engagement. Search queries. Munero reads what real buyers say, do, and respond to across 16 intelligence sources simultaneously. Not guesses. Real patterns.",
    stat: "16",
    statLabel: "sources running in parallel",
  },
  {
    number: "02",
    headline: "Predicts before your budget does.",
    body: "Before a dollar moves, Munero scores your message and creative angles against live market signals. You know which hook will win before you pay to test it.",
    stat: "$0",
    statLabel: "spent before you know what works",
  },
  {
    number: "03",
    headline: "Gets sharper with every brief.",
    body: "Every campaign outcome you submit feeds the accuracy tracker. Predicted ROAS vs actual ROAS. Over time, Munero's recommendations compound. The flywheel builds.",
    stat: "28",
    statLabel: "briefs feeding the flywheel",
  },
];

export function WhyMunero() {
  return (
    <Section bordered id="why-munero">
      <Eyebrow>Why Munero</Eyebrow>
      <div className="mt-12 hairline-t">
        {WHY.map((row, i) => (
          <Row key={row.number} row={row} index={i} />
        ))}
      </div>
    </Section>
  );
}

function Row({
  row,
  index,
}: {
  row: typeof WHY[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hairline-b grid grid-cols-1 md:grid-cols-[15%_60%_25%] gap-y-3 gap-x-6 py-12 md:py-12 items-center"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 400ms ease-out ${index * 100}ms, transform 400ms ease-out ${index * 100}ms`,
      }}
    >
      <div
        className="num leading-none"
        style={{
          fontSize: 96,
          color: "var(--accent)",
          opacity: 0.15,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        {row.number}
      </div>
      <div>
        <h3
          className="font-bold tracking-[-0.01em] leading-tight"
          style={{ fontSize: 28, color: "var(--text)" }}
        >
          {row.headline}
        </h3>
        <p
          className="mt-2 leading-relaxed"
          style={{
            fontSize: 16,
            color: "var(--text-2)",
            maxWidth: 600,
          }}
        >
          {row.body}
        </p>
      </div>
      <div className="md:text-right">
        <div
          className="num leading-none"
          style={{
            fontSize: 42,
            color: "var(--accent)",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          {row.stat}
        </div>
        <div
          className="mt-1"
          style={{ fontSize: 12, color: "var(--text-3)" }}
        >
          {row.statLabel}
        </div>
      </div>
    </div>
  );
}
