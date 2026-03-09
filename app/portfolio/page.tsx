import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PortfolioContent = dynamic(
  () => import("../../components/PortfolioContent"),
  {
    loading: () => (
      <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 sm:mx-auto sm:w-130 sm:p-8 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
        <div className="mb-8 h-9 w-48 animate-pulse rounded bg-white/10" />
        <div className="mb-8 flex gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-20 animate-pulse rounded bg-white/10"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border-glass-border h-52 animate-pulse rounded-2xl border bg-white/5"
            />
          ))}
        </div>
      </div>
    ),
  },
);

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Omar Akhji's portfolio of web development, design, and data science projects built with React, Next.js, and modern technologies.",
  openGraph: {
    title: "Portfolio | Omar Akhji",
    description:
      "Web development, design, and data science projects by Omar Akhji.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
