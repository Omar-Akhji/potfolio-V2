import React from "react";
import type { Metadata } from "next";
import { Award } from "lucide-react";
import { EXPERIENCE, EDUCATION, SKILLS } from "../../data/zportConstants";

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
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Resume
        </h2>
      </header>

      {/* ── Education ── */}
      <section className="mb-8">
        <SectionTitle>Education</SectionTitle>
        <div className="relative space-y-0">
          {EDUCATION.map((edu) => (
            <div key={edu.title} className="group relative flex gap-4 md:gap-6">
              {/* Timeline Column */}
              <div className="flex w-10 shrink-0 flex-col items-center">
                <div className="flex h-6 flex-col items-center justify-center">
                  <div className="bg-orange ring-orange/20 z-10 size-4 shrink-0 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] ring-4" />
                </div>
                <div className="bg-orange/20 group-hover:bg-orange/40 my-3 w-0.5 grow rounded-full transition-colors" />
              </div>

              {/* Content Column */}
              <div className="pb-8 text-sm sm:text-[0.9375rem]">
                <h4 className="text-text mb-1 flex min-h-6 items-center text-sm leading-tight font-medium sm:text-[0.9375rem]">
                  {edu.title}
                </h4>
                <time className="text-yellow/70 mb-2 block text-[0.8125rem] leading-relaxed font-normal sm:text-[0.9375rem]">
                  {edu.period}
                </time>
                <div className="text-text-muted text-[0.8125rem] leading-relaxed font-light sm:text-[0.9375rem]">
                  {edu.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Work Experience ── */}
      <section className="mt-12 mb-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative space-y-0">
          {EXPERIENCE.map((exp) => (
            <div key={exp.title} className="group relative flex gap-4 md:gap-6">
              {/* Timeline Column */}
              <div className="flex w-10 shrink-0 flex-col items-center">
                <div className="flex h-6 flex-col items-center justify-center">
                  <div className="bg-orange ring-orange/20 z-10 size-4 shrink-0 rounded-full shadow-[0_0_15px_rgba(255,165,0,0.4)] ring-4" />
                </div>
                <div className="bg-orange/20 group-hover:bg-orange/40 my-3 w-0.5 grow rounded-full transition-colors" />
              </div>

              {/* Content Column */}
              <div className="pb-8 text-sm sm:text-[0.9375rem]">
                <h4 className="text-text mb-1 flex min-h-6 items-center text-sm leading-tight font-medium sm:text-[0.9375rem]">
                  {exp.title}
                </h4>
                <time className="text-yellow/70 mb-2 block text-[0.8125rem] leading-relaxed font-normal sm:text-[0.9375rem]">
                  {exp.period}
                </time>
                <div className="text-text-muted text-[0.8125rem] leading-relaxed font-light sm:text-[0.9375rem]">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section className="mt-12 mb-8">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="border-glass-border rounded-2xl border bg-white/5 p-8">
          <ul className="space-y-6">
            {SKILLS.map((skill) => (
              <li key={skill.name}>
                <div className="text-text-muted mb-2 flex items-center justify-between text-[0.8125rem] tracking-wider uppercase sm:text-[0.9375rem]">
                  <span>{skill.name}</span>
                  <data
                    value={skill.percentage}
                    className="text-silver font-light"
                  >
                    {skill.percentage}%
                  </data>
                </div>
                <div className="bg-glass-border relative h-2 w-full overflow-hidden rounded-full">
                  <div
                    className="from-yellow to-orange h-full rounded-full bg-linear-to-r transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

/* ── Reusable Section Title ── */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <header className="mb-6 flex items-center gap-4">
    <div className="border-glass-border bg-card text-orange shadow-1 flex size-10 shrink-0 items-center justify-center rounded-full border">
      <Award className="size-5" />
    </div>
    <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
      {children}
    </h3>
  </header>
);
