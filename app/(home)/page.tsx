import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";

export const metadata: Metadata = {
  title: "About | Omar Akhji - Fullstack WebDeveloper",
  description:
    "Learn about Omar Akhji — a Full Stack Web Developer based in Rabat, Morocco with expertise in React, Next.js, Node.js, and Python.",
  openGraph: {
    title: "About | Omar Akhji - Fullstack Web Developer",
    description:
      "Learn about Omar Akhji — Full Stack Web Developer based in Rabat, Morocco.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
