import { Monitor, Trophy, TrendingUp, Wrench, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

const features = [
  {
    icon: Monitor,
    title: "Online & Live",
    description: "Interactive live classes with expert instructors",
    size: "large",
    visual: "video",
  },
  {
    icon: Trophy,
    title: "Monthly Competition",
    description: "Compete globally in exciting challenges",
    size: "medium",
    visual: "trophy",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Watch skills grow with detailed analytics",
    size: "medium",
    visual: "chart",
  },
  {
    icon: Wrench,
    title: "Virtual Tools",
    description: "Digital abacus & interactive exercises",
    size: "small",
    visual: "tools",
  },
];

export const BentoFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {/* Large tile - Online & Live */}
      <AnimatedSection 
        animation="fade-up" 
        className="lg:col-span-2 lg:row-span-2"
      >
        <div className="group relative h-full min-h-[320px] bg-gradient-to-br from-teal/20 via-teal/10 to-transparent rounded-3xl p-8 border border-teal/20 overflow-hidden hover:border-teal/40 transition-all duration-500">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal/30 rounded-full blur-3xl animate-pulse" />
          </div>
          
          {/* Video preview mockup */}
          <div className="absolute bottom-6 right-6 w-48 h-32 md:w-64 md:h-44 bg-navy/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-6 h-6 text-navy-dark ml-1" fill="currentColor" />
              </div>
            </div>
            {/* Video call indicators */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              <div className="w-8 h-8 rounded-full bg-teal/50 border border-white/20" />
              <div className="w-8 h-8 rounded-full bg-gold/50 border border-white/20" />
              <div className="w-8 h-8 rounded-full bg-purple-400/50 border border-white/20" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Online & Live
            </h3>
            <p className="text-muted-foreground text-lg max-w-sm mb-6">
              Interactive live classes with expert instructors. Real-time feedback and personalized attention.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Medium tile - Competition */}
      <AnimatedSection animation="fade-left" delay={100}>
        <div className="group relative h-full min-h-[200px] bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-3xl p-6 border border-gold/20 overflow-hidden hover:border-gold/40 transition-all duration-500">
          {/* Trophy visual */}
          <div className="absolute -bottom-4 -right-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Trophy className="w-32 h-32 text-gold" strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Monthly Competition
            </h3>
            <p className="text-muted-foreground text-sm">
              Test skills and win prizes in global challenges
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Medium tile - Progress */}
      <AnimatedSection animation="fade-left" delay={200}>
        <div className="group relative h-full min-h-[200px] bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent rounded-3xl p-6 border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-500">
          {/* Mini chart visual */}
          <div className="absolute bottom-4 right-4 flex items-end gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
              <div 
                key={i}
                className="w-3 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t transition-all duration-500"
                style={{ 
                  height: `${h * 0.6}px`,
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Progress Tracking
            </h3>
            <p className="text-muted-foreground text-sm">
              Detailed analytics and growth insights
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Wide tile - Virtual Tools */}
      <AnimatedSection animation="fade-up" delay={300} className="lg:col-span-2">
        <div className="group relative h-full min-h-[160px] bg-gradient-to-r from-rose-500/20 via-orange-500/10 to-transparent rounded-3xl p-6 border border-rose-500/20 overflow-hidden hover:border-rose-500/40 transition-all duration-500 flex items-center">
          {/* Tool icons */}
          <div className="absolute right-8 flex gap-3 opacity-40 group-hover:opacity-70 transition-opacity">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-0.5">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    i % 3 === 0 ? "bg-orange-400" : "bg-white/30"
                  )} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex-1">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Virtual Tools
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Digital abacus platforms and interactive exercises for immersive learning
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BentoFeatures;
