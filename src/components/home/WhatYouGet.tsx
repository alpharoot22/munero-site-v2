"use client";

import { useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const tabs = [
  {
    id: "intel",
    label: "Intelligence",
    content: <Intelligence />,
  },
  {
    id: "creative",
    label: "Creative",
    content: <Creative />,
  },
  {
    id: "strategy",
    label: "Strategy",
    content: <Strategy />,
  },
  {
    id: "campaign",
    label: "Campaign",
    content: <Campaign />,
  },
];

export function WhatYouGet() {
  const [active, setActive] = useState("intel");
  return (
    <Section bordered id="brief">
      <Eyebrow>What you get</Eyebrow>
      <H2 className="max-w-[22ch]">
        A brief built to be argued with, not <span className="italic-accent">skimmed</span>.
      </H2>
      <Lede>
        Every section below is from a real Peptide Therapy brief shipped to a Dubai-based DTC
        client. Names changed, structure preserved.
      </Lede>

      <div
        className="mt-12 hairline rounded-lg overflow-hidden"
        style={{ background: "var(--surface)" }}
      >
        {/* Brief header bar */}
        <div className="hairline-b flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5 text-[12.5px] num">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            <span style={{ color: "var(--text-2)" }}>
              Strategy Brief · Peptide Therapy · Dubai
            </span>
          </div>
          <span
            className="num text-[10px] px-2 py-1 rounded"
            style={{
              background: "var(--accent-glow)",
              color: "var(--accent-light)",
              border: "0.5px solid var(--accent)",
            }}
          >
            LIVE
          </span>
        </div>

        {/* Tabs */}
        <div className="flex hairline-b overflow-x-auto" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className="px-5 py-3.5 text-[13.5px] font-medium tracking-tight transition-colors whitespace-nowrap relative"
              style={{
                color: active === t.id ? "var(--text)" : "var(--text-3)",
                background: active === t.id ? "var(--surface-2)" : "transparent",
              }}
            >
              {t.label}
              {active === t.id && (
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-[1.5px]"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 6px var(--accent)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8">{tabs.find((t) => t.id === active)?.content}</div>
      </div>
    </Section>
  );
}

function Intelligence() {
  const segments = [
    { name: "Burned-out 30s biohacker", its: 9.2, share: "32%", pain: "Fatigue, energy crashes, doctors dismissing symptoms." },
    { name: "Recovery-focused gym pro", its: 8.7, share: "26%", pain: "Plateauing performance, injury recovery slowing." },
    { name: "Anti-aging early adopter", its: 8.1, share: "18%", pain: "Visible aging, sleep degrading after 35." },
    { name: "Founder sleep stack", its: 7.9, share: "14%", pain: "Operating at capacity with no recovery time." },
    { name: "Hormone-curious 40s", its: 7.4, share: "10%", pain: "Symptoms TRT clinics handwave away." },
  ];
  return (
    <div className="space-y-7">
      <BlockHead label="5 audience segments, ranked by intent">
        Each segment carries demographics, psychographics, pain triggers, preferred platforms,
        and an Intent Score (ITS) from 0 to 10.
      </BlockHead>
      <ul className="space-y-2">
        {segments.map((s, i) => (
          <li
            key={s.name}
            className="grid grid-cols-[28px_1fr_auto_auto] gap-4 items-baseline hairline-b last:border-b-0 py-3"
          >
            <span className="num text-[11px]" style={{ color: "var(--text-3)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-[14.5px] font-medium tracking-tight">{s.name}</div>
              <div className="text-[12.5px] mt-0.5" style={{ color: "var(--text-2)" }}>
                {s.pain}
              </div>
            </div>
            <span className="num text-[12px]" style={{ color: "var(--text-3)" }}>
              {s.share}
            </span>
            <ITS value={s.its} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITS({ value }: { value: number }) {
  const color =
    value >= 8.5 ? "var(--score-high)" : value >= 7.5 ? "var(--score-mid)" : "var(--text-2)";
  return (
    <span
      className="num text-[12px] px-2 py-0.5 rounded"
      style={{
        color,
        border: `0.5px solid ${color}`,
        background: "rgba(0,0,0,0.2)",
      }}
    >
      ITS {value.toFixed(1)}
    </span>
  );
}

function Creative() {
  const hooks = [
    { plat: "META", txt: "The recovery stack pro athletes won't stop texting me about.", score: 92 },
    { plat: "TT",   txt: "POV: your doctor finally stopped gaslighting your fatigue.", score: 87 },
    { plat: "YT",   txt: "I biohacked my 40s. Here's the protocol, minute by minute.", score: 84 },
    { plat: "IG",   txt: "Peptides are not steroids. Here's what your trainer won't explain.", score: 81 },
    { plat: "LI",   txt: "The CEO sleep stack. 7 founders. 90 days. Receipts inside.", score: 76 },
  ];
  return (
    <div className="space-y-7">
      <BlockHead label="10 ad hooks, ranked by predicted CTR">
        Each hook is tagged with platform, angle (curiosity, authority, social proof), and
        emotional trigger. We show 5 here.
      </BlockHead>
      <ul className="space-y-2">
        {hooks.map((h, i) => (
          <li
            key={h.txt}
            className="grid grid-cols-[40px_auto_1fr_auto] gap-4 items-center hairline-b last:border-b-0 py-3"
          >
            <span className="num text-[11px]" style={{ color: "var(--text-3)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="num text-[10px] px-2 py-1 rounded"
              style={{
                color: "var(--accent)",
                background: "var(--accent-glow)",
                border: "0.5px solid var(--accent)",
              }}
            >
              {h.plat}
            </span>
            <span className="text-[14px]" style={{ color: "var(--text)" }}>
              {h.txt}
            </span>
            <span
              className="num text-[12px]"
              style={{
                color: h.score >= 85 ? "var(--score-high)" : h.score >= 78 ? "var(--score-mid)" : "var(--text-2)",
              }}
            >
              {h.score}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="text-[12.5px] num pt-2"
        style={{ color: "var(--text-3)" }}
      >
        + 5 more hooks · 46 total creative assets across Meta, TikTok, Google
      </div>
    </div>
  );
}

function Strategy() {
  const allocs = [
    { plat: "Meta", pct: 42, dollars: "$4,200" },
    { plat: "TikTok", pct: 28, dollars: "$2,800" },
    { plat: "Google Search", pct: 18, dollars: "$1,800" },
    { plat: "YouTube", pct: 12, dollars: "$1,200" },
  ];
  return (
    <div className="space-y-7">
      <BlockHead label="Platform allocation · $10K/mo budget">
        Recommendations based on segment fit, channel CAC benchmarks, and competitor coverage
        gaps.
      </BlockHead>
      <ul className="space-y-3">
        {allocs.map((a) => (
          <li key={a.plat} className="hairline-b last:border-b-0 py-3">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[14.5px] font-medium tracking-tight">{a.plat}</span>
              <span className="num text-[13px]" style={{ color: "var(--text)" }}>
                {a.dollars} <span style={{ color: "var(--text-3)" }}>· {a.pct}%</span>
              </span>
            </div>
            <div
              className="h-[3px] rounded-full overflow-hidden"
              style={{ background: "var(--border-2)" }}
            >
              <div
                style={{
                  width: `${a.pct}%`,
                  height: "100%",
                  background: "var(--accent)",
                  boxShadow: "0 0 8px rgba(29,158,117,0.6)",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-px hairline mt-6">
        {[
          ["Kill rule", "CPA > $180 after $500 spent on a creative"],
          ["Scale rule", "ROAS > 2.4x sustained for 72h triggers +30% budget"],
        ].map(([t, b]) => (
          <div key={t} className="p-4" style={{ background: "var(--surface-2)" }}>
            <div className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
              {t}
            </div>
            <div className="mt-1 text-[13px]" style={{ color: "var(--text-2)" }}>
              {b}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Campaign() {
  return (
    <div className="space-y-7">
      <BlockHead label="30-day launch plan">
        Day-by-day sequence with creative cadence, learning checkpoints, and scale gates.
      </BlockHead>
      <ol className="space-y-2">
        {[
          ["Day 1 to 3", "Launch 8 creatives across Meta + TikTok at 60% budget. Establish CPA baseline."],
          ["Day 4 to 7", "Kill bottom 3 creatives. Reallocate to top 2 hooks. Add 4 new variants."],
          ["Day 8 to 14", "First scale gate. ROAS > 2.0 audiences get +30% budget. Add YouTube."],
          ["Day 15 to 21", "Refresh creative on fatigued sets. Layer in 2nd-tier audiences."],
          ["Day 22 to 30", "Second scale gate. Lock winners. Prep month 2 brief refresh."],
        ].map(([when, what], i) => (
          <li
            key={when}
            className="grid grid-cols-[100px_1fr] gap-5 hairline-b last:border-b-0 py-3"
          >
            <span className="num text-[11.5px]" style={{ color: "var(--accent)" }}>
              {when}
            </span>
            <span className="text-[14px]" style={{ color: "var(--text-2)" }}>
              {what}
            </span>
          </li>
        ))}
      </ol>
      <div
        className="hairline rounded-md p-5 grid grid-cols-3 gap-px"
        style={{ background: "var(--surface-2)" }}
      >
        {[
          ["KPI target", "ROAS 2.6x"],
          ["Market opportunity", "78 / 100"],
          ["Days to launch", "0"],
        ].map(([l, v]) => (
          <div key={l} className="p-3">
            <div className="num text-[10.5px]" style={{ color: "var(--accent)" }}>
              {l}
            </div>
            <div className="num text-[20px] mt-1" style={{ color: "var(--text)" }}>
              {v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlockHead({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[15.5px] font-medium tracking-tight">{label}</div>
      <div className="mt-1 text-[13.5px]" style={{ color: "var(--text-2)" }}>
        {children}
      </div>
    </div>
  );
}
