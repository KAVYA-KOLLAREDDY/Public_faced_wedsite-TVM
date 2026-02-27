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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {features.map((feature, index) => {
        const sizeClasses = {
          large: "md:col-span-2 md:row-span-2",
          medium: "md:col-span-2",
          small: "md:col-span-1"
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
                group relative h-full min-h-[200px] p-6 rounded-2xl overflow-hidden
                bg-card/50 backdrop-blur-sm
                border border-transparent hover:border-gold/30
                transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
              `}
              style={{
                background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card))/0.8 100%)`,
                boxShadow: '0 0 0 1px hsl(var(--gold) / 0.1), 0 4px 20px -5px hsl(var(--gold) / 0.1)'
              }}
            >
              {/* Gradient border effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--navy) / 0.15) 0%, hsl(var(--gold) / 0.15) 100%)`,
                  padding: '1px',
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div 
                  className={`
                    w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient}
                    flex items-center justify-center mb-4
                    shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                  `}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm flex-1">
                  {feature.description}
                </p>

                {feature.size === "large" && (
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">4.9 Rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">2-3 months/level</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-gold/10 to-teal/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default VedicBentoGrid;