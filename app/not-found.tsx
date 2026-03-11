import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 rounded-card z-1 flex flex-col items-center justify-center gap-6 border p-8 text-center sm:mx-auto sm:w-130 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      <div className="from-yellow/10 to-orange/10 border-glass-border flex size-24 items-center justify-center rounded-full border bg-linear-to-br">
        <span className="from-yellow to-orange bg-linear-to-br bg-clip-text text-5xl font-bold text-transparent">
          404
        </span>
      </div>

      <div>
        <h2 className="text-text mb-2 text-2xl font-semibold">
          Page Not Found
        </h2>
        <p className="text-text-muted text-sm font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="from-yellow to-orange text-bg rounded-full bg-linear-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_15px_rgba(99,70,230,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(99,70,230,0.6)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
