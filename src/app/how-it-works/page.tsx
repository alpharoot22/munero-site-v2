import type { Metadata } from "next";
import Link from "next/link";
import { ZeroToCampaign } from "../../components/home/ZeroToCampaign";
import { WhatYouGet } from "../../components/home/WhatYouGet";

const STRIPE_BRIEF =
  "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Everything between zero and launch. Eight steps from your brand input to a ready-to-launch campaign in 35 minutes.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Page intro */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 0% 50%, rgba(29,158,117,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-12 md:pb-16">
          <div className="eyebrow mb-5">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />
            HOW IT WORKS
          </div>
          <h1
            className="font-bold tracking-[-0.03em] leading-[1.05] max-w-[20ch]"
            style={{
              color: "var(--text)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 800,
            }}
          >
            From your brand to a launch-ready campaign in{" "}
            <span style={{ color: "var(--accent)" }}>35 minutes</span>.
          </h1>
          <p
            className="mt-5 text-[17px] md:text-[18px] leading-relaxed max-w-[58ch]"
            style={{ color: "var(--text-2)" }}
          >
            Eight steps. Zero guesses. Every recommendation built on real
            customer behavior, not gut feel. Here is what runs between you
            telling Munero your brand and your ads going live.
          </p>
        </div>
      </section>

      {/* The 8-step flow */}
      <ZeroToCampaign />

      {/* What you actually get back */}
      <WhatYouGet />

      {/* Closing CTA */}
      <section className="hairline-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 text-center">
          <h2
            className="font-bold tracking-[-0.02em] leading-[1.1] max-w-[24ch] mx-auto"
            style={{
              color: "var(--text)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
            }}
          >
            That is the whole loop. Ready to run it on your brand?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={STRIPE_BRIEF} className="btn-primary">
              Get my brief · $99
            </a>
            <Link href="/sample" className="btn-secondary">
              See a sample first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
