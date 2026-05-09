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
      "Generic ad copy that hasn't been validated against real Reddit complaints, Trustpilot reviews, current Meta ads, or what your competitors are actually running this week.",
  },
  {
    title: "Your agency briefs are theater.",
    body:
      "30-page decks built from competitor screenshots and a media planner's gut feel. By the time you read them, the ads have already been running for two weeks.",
  },
];

export function Problem() {
  return (
    <Section bordered>
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <Eyebrow>The problem</Eyebrow>
          <H2>Marketers spend first, learn second.</H2>
          <Lede>
            That's backwards. The cheapest market research is the one that runs before media
            spend, not after.
          </Lede>
        </div>
        <ol className="space-y-10">
          {pains.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[auto_1fr] gap-6">
              <span
                className="num text-[15px] pt-1"
                style={{ color: "var(--text-3)" }}
              >
                0{i + 1}
              </span>
              <div>
                <h3 className="text-[20px] tracking-tight font-medium leading-tight">
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-[15.5px] leading-relaxed max-w-[55ch]"
                  style={{ color: "var(--text-2)" }}
                >
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
