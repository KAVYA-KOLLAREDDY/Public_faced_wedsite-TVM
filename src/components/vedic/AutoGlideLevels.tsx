import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Calculator, Divide, Grid3X3, Sigma, Trophy } from 'lucide-react';

interface Level {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const levels: Level[] = [
  {
    id: 1,
    title: "Foundations of Vedic Math",
    subtitle: "Introduction to basic Vedic principles",
    description: "Master the fundamentals of ancient calculation techniques.",
    features: ["Understanding Vedic Sutras", "Fast addition & subtraction", "Digit sums", "Number patterns"],
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Rapid Multiplication",
    subtitle: "Vedic tricks for faster calculations",
    description: "Learn shortcut techniques for lightning-fast multiplication.",
    features: ["2-digit × 2-digit shortcuts", "Vertical & crosswise methods", "Speed drills", "School applications"],
    icon: <Calculator className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Smart Division & Fractions",
    subtitle: "Elegant ways to divide and simplify",
    description: "Master the Nikhilam method and mental fraction work.",
    features: ["Nikhilam division", "Quick remainders", "Mental fractions", "Real-world practice"],
    icon: <Divide className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Squares, Cubes & Roots",
    subtitle: "Complex operations made simple",
    description: "Turn complex calculations into recognizable patterns.",
    features: ["Square shortcuts", "Cube methods", "Root approximation", "Pattern recognition"],
    icon: <Grid3X3 className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Algebra & Advanced Techniques",
    subtitle: "Vedic principles for higher math",
    description: "Apply ancient wisdom to modern algebraic concepts.",
    features: ["Linear equations", "Quadratic solutions", "Advanced tricks", "Word problems"],
    icon: <Sigma className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Mastery & Application",
    subtitle: "Competition-level mathematics",
    description: "Achieve elite performance in competitive math.",
    features: ["Integrated problem-solving", "Timed challenges", "Olympiad prep", "Live competitions"],
    icon: <Trophy className="w-6 h-6" />
  }
];

// Using theme tokens - these map to navy, gold, teal variations
const levelColors = [
  { bg: 'from-accent/20 to-teal-dark/10', border: 'border-accent/30', glow: 'shadow-accent/20', accent: 'text-accent' },
  { bg: 'from-primary/20 to-navy-light/10', border: 'border-primary/30', glow: 'shadow-primary/20', accent: 'text-primary' },
  { bg: 'from-secondary/20 to-gold-dark/10', border: 'border-secondary/30', glow: 'shadow-secondary/20', accent: 'text-secondary' },
  { bg: 'from-accent/20 to-teal-dark/10', border: 'border-accent/30', glow: 'shadow-accent/20', accent: 'text-accent' },
  { bg: 'from-primary/20 to-navy-light/10', border: 'border-primary/30', glow: 'shadow-primary/20', accent: 'text-primary' },
  { bg: 'from-secondary/20 to-gold-dark/10', border: 'border-secondary/30', glow: 'shadow-secondary/20', accent: 'text-secondary' },
];

export const AutoGlideLevels = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  
  const extendedLevels = [...levels, ...levels, ...levels];
  const cardHeight = 220;
  const gap = 16;
  const totalHeight = levels.length * (cardHeight + gap);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        setScrollY(prev => {
          const newY = prev + (deltaTime * 0.02);
          if (newY >= totalHeight) return newY - totalHeight;
          return newY;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, totalHeight]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(var(--navy))] via-[hsl(var(--navy))]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))]/80 to-transparent z-10 pointer-events-none" />

      {/* Center highlight indicator */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[220px] border-y border-secondary/20 pointer-events-none z-5" />

      {/* Scrolling container */}
      <div 
        ref={containerRef}
        className="relative h-[600px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 500)}
      >
        <div 
          className="absolute w-full px-4"
          style={{ transform: `translateY(-${scrollY}px)` }}
        >
          {extendedLevels.map((level, index) => {
            const cardPosition = index * (cardHeight + gap) - scrollY;
            const containerHeight = 600;
            const containerCenter = containerHeight / 2;
            const cardCenter = cardPosition + cardHeight / 2;
            const distanceFromCenter = Math.abs(cardCenter - containerCenter);
            
            const isCenter = distanceFromCenter < cardHeight / 2;
            const normalizedDistance = Math.min(distanceFromCenter / containerCenter, 1);
            
            const opacity = isCenter ? 1 : Math.max(0.4, 1 - normalizedDistance * 0.7);
            const scale = isCenter ? 1.08 : Math.max(0.9, 1 - normalizedDistance * 0.12);
            const colorIndex = (level.id - 1) % levelColors.length;
            const colors = levelColors[colorIndex];

            return (
              <div
                key={`${level.id}-${index}`}
                className="mb-4 transition-all duration-200 ease-out"
                style={{ 
                  opacity, 
                  transform: `scale(${scale})`,
                }}
              >
                {/* Glassmorphism Card */}
                <div 
                  className={`
                    relative p-6 rounded-2xl min-h-[200px]
                    backdrop-blur-xl bg-gradient-to-br ${colors.bg}
                    border ${isCenter ? 'border-secondary/50' : colors.border}
                    transition-all duration-300
                    ${isCenter ? `shadow-2xl shadow-secondary/30` : 'shadow-lg ' + colors.glow}
                  `}
                >
                  {/* Glow effect for center card */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 pointer-events-none" />
                  )}

                  <div className="relative z-10 flex gap-5">
                    {/* Level badge */}
                    <div className="flex-shrink-0">
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-navy-light
                        flex items-center justify-center text-white font-bold text-xl
                        shadow-lg shadow-primary/30
                      `}>
                        {level.id}
                      </div>
                      <div className={`mt-3 p-2 rounded-lg bg-white/5 ${colors.accent}`}>
                        {level.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {level.title}
                      </h3>
                      <p className="text-sm text-secondary/80 mb-2">
                        {level.subtitle}
                      </p>
                      <p className="text-sm text-white/60 mb-3 line-clamp-2">
                        {level.description}
                      </p>
                      
                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {level.features.slice(0, 3).map((feature, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <p className="text-center text-sm text-white/40 mt-4">
        Hover to pause • Touch to explore
      </p>
    </div>
  );
};

export default AutoGlideLevels;