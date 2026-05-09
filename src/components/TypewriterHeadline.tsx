"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

/**
 * Reveals headline text character-by-character on mount.
 * Honors prefers-reduced-motion (renders fully visible immediately).
 *
 * Layout-stable: hidden remainder uses visibility:hidden so the
 * final headline footprint is locked from frame 0 — no jiggle as
 * lines wrap.
 */
export function TypewriterHeadline({
  text,
  durationMs = 1200,
  className = "",
  style,
  as: Tag = "h1",
}: {
  text: string;
  durationMs?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const chars = Math.floor(t * text.length);
      setCount(chars);
      if (t < 1) frame = requestAnimationFrame(tick);
      else setCount(text.length);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, durationMs]);

  const done = count >= text.length;

  return (
    <Tag className={className} style={style} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className="typewriter-cursor"
        style={{
          display: "inline-block",
          width: "0.06em",
          marginLeft: "0.02em",
          background: "var(--accent)",
          alignSelf: "stretch",
          height: "0.85em",
          verticalAlign: "-0.08em",
          animation: done
            ? "typewriter-blink 1s steps(2) infinite"
            : "none",
          opacity: done ? 1 : 0.95,
        }}
      />
      <span aria-hidden="true" style={{ visibility: "hidden" }}>
        {text.slice(count)}
      </span>
    </Tag>
  );
}
