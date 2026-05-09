import { ReactNode } from "react";

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
  return (
    <section
      id={id}
      className={`${bordered ? "hairline-t" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      className="text-[11px] uppercase tracking-[0.16em] mb-4 num"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-3xl md:text-[42px] tracking-[-0.02em] leading-[1.05] font-medium ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`mt-4 text-[17px] leading-relaxed max-w-[58ch] ${className}`}
      style={{ color: "var(--text-2)" }}
    >
      {children}
    </p>
  );
}
