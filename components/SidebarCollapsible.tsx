"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarCollapsibleProps {
  children: React.ReactNode;
}

export const SidebarCollapsible: React.FC<SidebarCollapsibleProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="border-glass-border bg-card text-orange shadow-2 hover:text-yellow absolute -top-4 -right-4 z-10 flex items-center gap-1 rounded-tl-none rounded-tr-[1.25rem] rounded-br-none rounded-bl-[0.9375rem] border px-2.5 py-2.5 text-[0.8125rem] transition-all hover:bg-white/10 sm:-top-8 sm:-right-8 sm:px-4 sm:py-2.5 xl:hidden"
        aria-label={isActive ? "Hide Contacts" : "Show Contacts"}
      >
        <span className="hidden text-xs sm:block">
          {isActive ? "Hide Contacts" : "Show Contacts"}
        </span>
        <span className="sm:hidden">
          {isActive ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </span>
      </button>

      {/* Expandable Content Container */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isActive
            ? "max-h-375 visible opacity-100"
            : "max-h-0 invisible opacity-0 xl:max-h-none xl:visible xl:opacity-100"
        } overflow-hidden xl:overflow-visible`}
      >
        {children}
      </div>
    </>
  );
};
