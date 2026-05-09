import { Section, Eyebrow, H2, Lede } from "../Section";

const quotes = [
  {
    text: "Planning a campaign shouldn't feel like trying to diagnose a patient without access to their chart.",
    name: "AdExchanger",
    role: "industry publication",
    span: "lg",
    accent: true,
  },
  {
    text: "I'm running ads on Facebook, Google, and TikTok, and I have no idea where my next dollar should go.",
    name: "DTC Founder",
    role: "$20K/mo ad spend",
    span: "lg",
  },
  {
    text: "We've got so much data, we've started ignoring it.",
    name: "CMO",
    role: "financial services",
    span: "md",
  },
  {
    text: "We're using ChatGPT for campaigns. We know it's risky. But our internal tools are too slow.",
    name: "VP Marketing",
    role: "B2B SaaS",
    span: "md",
  },
  {
    text: "Each tool delivers a sliver of value, but collectively the fragmented stack creates complexity that paralyzes operations.",
    name: "Fluency",
    role: "AdOps Report",
    span: "md",
    accent: true,
  },
];

export function Voices() {
  return (
    <Section bordered id="voices">
      <Eyebrow>Market voices</Eyebrow>
      <H2 className="max-w-[20ch]">
        This is what your market sounds like <span className="italic-accent">right now</span>.
      </H2>
      <Lede>
        Pulled from trade publications, founder forums, and interviews. Every quote below is a
        Munero user in waiting.
      </Lede>

      <div className="mt-12 grid md:grid-cols-6 gap-px hairline">
        {quotes.map((q, i) => {
          const colSpan =
            q.span === "lg" ? "md:col-span-3" : q.span === "md" ? "md:col-span-2" : "md:col-span-2";
          return (
            <figure
              key={i}
              className={`${colSpan} p-7 md:p-8 hover-lift flex flex-col justify-between gap-6 min-h-[220px]`}
              style={{
                background: q.accent ? "var(--surface-2)" : "var(--surface)",
              }}
            >
              <div>
                <div
                  className="text-[28px] leading-none mb-3 num"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  &ldquo;
                </div>
                <blockquote
                  className={`tracking-tight leading-snug ${q.span === "lg" ? "text-[22px] md:text-[26px]" : "text-[17px] md:text-[19px]"}`}
                  style={{ color: "var(--text)" }}
                >
                  {q.text}
                </blockquote>
              </div>
              <figcaption>
                <div className="text-[13.5px] font-medium tracking-tight">{q.name}</div>
                <div className="num text-[11px] mt-0.5" style={{ color: "var(--text-3)" }}>
                  {q.role}
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Section>
  );
}
