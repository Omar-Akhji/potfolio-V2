"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  SERVICES,
  PROGRAMMING_LANGUAGES,
  TESTIMONIALS,
  CLIENTS,
} from "../data/zportConstants";
import {
  FileCode2,
  MonitorSmartphone,
  LayoutPanelLeft,
  Camera,
  Terminal,
} from "lucide-react";

// Helper to map Z PORT SVGs to Lucide Icons for the unified aesthetic
const getServiceIcon = (title: string) => {
  switch (title) {
    case "Graphic design":
      return <LayoutPanelLeft className="h-6 w-6" />;
    case "Web development":
      return <MonitorSmartphone className="h-6 w-6" />;
    case "Data Science":
      return <FileCode2 className="h-6 w-6" />;
    case "Photography & Montage":
      return <Camera className="h-6 w-6" />;
    default:
      return <Terminal className="h-6 w-6" />;
  }
};

export default function AboutContent() {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeTestimonial !== null && !dialog.open) {
      dialog.showModal();
    } else if (activeTestimonial === null && dialog.open) {
      dialog.close();
    }
  }, [activeTestimonial]);

  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          About me
        </h2>
      </header>

      {/* ── Intro Text ── */}
      <section className="mb-8">
        <div className="text-text-muted space-y-4 text-sm leading-relaxed font-light sm:text-[0.9375rem]">
          <p>
            I am a motivated and rigorous with a strong interest in economics
            and management. I am confident that my training at the Faculty of
            Legal, Economic and Social Sciences in Souissi has given me the
            skills and knowledge to succeed in this field.
          </p>
          <p>
            I also have excellent communication and teamwork skills, which
            allows me to easily integrate into any type of professional
            environment. I am very excited about putting my skills and knowledge
            to work for a company and actively contributing to its development.
            I am confident that I can bring real added value to your team.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="mb-8">
        <SectionTitle>What I'm doing</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group border-glass-border hover:border-orange/30 relative overflow-hidden rounded-2xl border bg-white/5 p-6 transition-all duration-300 hover:bg-white/8"
            >
              <div className="bg-orange/5 group-hover:bg-orange/15 absolute -top-10 -right-10 h-24 w-24 rounded-full blur-3xl transition-all duration-500" />
              <div className="relative z-10 flex gap-4">
                <div className="border-orange/20 bg-orange/10 text-orange flex h-16 w-16 shrink-0 items-center justify-center rounded-full border shadow-[0_0_15px_oklch(from_var(--color-orange)_l_c_h/10%)] transition-transform duration-300 group-hover:scale-105">
                  {getServiceIcon(service.title)}
                </div>
                <div>
                  <h4 className="text-text group-hover:text-orange mb-2 block font-medium transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programming Languages (Mapped to modern grid) ── */}
      <section className="mb-8">
        <SectionTitle>Programming Languages</SectionTitle>
        <div className="border-glass-border rounded-2xl border bg-white/5 p-6">
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:justify-start lg:gap-8">
            {PROGRAMMING_LANGUAGES.map((lang) => (
              <li
                key={lang.name}
                className="group relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
                title={lang.name}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                  <Image
                    src={lang.url}
                    alt={lang.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <span className="text-text-muted/0 group-hover:text-text-muted absolute -bottom-6 text-xs transition-colors">
                  {lang.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mb-12">
        <SectionTitle>Testimonials</SectionTitle>
        <ul className="has-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-6 pb-8 md:pb-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <li
              key={testimonial.name}
              className="border-glass-border relative mt-8 w-full shrink-0 snap-center rounded-2xl border bg-white/5 p-3.75 pt-11.25 md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]"
            >
              {/* Avatar absolute positioning referencing Z PORT design but in CV aesthetic */}
              <div className="bg-bg border-glass-border shadow-2 from-yellow/10 to-orange/10 absolute top-0 left-0 flex h-16 w-16 translate-x-3.75 -translate-y-6.25 items-center justify-center rounded-full border bg-linear-to-br">
                <span className="from-yellow to-orange bg-linear-to-br bg-clip-text text-2xl font-bold text-transparent">
                  {testimonial.name.charAt(0)}
                </span>
              </div>

              <div className="mb-2">
                <h4 className="text-text mb-1 font-medium">
                  {testimonial.name}
                </h4>
                <time className="text-yellow text-xs font-semibold">
                  {testimonial.date}
                </time>
              </div>

              <p className="text-text-muted line-clamp-4 text-sm leading-relaxed font-light">
                {testimonial.text}
              </p>

              {/* Read more fake button */}
              <button
                className="text-orange hover:text-yellow mt-2 text-xs font-semibold tracking-wider uppercase transition-colors"
                onClick={() => setActiveTestimonial(idx)}
              >
                Read Details
              </button>
            </li>
          ))}
        </ul>

        {/* Testimonial Modal (native <dialog>) */}
        <dialog
          ref={dialogRef}
          className="testimonials-modal"
          onClose={() => setActiveTestimonial(null)}
          onClick={(e) => {
            if (e.target === dialogRef.current) setActiveTestimonial(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveTestimonial(null);
          }}
          aria-label="Testimonial details"
        >
          {activeTestimonial !== null && (
            <div className="relative p-4 md:p-6">
              <button
                className="bg-card text-text border-glass-border hover:text-orange absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                onClick={() => setActiveTestimonial(null)}
              >
                ✕
              </button>
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-bg border-glass-border shadow-2 from-yellow/10 to-orange/10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border bg-linear-to-br">
                  <span className="from-yellow to-orange bg-linear-to-br bg-clip-text text-3xl font-bold text-transparent">
                    {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-text text-lg font-medium">
                    {TESTIMONIALS[activeTestimonial].name}
                  </h4>
                  <time className="text-yellow text-sm font-semibold">
                    {TESTIMONIALS[activeTestimonial].date}
                  </time>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed font-light">
                {TESTIMONIALS[activeTestimonial].text}
              </p>
            </div>
          )}
        </dialog>
      </section>

      {/* ── Clients ── */}
      <section className="mb-12">
        <SectionTitle>Clients</SectionTitle>
        <div className="has-scrollbar snap-x snap-mandatory overflow-x-auto px-1 pt-6 pb-8 md:pb-10">
          <div className="border-glass-border inline-flex min-w-full rounded-2xl border bg-white/5 p-8">
            <ul className="flex gap-4">
              {/* Clients are rendered with text instead of missing images to avoid crashing */}
              {CLIENTS.map((client) => (
                <li
                  key={client.logo}
                  className="flex min-w-30 shrink-0 snap-center items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:min-w-37.5 md:min-w-45"
                >
                  <div className="text-text-muted text-xl font-bold tracking-widest uppercase">
                    {client.alt}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

/* ── Reusable Section Title ── */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <header className="mb-6">
    <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
      {children}
    </h3>
  </header>
);
