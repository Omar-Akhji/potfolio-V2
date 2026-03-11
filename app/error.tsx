"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 flex flex-col items-center justify-center gap-6 border p-8 text-center sm:mx-auto sm:w-130 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      <div className="from-yellow/10 to-orange/10 border-glass-border flex size-20 items-center justify-center rounded-full border bg-linear-to-br">
        <span className="text-4xl">⚠️</span>
      </div>

      <div>
        <h2 className="text-text mb-2 text-xl font-semibold">
          Something went wrong
        </h2>
        <p className="text-text-muted text-sm font-light">
          An unexpected error occurred. Please try again.
        </p>
      </div>

      <button
        onClick={reset}
        className="from-yellow to-orange text-bg rounded-full bg-linear-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_15px_rgba(99,70,230,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(99,70,230,0.6)]"
      >
        Try Again
      </button>
    </div>
  );
}
