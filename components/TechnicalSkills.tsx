"use client";

import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

interface TechnicalSkillsProps {
  skills: Skill[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="mt-12 mb-8">
      <header className="mb-6">
        <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
          Technical Skills
        </h3>
      </header>
      <div className="border-glass-border rounded-2xl border bg-white/5 p-8">
        <ul className="space-y-6">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="text-text-muted mb-2 flex items-center justify-between text-[0.8125rem] tracking-wider uppercase sm:text-[0.9375rem]">
                <span>{skill.name}</span>
                <data value={skill.percentage} className="text-silver font-light">
                  {skill.percentage}%
                </data>
              </div>
              <div className="bg-glass-border relative h-2 w-full overflow-hidden rounded-full">
                <div
                  className="from-yellow to-orange h-full rounded-full bg-linear-to-r transition-all duration-1000 ease-out"
                  style={{ width: mounted ? `${skill.percentage}%` : "0%" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnicalSkills;
