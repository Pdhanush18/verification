"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProfileTab from "./components/ProfileTab";
import PasswordTab from "./components/PasswordTab";
import SecurityTab from "./components/SecurityTab";

type TabId = "profile" | "password" | "security";

const TABS: { id: TabId; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "password", label: "Change Password" },
  { id: "security", label: "Security" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  return (
    <div className="bg-background text-on-surface flex h-screen overflow-hidden">
      <Sidebar active="settings" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar title="Account Settings" searchPlaceholder="Search certifications..." />

        <div className="flex-1 overflow-y-auto p-lg">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-xl">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                Organization Settings
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Manage your institutional profile, security preferences, and account credentials.
              </p>
            </div>

            <div className="flex border-b border-outline-variant mb-xl">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={
                    activeTab === tab.id
                      ? "px-xl py-md font-label-md text-label-md text-primary font-bold border-b-2 border-primary transition-all"
                      : "px-xl py-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all"
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "password" && <PasswordTab />}
            {activeTab === "security" && <SecurityTab />}
          </div>
        </div>
      </main>
    </div>
  );
}