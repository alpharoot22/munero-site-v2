"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";
import { CountUp } from "../CountUp";

const WORKSPACE_STATS = [
  {
    number: 9,
    display: "9",
    unit: "AI assistants",
    description:
      "Intelligence Analyst, Competitor Analyst, Creative Director, Media Buyer, Landing Advisor, Compliance Reviewer, Weekly Update, Board Report. Plus a global navigator on every page.",
  },
  {
    number: 60,
    display: "60",
    unit: "day intelligence loop",
    description:
      "Day 7, 14, and 30 review engines return kill, scale, hold, or watch decisions per creative. Outcomes feed the accuracy tracker. Month 2 auto-refresh triggers automatically.",
  },
  {
    number: null as number | null,
    display: "\u221E",
    unit: "briefs compound",
    description:
      "Every brief makes the next one sharper. Cross-brand patterns accumulate. Market memory builds. Your portfolio benchmarks update each cycle.",
  },
];

const SIDEBAR = [
  { label: "Dashboard" },
  { label: "My Brief" },
  { label: "Competitors" },
  { label: "Creative Studio" },
  { label: "AI Assistants", active: true },
  { label: "Integrations" },
];

const INTEGRATIONS = [
  { name: "Slack",         detail: "Alerts + updates" },
  { name: "Notion",        detail: "Sync briefs" },
  { name: "Google Drive",  detail: "Export reports" },
  { name: "Canva",         detail: "Export creatives" },
  { name: "Google Sheets", detail: "Export data" },
  { name: "Higgsfield",    detail: "Video generation" },
];

export function Workspace() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const [mockupRevealed, setMockupRevealed] = useState(false);
  const [pillsRevealed, setPillsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMockupRevealed(true);
      setPillsRevealed(true);
      return;
    }

    const observers: IntersectionObserver[] = [];
    [
      [mockupRef, setMockupRevealed],
      [pillsRef, setPillsRevealed],
    ].forEach(([ref, setter]) => {
      const r = ref as React.RefObject<HTMLDivElement>;
      const set = setter as React.Dispatch<React.SetStateAction<boolean>>;
      const el = r.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              set(true);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Section bordered id="workspace" className="workspace-section scroll-mt-24">
      <Eyebrow>YOUR WORKSPACE · LIVE AT APP.MUNERO.AI</Eyebrow>
      <H2 className="max-w-[26ch]">
        The brief is what Munero runs first. The workspace is what you keep.
      </H2>
      <Lede className="max-w-[60ch]">
        The moment you start, your workspace is ready. Your market intelligence,
        competitors, creative assets, campaign plan, and AI assistants all live
        in one place. Upgrade when you want monitoring, refreshes, unlimited
        briefs, or agency workflows.
      </Lede>

      {/* Three stat columns */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:divide-x md:divide-[var(--border)]">
        {WORKSPACE_STATS.map((s, i) => (
          <div key={s.unit} className={i === 0 ? "" : "md:pl-10"}>
            <div
              className="num leading-none"
              style={{
                fontSize: 72,
                color: "var(--accent)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              {s.number !== null ? (
                <CountUp to={s.number} className="num" />
              ) : (
                s.display
              )}
            </div>
            <div
              className="mt-2"
              style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}
            >
              {s.unit}
            </div>
            <p
              className="mt-2 leading-relaxed"
              style={{
                fontSize: 14,
                color: "var(--text-2)",
                maxWidth: 320,
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </div>

      {/* Workspace mockup */}
      <div
        ref={mockupRef}
        className="workspace-mockup"
        style={{
          opacity: mockupRevealed ? 1 : 0,
          transform: mockupRevealed ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 500ms ease-out, transform 500ms ease-out",
        }}
      >
        {/* Top bar */}
        <div className="workspace-topbar">
          <span
            className="block w-2 h-2 rounded-full shrink-0"
            style={{
              background: "var(--score-high)",
              boxShadow: "0 0 6px var(--score-high)",
            }}
            aria-hidden="true"
          />
          <span className="num text-[11px]" style={{ color: "var(--text-3)" }}>
            app.munero.ai
          </span>
          <span
            className="num text-[9.5px] tracking-[0.12em] ml-auto px-2 py-0.5 rounded"
            style={{
              color: "var(--score-high)",
              background: "rgba(0, 229, 160, 0.1)",
              border: "0.5px solid rgba(0, 229, 160, 0.3)",
            }}
          >
            LIVE
          </span>
        </div>

        {/* Body: sidebar + main */}
        <div className="workspace-body">
          <aside className="workspace-sidebar">
            <ul>
              {SIDEBAR.map((s) => (
                <li
                  key={s.label}
                  className="px-4 py-2 text-[12.5px] flex items-center gap-2"
                  style={{
                    color: s.active ? "var(--accent)" : "var(--text-2)",
                    background: s.active
                      ? "rgba(29, 158, 117, 0.08)"
                      : "transparent",
                    borderLeft: s.active
                      ? "1.5px solid var(--accent)"
                      : "1.5px solid transparent",
                  }}
                >
                  <span
                    className="block w-1 h-1 rounded-full"
                    style={{
                      background: s.active ? "var(--accent)" : "var(--text-3)",
                    }}
                    aria-hidden="true"
                  />
                  {s.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="workspace-main">
            <div
              className="num text-[10.5px] mb-3"
              style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
            >
              GLOBAL AI NAVIGATOR
            </div>

            {/* Mock chat */}
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span
                  className="num text-[10px] mt-0.5 shrink-0"
                  style={{ color: "var(--text-3)" }}
                >
                  YOU
                </span>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  What should I test this week?
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span
                  className="num text-[10px] mt-0.5 shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  MUN
                </span>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  Hook 03 is converting at{" "}
                  <span className="num" style={{ color: "var(--score-high)" }}>
                    $42 CPA
                  </span>
                  , 38% under target. Pause hooks 07 and 09. Reallocate{" "}
                  <span className="num" style={{ color: "var(--accent-light)" }}>
                    $1,400
                  </span>{" "}
                  into Hook 03 variants.
                </p>
              </div>
              <div
                className="num text-[10px] pt-3 hairline-t"
                style={{ color: "var(--text-3)" }}
              >
                Citations: Day 7 review · Hook leaderboard · Decision log
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations row */}
      <div ref={pillsRef} className="mt-12">
        <div
          className="num text-[10px] mb-4"
          style={{
            color: "var(--text-3)",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
          }}
        >
          CONNECTS WITH
        </div>
        <div className="flex flex-wrap gap-2">
          {INTEGRATIONS.map((it, i) => (
            <span
              key={it.name}
              className="inline-flex items-center gap-2 px-3 py-1.5"
              style={{
                background: "var(--surface-2)",
                border: "0.5px solid var(--border)",
                borderRadius: 20,
                opacity: pillsRevealed ? 1 : 0,
                transform: pillsRevealed
                  ? "translateY(0)"
                  : "translateY(6px)",
                transition: `opacity 350ms ease-out ${i * 50}ms, transform 350ms ease-out ${i * 50}ms`,
              }}
            >
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 4px var(--accent)",
                }}
                aria-hidden="true"
              />
              <span
                className="text-[13px]"
                style={{ color: "var(--text)", fontWeight: 500 }}
              >
                {it.name}
              </span>
              <span className="num text-[10px]" style={{ color: "var(--text-3)" }}>
                {it.detail}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Closing CTA line */}
      <div className="mt-16 text-center">
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "var(--text)",
          }}
        >
          Your workspace is ready the moment you pay.
        </p>
        <p
          className="mt-2"
          style={{
            fontSize: 14,
            color: "var(--text-2)",
          }}
        >
          No setup. No onboarding call. No waiting.
        </p>
        <a
          href="https://app.munero.ai"
          className="num mt-5 inline-flex items-center gap-1.5"
          style={{
            color: "var(--accent)",
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          See what&apos;s inside <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}
