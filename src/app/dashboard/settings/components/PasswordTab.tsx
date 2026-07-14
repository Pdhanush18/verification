"use client";

import { useState, type FormEvent } from "react";
import Icon from "../../../../components/ui/Icon";

export default function PasswordTab() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [otp, setOtp] = useState("");
  const [changing, setChanging] = useState(false);

  function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(digitsOnly);
  }

  async function handleChangePassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setChanging(true);

    const formData = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), otp };

    try {
      const res = await fetch("/api/account/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to change password");
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setChanging(false);
    }
  }

  const handleResendOtp = () => {
    console.log("Resending OTP...");
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
      <form onSubmit={handleChangePassword} className="max-w-2xl mx-auto space-y-xl">
        <div className="space-y-md">
          <div className="space-y-xs relative">
            <label htmlFor="currentPassword" className="font-label-md text-label-md text-on-surface-variant">
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              placeholder="••••••••"
              type={showCurrent ? "text" : "password"}
              className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
            />
            <button
              type="button"
              onClick={() => setShowCurrent((prev) => !prev)}
              className="absolute right-3 top-9 text-on-surface-variant cursor-pointer"
              aria-label={showCurrent ? "Hide password" : "Show password"}
            >
              <Icon name={showCurrent ? "visibility_off" : "visibility"} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-xs">
              <label htmlFor="newPassword" className="font-label-md text-label-md text-on-surface-variant">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                placeholder="Min. 8 characters"
                type="password"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>
            <div className="space-y-xs">
              <label htmlFor="confirmPassword" className="font-label-md text-label-md text-on-surface-variant">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repeat new password"
                type="password"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>
          </div>
        </div>

        <div className="p-lg bg-surface-container-low rounded-lg border border-primary/10">
          <div className="flex items-start gap-md mb-md">
            <Icon name="verified_user" className="text-primary" />
            <div>
              <h4 className="font-title-md text-title-md text-primary mb-1">
                Verify Your Identity
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To change your password, please enter the 6-digit OTP sent to your registered business email.
              </p>
            </div>
          </div>

          <div className="flex gap-md items-end">
            <div className="flex-1 space-y-xs">
              <label htmlFor="otp" className="font-label-sm text-label-sm text-on-surface-variant">
                OTP Code
              </label>
              <input
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="0 0 0 0 0 0"
                type="text"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 text-center tracking-[0.5em] font-bold text-lg"
              />
            </div>
            <button
              type="button"
              onClick={handleResendOtp}
              className="bg-secondary-container text-on-secondary-container px-lg py-2 rounded font-label-md text-label-md hover:bg-surface-container-highest transition-colors"
            >
              Resend Code
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-md">
          <button
            type="submit"
            disabled={changing}
            className="bg-primary text-on-primary px-xl py-sm rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all active:scale-95 flex items-center gap-2 shadow-sm disabled:opacity-60"
          >
            <Icon name="lock_reset" className="text-[18px]" />
            {changing ? "Changing..." : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
}