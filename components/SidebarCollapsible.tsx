import React from "react";

interface SidebarCollapsibleProps {
  children: React.ReactNode;
}

export const SidebarCollapsible: React.FC<SidebarCollapsibleProps> = ({
  children,
}) => {
  return (
    <details className="sidebar-collapsible group xl:open xl:hidden:open xl:[&]:open">
      {/* Toggle Button */}
      <summary className="border-glass-border bg-card text-orange shadow-2 hover:text-yellow absolute -top-4 -right-4 z-10 flex cursor-pointer list-none items-center gap-1 rounded-tl-none rounded-tr-[1.25rem] rounded-br-none rounded-bl-[0.9375rem] border px-2.5 py-2.5 text-[0.8125rem] transition-all hover:bg-white/10 sm:-top-8 sm:-right-8 sm:px-4 sm:py-2.5 xl:hidden">
        <span className="hidden text-xs sm:block">
          <span className="group-open:hidden">Show Contacts</span>
          <span className="hidden group-open:inline">Hide Contacts</span>
        </span>
        <span className="sm:hidden">
          {/* Chevron down (closed) */}
          <svg
            className="h-4 w-4 group-open:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          {/* Chevron up (open) */}
          <svg
            className="hidden h-4 w-4 group-open:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </span>
      </summary>

      {/* Expandable Content */}
      <div className="animate-sidebar-expand">{children}</div>
    </details>
  );
};
