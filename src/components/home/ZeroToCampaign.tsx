"use client";

import { useEffect, useRef, useState } from "react";

const FLOW_STEPS = [
  { step: "01", label: "Your brand",            detail: "2 min setup" },
  { step: "02", label: "Market scan",           detail: "16 squads · 20 min" },
  { step: "03", label: "Customer behavior",     detail: "Reddit · Reviews · Search" },
  { step: "04", label: "Competitors mapped",    detail: "10 deep dives" },
  { step: "05", label: "Market gaps found",     detail: "Attack angles identified" },
  { step: "06", label: "46 creative assets",    detail: "Copy · Images · Video" },
  { step: "07", label: "Ads manager ready",     detail: "Meta · Google · TikTok" },
  { step: "08", label: "Live",                  detail: "35 min total", live: true },
];

export function ZeroToCampaign() {
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
    <section id="how" className="hairline-t scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <h2
          className="font-bold tracking-[-0.02em]"
          style={{
            fontSize: 42,
            lineHeight: 1.1,
            color: "var(--text)",
          }}
        >
          Everything between zero and launch.
          <br />
          Built on real customer behavior.
        </h2>
        <p
          className="mt-3"
          style={{ fontSize: 16, color: "var(--text-2)" }}
        >
          This is what Munero does. In 35 minutes. For $99.
        </p>

        <div ref={ref} className="mt-12 overflow-x-auto md:overflow-visible">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-3 md:gap-2">
            {FLOW_STEPS.map((s, i) => (
              <div
                key={s.step}
                className="flex md:flex-row flex-col items-center gap-3 md:gap-2"
              >
                {/* Step card */}
                <div
                  className="flow-step"
                  style={{
                    background: s.live ? "rgba(29, 158, 117, 0.06)" : "var(--surface)",
                    border: `0.5px solid ${s.live ? "var(--accent)" : "var(--border)"}`,
                    borderRadius: 8,
                    padding: "14px 16px",
                    minWidth: 130,
                    flexShrink: 0,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 400ms ease-out ${i * 200}ms, transform 400ms ease-out ${i * 200}ms`,
                  }}
                >
                  <div
                    className="num"
                    style={{
                      fontSize: 10,
                      color: "var(--text-3)",
                      marginBottom: 6,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: s.live ? "var(--accent)" : "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="num"
                    style={{ fontSize: 10, color: "var(--text-3)" }}
                  >
                    {s.detail}
                  </div>
                </div>

                {/* Arrow between steps (not after last) */}
                {i < FLOW_STEPS.length - 1 && (
                  <Arrow revealed={revealed} delayMs={i * 200 + 100} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({ revealed, delayMs }: { revealed: boolean; delayMs: number }) {
  const dash = 28;
  return (
    <svg
      className="md:rotate-0 rotate-90"
      width="32"
      height="12"
      viewBox="0 0 32 12"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <line
        x1="0"
        y1="6"
        x2="28"
        y2="6"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray={dash}
        strokeDashoffset={revealed ? 0 : dash}
        style={{
          transition: `stroke-dashoffset 400ms ease-out ${delayMs}ms`,
        }}
      />
      <path
        d="M24 2 L30 6 L24 10"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity={revealed ? 1 : 0}
        style={{
          transition: `opacity 200ms ease-out ${delayMs + 300}ms`,
        }}
      />
    </svg>
  );
}
