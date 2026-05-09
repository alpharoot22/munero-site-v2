"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const SPENDS = [
  { v: "under_5k",  l: "Under $5K / mo" },
  { v: "5k_20k",    l: "$5K - $20K / mo" },
  { v: "20k_100k",  l: "$20K - $100K / mo" },
  { v: "100k_plus", l: "$100K+ / mo" },
];

const ROLES = [
  { v: "dtc_founder",     l: "DTC founder" },
  { v: "agency_owner",    l: "Agency owner" },
  { v: "in_house",        l: "In-house performance marketer" },
  { v: "other",           l: "Other" },
];

export function RegisterForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const monthly_ad_spend = String(fd.get("monthly_ad_spend") ?? "");
    const role = String(fd.get("role") ?? "");

    if (!name || !email || !company) {
      setError("Please fill in name, email, and company.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn't look right.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, monthly_ad_spend, role }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      const params = new URLSearchParams({ registered: "true", name });
      router.push(`/pricing?${params.toString()}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Field name="name" label="Full name" placeholder="Jordan Park" required autoComplete="name" />
      <Field
        name="email"
        type="email"
        label="Work email"
        placeholder="jordan@brand.com"
        required
        autoComplete="email"
      />
      <Field
        name="company"
        label="Company or brand"
        placeholder="Acme"
        required
        autoComplete="organization"
      />

      <Select
        name="monthly_ad_spend"
        label="Monthly ad spend"
        options={SPENDS}
        defaultValue="5k_20k"
      />

      <Select name="role" label="I am a..." options={ROLES} defaultValue="dtc_founder" />

      {error && (
        <p className="text-[13px]" style={{ color: "var(--score-low)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full justify-center mt-2"
        style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
      >
        {submitting ? "Saving..." : "Continue to plans"}
        {!submitting && (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10m0 0L9 4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <p
        className="text-[11.5px] leading-relaxed text-center pt-1"
        style={{ color: "var(--text-3)" }}
      >
        By continuing you agree to our{" "}
        <a href="https://munero.ai/terms" style={{ color: "var(--text-2)" }}>
          Terms
        </a>{" "}
        and{" "}
        <a href="https://munero.ai/privacy" style={{ color: "var(--text-2)" }}>
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span
        className="block text-[12.5px] mb-1.5 num tracking-[0.04em]"
        style={{ color: "var(--text-2)" }}
      >
        {label}
        {required && <span style={{ color: "var(--accent)" }}> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full text-[14.5px] outline-none transition-colors"
        style={{
          background: "var(--surface-2)",
          color: "var(--text)",
          border: "0.5px solid var(--border-2)",
          borderRadius: 6,
          padding: "12px 14px",
          height: 44,
        }}
      />
    </label>
  );
}

function Select({
  name,
  label,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  options: { v: string; l: string }[];
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span
        className="block text-[12.5px] mb-1.5 num tracking-[0.04em]"
        style={{ color: "var(--text-2)" }}
      >
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full text-[14.5px] outline-none transition-colors appearance-none"
        style={{
          background: "var(--surface-2)",
          color: "var(--text)",
          border: "0.5px solid var(--border-2)",
          borderRadius: 6,
          padding: "0 14px",
          height: 44,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'><path d='M4 6l4 4 4-4' stroke='%238888A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          paddingRight: 36,
        }}
      >
        {options.map((o) => (
          <option key={o.v} value={o.v} style={{ background: "var(--surface-2)" }}>
            {o.l}
          </option>
        ))}
      </select>
    </label>
  );
}
