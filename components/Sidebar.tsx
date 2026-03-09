"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { PersonalInfo } from "../types/resume";

type SidebarProps = PersonalInfo;

export const Sidebar: React.FC<SidebarProps> = ({
  initials,
  name,
  title,
  contact,
  languages,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside
      className={`border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 mb-4 overflow-hidden rounded-[1.25rem] border p-4 transition-all duration-500 ease-in-out sm:mx-auto sm:mb-8 sm:w-130 sm:p-8 md:w-175 lg:w-237.5 xl:sticky xl:top-15 xl:mb-0 xl:h-full xl:max-h-max xl:w-auto xl:pt-15 ${
        isActive ? "max-h-375" : "max-h-28 sm:max-h-45"
      }`}
    >
      {/* ── Sidebar Info Row ── */}
      <header className="relative flex items-center justify-start gap-4 sm:gap-6 xl:flex-col">
        {/* Avatar */}
        <div className="border-glass-border shadow-2 from-yellow to-orange text-bg flex h-20 w-20 shrink-0 items-center justify-center rounded-full border bg-white/5 bg-linear-to-br text-[1.75rem] font-bold transition-transform hover:scale-105 sm:h-30 sm:w-30 sm:text-[2.75rem] xl:mx-auto xl:h-37.5 xl:w-37.5 xl:text-[3.5rem]">
          {initials}
        </div>

        {/* Name & Title */}
        <div className="xl:text-center">
          <h1 className="from-yellow to-orange mb-2 bg-linear-to-br bg-clip-text text-[1.0625rem] font-medium tracking-tight text-transparent sm:mb-4 sm:text-[1.625rem] xl:whitespace-nowrap">
            {name}
          </h1>
          <p className="text-text w-max rounded-full bg-white/8 px-3 py-0.5 text-[0.6875rem] font-light sm:px-4.5 sm:py-1 sm:text-xs xl:mx-auto">
            {title}
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsActive(!isActive)}
          className="border-glass-border bg-card text-orange shadow-2 hover:text-yellow absolute -top-4 -right-4 z-10 flex items-center gap-1 rounded-tl-none rounded-tr-[1.25rem] rounded-br-none rounded-bl-[0.9375rem] border px-2.5 py-2.5 text-[0.8125rem] transition-all hover:bg-white/10 sm:-top-8 sm:-right-8 sm:px-4 sm:py-2.5 xl:hidden"
          aria-label={isActive ? "Hide Contacts" : "Show Contacts"}
        >
          <span className="hidden text-xs sm:block">
            {isActive ? "Hide Contacts" : "Show Contacts"}
          </span>
          <span className="sm:hidden">
            {isActive ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </button>
      </header>

      {/* ── Expandable Details ── */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isActive
            ? "visible opacity-100"
            : "invisible opacity-0 xl:visible xl:opacity-100"
        }`}
      >
        {/* Separator */}
        <hr className="bg-glass-border my-4 h-0.5 w-full border-0 sm:my-8" />

        {/* Contacts */}
        <address className="not-italic">
          <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:grid-cols-1">
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              text={contact.email}
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              text={contact.phone}
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              text={contact.location}
            />
            <ContactItem
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              text={contact.linkedin}
            />
            <ContactItem
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              text={contact.github}
            />
          </ul>
        </address>

        {/* Separator */}
        <hr className="bg-glass-border my-4 h-0.5 w-full border-0 sm:my-8" />

        {/* Languages */}
        <section aria-label="Languages">
          <h3 className="text-orange mb-4 text-[0.6875rem] font-medium tracking-[0.2em] uppercase sm:text-xs">
            Languages
          </h3>
          <dl className="space-y-2">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="text-text-muted flex justify-between text-[0.8125rem] sm:text-[0.9375rem]"
              >
                <dt>{lang.name}</dt>
                <dd>{lang.level}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </aside>
  );
};

/* ── Sub-components ── */

const ContactItem = ({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) => (
  <li className="flex min-w-full items-center gap-4">
    <div className="border-orange bg-card text-orange shadow-1 hover:shadow-3 flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border-2 transition-all hover:-translate-y-1 sm:h-12 sm:w-12 sm:text-lg">
      {icon}
    </div>
    <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)] sm:w-[calc(100%-4rem)] sm:max-w-[calc(100%-4rem)]">
      <p className="text-text-muted/70 mb-0.5 text-[0.6875rem] uppercase sm:text-xs">
        {label}
      </p>
      <span className="text-text block text-[0.8125rem] sm:text-[0.9375rem] xl:overflow-hidden xl:text-ellipsis xl:whitespace-nowrap">
        {text}
      </span>
    </div>
  </li>
);
