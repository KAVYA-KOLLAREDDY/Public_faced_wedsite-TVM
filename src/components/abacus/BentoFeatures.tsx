import { Monitor, Trophy, TrendingUp, Wrench, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

/** Shared vertical rhythm: icon → title → body (+ optional footer slot) */
const iconBox =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl";
const titleCls = "font-display text-lg font-bold text-foreground sm:text-xl";
const bodyCls =
  "text-sm leading-relaxed text-muted-foreground sm:text-base flex-1 min-h-[3.25rem]";

export const BentoFeatures = () => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5",
        "md:grid-cols-2 md:auto-rows-[minmax(17.5rem,auto)]",
        "lg:grid-cols-3 lg:auto-rows-[minmax(17.5rem,auto)]"
      )}
    >
      {/* Large tile — grid layout replaces absolute video (no overlap on any width) */}
      <AnimatedSection
        animation="fade-up"
        className="h-full md:col-span-2 lg:col-span-2 lg:row-span-2"
      >
        <div
          className={cn(
            "group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-3xl border border-teal/20 bg-gradient-to-br from-teal/20 via-teal/10 to-transparent transition-all duration-500 hover:border-teal/40 lg:min-h-0",
            "p-6 sm:p-7 md:p-8"
          )}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal/30 blur-3xl" />
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(200px,15rem)] lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col">
              <div className={cn(iconBox, "mb-4 rounded-2xl bg-teal/20 md:mb-4")}>
                <Monitor className="h-6 w-6 text-teal" />
              </div>
              <h3 className={cn(titleCls, "mb-2 md:text-2xl lg:text-3xl")}>Online & Live</h3>
              <p className={cn(bodyCls, "mb-4 max-w-xl")}>
                Interactive live classes with expert instructors. Real-time feedback and personalized
                attention.
              </p>
              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-2 font-semibold text-teal transition-all hover:gap-3"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div
              className={cn(
                "relative aspect-video w-full max-w-md shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-navy/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-lg lg:max-w-none lg:justify-self-end"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gold/90 shadow-lg transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
                  <Play className="ml-0.5 h-5 w-5 fill-current text-navy-dark sm:h-6 sm:w-6" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 flex gap-1">
                <div className="h-7 w-7 rounded-full border border-white/20 bg-teal/50 sm:h-8 sm:w-8" />
                <div className="h-7 w-7 rounded-full border border-white/20 bg-gold/50 sm:h-8 sm:w-8" />
                <div className="h-7 w-7 rounded-full border border-white/20 bg-purple-400/50 sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Medium — Competition */}
      <AnimatedSection animation="fade-left" delay={100} className="h-full">
        <div
          className={cn(
            "group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent p-6 sm:p-7 transition-all duration-500 hover:border-gold/40 lg:min-h-0"
          )}
        >
          <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-20 transition-opacity group-hover:opacity-40">
            <Trophy className="h-28 w-28 text-gold sm:h-32 sm:w-32" strokeWidth={1} />
          </div>
          <div className="relative z-10 flex min-h-0 flex-1 flex-col pr-12">
            <div className={cn(iconBox, "mb-4 bg-gold/20")}>
              <Trophy className="h-6 w-6 text-gold" />
            </div>
            <h3 className={cn(titleCls, "mb-2")}>Monthly Competition</h3>
            <p className={bodyCls}>Compete globally in exciting challenges.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Medium — Progress */}
      <AnimatedSection animation="fade-left" delay={200} className="h-full">
        <div
          className={cn(
            "group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent p-6 sm:p-7 transition-all duration-500 hover:border-purple-500/40 lg:min-h-0"
          )}
        >
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-end gap-1.5 opacity-50 transition-opacity group-hover:opacity-100">
            {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
              <div
                key={i}
                className="w-2.5 rounded-t bg-gradient-to-t from-purple-500 to-purple-300 transition-all duration-500 sm:w-3"
                style={{
                  height: `${h * 0.5}px`,
                  transitionDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10 flex min-h-0 flex-1 flex-col pr-14">
            <div className={cn(iconBox, "mb-4 bg-purple-500/20")}>
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className={cn(titleCls, "mb-2")}>Progress Tracking</h3>
            <p className={bodyCls}>Detailed analytics and growth insights for every learner.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Wide — Virtual Tools */}
      <AnimatedSection animation="fade-up" delay={300} className="h-full md:col-span-2 lg:col-span-2">
        <div
          className={cn(
            "group relative flex h-full min-h-[17.5rem] flex-col justify-center gap-6 overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-r from-rose-500/20 via-orange-500/10 to-transparent p-6 sm:p-7 transition-all duration-500 hover:border-rose-500/40 sm:flex-row sm:items-stretch lg:min-h-0"
          )}
        >
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 gap-3 opacity-40 transition-opacity group-hover:opacity-70 sm:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-16 sm:w-16">
              <div className="grid grid-cols-5 gap-0.5">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      i % 3 === 0 ? "bg-orange-400" : "bg-white/30"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col pr-0 sm:pr-24">
            <div className={cn(iconBox, "mb-4 bg-rose-500/20")}>
              <Wrench className="h-6 w-6 text-rose-400" />
            </div>
            <h3 className={cn(titleCls, "mb-2")}>Virtual Tools</h3>
            <p className={cn(bodyCls, "max-w-2xl")}>
              Digital abacus platforms and interactive exercises for immersive learning
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BentoFeatures;
