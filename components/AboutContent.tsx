import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SERVICES, PROGRAMMING_LANGUAGES } from "../data/portfolioData";
import {
  FileCode2,
  MonitorSmartphone,
  LayoutPanelLeft,
  Camera,
  Terminal,
} from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { PageWrapper } from "./ui/PageWrapper";
import ClientsList from "./ClientsList";

const TestimonialsList = dynamic(() => import("./TestimonialsList"), {
  loading: () => (
    <section className="mb-12">
      <div className="mb-6 h-8 w-40 animate-pulse rounded bg-white/10" />
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="border-glass-border h-52 w-72 shrink-0 animate-pulse rounded-2xl border bg-white/5"
          />
        ))}
      </div>
    </section>
  ),
});

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
  return (
    <PageWrapper>
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

      {/* ── Testimonials (dynamic client component) ── */}
      <TestimonialsList />

      {/* ── Clients ── */}
      <ClientsList />
    </PageWrapper>
  );
}
