interface Item {
  q: string;
  a: string;
}

const ITEMS: Item[] = [
  {
    q: "Is it worth $99?",
    a: "If your next campaign spends $5K+ on ads, yes. One $99 brief surfaces the message, audience, and channel plan you would otherwise discover six weeks into spending. Most users recoup the cost in the first hook decision.",
  },
  {
    q: "How is it different from ChatGPT?",
    a: "ChatGPT writes plausible copy from training data. Munero runs 16 intelligence squads across live signals (Reddit, Trustpilot, Meta Ad Library, Google Trends, YouTube, and more), structures the findings into a campaign brief, and ties every claim to source citations you can verify.",
  },
  {
    q: "How long does it take?",
    a: "First brief is ready in 35 minutes. The workspace opens immediately. Briefs from the higher tiers include creative assets and a 30-day campaign plan in the same window.",
  },
  {
    q: "Can I see a sample brief?",
    a: "Yes, the full sample brief is at /sample. It is a real, lightly anonymized run for a DTC brand. Every section in the live product is shown.",
  },
  {
    q: "Can agencies use this?",
    a: "Agency Workspace is built for it. Unlimited briefs across clients, white-label reports, multi-client command center, team seats, and ongoing intelligence. Several 10 to 50 person agencies run it as a productized service.",
  },
];

export function FAQ() {
  return (
    <section
      style={{
        background: "#050508",
        borderTop: "0.5px solid #1E1E2E",
        padding: "80px 0",
      }}
      id="faq"
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 3.4vw, 40px)",
            color: "#E8E8F0",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            margin: 0,
            textAlign: "center",
          }}
        >
          Questions, <span style={{ color: "#1D9E75" }}>answered.</span>
        </h2>

        <ul
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            listStyle: "none",
            padding: 0,
            background: "#0A0A12",
            border: "0.5px solid #1E1E2E",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.q}
              style={{
                borderTop: i === 0 ? "none" : "0.5px solid #1E1E2E",
              }}
            >
              <details className="faq-item">
                <summary>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: 15.5,
                      fontWeight: 500,
                      color: "#E8E8F0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="faq-chev"
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      border: "0.5px solid #1E1E2E",
                      color: "#9898A8",
                      transition: "transform 200ms ease-out, color 150ms ease-out",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2 V10 M2 6 H10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p
                  style={{
                    margin: 0,
                    padding: "0 22px 20px 22px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 14,
                    color: "#9898A8",
                    lineHeight: 1.65,
                    maxWidth: "62ch",
                  }}
                >
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .faq-item > summary {
          list-style: none;
          cursor: pointer;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: background 150ms ease-out;
        }
        .faq-item > summary::-webkit-details-marker { display: none; }
        .faq-item > summary:hover { background: rgba(29, 158, 117, 0.04); }
        .faq-item[open] > summary .faq-chev {
          transform: rotate(45deg);
          color: #1D9E75;
          border-color: rgba(29, 158, 117, 0.4);
          background: rgba(29, 158, 117, 0.08);
        }
      `}</style>
    </section>
  );
}
