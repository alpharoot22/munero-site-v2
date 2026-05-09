export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Head */}
        <circle cx="30" cy="22" r="10" fill="#1D9E75" />
        {/* Eyes — punched out using the page bg so they read on any surface */}
        <circle cx="26.5" cy="21" r="1.8" fill="var(--bg)" />
        <circle cx="33.5" cy="21" r="1.8" fill="var(--bg)" />
        {/* 8 tentacles */}
        <path d="M18,31 Q14,40 16,48" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M21,32 Q18,41 20,49" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M25,33 Q23,42 25,50" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28,33 Q27,43 28,51" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M32,33 Q33,43 32,51" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M35,33 Q37,42 35,50" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M39,32 Q42,41 40,49" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M42,31 Q46,40 44,48" stroke="#1D9E75" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <span className="wordmark">munero</span>
    </span>
  );
}
