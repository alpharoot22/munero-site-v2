"use client";

import { useEffect, useRef, useState } from "react";

interface Band {
  number: string;
  name: string;
  line: string;
  pills: string[];
  color: string;
}

const BANDS: Band[] = [
  {
    number: "01",
    name: "Market Research",
    line: "Find what the market wants.",
    pills: ["Pain points", "Competitors", "Keywords", "Trends"],
    color: "#1D9E75",
  },
  {
    number: "02",
    name: "Campaign + Creative",
    line: "Turn research into assets.",
    pills: ["Brief", "Images", "Video", "Copy", "UGC"],
    color: "#8B5CF6",
  },
  {
    number: "03",
    name: "Optimize + Learn",
    line: "Track results. Get smarter.",
    pills: ["ROAS", "Scorecard", "Playbooks", "Reports"],
    color: "#3B82F6",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {BANDS.map((b, i) => (
          <RevealBand key={b.number} band={b} last={i === BANDS.length - 1} />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 24px 32px",
          borderTop: "0.5px solid #1E1E2E",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#505068",
            letterSpacing: "0.04em",
          }}
        >
          + Integrations  ·  + Client Dashboard  ·  All connected.
        </p>
      </div>
    </section>
  );
}

function RevealBand({ band, last }: { band: Band; last: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        padding: "40px 24px 40px 44px",
        minHeight: 160,
        borderBottom: last ? "none" : "0.5px solid #1E1E2E",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Accent bar */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: band.color,
        }}
      />

      <div className="band-grid">
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#505068",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            {band.number}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: 32,
              color: "#E8E8F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {band.name}
          </h3>
          <p
            style={{
              marginTop: 8,
              fontSize: 14,
              color: "#9898A8",
              lineHeight: 1.5,
            }}
          >
            {band.line}
          </p>
        </div>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignSelf: "center",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {band.pills.map((p) => (
            <li
              key={p}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                color: "#9898A8",
                background: "#111118",
                border: `0.5px solid ${band.color}`,
                borderRadius: 6,
                padding: "6px 14px",
                letterSpacing: "0.02em",
              }}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .band-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .band-grid {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
}
