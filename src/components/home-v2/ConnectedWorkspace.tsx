export function ConnectedWorkspace() {
  return (
    <section
      style={{
        background: "#050508",
        padding: "0 0 72px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="flow-grid">
          {/* Input */}
          <FlowBlock
            badge="INPUT"
            badgeColor="#1D9E75"
            icon={<InputIcon />}
            lines={["Product · Website", "Market · Goal"]}
          />

          <FlowArrow />

          {/* Munero Workspace */}
          <FlowBlock
            badge="MUNERO WORKSPACE"
            badgeColor="#8B5CF6"
            icon={<WorkspaceIcon />}
            lines={["Research → Build → Optimize"]}
            elevated
          />

          <FlowArrow />

          {/* Output */}
          <FlowBlock
            badge="OUTPUT"
            badgeColor="#3B82F6"
            icon={<OutputIcon />}
            lines={["Campaign brief · Creative pack", "Client dashboard · Next actions"]}
          />
        </div>
      </div>

      <style>{`
        .flow-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }
        .flow-arrow { display: none; }
        @media (min-width: 900px) {
          .flow-grid {
            grid-template-columns: 1fr auto 1.1fr auto 1fr;
            gap: 12px;
            align-items: center;
          }
          .flow-arrow { display: inline-flex; }
        }
      `}</style>
    </section>
  );
}

function FlowBlock({
  badge,
  badgeColor,
  icon,
  lines,
  elevated,
}: {
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  lines: string[];
  elevated?: boolean;
}) {
  return (
    <div
      style={{
        background: elevated ? "#0E0E18" : "#0A0A12",
        border: `0.5px solid ${elevated ? badgeColor + "55" : "#1E1E2E"}`,
        borderRadius: 12,
        padding: "20px 22px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: elevated ? `0 0 30px -8px ${badgeColor}33` : "none",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 8,
          background: `${badgeColor}15`,
          color: badgeColor,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10.5,
            color: badgeColor,
            letterSpacing: "0.14em",
            marginBottom: 4,
          }}
        >
          {badge}
        </div>
        {lines.map((line) => (
          <div
            key={line}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#E8E8F0",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <span
      className="flow-arrow"
      style={{
        alignItems: "center",
        justifyContent: "center",
        color: "#505068",
      }}
      aria-hidden="true"
    >
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <path
          d="M1 7 H17 M12 2 L17 7 L12 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function InputIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 10 H13 M10 7 V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function WorkspaceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="3" r="1.4" fill="currentColor" />
      <circle cx="17" cy="10" r="1.4" fill="currentColor" />
      <circle cx="10" cy="17" r="1.4" fill="currentColor" />
      <circle cx="3" cy="10" r="1.4" fill="currentColor" />
    </svg>
  );
}

function OutputIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 13 V15 C3 16 4 17 5 17 H15 C16 17 17 16 17 15 V13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M10 3 V12 M6 7 L10 3 L14 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
