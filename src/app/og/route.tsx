import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#050508",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#1D9E75",
              letterSpacing: "-0.04em",
            }}
          >
            munero
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#E8E8F0",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            Know your market. Run better campaigns. Never guess again.
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#9898A8",
              textAlign: "center",
            }}
          >
            16 intelligence squads · First brief in 35 minutes · Starting at $99
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            fontSize: "16px",
            color: "#505068",
            fontFamily: "monospace",
          }}
        >
          munero.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
