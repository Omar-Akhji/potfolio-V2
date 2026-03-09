import type { Metadata } from "next";
import PortfolioContent from "../../components/PortfolioContent";

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
