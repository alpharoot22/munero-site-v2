"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Hook this into /api/register or your real newsletter endpoint when ready.
      }}
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fffdf8",
        border: "0.5px solid #e2d8c6",
        borderRadius: 10,
        padding: "4px 4px 4px 14px",
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        required
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13,
          color: "#0e1b2c",
          padding: "8px 0",
          minWidth: 0,
        }}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 34,
          height: 34,
          background: "#0e1b2c",
          color: "#f7f2e8",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          transition: "background 150ms ease-out",
        }}
        className="news-btn"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8 H13 M9 4 L13 8 L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style>{`
        .news-btn:hover { background: #13233a !important; }
      `}</style>
    </form>
  );
}
