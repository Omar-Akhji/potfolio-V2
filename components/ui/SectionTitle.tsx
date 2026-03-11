import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SectionTitle = ({ children, icon }: SectionTitleProps) => (
  <header className={`mb-6 flex items-center ${icon ? "gap-4" : ""}`}>
    {icon && (
      <div className="border-glass-border bg-card text-orange shadow-1 flex size-10 shrink-0 items-center justify-center rounded-full border">
        {icon}
      </div>
    )}
    <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
      {children}
    </h3>
  </header>
);
