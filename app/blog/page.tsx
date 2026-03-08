import React from "react";
import Image from "next/image";
import { BLOG_POSTS } from "../../data/zportConstants";

export default function BlogPage() {
  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 pb-12 sm:mx-auto sm:w-130 sm:p-8 sm:pb-20 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Blog
        </h2>
      </header>

      {/* ── Blog Grid ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.title}
            className="group border-glass-border relative flex flex-col overflow-hidden rounded-2xl border bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
          >
            {/* Glow */}
            <div className="bg-orange/5 group-hover:bg-orange/15 absolute -top-10 -right-10 h-24 w-24 rounded-full blur-3xl transition-all duration-500" />

            <div className="border-glass-border relative mb-4 h-48 w-full shrink-0 overflow-hidden rounded-xl border">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex grow flex-col">
              <div className="mb-3 flex items-center gap-3 text-xs sm:text-sm">
                <span className="bg-card border-glass-border text-orange rounded-full border px-2 py-1 font-medium">
                  {post.category}
                </span>
                <time
                  dateTime={post.dateTime}
                  className="text-text-muted font-light"
                >
                  {post.date}
                </time>
              </div>

              <h3 className="text-text group-hover:text-orange mb-2 text-lg leading-tight font-medium transition-colors">
                {post.title}
              </h3>

              <p className="text-text-muted mt-auto text-sm leading-relaxed font-light">
                {post.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
