export default function BlogLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title skeleton with underline accent */}
      <header className="mb-8">
        <div className="h-8 w-20 animate-pulse rounded bg-white/10 sm:h-9" />
        <div className="from-orange to-yellow mt-2 h-0.75 w-8 rounded-sm bg-linear-to-r sm:mt-4 sm:h-1.25 sm:w-10" />
      </header>

      {/* Blog cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border-glass-border relative flex flex-col overflow-hidden rounded-2xl border bg-white/5 p-4"
          >
            {/* Image skeleton */}
            <div className="border-glass-border mb-4 aspect-4/3 w-full animate-pulse rounded-xl border bg-white/5 lg:h-57.5" />

            {/* Content area */}
            <div className="flex grow flex-col pt-3.75 sm:p-6.25">
              {/* Category badge + date */}
              <div className="mb-2.5 flex items-center gap-3">
                <div className="h-6 w-18 animate-pulse rounded-full bg-white/10" />
                <div className="h-3.5 w-24 animate-pulse rounded bg-white/8" />
              </div>

              {/* Title */}
              <div className="mb-2 h-5 w-4/5 animate-pulse rounded bg-white/10 sm:h-6" />

              {/* Description lines */}
              <div className="space-y-1.5">
                <div className="h-3.5 w-full animate-pulse rounded bg-white/8" />
                <div className="h-3.5 w-3/4 animate-pulse rounded bg-white/8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
