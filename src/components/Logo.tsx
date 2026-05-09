export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1D9E75" strokeWidth="1.5" />
        <path
          d="M7 16V8L12 13L17 8V16"
          stroke="#1D9E75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-medium tracking-tight text-[15px]" style={{ color: "var(--text-1)" }}>
        Munero
      </span>
    </span>
  );
}
