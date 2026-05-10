import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Params = Promise<{ id: string }>;

export const metadata: Metadata = {
  title: "Data deletion request",
  description:
    "Status of a Facebook data deletion request submitted through Munero.",
  robots: { index: false, follow: false },
};

interface StatusResponse {
  status?: string;
  requested_at?: string;
  processed_at?: string | null;
  platform?: string;
}

async function fetchStatus(
  id: string
): Promise<{ found: boolean; data: StatusResponse | null }> {
  try {
    const res = await fetch(
      `https://app.munero.ai/api/connect/data-deletion/status/${encodeURIComponent(id)}`,
      { cache: "no-store" }
    );
    if (res.status === 404) return { found: false, data: null };
    if (!res.ok) return { found: false, data: null };
    const data = (await res.json()) as StatusResponse;
    return { found: true, data };
  } catch {
    // If the upstream is unreachable we still show the receipt page so users
    // get the confirmation code Meta gave them. The app-side record is the
    // source of truth and reconciliation runs there.
    return { found: true, data: null };
  }
}

const COLOR = {
  bg: "#050508",
  surface: "#111118",
  border: "#1E1E2E",
  text: "#E8E8F0",
  text2: "#9898A8",
  accent: "#1D9E75",
};

export default async function DataDeletionStatus({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const { found, data } = await fetchStatus(id);

  return (
    <main
      style={{
        background: COLOR.bg,
        minHeight: "100vh",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace",
            fontSize: 11,
            color: COLOR.accent,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            marginBottom: 16,
          }}
        >
          Data deletion request
        </p>

        {!found ? (
          <>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: COLOR.text,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Request not found.
            </h1>
            <p
              style={{
                fontSize: 16,
                color: COLOR.text2,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              We could not find a data deletion request with this confirmation
              code. If you believe this is a mistake, contact us with the code
              shown in your confirmation receipt.
            </p>
          </>
        ) : (
          <>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: COLOR.text,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Your request has been received.
            </h1>
            <p
              style={{
                fontSize: 16,
                color: COLOR.text2,
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              Your Facebook data deletion request has been logged and will be
              processed within 30 days.
            </p>

            <section
              style={{
                background: COLOR.surface,
                border: `0.5px solid ${COLOR.border}`,
                borderRadius: 8,
                padding: 24,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily:
                    "var(--font-jetbrains), JetBrains Mono, monospace",
                  fontSize: 10,
                  color: COLOR.text2,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  marginBottom: 10,
                }}
              >
                Confirmation code
              </p>
              <p
                style={{
                  fontFamily:
                    "var(--font-jetbrains), JetBrains Mono, monospace",
                  fontSize: 18,
                  color: COLOR.text,
                  letterSpacing: "0.02em",
                  wordBreak: "break-all",
                }}
              >
                {id}
              </p>

              {data?.status ? (
                <>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), JetBrains Mono, monospace",
                      fontSize: 10,
                      color: COLOR.text2,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      marginTop: 24,
                      marginBottom: 10,
                    }}
                  >
                    Status
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: COLOR.text,
                    }}
                  >
                    {data.status}
                  </p>
                </>
              ) : null}

              {data?.requested_at ? (
                <>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), JetBrains Mono, monospace",
                      fontSize: 10,
                      color: COLOR.text2,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      marginTop: 24,
                      marginBottom: 10,
                    }}
                  >
                    Requested at
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), JetBrains Mono, monospace",
                      fontSize: 13,
                      color: COLOR.text,
                    }}
                  >
                    {data.requested_at}
                  </p>
                </>
              ) : null}
            </section>
          </>
        )}

        <p
          style={{
            fontSize: 13,
            color: COLOR.text2,
          }}
        >
          Questions?{" "}
          <a
            href="mailto:hello@munero.ai"
            style={{ color: COLOR.accent, textDecoration: "none" }}
          >
            hello@munero.ai
          </a>
        </p>
      </div>
    </main>
  );
}
