"use client";

import { useState, type FormEvent } from "react";
import Icon from "../../../../components/ui/Icon";

export default function ProfileTab() {
  const [saving, setSaving] = useState(false);

  async function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/account/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to update profile");
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-lg">
      <form
        onSubmit={handleSave}
        className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg grid grid-cols-1 md:grid-cols-3 gap-xl"
      >
        <div className="md:col-span-1 flex flex-col items-center justify-center border-r border-outline-variant pr-xl">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border-2 border-primary/20">
              <img
                src="/avatar-placeholder.png"
                alt="Profile avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:bg-primary-container transition-colors"
            >
              <Icon name="photo_camera" className="text-[18px]" />
            </button>
          </div>
          <p className="mt-md font-label-md text-label-md text-primary">
            Upload Profile Photo
          </p>
          <p className="text-xs text-on-surface-variant text-center mt-1">
            Recommended: 400x400px JPG/PNG
          </p>
        </div>

        <div className="md:col-span-2 space-y-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-xs">
              <label htmlFor="fullName" className="font-label-md text-label-md text-on-surface-variant">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                defaultValue="Global Tech Solutions Inc."
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="orgId" className="font-label-md text-label-md text-on-surface-variant">
                Institutional ID
              </label>
              <input
                id="orgId"
                name="orgId"
                readOnly
                type="text"
                defaultValue="ORG-8829-XPL"
                className="w-full bg-surface-container border border-outline-variant rounded px-md py-2 font-body-md text-body-md text-on-surface-variant cursor-not-allowed"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue="admin@globaltech.com"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="phone" className="font-label-md text-label-md text-on-surface-variant">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="country" className="font-label-md text-label-md text-on-surface-variant">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="e.g. United States"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>

            <div className="space-y-xs">
              <label htmlFor="state" className="font-label-md text-label-md text-on-surface-variant">
                Province / State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                placeholder="e.g. California"
                className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md"
              />
            </div>
          </div>

          <div className="space-y-xs mt-md">
            <label htmlFor="description" className="font-label-md text-label-md text-on-surface-variant">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell us about your organization..."
              className="w-full bg-white border border-outline-variant rounded px-md py-2 font-body-md text-body-md min-h-[120px]"
            />
          </div>

          <div className="pt-md flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary text-on-primary px-xl py-sm rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all active:scale-95 shadow-sm disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Profile Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}