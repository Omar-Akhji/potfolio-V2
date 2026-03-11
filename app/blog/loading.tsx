export default function BlogLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title "Blog" + gradient underline ── */}
      <div className="mb-8 pb-2 sm:pb-4">
        <div className="h-8 w-20 animate-pulse rounded bg-white/10 sm:h-9" />
        <div className="from-orange to-yellow mt-2 h-0.75 w-8 rounded-sm bg-linear-to-r sm:mt-3 sm:h-1.25 sm:w-10" />
      </div>

      {/* ── Blog Cards Grid ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border-glass-border overflow-hidden rounded-2xl border bg-white/5 p-4"
          >
            {/* Large image area */}
            <div className="aspect-4/3 w-full animate-pulse rounded-xl bg-white/8 lg:h-57.5" />

            {/* Content below image */}
            <div className="pt-4 sm:px-2 sm:pt-6">
              {/* Category badge + date row */}
              <div className="mb-3 flex items-center gap-3">
                <div className="h-7 w-20 animate-pulse rounded-full bg-white/10" />
                <div className="h-4 w-28 animate-pulse rounded bg-white/8" />
              </div>

              {/* Post title */}
              <div className="mb-3 h-6 w-4/5 animate-pulse rounded bg-white/12 sm:h-7" />

              {/* Description text (2 lines) */}
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-white/8" />
                <div className="h-4 w-3/5 animate-pulse rounded bg-white/8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
