import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Calculator, Sigma, Divide, Percent, Award, Crown,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const levels = [
  { 
    title: "Foundation Level", 
    ages: "Ages 4-6", 
    badge: "The Counter",
    badgeIcon: Calculator,
    description: "Introduction to abacus basics, number recognition, and simple counting.",
    color: "from-emerald-400 to-teal-500"
  },
  { 
    title: "Basic Operations", 
    ages: "Ages 6-8", 
    badge: "Addition Ace",
    badgeIcon: Sigma,
    description: "Addition and subtraction using abacus techniques.",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    title: "Multiplication Mastery", 
    ages: "Ages 8-10", 
    badge: "Multiplication Ninja",
    badgeIcon: Award,
    description: "Advanced multiplication and mental math strategies.",
    color: "from-violet-400 to-purple-500"
  },
  { 
    title: "Division & Fractions", 
    ages: "Ages 10-12", 
    badge: "Division Master",
    badgeIcon: Divide,
    description: "Complex division and fraction calculations.",
    color: "from-orange-400 to-red-500"
  },
  { 
    title: "Advanced Techniques", 
    ages: "Ages 12-14", 
    badge: "Decimal Pro",
    badgeIcon: Percent,
    description: "Decimal operations and problem-solving.",
    color: "from-pink-400 to-rose-500"
  },
  { 
    title: "Mastery Level", 
    ages: "Ages 14+", 
    badge: "Grand Master",
    badgeIcon: Crown,
    description: "Complete mastery for competitive mathematics.",
    color: "from-amber-400 to-yellow-500"
  },
];

export const LearningPath = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleLevels, setVisibleLevels] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress through the section
      const start = windowHeight * 0.8;
      const end = -elementHeight + windowHeight * 0.2;
      const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end)));
      
      setScrollProgress(progress);

      // Determine which levels should be visible
      const levelVisibility = levels.map((_, index) => {
        const levelThreshold = index / levels.length;
        return progress >= levelThreshold * 0.8;
      });
      
      setVisibleLevels(
        levelVisibility.reduce((acc, visible, i) => visible ? [...acc, i] : acc, [] as number[])
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Glowing center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-muted to-transparent">
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gold via-teal to-gold rounded-full transition-all duration-700"
          style={{ 
            height: `${scrollProgress * 100}%`,
            boxShadow: '0 0 20px hsl(var(--gold) / 0.6), 0 0 40px hsl(var(--teal) / 0.4)'
          }}
        />
      </div>

      {/* Level cards in zig-zag */}
      <div className="space-y-8 md:space-y-4">
        {levels.map((level, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleLevels.includes(index);
          const BadgeIcon = level.badgeIcon;
          
          return (
            <div
              key={level.title}
              className={cn(
                "flex items-center gap-4 md:gap-8",
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Card */}
              <div 
                className={cn(
                  "flex-1 transition-all duration-700 ease-out",
                  isVisible 
                    ? "opacity-100 translate-x-0" 
                    : isLeft 
                      ? "opacity-0 -translate-x-12" 
                      : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                  
                  {/* Badge */}
                  <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-gradient-to-r",
                    level.color
                  )}>
                    <BadgeIcon className="w-3.5 h-3.5" />
                    <span className="text-white">{level.badge}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 relative">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-teal">{level.ages}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-gold transition-colors">
                        {level.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                    <Link 
                      to="/contact" 
                      className="text-sm font-medium text-gold hover:text-gold-light transition-colors flex items-center gap-1"
                    >
                      Enroll <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Center node */}
              <div 
                className={cn(
                  "relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500",
                  isVisible 
                    ? "bg-gradient-to-br from-gold to-teal text-navy-dark scale-100 shadow-[0_0_30px_hsl(var(--gold)/0.5)]" 
                    : "bg-muted text-muted-foreground scale-75"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {index + 1}
              </div>

              {/* Spacer for zig-zag */}
              <div className="flex-1 min-h-[1px] min-w-[2px] bg-muted-foreground/30 rounded-full mx-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
