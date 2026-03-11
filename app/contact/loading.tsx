export default function ContactLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title */}
      <div className="mb-8 h-9 w-32 animate-pulse rounded bg-white/10" />

      {/* Map placeholder */}
      <div className="border-glass-border mb-10 h-62.5 w-full animate-pulse rounded-2xl border bg-white/5 sm:h-100" />

      {/* Form title */}
      <div className="mb-6 h-7 w-40 animate-pulse rounded bg-white/10" />

      {/* Form fields */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="h-14 animate-pulse rounded-xl bg-white/5" />
          <div className="h-14 animate-pulse rounded-xl bg-white/5" />
        </div>
        <div className="min-h-37.5 animate-pulse rounded-xl bg-white/5" />

        {/* Submit button */}
        <div className="ml-auto h-12 w-44 animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
