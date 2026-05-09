import { Section, Eyebrow, H2 } from "../Section";

const stack = [
  { name: "Slack",         use: "Brief ready · alerts · weekly digest" },
  { name: "Notion",        use: "Sync briefs and action boards" },
  { name: "Google Drive",  use: "Export reports" },
  { name: "Canva",         use: "Export creative assets" },
  { name: "Google Sheets", use: "Export data" },
  { name: "Higgsfield",    use: "Video generation (credits)" },
];

export function Integrations() {
  return (
    <Section bordered id="integrations">
      <Eyebrow>Works with your stack</Eyebrow>
      <H2 className="max-w-[26ch]">Munero connects with the tools your team already uses.</H2>

      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stack.map((s) => (
          <li
            key={s.name}
            className="hover-lift flex items-center gap-2.5 px-3.5"
            style={{
              height: 48,
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: 8,
            }}
            title={s.use}
          >
            <span
              className="block w-2 h-2 rounded-full shrink-0"
              style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
            />
            <span className="text-[13.5px] font-medium tracking-tight truncate">{s.name}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 num text-[11px]" style={{ color: "var(--text-3)" }}>
        Brief delivery, alerts, and weekly recaps fire automatically once connected.
      </p>
    </Section>
  );
}
