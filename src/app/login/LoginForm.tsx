"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Country, State } from "country-state-city";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import Icon from "../../components/ui/Icon";

const ALL_COUNTRIES = Country.getAllCountries();

const inputClass =
  "w-full h-12 px-md border border-outline-variant rounded bg-surface-bright font-body-md text-body-md form-input-focus outline-none transition-all";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");
  const router = useRouter();

  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    setPhoneError("");

    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      phone, // overwrite with the validated E.164 value from PhoneInput
    };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Login failed");
      }

      router.push("/dashboard");
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-[500px] bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm relative">
      <div className="h-1.5 bg-primary w-full" />

      <div className="p-lg md:p-xl">
        <div className="text-center mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-primary-container mb-xs">
            Login
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Enter your details to access your secure verification dashboard.
          </p>
        </div>

        <form className="space-y-md" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block font-label-md text-label-md text-on-surface mb-xs">
              Full Name
            </label>
            <input id="fullName" name="fullName" required className={inputClass} placeholder="e.g. John Doe" type="text" />
          </div>

          <div>
            <label htmlFor="email" className="block font-label-md text-label-md text-on-surface mb-xs">
              Email ID
            </label>
            <input id="email" name="email" required className={inputClass} placeholder="john@company.com" type="email" />
          </div>

          {/* Location Grid */}
          <div className="grid grid-cols-2 gap-md">
            <div>
              <label htmlFor="country" className="block font-label-md text-label-md text-on-surface mb-xs">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  required
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className={`${inputClass} pr-xl appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {ALL_COUNTRIES.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-outline">
                  expand_more
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="state" className="block font-label-md text-label-md text-on-surface mb-xs">
                Province / State
              </label>
              <div className="relative">
                <select
                  id="state"
                  name="state"
                  required
                  disabled={!selectedCountry}
                  defaultValue=""
                  className={`${inputClass} pr-xl appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <option value="" disabled>
                    {selectedCountry ? "Select" : "Select country first"}
                  </option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-outline">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface mb-xs">
              Phone Number
            </label>
            <PhoneInput
              id="phone"
              international
              defaultCountry="US"
              value={phone}
              onChange={setPhone}
              className="phone-input-custom"
            />
            {phoneError && (
              <p className="text-error text-label-sm mt-xs">{phoneError}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block font-label-md text-label-md text-on-surface mb-xs">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                required
                className={inputClass}
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-outline hover:text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Icon name={showPassword ? "visibility_off" : "visibility"} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-12 mt-lg bg-primary-container text-on-primary font-title-md text-title-md rounded hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{submitting ? "Logging in..." : "Login to Dashboard"}</span>
            <Icon name="login" />
          </button>
        </form>

        <div className="mt-lg flex flex-col items-center gap-sm">
          <Link href="/forgot-password" className="font-label-md text-label-md text-primary hover:underline">
            Forgot password?
          </Link>
          <p className="font-label-md text-label-md text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}