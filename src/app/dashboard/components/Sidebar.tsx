import Link from "next/link";
import Icon from "../../../components/ui/Icon";

type SidebarProps = {
  active?: "home" | "settings";
};

export default function Sidebar({ active = "home" }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-full w-64 bg-surface-container-low border-r border-outline-variant p-md gap-sm">
      {/* Brand Header */}
      <div className="flex flex-col gap-xs mb-xl">
        <div className="flex items-center gap-sm">
          <Icon
            name="verified_user"
            className="text-primary text-3xl"
          />

          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            CertVerify
          </h1>
        </div>

        <p className="font-label-md text-label-md text-on-surface-variant px-sm opacity-70">
          Institutional Portal
        </p>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-grow flex flex-col gap-1">
        <Link
          href="/dashboard"
          className={
            active === "home"
              ? "flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-lg transition-transform duration-150 active:scale-95"
              : "flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-transform duration-150 active:scale-95"
          }
        >
          <Icon
            name="dashboard"
            filled={active === "home"}
          />

          <span className="font-label-md text-label-md">
            Home
          </span>
        </Link>

        <Link
          href="/dashboard/settings"
          className={
            active === "settings"
              ? "flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-lg transition-transform duration-150 active:scale-95"
              : "flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-transform duration-150 active:scale-95"
          }
        >
          <Icon
            name="settings"
            filled={active === "settings"}
          />

          <span className="font-label-md text-label-md">
            Settings
          </span>
        </Link>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-md border-t border-outline-variant/30">
        <button
          type="button"
          className="flex items-center w-full gap-md px-md py-sm text-on-surface-variant hover:bg-error-container hover:text-on-error-container rounded-lg transition-all duration-200 active:opacity-80"
        >
          <Icon name="logout" />

          <span className="font-label-md text-label-md">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}