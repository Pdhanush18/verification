"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Country, State } from "country-state-city";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

type TabId = "regular" | "organization";

const ALL_COUNTRIES = Country.getAllCountries();

const inputClass =
  "w-full rounded border border-outline-variant bg-surface px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none input-focus-glow transition-all";

export default function SignupForm() {
  const [activeTab, setActiveTab] = useState<TabId>("regular");
  const [submitting, setSubmitting] = useState(false);
  const [otpSending, setOtpSending] = useState(false);

  // Separate country selections per tab
  const [regularCountry, setRegularCountry] = useState("");
  const [orgCountry, setOrgCountry] = useState("");

  // Separate phone number state per tab
  const [regularPhone, setRegularPhone] = useState<string | undefined>();
  const [orgPhone, setOrgPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");

  const router = useRouter();

  const regularStates = regularCountry ? State.getStatesOfCountry(regularCountry) : [];
  const orgStates = orgCountry ? State.getStatesOfCountry(orgCountry) : [];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const currentPhone = activeTab === "regular" ? regularPhone : orgPhone;

    if (!currentPhone || !isValidPhoneNumber(currentPhone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    setPhoneError("");

    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      phone: currentPhone, // overwrite with validated E.164 value
      accountType: activeTab,
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Signup failed");
      }

      router.push("/dashboard");
    } catch (error: unknown) {
      console.error(error);
      // TODO: surface a toast/inline error to the user
    } finally {
      setSubmitting(false);
    }
  }

  const handleSendOtp = async () => {
    setOtpSending(true);
    try {
      // TODO: wire to your real OTP endpoint
      console.log("Sending OTP...");
    } finally {
      setOtpSending(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-surface-container-lowest rounded border border-outline-variant shadow-[0px_4px_12px_rgba(9,30,66,0.08)] relative z-10 overflow-hidden">
      <div className="h-1 w-full bg-primary-container" />

      <div className="p-lg md:p-xl">
        <div className="text-center mb-xl">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-sm">
            Create an Account
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
            Join CertVerify to establish your verifiable identity.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-outline-variant mb-xl">
          <TabButton
            label="Regular User"
            active={activeTab === "regular"}
            onClick={() => {
              setActiveTab("regular");
              setPhoneError("");
            }}
          />
          <TabButton
            label="Organization"
            active={activeTab === "organization"}
            onClick={() => {
              setActiveTab("organization");
              setPhoneError("");
            }}
          />
        </div>

        {activeTab === "regular" ? (
          <form className="space-y-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <Field label="Full Name" htmlFor="fullName">
                <input id="fullName" name="fullName" required className={inputClass} placeholder="John Doe" type="text" />
              </Field>
              <Field label="Phone Number" htmlFor="phone">
                <PhoneInput
                  id="phone"
                  international
                  defaultCountry="US"
                  value={regularPhone}
                  onChange={setRegularPhone}
                  className="phone-input-custom"
                />
                {phoneError && (
                  <p className="text-error text-label-sm mt-xs">{phoneError}</p>
                )}
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <Field label="Country" htmlFor="country">
                <select
                  id="country"
                  name="country"
                  required
                  value={regularCountry}
                  onChange={(e) => setRegularCountry(e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Select Country</option>
                  {ALL_COUNTRIES.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Province/State" htmlFor="state">
                <select
                  id="state"
                  name="state"
                  required
                  disabled={!regularCountry}
                  defaultValue=""
                  className={`${inputClass} appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <option value="" disabled>
                    {regularCountry ? "Select State" : "Select country first"}
                  </option>
                  {regularStates.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Email ID" htmlFor="email">
              <div className="flex gap-sm">
                <input
                  id="email"
                  name="email"
                  required
                  className={`flex-grow ${inputClass}`}
                  placeholder="john@example.com"
                  type="email"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpSending}
                  className="whitespace-nowrap px-md py-sm rounded border border-primary text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {otpSending ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </Field>

            <Field label="Verification Code (OTP)" htmlFor="otp">
              <input id="otp" name="otp" required maxLength={6} className={`${inputClass} tracking-widest text-center`} placeholder="• • • • • •" type="text" />
            </Field>

            <Field label="Password" htmlFor="password">
              <input id="password" name="password" required className={inputClass} placeholder="••••••••" type="password" />
            </Field>

            <TermsCheckbox id="terms-regular" />

            <SubmitButton submitting={submitting} icon="arrow_forward" />
          </form>
        ) : (
          <form className="space-y-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <Field label="Organization Name" htmlFor="orgName">
                <input id="orgName" name="orgName" required className={inputClass} placeholder="Acme Corp" type="text" />
              </Field>
              <Field label="Organization ID / Reg No." htmlFor="orgRegNo">
                <input id="orgRegNo" name="orgRegNo" required className={`${inputClass} font-mono`} placeholder="ORG-123456" type="text" />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <Field label="Full Name (Contact Person)" htmlFor="contactName">
                <input id="contactName" name="contactName" required className={inputClass} placeholder="John Doe" type="text" />
              </Field>
              <Field label="Phone Number" htmlFor="orgPhone">
                <PhoneInput
                  id="orgPhone"
                  international
                  defaultCountry="US"
                  value={orgPhone}
                  onChange={setOrgPhone}
                  className="phone-input-custom"
                />
                {phoneError && (
                  <p className="text-error text-label-sm mt-xs">{phoneError}</p>
                )}
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <Field label="Country" htmlFor="orgCountry">
                <select
                  id="orgCountry"
                  name="country"
                  required
                  value={orgCountry}
                  onChange={(e) => setOrgCountry(e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Select Country</option>
                  {ALL_COUNTRIES.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Province/State" htmlFor="orgState">
                <select
                  id="orgState"
                  name="state"
                  required
                  disabled={!orgCountry}
                  defaultValue=""
                  className={`${inputClass} appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <option value="" disabled>
                    {orgCountry ? "Select State" : "Select country first"}
                  </option>
                  {orgStates.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Email ID" htmlFor="orgEmail">
              <div className="flex gap-sm">
                <input
                  id="orgEmail"
                  name="email"
                  required
                  className={`flex-grow ${inputClass}`}
                  placeholder="admin@acme.com"
                  type="email"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpSending}
                  className="whitespace-nowrap px-md py-sm rounded border border-primary text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {otpSending ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </Field>

            <Field label="Verification Code (OTP)" htmlFor="orgOtp">
              <input id="orgOtp" name="otp" required maxLength={6} className={`${inputClass} tracking-widest text-center`} placeholder="• • • • • •" type="text" />
            </Field>

            <Field label="Password" htmlFor="orgPassword">
              <input id="orgPassword" name="password" required className={inputClass} placeholder="••••••••" type="password" />
            </Field>

            <TermsCheckbox id="terms-org" />

            <SubmitButton submitting={submitting} icon="business_center" />
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------- Small presentational helpers (keep local to this route) ---------- */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-xs">
      <label htmlFor={htmlFor} className="font-label-md text-label-md text-on-surface-variant block">
        {label}
      </label>
      {children}
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "flex-1 py-md font-title-md text-title-md text-primary font-bold border-b-2 border-primary transition-colors focus:outline-none"
          : "flex-1 py-md font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors focus:outline-none border-b-2 border-transparent hover:border-outline"
      }
    >
      {label}
    </button>
  );
}

function TermsCheckbox({ id }: { id: string }) {
  return (
    <div className="flex items-center gap-2 mb-md">
      <input
        type="checkbox"
        id={id}
        name="acceptTerms"
        required
        className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
      />
      <label htmlFor={id} className="font-label-md text-label-md text-on-surface-variant cursor-pointer">
        I agree to the{" "}
        <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
      </label>
    </div>
  );
}

function SubmitButton({ submitting, icon }: { submitting: boolean; icon: string }) {
  return (
    <div className="pt-md">
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary-container text-on-primary py-md rounded font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Creating Account..." : "Create Account"}
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </button>
    </div>
  );
}