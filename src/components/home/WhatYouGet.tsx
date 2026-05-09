"use client";

import { useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const tabs = [
  {
    id: "intel",
    label: "Intelligence",
    items: [
      ["Audience segments", "3 to 5 distinct buyer profiles, mapped to pain points and channels."],
      ["Pain point library", "Ranked by frequency, emotional intensity, and competitor coverage."],
      ["Keyword intelligence", "Intent class, CPC, search volume trend, competitive density."],
      ["Market trends", "Growth rate by sub-segment with 18-month trajectory."],
      ["Evidence library", "50+ verifiable items across Reddit, reviews, ads, video, search."],
    ],
  },
  {
    id: "creative",
    label: "Creative",
    items: [
      ["46 creative assets", "Headlines, body, image prompts, video scripts, ad units."],
      ["Hooks ranked by signal", "Predicted CTR based on pattern match against winning ads."],
      ["Funnel-stage tagging", "Cold, warm, hot. So you don't run BoF copy at top of funnel."],
      ["Image and video prompts", "Plug into Higgsfield or your generation tool of choice."],
      ["Compliance review", "Flagged claims, restricted categories, platform policy notes."],
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    items: [
      ["Competitor gap analysis", "10 competitors. Where they're weak. Exact attack angles."],
      ["Budget allocation", "Channel split with rationale grounded in audience data."],
      ["Market opportunity score", "0 to 100 score with the inputs that drove it."],
      ["Positioning recommendation", "Where to plant the flag and why this quarter."],
      ["Risk register", "What could kill the campaign and how to detect it early."],
    ],
  },
  {
    id: "campaign",
    label: "Campaign",
    items: [
      ["30-day launch plan", "Day-by-day sequence: tests, scale points, kill criteria."],
      ["KPI targets", "CPM, CTR, CPA, ROAS by audience by funnel stage."],
      ["Kill rules", "Quantified thresholds. No more 'let it run another week'."],
      ["Scale rules", "What signal earns more budget and at what increment."],
      ["Direct-import files", "Meta Ads Manager, Google Ads Editor, TikTok Ads Manager."],
    ],
  },
];

export function WhatYouGet() {
  const [active, setActive] = useState("intel");
  const current = tabs.find((t) => t.id === active)!;
  return (
    <Section bordered id="brief">
      <Eyebrow>What you get</Eyebrow>
      <H2 className="max-w-[20ch]">A brief built to be argued with, not skimmed.</H2>
      <Lede>
        Every claim is footnoted to source data. Every recommendation has a kill criterion.
        Audit-ready by default.
      </Lede>

      <div className="mt-12 hairline rounded-md overflow-hidden" style={{ background: "var(--surface)" }}>
        <div className="flex hairline-b overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="px-5 py-4 text-[13.5px] font-medium tracking-tight transition-colors whitespace-nowrap"
              style={{
                color: active === t.id ? "var(--text)" : "var(--text-3)",
                background: active === t.id ? "var(--surface-2)" : "transparent",
                borderBottom: active === t.id ? "1px solid var(--accent)" : "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <ul className="p-2">
          {current.items.map(([title, body]) => (
            <li
              key={title}
              className="grid grid-cols-[auto_1fr_auto] gap-5 items-baseline px-5 py-4 hairline-b last:border-b-0"
            >
              <Tick />
              <div>
                <div className="text-[15px] font-medium tracking-tight">{title}</div>
                <div className="mt-1 text-[13.5px]" style={{ color: "var(--text-2)" }}>
                  {body}
                </div>
              </div>
              <span
                className="num text-[11.5px] tracking-[0.08em]"
                style={{ color: "var(--text-3)" }}
              >
                INCLUDED
              </span>
            </li>
          ))}
        </ul>

        {/* Credits explainer — only on Creative tab */}
        {active === "creative" && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px hairline-t"
            style={{ background: "var(--border)" }}
          >
            <div
              className="p-5"
              style={{ background: "var(--surface-2)" }}
            >
              <p className="num text-[10px] uppercase tracking-[0.1em] mb-2" style={{ color: "var(--accent)" }}>
                Auto-included
              </p>
              <p className="text-[14.5px] font-medium tracking-tight">Image generation</p>
              <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                Every creative asset gets an auto-generated image. Included in all tiers.
              </p>
            </div>
            <div
              className="p-5"
              style={{ background: "var(--surface-2)" }}
            >
              <p className="num text-[10px] uppercase tracking-[0.1em] mb-2" style={{ color: "var(--accent)" }}>
                Via credits
              </p>
              <p className="text-[14.5px] font-medium tracking-tight">Video generation</p>
              <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                Full Creative includes 3 video credits. Agency includes 10 / month. Powered by
                Higgsfield AI (video AI platform).
              </p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      <path
        d="M5 8L7 10L11 6"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
