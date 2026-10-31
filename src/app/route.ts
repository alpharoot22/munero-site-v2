import html from "./_home/html";

// The investor home page is a self-contained document (its own head, styles and scripts),
// so it is served as a static route handler instead of a page inside the root layout.
export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
