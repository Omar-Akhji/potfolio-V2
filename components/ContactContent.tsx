"use client";

import { useActionState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PageWrapper } from "./ui/PageWrapper";
import {
  sendContactEmail,
  type ContactFormState,
} from "../app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactContent() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  return (
    <PageWrapper>
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
            className="grayscale invert"
          ></iframe>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section>
        <h3 className="text-text mb-6 text-xl font-semibold capitalize sm:text-2xl">
          Contact Form
        </h3>

        {/* Status Banner */}
        {state.message && !state.errors && (
          <div
            className={`mb-6 flex items-center gap-3 rounded-xl border p-4 ${
              state.success
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}
            role="alert"
          >
            {state.success ? (
              <CheckCircle2 className="size-5 shrink-0" />
            ) : (
              <AlertCircle className="size-5 shrink-0" />
            )}
            <p className="text-sm font-medium">{state.message}</p>
          </div>
        )}

        <form className="space-y-6" action={formAction}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="fullname" className="sr-only">
                Full name
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                className={`bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none ${
                  state.errors?.fullname ? "border-red-500/50!" : ""
                }`}
                placeholder="Full name"
                required
                disabled={isPending}
              />
              {state.errors?.fullname && (
                <p className="mt-1.5 text-xs font-medium text-red-400">
                  {state.errors.fullname}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none ${
                  state.errors?.email ? "border-red-500/50!" : ""
                }`}
                placeholder="Email address"
                required
                disabled={isPending}
              />
              {state.errors?.email && (
                <p className="mt-1.5 text-xs font-medium text-red-400">
                  {state.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 min-h-37.5 w-full resize-y rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none ${
                state.errors?.message ? "border-red-500/50!" : ""
              }`}
              placeholder="Your Message"
              required
              disabled={isPending}
            ></textarea>
            {state.errors?.message && (
              <p className="mt-1.5 text-xs font-medium text-red-400">
                {state.errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group from-yellow to-orange text-bg ml-auto flex items-center gap-2 rounded-full bg-linear-to-r px-6 py-3 font-semibold shadow-[0_0_15px_rgba(99,70,230,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(99,70,230,0.6)] focus:outline-none disabled:pointer-events-none disabled:opacity-60"
          >
            {isPending ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <Send className="size-5" />
            )}
            <span>{isPending ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
