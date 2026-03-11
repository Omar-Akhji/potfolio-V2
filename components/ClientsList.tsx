import React from "react";
import { CLIENTS } from "../data/portfolioData";
import { SectionTitle } from "./ui/SectionTitle";

const ClientsList = () => {
  return (
    <section className="mb-12">
      <SectionTitle>Clients</SectionTitle>
      <div className="has-scrollbar snap-x snap-mandatory overflow-x-auto px-1 pt-6 pb-8 md:pb-10">
        <div className="border-glass-border inline-flex min-w-full rounded-2xl border bg-white/5 p-8">
          <ul className="flex gap-4">
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
  );
};

export default ClientsList;
