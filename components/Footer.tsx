import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="shadow-1 border-glass-border xs:rounded-t-2xl xs:px-5 xs:py-3.5 absolute bottom-0 left-1/2 z-10 w-max -translate-x-1/2 rounded-t-xl border border-b-0 bg-[oklch(from_var(--color-bg)_l_c_h/75%)] px-4 py-3 backdrop-blur-[10px] sm:px-6 sm:py-4 md:px-7 md:py-4.5 lg:px-8 lg:py-5 xl:left-0 xl:translate-x-0 xl:rounded-none xl:rounded-tr-2xl xl:rounded-bl-2xl"
      role="contentinfo"
      aria-label="Site footer"
    >
      <small className="xs:gap-1 text-text-muted/80 xs:text-xs flex items-center gap-0.5 text-[0.6875rem] font-medium not-italic sm:text-[0.8125rem] md:text-sm lg:text-[0.9375rem]">
        <span>©</span>
        <time dateTime={new Date().getFullYear().toString()}>
          {new Date().getFullYear()}
        </time>
        <span>Edited by Omar Akhji. All rights reserved.</span>
      </small>
    </footer>
  );
};
