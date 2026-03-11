export default function PortfolioLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title */}
      <div className="mb-8 h-9 w-40 animate-pulse rounded bg-white/10" />

      {/* Filter tabs */}
      <div className="border-glass-border mb-8 flex gap-4 border-b pb-4 sm:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-5 animate-pulse rounded bg-white/10"
            style={{ width: `${60 + i * 12}px` }}
          />
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <div className="border-glass-border mb-4 aspect-4/3 w-full animate-pulse rounded-2xl border bg-white/5" />
            <div className="ml-2 mb-1 h-4 w-24 animate-pulse rounded bg-white/10" />
            <div className="ml-2 h-3 w-32 animate-pulse rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
