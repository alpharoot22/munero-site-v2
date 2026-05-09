import { Section, Eyebrow, H2, Lede } from "../Section";

const pains = [
  {
    title: "You launch on a hunch.",
    body:
      "You have a hypothesis about what message will land, but no proof. You spend $5K to find out, and most of it teaches you what doesn't work.",
  },
  {
    title: "ChatGPT gives you guesses, not signal.",
    body:
      "Generic ad copy that hasn't been validated against real Reddit complaints, Trustpilot reviews, current Meta ads, or what your competitors are running this week.",
  },
  {
    title: "Your agency briefs are theater.",
    body:
      "30-page decks built from competitor screenshots and a media planner's gut feel. By the time you read them, the ads have been running for two weeks.",
  },
];

export function Problem() {
  return (
    <Section bordered id="problem">
      <Eyebrow>The problem</Eyebrow>
      <H2 className="max-w-[20ch]">Marketers spend first, learn second.</H2>
      <Lede>
        That's backwards. The cheapest market research is the one that runs before media spend,
        not after.
      </Lede>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px hairline">
        {pains.map((p, i) => (
          <article
            key={p.title}
            className="relative overflow-hidden p-7 md:p-8 hover-lift"
            style={{ background: "var(--surface)" }}
          >
            {/* Red ambient glow per card */}
            <span
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 87, 87, 0.04) 0%, transparent 70%)",
              }}
            />
            <div
              className="num text-[32px] leading-none"
              style={{ color: "var(--accent)" }}
            >
              0{i + 1}
            </div>
            <h3 className="mt-5 text-[20px] tracking-tight font-semibold leading-tight">
              {p.title}
            </h3>
            <p
              className="mt-3 text-[14.5px] leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
