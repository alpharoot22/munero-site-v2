"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const steps = [
  { t: "Tell us your niche", d: "Niche, country, monthly budget. 90 seconds.", time: "90s" },
  { t: "16 squads scan your market simultaneously", d: "Reddit, Trustpilot, Meta Ad Library, TikTok, YouTube, search intent, competitor PPC, and more.", time: "20m" },
  { t: "Intelligence validated and ranked", d: "Pain points scored by frequency and emotion. Hooks ranked by predicted performance. Competitor gaps scored by attack viability.", time: "5m" },
  { t: "Brief assembled with 46 creative assets", d: "5 audience segments, 10 ad hooks, competitor angles, image and video prompts, headlines, body copy.", time: "8m" },
  { t: "Campaign plan delivered", d: "30-day launch sequence, KPI targets, kill rules, scale rules, direct-import to Meta, Google, TikTok.", time: "Done" },
];

export function HowItWorks() {
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      <H2 className="max-w-[18ch]">
        From zero context to launch-ready in <span className="italic-accent">35 minutes</span>.
      </H2>
      <Lede>
        We don't replace your strategy. We give you a defensible foundation in less time than a
        meeting takes.
      </Lede>

      <div ref={ref} className="mt-16 relative">
        {/* Connecting line (vertical on mobile, vertical-on-left on desktop) */}
        <svg
          className="absolute left-[14px] md:left-[19px] top-0 h-full pointer-events-none"
          width="2"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 2 1000"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="1000"
            stroke="var(--border-2)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
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
            <li
              key={s.t}
              className="relative grid grid-cols-[40px_1fr_auto] gap-5 md:gap-6 items-start"
            >
              {/* Step node */}
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
                  boxShadow: drawn
                    ? `0 0 12px rgba(29, 158, 117, 0.4)`
                    : "none",
                  transition: `box-shadow 400ms ease-out ${i * 200}ms`,
                }}
              >
                <span className="num text-[11px]" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] tracking-tight font-medium">{s.t}</h3>
                <p
                  className="mt-1.5 text-[14.5px] leading-relaxed max-w-[60ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.d}
                </p>
              </div>
              <span
                className="num text-[11.5px] mt-2 whitespace-nowrap"
                style={{ color: "var(--text-3)" }}
              >
                {s.time}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
