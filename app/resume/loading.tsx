export default function ResumeLoading() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 border p-4 pb-16 sm:mx-auto sm:w-130 sm:p-8 sm:pb-28 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* Title */}
      <div className="mb-8 h-9 w-36 animate-pulse rounded bg-white/10" />

      {/* Education section title */}
      <div className="mb-6 flex items-center gap-4">
        <div className="size-10 animate-pulse rounded-full bg-white/10" />
        <div className="h-7 w-32 animate-pulse rounded bg-white/10" />
      </div>

      {/* Timeline items */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4 pb-8 md:gap-6">
          <div className="flex w-10 shrink-0 flex-col items-center">
            <div className="size-4 animate-pulse rounded-full bg-white/10" />
            <div className="my-3 w-0.5 grow animate-pulse rounded-full bg-white/10" />
          </div>
          <div className="grow space-y-2">
            <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-1/3 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
          </div>
        </div>
      ))}

      {/* Experience section title */}
      <div className="mt-12 mb-6 flex items-center gap-4">
        <div className="size-10 animate-pulse rounded-full bg-white/10" />
        <div className="h-7 w-36 animate-pulse rounded bg-white/10" />
      </div>

      {/* Experience timeline */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4 pb-8 md:gap-6">
          <div className="flex w-10 shrink-0 flex-col items-center">
            <div className="size-4 animate-pulse rounded-full bg-white/10" />
            <div className="my-3 w-0.5 grow animate-pulse rounded-full bg-white/10" />
          </div>
          <div className="grow space-y-2">
            <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-1/4 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-full animate-pulse rounded bg-white/10" />
          </div>
        </div>
      ))}

      {/* Skills section title */}
      <div className="mt-12 mb-6 flex items-center gap-4">
        <div className="size-10 animate-pulse rounded-full bg-white/10" />
        <div className="h-7 w-44 animate-pulse rounded bg-white/10" />
      </div>

      {/* Skill bars */}
      <div className="border-glass-border rounded-2xl border bg-white/5 p-8">
        <div className="space-y-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-3 w-10 animate-pulse rounded bg-white/10" />
              </div>
              <div className="h-2 w-full animate-pulse rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
