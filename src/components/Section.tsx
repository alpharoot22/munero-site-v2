"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function Section({
  id,
  children,
  className = "",
  bordered = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = innerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} className={`${bordered ? "hairline-t" : ""} ${className}`}>
      <div
        ref={innerRef}
        className={`mx-auto max-w-6xl px-6 py-20 md:py-24 fade-up ${visible ? "is-visible" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow mb-5">
      <span
        className="inline-block"
        style={{
          width: 18,
          height: 1,
          background: "var(--accent)",
          boxShadow: "0 0 4px var(--accent)",
        }}
      />
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`tracking-[-0.02em] leading-[1.1] font-bold ${className}`}
      style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`mt-4 text-[16.5px] leading-relaxed max-w-[58ch] ${className}`}
      style={{ color: "var(--text-2)" }}
    >
      {children}
    </p>
  );
}
