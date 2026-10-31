import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0b1522",
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
              fontWeight: 600,
              color: "#f7f2e8",
              letterSpacing: "-0.04em",
            }}
          >
            munero
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#f3ede2",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            The intelligence behind your next growth opportunity.
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#a9b3c0",
              textAlign: "center",
            }}
          >
            AI marketing intelligence · Private preview
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            fontSize: "16px",
            color: "#5b7089",
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
