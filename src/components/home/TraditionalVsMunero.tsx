"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const WITHOUT = [
  "Launch on a hunch",
  "Spend $8,000 to $15,000",
  "Wait 14 days for data",
  "Discover the angle was wrong",
  "Revise the creative",
  "Launch again",
  "Repeat the cycle",
];

const WITH_LIST = [
  "Tell us your brand (2 min)",
  "16 squads scan everything (20 min)",
  "Real customer behavior mapped",
  "Winning angles identified",
  "Campaign brief delivered",
  "Launch with evidence",
];

export function TraditionalVsMunero() {
  return (
    <Section bordered id="traditional-vs-munero">
      <Eyebrow>Traditional vs Munero</Eyebrow>
      <H2 className="max-w-[24ch]">$10,000 to learn the angle was wrong, or $99 to know first.</H2>
      <Lede>
        Same launch outcome. Different cost, different timeline, different evidence base.
      </Lede>

      <Compare />
    </Section>
  );
}

function Compare() {
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
    <div ref={ref} className="mt-12 grid md:grid-cols-2 gap-5">
      {/* Without */}
      <div
        style={{
          background: "rgba(255, 87, 87, 0.03)",
          border: "0.5px solid rgba(255, 87, 87, 0.15)",
          borderRadius: 8,
          padding: 24,
        }}
      >
        <div
          className="num"
          style={{
            fontSize: 10,
            color: "var(--score-low)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          WITHOUT MUNERO
        </div>
        <ol className="space-y-2.5">
          {WITHOUT.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-2.5 text-[14px]"
              style={{
                color: "var(--text-2)",
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(6px)",
                transition: `opacity 400ms ease-out ${i * 100}ms, transform 400ms ease-out ${i * 100}ms`,
              }}
            >
              <span style={{ color: "var(--score-low)", opacity: 0.4 }}>→</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
        <div
          className="num mt-5 pt-4"
          style={{
            fontSize: 13,
            color: "var(--score-low)",
            borderTop: "0.5px solid rgba(255, 87, 87, 0.15)",
          }}
        >
          Average cost per learning cycle: $10,000
        </div>
      </div>

      {/* With */}
      <div
        style={{
          background: "rgba(29, 158, 117, 0.04)",
          border: "0.5px solid rgba(29, 158, 117, 0.2)",
          borderRadius: 8,
          padding: 24,
        }}
      >
        <div
          className="num"
          style={{
            fontSize: 10,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          WITH MUNERO
        </div>
        <ol className="space-y-2.5">
          {WITH_LIST.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-2.5 text-[14px]"
              style={{
                color: "var(--text)",
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(6px)",
                transition: `opacity 400ms ease-out ${(i + WITHOUT.length) * 80}ms, transform 400ms ease-out ${(i + WITHOUT.length) * 80}ms`,
              }}
            >
              <span style={{ color: "var(--accent)" }}>→</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
        <div
          className="num mt-5 pt-4"
          style={{
            fontSize: 13,
            color: "var(--accent)",
            borderTop: "0.5px solid rgba(29, 158, 117, 0.2)",
          }}
        >
          Total cost: $99 · Total time: 35 minutes
        </div>
      </div>
    </div>
  );
}
