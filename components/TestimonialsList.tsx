"use client";

import React, { useState, useRef, useEffect } from "react";
import { TESTIMONIALS } from "../data/zportConstants";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <header className="mb-6">
    <h3 className="text-text text-xl font-semibold capitalize sm:text-2xl">
      {children}
    </h3>
  </header>
);

const TestimonialsList = () => {
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
    <section className="mb-12">
      <SectionTitle>Testimonials</SectionTitle>
      <ul className="has-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-6 pb-8 md:pb-10">
        {TESTIMONIALS.map((testimonial, idx) => (
          <li
            key={testimonial.name}
            className="border-glass-border relative mt-8 w-full shrink-0 snap-center cursor-pointer rounded-2xl border bg-white/5 p-3.75 pt-11.25 transition-all hover:bg-white/8 md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]"
            onClick={() => setActiveTestimonial(idx)}
          >
            <div className="bg-bg border-glass-border shadow-2 from-yellow/10 to-orange/10 absolute top-0 left-0 flex size-16 translate-x-3.75 -translate-y-6.25 items-center justify-center rounded-full border bg-linear-to-br">
              <span className="from-yellow to-orange bg-linear-to-br bg-clip-text text-2xl font-bold text-transparent">
                {testimonial.name.charAt(0)}
              </span>
            </div>

            <div className="mb-2">
              <h4 className="text-text mb-1 font-medium">{testimonial.name}</h4>
              <time className="text-yellow text-xs font-semibold">
                {testimonial.date}
              </time>
            </div>

            <p className="text-text-muted line-clamp-4 text-sm leading-relaxed font-light">
              {testimonial.text}
            </p>
          </li>
        ))}
      </ul>

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
              className="bg-card text-text border-glass-border hover:text-orange absolute top-4 right-4 flex size-8 items-center justify-center rounded-full border transition-colors"
              onClick={() => setActiveTestimonial(null)}
            >
              ✕
            </button>
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-bg border-glass-border shadow-2 from-yellow/10 to-orange/10 flex size-20 shrink-0 items-center justify-center rounded-full border bg-linear-to-br">
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
  );
};

export default TestimonialsList;
