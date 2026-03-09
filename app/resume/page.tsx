import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Award } from "lucide-react";
import { EXPERIENCE, EDUCATION, SKILLS } from "../../data/zportConstants";
import ResumeTimeline from "../../components/ResumeTimeline";

const TechnicalSkills = dynamic(() => import("../../components/TechnicalSkills"), {
  loading: () => (
    <div className="mt-12 animate-pulse">
      <div className="mb-6 h-8 w-48 rounded bg-white/10" />
      <div className="border-glass-border h-64 rounded-2xl border bg-white/5" />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Education, work experience, and technical skills of Omar Akhji — Full Stack Web Developer specializing in React, Node.js, and Python.",
  openGraph: {
    title: "Resume | Omar Akhji",
    description:
      "Education, work experience, and technical skills of Omar Akhji.",
  },
};

export default function ResumePage() {
  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Resume
        </h2>
      </header>

      {/* ── Education ── */}
      <section className="mb-8">
        <SectionHeader icon={<Award className="h-5 w-5" />} title="Education" />
        <ResumeTimeline title="Education" items={EDUCATION} />
      </section>

      {/* ── Work Experience ── */}
      <section className="mt-12 mb-8">
        <SectionHeader icon={<Award className="h-5 w-5" />} title="Experience" />
        <ResumeTimeline title="Experience" items={EXPERIENCE} />
      </section>

      {/* ── Technical Skills (LOADED DYNAMICALLY) ── */}
      <TechnicalSkills skills={SKILLS} />
    </article>
  );
}

/* ── Reusable Section Header ── */
const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <header className="mb-6 flex items-center gap-4">
    <div className="border-glass-border bg-card text-orange shadow-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
      {icon}
    </div>
    <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
      {title}
    </h3>
  </header>
);
