"use client";

import { Send } from "lucide-react";

export default function ContactContent() {
  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Contact
        </h2>
      </header>

      {/* ── Map ── */}
      <section className="mb-10">
        <div className="border-glass-border relative h-62.5 w-full overflow-hidden rounded-2xl border bg-white/5 sm:h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.81432412854!2d-6.911831826075939!3d33.96919056678258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871af50c5f%3A0xb003097fa3670ee9!2sRabat!5e0!3m2!1sen!2sma!4v1710000000000!5m2!1sen!2sma"
            title="Google Maps location of Rabat, Morocco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert filter"
          ></iframe>
        </div>
      </section>

      {/* ── Contact Form (Mock matching CV aesthetic) ── */}
      <section>
        <h3 className="text-text mb-6 text-xl font-semibold capitalize sm:text-2xl">
          Contact Form
        </h3>

        <form className="space-y-6" action="#">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="fullname"
                className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 min-h-37.5 w-full resize-y rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="group from-yellow to-orange text-bg ml-auto flex items-center gap-2 rounded-full bg-linear-to-r px-6 py-3 font-semibold shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] focus:outline-none"
          >
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
