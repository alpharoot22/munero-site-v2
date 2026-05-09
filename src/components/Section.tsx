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
    <section id={id} className={`${bordered ? "hairline-t" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">{children}</div>
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
    <h2 className={`text-[34px] md:text-[46px] tracking-[-0.025em] leading-[1.05] font-bold ${className}`}>
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
