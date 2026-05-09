import type { Metadata } from "next";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register free, then choose your plan. No credit card required to register.",
  robots: { index: false, follow: true },
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] flex items-start justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-8">
          <div className="num text-[10.5px] tracking-[0.16em] mb-3" style={{ color: "var(--accent)" }}>
            STEP 1 OF 2
          </div>
          <h1 className="text-[28px] md:text-[34px] tracking-[-0.025em] leading-[1.1] font-bold">
            Register free.
          </h1>
          <p className="mt-3 text-[15px]" style={{ color: "var(--text-2)" }}>
            Two minutes. No credit card. Choose your plan after.
          </p>
        </div>

        <div
          className="hairline rounded-lg p-7 md:p-8"
          style={{ background: "var(--surface)" }}
        >
          <RegisterForm />
        </div>

        <p
          className="text-center mt-6 text-[13px]"
          style={{ color: "var(--text-3)" }}
        >
          Already have an account?{" "}
          <a
            href="https://app.munero.ai/login"
            className="hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--text-2)" }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
