const STRIPE_STARTER = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00";

export function FinalCTA() {
  return (
    <section style={{ position: "relative", background: "#050508", borderTop: "0.5px solid #1E1E2E", padding: "32px 0 56px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0A1F18 0%, #0A0A12 70%)",
            border: "1px solid rgba(29,158,117,0.35)",
            borderRadius: 24,
            padding: "56px 40px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 30px 80px -30px rgba(29,158,117,0.25)",
          }}
        >
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 1200 320"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.45 }}
          >
            <defs>
              <linearGradient id="cta-wave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1D9E75" stopOpacity="0" />
                <stop offset="50%" stopColor="#1D9E75" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 200 Q 300 100 600 180 T 1200 140" stroke="url(#cta-wave)" strokeWidth="2" fill="none" />
            <path d="M0 240 Q 300 140 600 220 T 1200 180" stroke="url(#cta-wave)" strokeWidth="1.2" fill="none" opacity="0.6" />
          </svg>

          <FloatingIcon style={{ top: 28, left: 32 }} variant="tiktok" />
          <FloatingIcon style={{ top: 22, left: 92 }} variant="document" rotation={-12} />
          <FloatingIcon style={{ top: 36, left: "44%" }} variant="diamond" rotation={8} />
          <FloatingIcon style={{ bottom: 28, right: 32 }} variant="document2" rotation={12} />
          <FloatingIcon style={{ top: 30, right: "10%" }} variant="folder" rotation={-8} />
          <FloatingIcon style={{ bottom: 24, right: "12%" }} variant="image" rotation={6} />
          <FloatingIcon style={{ top: 64, right: 24 }} variant="brief" rotation={-4} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.4vw, 52px)",
                color: "#E8E8F0",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              Your market. Your workspace.{" "}
              <span style={{ color: "#1D9E75" }}>Your edge.</span>
            </h2>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 16.5,
                color: "#9898A8",
                lineHeight: 1.55,
                maxWidth: "52ch",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Join marketers who launch smarter campaigns and win more.
            </p>

            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              <a
                href={STRIPE_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  padding: "0 24px",
                  background: "#1D9E75",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: 10,
                  textDecoration: "none",
                  boxShadow: "0 12px 32px -10px rgba(29,158,117,0.5)",
                  transition: "background 150ms ease-out, transform 80ms ease-out",
                }}
                className="final-primary"
              >
                Open workspace
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/sample"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  padding: "0 22px",
                  background: "transparent",
                  color: "#E8E8F0",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  border: "0.5px solid rgba(232,232,240,0.2)",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "border-color 150ms ease-out, background 150ms ease-out",
                }}
                className="final-secondary"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M3 2 L10 6 L3 10 Z" />
                </svg>
                View sample brief
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-primary:hover { background: #25B889 !important; }
        .final-primary:active { transform: scale(0.97); }
        .final-secondary:hover { border-color: rgba(232,232,240,0.4) !important; background: rgba(255,255,255,0.04) !important; }
      `}</style>
    </section>
  );
}

function FloatingIcon({
  style,
  variant,
  rotation = 0,
}: {
  style: React.CSSProperties;
  variant: "tiktok" | "document" | "document2" | "diamond" | "folder" | "image" | "brief";
  rotation?: number;
}) {
  const inner =
    variant === "tiktok" ? <TikTokGlyph /> :
    variant === "document" ? <DocGlyph color="#3B82F6" /> :
    variant === "document2" ? <DocGlyph color="#1D9E75" /> :
    variant === "diamond" ? <DiamondGlyph /> :
    variant === "folder" ? <FolderGlyph /> :
    variant === "image" ? <ImageGlyph /> :
    <BriefGlyph />;

  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 44,
        height: 44,
        background: "#0A0A12",
        border: "0.5px solid #1E1E2E",
        borderRadius: 12,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `rotate(${rotation}deg)`,
        boxShadow: "0 8px 20px -8px rgba(0,0,0,0.5)",
        zIndex: 1,
        ...style,
      }}
    >
      {inner}
    </span>
  );
}

function TikTokGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 4 C16 5.7 17.3 7 19 7 V11 C16.2 11 14 9 13 7 V16 A4 4 0 1 1 9 12 V15 A1 1 0 1 0 11 15 V4 H16 Z" fill="#E8E8F0" />
    </svg>
  );
}
function DocGlyph({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.4" />
      <path d="M9 9 H15 M9 13 H15 M9 17 H13" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function DiamondGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 L20 12 L12 22 L4 12 Z" fill="#8B5CF6" />
    </svg>
  );
}
function FolderGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7 H9 L11 5 H21 V19 H3 Z" fill="#3B82F6" fillOpacity="0.85" />
    </svg>
  );
}
function ImageGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#1D9E75" fillOpacity="0.2" stroke="#1D9E75" strokeWidth="1.4" />
      <circle cx="9" cy="11" r="1.4" fill="#1D9E75" />
      <path d="M3 17 L9 13 L14 17 L17 14 L21 17" stroke="#1D9E75" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function BriefGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="14" rx="2" stroke="#F97316" strokeWidth="1.4" fill="#F97316" fillOpacity="0.18" />
      <path d="M9 6 V4 H15 V6" stroke="#F97316" strokeWidth="1.4" />
    </svg>
  );
}
