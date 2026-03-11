"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/zportConstants";
import { Eye } from "lucide-react";

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Portfolio
        </h2>
      </header>

      {/* ── Filter Tabs ── */}
      <ul className="border-glass-border mb-8 flex flex-wrap items-center justify-start gap-4 border-b pb-4 sm:gap-6">
        {PROJECT_CATEGORIES.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium transition-colors sm:text-[0.9375rem] ${
                activeCategory === cat
                  ? "text-orange"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* ── Portfolio Grid ── */}
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <li
            key={project.title}
            className="group animate-fade-in cursor-pointer"
          >
            <div className="border-glass-border relative mb-4 aspect-4/3 w-full overflow-hidden rounded-2xl border bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay inside CV aesthetic */}
              <div className="bg-bg/50 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <div className="border-glass-border bg-card text-orange shadow-2 translate-y-4 transform rounded-full border p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Eye className="size-6" />
                </div>
              </div>
            </div>

            <h3 className="text-text mb-1 ml-2 text-base font-medium capitalize">
              {project.title}
            </h3>
            <p className="text-text-muted ml-2 text-sm font-light">
              {project.category}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
