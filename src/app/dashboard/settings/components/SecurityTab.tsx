"use client";

import { useState } from "react";
import Icon from "../../../../components/ui/Icon";

type LoginRecord = {
  device: string;
  location: string;
  datetime: string;
  status: "Current Session" | "Successful" | "Flagged";
};

const LOGIN_HISTORY: LoginRecord[] = [
  { device: "Chrome on Windows 11", location: "San Francisco, US", datetime: "2024-05-12 09:14 AM", status: "Current Session" },
  { device: "Safari on iPhone 15", location: "San Francisco, US", datetime: "2024-05-11 11:22 PM", status: "Successful" },
  { device: "Edge on macOS Sonoma", location: "London, UK", datetime: "2024-05-10 03:45 AM", status: "Flagged" },
];

export default function SecurityTab() {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [loginAlertsEnabled, setLoginAlertsEnabled] = useState(false);

  return (
    <div className="space-y-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                <Icon name="security" filled className="text-primary" />
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface">
                  Multi-Factor Authentication (MFA)
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Add an extra layer of security to your login.
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mfaEnabled}
                onChange={(e) => setMfaEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant/30 flex justify-between items-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Method: Mobile App (Authenticator)
            </span>
            <button className="text-primary font-label-md text-label-md hover:underline">
              Configure
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-secondary-container/20 rounded flex items-center justify-center">
                <Icon name="notifications_active" className="text-secondary" />
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface">
                  Login Notifications
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Get notified of any new login attempts.
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={loginAlertsEnabled}
                onChange={(e) => setLoginAlertsEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant/30 flex justify-between items-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Alert via Email and SMS
            </span>
            <button className="text-primary font-label-md text-label-md hover:underline">
              Manage
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg mt-xl">
        <h4 className="font-title-md text-title-md text-on-surface mb-lg flex items-center gap-2">
          <Icon name="history" className="text-on-surface-variant" />
          Recent Activity
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-md px-sm font-label-md text-label-md text-on-surface-variant">
                  Browser &amp; Device
                </th>
                <th className="py-md px-sm font-label-md text-label-md text-on-surface-variant">
                  Location
                </th>
                <th className="py-md px-sm font-label-md text-label-md text-on-surface-variant">
                  Date &amp; Time
                </th>
                <th className="py-md px-sm font-label-md text-label-md text-on-surface-variant">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md divide-y divide-outline-variant/30">
              {LOGIN_HISTORY.map((record) => (
                <tr key={record.datetime}>
                  <td className="py-md px-sm">{record.device}</td>
                  <td className="py-md px-sm">{record.location}</td>
                  <td className="py-md px-sm text-on-surface-variant">{record.datetime}</td>
                  <td className="py-md px-sm">
                    {record.status === "Current Session" && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        Current Session
                      </span>
                    )}
                    {record.status === "Successful" && (
                      <span className="text-on-surface-variant">Successful</span>
                    )}
                    {record.status === "Flagged" && (
                      <span className="text-error font-semibold">Flagged</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-xl p-lg bg-surface-container-low border border-outline-variant rounded-lg flex items-center gap-md">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name="info" className="text-primary" />
        </div>
        <div>
          <h5 className="font-label-md text-label-md text-on-surface">
            Security Recommendation
          </h5>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We recommend updating your password every 90 days and ensuring MFA is active on all administrator accounts to maintain institutional compliance.
          </p>
        </div>
      </div>
    </div>
  );
}