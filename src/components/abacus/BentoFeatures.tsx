import { Link } from "react-router-dom";
import { Monitor, Trophy, TrendingUp, Wrench, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

/**
 * Visual styling matches the original bento (gradients, typography, absolute video mockup,
 * trophy/chart/dots). Layout keeps responsive 2fr/1fr column split on lg (Online + Virtual
 * | stacked Competition + Progress); md/mobile stacking preserved.
 */
export const BentoFeatures = () => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2",
        "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-4",
        "lg:items-stretch lg:justify-items-stretch"
      )}
    >
      {/* Online & Live — original look; video absolute from md up, stacked on small screens */}
      <AnimatedSection
        animation="fade-up"
        className="min-h-0 w-full min-w-0 md:col-span-2 lg:col-span-1 lg:row-start-1"
      >
        <div
          className={cn(
            "group relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-teal/20",
            "bg-gradient-to-br from-teal/20 via-teal/10 to-transparent p-8",
            "transition-all duration-500 hover:border-teal/40"
          )}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal/30 blur-3xl" />
          </div>

          <div
            className={cn(
              "relative z-10",
              "md:max-w-sm md:pr-4",
              "lg:max-w-[min(100%,20rem)] xl:max-w-sm"
            )}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/20">
              <Monitor className="h-7 w-7 text-teal" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Online &amp; Live
            </h3>
            <p className="mb-6 max-w-sm text-lg text-muted-foreground">
              Interactive live classes with expert instructors. Real-time feedback and personalized
              attention.
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 font-semibold text-teal transition-all hover:gap-3"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Video preview — md+: absolute bottom-right like original; mobile: under copy */}
          <div
            className={cn(
              "relative z-[1] mt-6 w-full max-w-[16rem] sm:max-w-[17rem]",
              "md:absolute md:bottom-6 md:right-6 md:mt-0 md:h-44 md:w-64",
              "h-32 overflow-hidden rounded-2xl border border-white/10 bg-navy/80 shadow-2xl",
              "transition-transform duration-500 group-hover:scale-105"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gold/90 shadow-lg transition-transform group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-current text-navy-dark" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 flex gap-1">
              <div className="h-8 w-8 rounded-full border border-white/20 bg-teal/50" />
              <div className="h-8 w-8 rounded-full border border-white/20 bg-gold/50" />
              <div className="h-8 w-8 rounded-full border border-white/20 bg-purple-400/50" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Right stack — original card styles */}
      <div
        className={cn(
          "flex min-h-0 w-full min-w-0 flex-col gap-4 md:col-span-2 md:flex-row",
          "lg:col-span-1 lg:row-start-1 lg:h-full lg:min-h-0 lg:flex-col lg:gap-4"
        )}
      >
        <AnimatedSection
          animation="fade-left"
          delay={100}
          className="flex min-h-0 min-w-0 flex-1 md:min-h-[200px] lg:min-h-0"
        >
          <div
            className={cn(
              "group relative flex h-full min-h-[200px] w-full flex-col overflow-hidden rounded-3xl",
              "border border-gold/20 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent p-6",
              "transition-all duration-500 hover:border-gold/40 lg:min-h-0"
            )}
          >
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-20 transition-opacity group-hover:opacity-40">
              <Trophy className="h-32 w-32 text-gold" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                <Trophy className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">Monthly Competition</h3>
              <p className="text-sm text-muted-foreground">
                Test skills and win prizes in global challenges
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-left"
          delay={200}
          className="flex min-h-0 min-w-0 flex-1 md:min-h-[200px] lg:min-h-0"
        >
          <div
            className={cn(
              "group relative flex h-full min-h-[200px] w-full flex-col overflow-hidden rounded-3xl",
              "border border-purple-500/20 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent p-6",
              "transition-all duration-500 hover:border-purple-500/40 lg:min-h-0"
            )}
          >
            <div className="pointer-events-none absolute bottom-4 right-4 flex items-end gap-1.5 opacity-60 transition-opacity group-hover:opacity-100">
              {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t bg-gradient-to-t from-purple-500 to-purple-300 transition-all duration-500"
                  style={{
                    height: `${h * 0.6}px`,
                    transitionDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Detailed analytics and growth insights</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Virtual Tools — original rose gradient + 15-dot grid */}
      <AnimatedSection
        animation="fade-up"
        delay={300}
        className="min-h-0 w-full min-w-0 md:col-span-2 lg:col-span-1 lg:row-start-2"
      >
        <div
          className={cn(
            "group relative flex min-h-[160px] w-full items-center overflow-hidden rounded-3xl",
            "border border-rose-500/20 bg-gradient-to-r from-rose-500/20 via-orange-500/10 to-transparent p-6",
            "transition-all duration-500 hover:border-rose-500/40"
          )}
        >
          <div className="pointer-events-none absolute right-8 flex gap-3 opacity-40 transition-opacity group-hover:opacity-70">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
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
          <div className="relative z-10 flex-1 pr-20 md:pr-24">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20">
              <Wrench className="h-6 w-6 text-rose-400" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-foreground">Virtual Tools</h3>
            <p className="max-w-sm text-sm text-muted-foreground md:max-w-md">
              Digital abacus platforms and interactive exercises for immersive learning
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BentoFeatures;
