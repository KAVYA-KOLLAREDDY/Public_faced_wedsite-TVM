import { Link } from "react-router-dom";
import { Monitor, Trophy, TrendingUp, Wrench, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

const iconBox =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14";
const titleCls =
  "font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl";
const bodyCls =
  "text-sm leading-relaxed text-muted-foreground sm:text-base";

/**
 * lg+: explicit 2fr / 1fr grid so left column is exactly 2/3 of inner width (Online + Virtual align);
 * not 3× equal cols + span-2 (gaps skew perceived ratio).
 */
export const BentoFeatures = () => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6",
        "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-8",
        "lg:items-stretch lg:justify-items-stretch"
      )}
    >
      {/* —— Online & Live — left track, row 1 —— */}
      <AnimatedSection
        animation="fade-up"
        className="min-h-0 w-full min-w-0 md:col-span-2 lg:col-span-1 lg:row-start-1"
      >
        <div
          className={cn(
            "group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-3xl border border-teal/20 bg-gradient-to-br from-teal/25 via-emerald-500/10 to-teal/5 transition-all duration-500 hover:border-teal/40 sm:min-h-[20rem]",
            "p-8 sm:p-9 md:p-10"
          )}
        >
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-teal/30 blur-3xl" />
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <div className={cn(iconBox, "mb-4 rounded-2xl bg-teal/25")}>
              <Monitor className="h-6 w-6 text-teal sm:h-7 sm:w-7" />
            </div>
            <h3 className={cn(titleCls, "mb-2 lg:text-3xl")}>Online &amp; Live</h3>
            <p className={cn(bodyCls, "mb-4 max-w-xl")}>
              Interactive live classes with expert instructors. Real-time feedback and personalized
              attention.
            </p>
            <Link
              to="/contact#contact-form"
              className="mb-6 inline-flex w-fit items-center gap-2 font-semibold text-teal transition-all hover:gap-3 sm:mb-8"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Video mock — bottom-right of card (reference) */}
            <div className="mt-auto flex w-full justify-end">
              <div
                className={cn(
                  "relative aspect-video w-full max-w-[15.5rem] overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/95 shadow-xl transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-[17.5rem]"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/90 shadow-lg transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                    <Play className="ml-0.5 h-5 w-5 fill-current text-navy-dark sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="h-6 w-6 rounded-full border border-white/20 bg-teal/50 sm:h-7 sm:w-7" />
                  <div className="h-6 w-6 rounded-full border border-white/20 bg-gold/50 sm:h-7 sm:w-7" />
                  <div className="h-6 w-6 rounded-full border border-white/20 bg-purple-400/50 sm:h-7 sm:w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* —— Right stack — right track (~1/3), row 1 —— */}
      <div
        className={cn(
          "flex min-h-0 w-full min-w-0 flex-col gap-6 md:col-span-2 md:flex-row lg:col-span-1 lg:row-start-1 lg:h-full lg:min-h-0 lg:flex-col lg:gap-6"
        )}
      >
        <AnimatedSection
          animation="fade-left"
          delay={100}
          className="flex min-h-0 min-w-0 flex-1 md:min-h-[12rem] lg:min-h-0"
        >
          <div
            className={cn(
              "group relative flex h-full w-full min-h-[13rem] flex-col overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-amber-100/40 via-gold/15 to-amber-50/20 p-8 transition-all duration-500 hover:border-gold/40 dark:from-gold/20 dark:via-gold/10 dark:to-transparent sm:min-h-[14rem] lg:min-h-0"
            )}
          >
            <div className="pointer-events-none absolute -right-2 bottom-0 opacity-[0.14] transition-opacity group-hover:opacity-25 dark:opacity-18">
              <Trophy className="h-28 w-28 text-gold sm:h-32 sm:w-32" strokeWidth={1} />
            </div>
            <div className="relative z-10 flex min-h-0 flex-1 flex-col pr-8 sm:pr-10">
              <div className={cn(iconBox, "mb-4 rounded-2xl bg-gold/25")}>
                <Trophy className="h-6 w-6 text-gold sm:h-7 sm:w-7" />
              </div>
              <h3 className={cn(titleCls, "mb-2")}>Monthly Competition</h3>
              <p className={bodyCls}>Test skills and win prizes in global challenges</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-left"
          delay={200}
          className="flex min-h-0 min-w-0 flex-1 md:min-h-[12rem] lg:min-h-0"
        >
          <div
            className={cn(
              "group relative flex h-full w-full min-h-[13rem] flex-col overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-violet-100/35 via-purple-500/12 to-violet-50/15 p-8 transition-all duration-500 hover:border-purple-500/40 dark:from-purple-500/20 dark:via-purple-500/10 dark:to-transparent sm:min-h-[14rem] lg:min-h-0"
            )}
          >
            <div className="pointer-events-none absolute bottom-3 right-3 flex items-end gap-1.5 opacity-45 transition-opacity group-hover:opacity-80">
              {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="w-2.5 rounded-t bg-gradient-to-t from-purple-600 to-purple-300 sm:w-3 dark:from-purple-400 dark:to-purple-200"
                  style={{
                    height: `${h * 0.5}px`,
                    transitionDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 flex min-h-0 flex-1 flex-col pr-10 sm:pr-12">
              <div className={cn(iconBox, "mb-4 rounded-2xl bg-purple-500/25")}>
                <TrendingUp className="h-6 w-6 text-purple-600 sm:h-7 sm:w-7 dark:text-purple-300" />
              </div>
              <h3 className={cn(titleCls, "mb-2")}>Progress Tracking</h3>
              <p className={bodyCls}>Detailed analytics and growth insights</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* —— Virtual Tools — same left track as Online, row 2 —— */}
      <AnimatedSection
        animation="fade-up"
        delay={300}
        className="min-h-0 w-full min-w-0 md:col-span-2 lg:col-span-1 lg:row-start-2"
      >
        <div
          className={cn(
            "group relative flex min-h-[13rem] w-full flex-col justify-center overflow-hidden rounded-3xl border border-rose-400/25 bg-gradient-to-r from-rose-100/45 via-orange-100/25 to-amber-50/20 p-8 transition-all duration-500 hover:border-rose-400/40 dark:from-rose-500/20 dark:via-orange-500/10 dark:to-transparent sm:min-h-[15rem] sm:p-9 md:p-10"
          )}
        >
          {/* 12-dot cluster (reference) — 4×3 */}
          <div className="pointer-events-none absolute right-6 top-1/2 flex -translate-y-1/2 opacity-40 transition-opacity group-hover:opacity-65 sm:right-8 md:right-10">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5",
                    i % 3 === 0 ? "bg-orange-400 dark:bg-orange-300" : "bg-foreground/25"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 flex min-w-0 max-w-2xl flex-col pr-16 sm:pr-20 md:pr-24">
            <div className={cn(iconBox, "mb-4 rounded-2xl bg-rose-500/25")}>
              <Wrench className="h-6 w-6 text-rose-500 sm:h-7 sm:w-7 dark:text-rose-300" />
            </div>
            <h3 className={cn(titleCls, "mb-2")}>Virtual Tools</h3>
            <p className={bodyCls}>
              Digital abacus platforms and interactive exercises for immersive learning
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BentoFeatures;
