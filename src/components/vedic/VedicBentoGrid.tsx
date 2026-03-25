import React from 'react';
import { Award, Video, Zap, Heart, BookOpen, Users, Clock, Star } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const features = [
  {
    icon: Award,
    title: "Government-Certified Curriculum",
    description: "Our program follows officially recognized Vedic Math curriculum standards.",
    size: "large",
    gradient: "from-navy to-navy-light"
  },
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Real-time learning with expert instructors.",
    size: "small",
    gradient: "from-gold to-gold-dark"
  },
  {
    icon: Zap,
    title: "Boosts Speed & Accuracy",
    description: "Lightning-fast calculation skills.",
    size: "small",
    gradient: "from-teal to-teal-dark"
  },
  {
    icon: Heart,
    title: "Transforms Math Anxiety into Confidence",
    description: "Builds confidence and makes math enjoyable through ancient techniques that simplify complex problems.",
    size: "large",
    gradient: "from-gold to-gold-light"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description: "Weekly practice sheets and digital resources.",
    size: "medium",
    gradient: "from-teal to-teal-light"
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personalized attention for every student.",
    size: "medium",
    gradient: "from-navy to-navy-dark"
  }
];

export const VedicBentoGrid = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[minmax(17rem,auto)]">
      {features.map((feature, index) => {
        const sizeClasses = {
          large: "h-full md:col-span-2 md:row-span-2",
          medium: "h-full md:col-span-2",
          small: "h-full md:col-span-1",
        };

        return (
          <AnimatedSection
            key={feature.title}
            delay={index * 100}
            animation="fade-up"
            className={sizeClasses[feature.size as keyof typeof sizeClasses]}
          >
            <div
              className={`
                group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-2xl
                border border-transparent bg-card/50 p-6 backdrop-blur-sm transition-all duration-500
                hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl md:min-h-0
              `}
              style={{
                background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card))/0.8 100%)`,
                boxShadow:
                  "0 0 0 1px hsl(var(--gold) / 0.1), 0 4px 20px -5px hsl(var(--gold) / 0.1)",
              }}
            >
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--navy) / 0.15) 0%, hsl(var(--gold) / 0.15) 100%)`,
                  padding: "1px",
                }}
              />

              {/* Content — fixed rhythm: icon → title → body → optional footer */}
              <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                <div
                  className={`
                    mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}
                    shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                  `}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 shrink-0 font-display text-lg font-bold text-foreground transition-colors group-hover:text-gold sm:text-xl">
                  {feature.title}
                </h3>

                <p className="min-h-[3.25rem] flex-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {feature.size === "large" && (
                  <div className="mt-auto flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 pt-4">
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">4.9 Rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span className="text-sm">2-3 months/level</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative corner accent */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold/10 to-teal/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default VedicBentoGrid;