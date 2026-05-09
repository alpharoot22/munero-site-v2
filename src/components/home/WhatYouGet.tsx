"use client";

import { useState } from "react";
import { Section, Eyebrow, H2, Lede } from "../Section";

const tabs = [
  {
    id: "intel",
    label: "Intelligence",
    items: [
      ["5 audience segments with intent scores", "Demographics, psychographics, pain triggers, and a 0 to 10 intent score per segment."],
      ["Pain point library", "Ranked by frequency and emotional intensity, with quotes attached to each."],
      ["Competitor watchlist", "10 deep dives. Threat levels, attack angles, gaps you can exploit."],
      ["Keyword + trend intelligence", "Intent class, CPC, search volume trajectory, breakout queries."],
      ["Evidence library", "50+ verifiable items per brief across Reddit, reviews, ads, video, search."],
    ],
  },
  {
    id: "creative",
    label: "Creative",
    items: [
      ["46 creative assets", "Headlines, body copy, image prompts, video scripts. Ready to ship."],
      ["10 hooks ranked by predicted CTR", "Pattern-matched against winning ads in your category."],
      ["Funnel-stage tagging", "Cold, warm, hot variants. So you don't run BoF copy at top of funnel."],
      ["Auto image generation", "Every brief generates Meta, TikTok, and Google image creatives. Included."],
      ["Higgsfield video credits", "3 credits on Full Creative, 10 per month on Agency. Production quality."],
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    items: [
      ["Competitor gap analysis", "10 competitors mapped. Where they're weak. Specific attack angles."],
      ["Platform budget allocation", "Channel split with rationale grounded in segment fit and CAC benchmarks."],
      ["Market opportunity score", "0 to 100, with the inputs that drove the score."],
      ["Positioning recommendation", "Where to plant the flag this quarter and why."],
      ["Risk register", "What could kill the campaign and how to detect it early."],
    ],
  },
  {
    id: "campaign",
    label: "Campaign",
    items: [
      ["30-day launch plan", "Day-by-day sequence: tests, scale points, kill criteria."],
      ["KPI targets", "CPM, CTR, CPA, ROAS by audience by funnel stage."],
      ["Kill rules and scale rules", "Quantified thresholds. No more 'let it run another week'."],
      ["Direct-import files", "Meta Ads Manager, Google Ads Editor, TikTok Ads Manager."],
      ["SHA-256 audit hash", "Every brief is hashed. Provable record of what you got and when."],
    ],
  },
];

export function WhatYouGet() {
  const [active, setActive] = useState("intel");
  const current = tabs.find((t) => t.id === active)!;
  return (
    <Section bordered id="brief">
      <Eyebrow>What you get</Eyebrow>
      <H2 className="max-w-[22ch]">
        A brief built to be argued with, not <span className="italic-accent">skimmed</span>.
      </H2>
      <Lede>
        Every claim is footnoted to source data. Every recommendation has a kill criterion.
        Audit-ready by default.
      </Lede>

      <div
        className="mt-12 hairline rounded-lg overflow-hidden"
        style={{ background: "var(--surface)" }}
      >
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
                className="num text-[10.5px] tracking-[0.1em]"
                style={{ color: "var(--text-3)" }}
              >
                INCLUDED
              </span>
            </li>
          ))}
        </ul>
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
