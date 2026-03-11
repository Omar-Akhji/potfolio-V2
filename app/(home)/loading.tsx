export default function Loading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title */}
      <div className="mb-8 h-9 w-36 animate-pulse rounded bg-white/10" />

      {/* Intro text */}
      <div className="mb-8 space-y-3">
        <div className="h-3.5 w-full animate-pulse rounded bg-white/10" />
        <div className="h-3.5 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-3.5 w-4/6 animate-pulse rounded bg-white/10" />
        <div className="mt-4 h-3.5 w-full animate-pulse rounded bg-white/10" />
        <div className="h-3.5 w-3/4 animate-pulse rounded bg-white/10" />
      </div>

      {/* Section title */}
      <div className="mb-6 h-7 w-44 animate-pulse rounded bg-white/10" />

      {/* Service cards grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border-glass-border flex gap-4 rounded-2xl border bg-white/5 p-6"
          >
            <div className="size-16 shrink-0 animate-pulse rounded-full bg-white/10" />
            <div className="grow space-y-2">
              <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
              <div className="h-3 w-full animate-pulse rounded bg-white/10" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>

      {/* Section title */}
      <div className="mb-6 h-7 w-56 animate-pulse rounded bg-white/10" />

      {/* Programming languages */}
      <div className="border-glass-border rounded-2xl border bg-white/5 p-6">
        <div className="flex flex-wrap items-center gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="size-14 animate-pulse rounded-full bg-white/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
