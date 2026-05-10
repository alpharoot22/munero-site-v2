"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STRIPE_BRIEF = "https://buy.stripe.com/9B65kEf0L6nMcoJetf5ZC00?tier=brief";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agency", label: "Agency" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-overlay"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          borderRadius: 6,
          background: "transparent",
          border: "0.5px solid var(--border-2)",
          color: "var(--text)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M3 6h14M3 10h14M3 14h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="md:hidden fixed inset-0 z-[100] flex flex-col"
        style={{
          background: "var(--bg)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition:
            "opacity 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 hairline-b"
          style={{ height: 56 }}
        >
          <span
            className="num"
            style={{
              fontSize: 11,
              color: "var(--text-3)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: 6,
              background: "transparent",
              border: "0.5px solid var(--border-2)",
              color: "var(--text)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-6 pt-4 pb-8 flex flex-col"
          style={{ gap: 4 }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hairline-b flex items-center"
              style={{
                minHeight: 56,
                fontSize: 18,
                fontWeight: 500,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="btn-secondary"
              style={{ minHeight: 52, justifyContent: "center" }}
            >
              Get started free
            </Link>
            <a
              href={STRIPE_BRIEF}
              onClick={() => setOpen(false)}
              className="btn-primary"
              style={{ minHeight: 52, justifyContent: "center" }}
            >
              Open workspace · $99
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
