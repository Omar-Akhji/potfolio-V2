export default function BlogLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title */}
      <div className="mb-8 h-9 w-24 animate-pulse rounded bg-white/10" />

      {/* Blog cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border-glass-border overflow-hidden rounded-2xl border bg-white/5 p-4"
          >
            {/* Image */}
            <div className="border-glass-border mb-4 aspect-4/3 w-full animate-pulse rounded-xl border bg-white/5" />

            {/* Meta row */}
            <div className="mb-2.5 flex items-center gap-3">
              <div className="h-5 w-16 animate-pulse rounded-full bg-white/10" />
              <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
            </div>

            {/* Title */}
            <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-white/10" />

            {/* Text */}
            <div className="space-y-1.5">
              <div className="h-3 w-full animate-pulse rounded bg-white/10" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
