"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Icon from "../../components/ui/Icon";

export default function ForgotPasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      // Replace with your real password-reset endpoint
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Request failed");
      }

      setSubmitted(true);
    } catch (error: unknown) {
      console.error(error);
      // TODO: surface a toast/inline error to the user
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-[440px]">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-[0px_4px_12px_rgba(9,30,66,0.08)] overflow-hidden transition-all duration-300">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-primary-container" />

        <div className="p-xl space-y-xl">
          {!submitted && (
            <div className="text-center space-y-sm">
              <h1 className="font-headline-lg text-headline-lg text-primary-container">
                Forgot Password
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Enter your registered email address to receive password reset instructions.
              </p>
            </div>
          )}

          {!submitted ? (
            <form className="space-y-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label
                  htmlFor="email"
                  className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
                >
                  Email ID
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">
                    
                  </span>
                  <input
                    id="email"
                    name=""
                    required
                    type="email"
                    placeholder="support@certverify.com"
                    className="w-full pl-xl pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md text-body-md placeholder:text-outline/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-md bg-primary-container text-on-primary font-title-md text-title-md rounded-lg shadow-sm hover:brightness-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Sending..." : "Send Reset Link"}</span>
                <Icon
                  name={submitting ? "sync" : "arrow_forward"}
                  className={submitting ? "animate-spin" : "transition-transform group-hover:translate-x-1"}
                />
              </button>
            </form>
          ) : (
            <div className="text-center space-y-md">
              <div className="mx-auto w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
                <Icon name="check_circle" filled className="text-primary text-4xl" />
              </div>
              <div className="space-y-xs">
                <h3 className="font-title-md text-title-md text-primary">
                  Check your email
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We&apos;ve sent password recovery instructions to your email address.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-label-md text-label-md text-primary hover:underline"
              >
                Resend email
              </button>
            </div>
          )}

          {/* Secondary Navigation */}
          <div className="pt-md border-t border-outline-variant text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors group"
            >
              <Icon name="arrow_back" className="text-[18px]" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badge Footer */}
      <div className="mt-xl flex flex-col items-center gap-sm opacity-60">
        <div className="flex items-center gap-xs text-on-surface-variant">
          <Icon name="lock" className="text-sm" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            End-to-End Encrypted Verification
          </span>
        </div>
        <p className="font-label-sm text-label-sm text-center">
          Protected by CertVerify Secure Protocol v4.0
        </p>
      </div>
    </div>
  );
}