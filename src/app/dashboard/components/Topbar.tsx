"use client";

import { useState } from "react";
import Icon from "../../../components/ui/Icon";

type TopbarProps = {
  title?: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
};

export default function Topbar({
  title,
  searchPlaceholder = "Search certificates...",
  showSearch = true,
}: TopbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="flex justify-between items-center px-lg h-16 w-full bg-surface border-b border-outline-variant">
      <div className="flex items-center gap-md">
        {title && (
          <h2 className="font-title-md text-title-md text-primary">{title}</h2>
        )}

        {showSearch && (
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
              <Icon name="search" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="block w-64 pl-10 pr-3 py-2 border border-outline-variant rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-md text-primary">
          <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors relative">
            <Icon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
            <Icon name="help_outline" />
          </button>
        </div>

        <div className="h-8 w-px bg-outline-variant" />

        <div className="flex items-center gap-sm">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-label-md text-on-surface leading-none">
              Admin User
            </p>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
              University Registrar
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden bg-surface-container">
            <img
              src="/avatar-placeholder.png"
              alt="Admin User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}