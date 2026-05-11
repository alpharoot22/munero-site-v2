import { Section, Eyebrow, H2 } from "../Section";
import { STRIPE_LINKS } from "./Pricing";

interface AssetCard {
  title: string;
  desc: string;
}

const ASSETS: AssetCard[] = [
  {
    title: "Static Ads",
    desc: "Generate platform-ready ad concepts for Meta, TikTok, Google, and LinkedIn.",
  },
  {
    title: "UGC Scripts",
    desc: "Create creator-style scripts based on real buyer objections and emotional triggers.",
  },
  {
    title: "Product Visuals",
    desc: "Generate product scenes, landing page hero visuals, and image variations.",
  },
  {
    title: "Video Concepts",
    desc: "Create Higgsfield-ready prompts, b-roll concepts, and short-form video ideas.",
  },
  {
    title: "Retargeting Assets",
    desc: "Build objection-handling ads for warm audiences.",
  },
  {
    title: "Ads Manager Files",
    desc: "Export campaign naming, copy, hooks, creative prompts, and kill/scale rules.",
  },
];

export function CreativeWorkspace() {
  return (
    <Section bordered id="creative-workspace" className="scroll-mt-24">
      <Eyebrow>Creative Workspace</Eyebrow>
      <H2 className="max-w-[28ch]">
        From intelligence brief to creative assets.
      </H2>
      <p
        className="mt-4 text-[16.5px] leading-relaxed max-w-[60ch]"
        style={{ color: "var(--text-2)" }}
      >
        Munero does not stop at recommendations. Creative Workspace turns
        every validated angle into launch-ready creative assets.
      </p>

      <ul className="mt-12 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-px hairline">
        {ASSETS.map((a) => (
          <li
            key={a.title}
            className="p-6 hover-lift flex flex-col items-start gap-2"
            style={{ background: "var(--surface)" }}
          >
            <span
              className="num"
              style={{
                fontSize: 10,
                color: "var(--accent)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {a.title}
            </span>
            <p
              className="leading-relaxed"
              style={{ fontSize: 14, color: "var(--text-2)" }}
            >
              {a.desc}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p
          className="num text-[11.5px]"
          style={{
            color: "var(--text-3)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Creative Workspace · $299 one-time
        </p>
        <a href={STRIPE_LINKS.creative} className="btn-primary">
          Open Creative Workspace · $299
          <Arrow />
        </a>
      </div>
    </Section>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
