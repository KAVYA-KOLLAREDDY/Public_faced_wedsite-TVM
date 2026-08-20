import { cn } from "@/lib/utils";

interface PageLoaderProps {
  className?: string;
  /** Shorter copy for in-route Suspense; splash uses the longer brand line in HTML. */
  label?: string;
}

/**
 * Themed full-screen loader (navy / gold / teal) used for route Suspense
 * and as the visual twin of the HTML splash in index.html.
 */
export const PageLoader = ({
  className,
  label = "Loading…",
}: PageLoaderProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, hsl(220 70% 12%) 0%, hsl(220 60% 20%) 45%, hsl(175 55% 28%) 100%)",
      }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-full border-2 border-gold/25" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold border-r-teal-light [animation-duration:0.9s]" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-gold-light [animation-duration:1.4s] [animation-direction:reverse]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-lg font-bold text-gold sm:text-xl">
              TVM
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
            Tiny Vivid Minds
          </p>
          <p className="text-sm font-medium text-white/60">{label}</p>
        </div>

        <div className="flex items-center gap-2" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-gold animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.9s" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
