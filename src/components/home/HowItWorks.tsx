"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const steps = [
  { t: "Tell us your brand and product.", d: "Brand, URL, what you sell, who it's for, and your monthly ad budget. Two minutes.", time: "2 min" },
  { t: "16 intelligence squads run in parallel.", d: "Reddit, Trustpilot, Google Trends, YouTube, Meta Ad Library, TikTok, LinkedIn, Amazon, deep competitor analysis, and seven more sources.", time: "20 min" },
  { t: "We assemble the brief.", d: "Audience segments mapped to pain points. Hooks ranked by predicted performance. Competitor gaps with attack angles. Budget allocation. Kill rules.", time: "8 min" },
  { t: "Creative production fires.", d: "5 audience segments, 10 ad hooks, competitor angles, platform allocation. Images auto-generated for every asset. Videos via credits on Full Creative and Agency.", time: "5 min" },
  { t: "You get the campaign plan.", d: "30-day launch sequence. KPI targets. Kill and scale rules. Direct-import to Meta, Google, TikTok. SHA-256 audit hash.", time: "Done" },
];

export function HowItWorks() {
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section bordered id="how">
      <Eyebrow>How it works</Eyebrow>
      <H2 className="max-w-[18ch]">From zero context to launch-ready in 35 minutes.</H2>
      <Lede>
        We don't replace your strategy. We give you a defensible foundation in less time than a
        meeting takes.
      </Lede>

      <div ref={ref} className="mt-14 relative">
        {/* SVG line draws on scroll */}
        <svg
          className="absolute left-[14px] md:left-[19px] top-0 h-full pointer-events-none"
          width="2"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 2 1000"
        >
          <line x1="1" y1="0" x2="1" y2="1000" stroke="var(--border-2)" strokeWidth="1" strokeDasharray="3 4" />
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1000"
            stroke="var(--accent)"
            strokeWidth="1.5"
            className={`line-progress ${drawn ? "drawn" : ""}`}
            style={{
              ["--total" as string]: "1000",
              filter: "drop-shadow(0 0 4px rgba(29, 158, 117, 0.5))",
            }}
          />
        </svg>

        <ol className="space-y-8">
          {steps.map((s, i) => (
            <li key={s.t} className="relative grid grid-cols-[40px_1fr_auto] gap-5 md:gap-6 items-start">
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
                  boxShadow: drawn ? "0 0 12px rgba(29, 158, 117, 0.4)" : "none",
                  transition: `box-shadow 400ms ease-out ${i * 200}ms`,
                }}
              >
                <span className="num text-[11px]" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] tracking-tight font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed max-w-[60ch]" style={{ color: "var(--text-2)" }}>
                  {s.d}
                </p>
              </div>
              <span className="num text-[11.5px] mt-2 whitespace-nowrap" style={{ color: "var(--text-3)" }}>
                {s.time}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Without / With comparison */}
      <WithoutWithCompare />
    </Section>
  );
}

const WITHOUT = [
  "Launch on a hunch",
  "Spend $8,000 to $15,000",
  "Wait 14 days for data",
  "Discover the angle was wrong",
  "Revise the creative",
  "Launch again",
  "Repeat the cycle",
];

const WITH = [
  "Tell us your brand (2 min)",
  "16 squads scan everything (20 min)",
  "Real customer behavior mapped",
  "Winning angles identified",
  "Campaign brief delivered",
  "Launch with evidence",
];

function WithoutWithCompare() {
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
    <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-5">
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
          {WITH.map((s, i) => (
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
