"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const stages = [
  {
    n: "01",
    t: "Brief delivered",
    d: "16 squads, 46 creative assets, 30-day plan, SHA-256 hash. 35 minutes start to finish.",
    badge: "DAY 0",
  },
  {
    n: "02",
    t: "Day 7 review",
    d: "Enter actual metrics. The review engine returns kill / scale / hold / watch decisions per creative.",
    badge: "DAY 7",
  },
  {
    n: "03",
    t: "Day 14 + 30 reviews",
    d: "Two more decision checkpoints. Action board auto-updates. Decision log records every move.",
    badge: "DAY 14 / 30",
  },
  {
    n: "04",
    t: "Outcomes submitted",
    d: "Submit final ROAS. The accuracy tracker scores how close Munero's predictions landed.",
    badge: "DAY 30",
  },
  {
    n: "05",
    t: "Month 2 auto-refresh",
    d: "After 45 days Munero re-checks the market on its own. Competitors moved. Hooks aged. New brief queued.",
    badge: "DAY 45",
  },
  {
    n: "06",
    t: "Every brief makes the next one smarter",
    d: "Cross-brand pattern recognition feeds the flywheel. Your portfolio benchmarks update each cycle.",
    badge: "ONGOING",
  },
];

export function Lifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDrawn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
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
    <Section bordered id="lifecycle">
      <Eyebrow>After delivery</Eyebrow>
      <H2 className="max-w-[24ch]">The brief is just the beginning.</H2>
      <Lede>
        A delivered brief opens a 60-day intelligence loop. Every campaign feeds the next brief
        sharper.
      </Lede>

      <div ref={ref} className="mt-14 relative">
        {/* Connecting line */}
        <svg
          className="absolute left-[14px] md:left-[19px] top-0 h-full pointer-events-none"
          width="2"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 2 1200"
        >
          <line x1="1" y1="0" x2="1" y2="1200" stroke="var(--border-2)" strokeWidth="1" strokeDasharray="3 4" />
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1200"
            stroke="var(--accent)"
            strokeWidth="1.5"
            className={`line-progress ${drawn ? "drawn" : ""}`}
            style={{
              ["--total" as string]: "1200",
              filter: "drop-shadow(0 0 4px rgba(29,158,117,0.5))",
            }}
          />
        </svg>

        <ol className="space-y-8">
          {stages.map((s, i) => (
            <li key={s.n} className="relative grid grid-cols-[40px_1fr_auto] gap-5 md:gap-6 items-start">
              <div
                className="relative z-10 mt-0.5"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: "1px solid var(--accent)",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: drawn ? "0 0 12px rgba(29,158,117,0.4)" : "none",
                  transition: `box-shadow 400ms ease-out ${i * 200}ms`,
                }}
              >
                <span className="num text-[11px]" style={{ color: "var(--accent)" }}>
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] tracking-tight font-semibold">{s.t}</h3>
                <p
                  className="mt-1.5 text-[14.5px] leading-relaxed max-w-[60ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.d}
                </p>
              </div>
              <span
                className="num text-[10px] tracking-[0.1em] mt-2 px-2 py-1 rounded whitespace-nowrap"
                style={{
                  color: "var(--accent)",
                  background: "var(--accent-glow)",
                  border: "0.5px solid var(--accent)",
                }}
              >
                {s.badge}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
