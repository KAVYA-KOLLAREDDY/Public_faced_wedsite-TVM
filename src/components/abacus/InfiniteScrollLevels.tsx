import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Target, Zap, Trophy, Crown, Circle } from 'lucide-react';

interface Level {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const levels: Level[] = [
  {
    id: 1,
    title: "Foundation",
    ageRange: "Ages 4-6",
    description: "Introduction to abacus beads and basic number recognition.",
    icon: <Circle className="w-5 h-5" />,
    color: "bg-emerald-500"
  },
  {
    id: 2,
    title: "Elementary",
    ageRange: "Ages 5-7",
    description: "Developing speed with two-digit calculations.",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Intermediate",
    ageRange: "Ages 6-9",
    description: "Mastering multiplication and visualization techniques.",
    icon: <Target className="w-5 h-5" />,
    color: "bg-violet-500"
  },
  {
    id: 4,
    title: "Advanced",
    ageRange: "Ages 8-11",
    description: "Complex calculations performed entirely in the mind.",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-amber-500"
  },
  {
    id: 5,
    title: "Expert",
    ageRange: "Ages 10-14",
    description: "Competition-level calculations with speed and accuracy.",
    icon: <Trophy className="w-5 h-5" />,
    color: "bg-rose-500"
  },
  {
    id: 6,
    title: "Grand Master",
    ageRange: "Ages 12+",
    description: "Elite performance with instant mental calculations.",
    icon: <Crown className="w-5 h-5" />,
    color: "bg-yellow-500"
  }
];

export const InfiniteScrollLevels = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  
  const extendedLevels = [...levels, ...levels, ...levels];
  const cardHeight = 180;
  const totalHeight = levels.length * cardHeight;

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        setScrollY(prev => {
          const newY = prev + (deltaTime * 0.025);
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

  const getCenterIndex = () => {
    const containerHeight = containerRef.current?.clientHeight || 500;
    const centerOffset = containerHeight / 2 - cardHeight / 2;
    const adjustedScroll = scrollY + centerOffset;
    return Math.floor(adjustedScroll / cardHeight) % levels.length;
  };

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setTimeout(() => setIsPaused(false), 300);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Fade overlays */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div 
        ref={containerRef}
        className="relative h-[500px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="absolute w-full px-4"
          style={{ transform: `translateY(-${scrollY}px)` }}
        >
          {extendedLevels.map((level, index) => {
            const cardPosition = index * cardHeight - scrollY;
            const containerHeight = containerRef.current?.clientHeight || 500;
            const containerCenter = containerHeight / 2;
            const cardCenter = cardPosition + cardHeight / 2;
            const distanceFromCenter = Math.abs(cardCenter - containerCenter);
            
            const isCenter = distanceFromCenter < cardHeight / 2;
            const normalizedDistance = Math.min(distanceFromCenter / containerCenter, 1);
            
            const opacity = isCenter ? 1 : Math.max(0.4, 1 - normalizedDistance * 0.6);
            const scale = isCenter ? 1.05 : Math.max(0.92, 1 - normalizedDistance * 0.1);

            return (
              <div
                key={`${level.id}-${index}`}
                className="mb-4 transition-all duration-150"
                style={{ opacity, transform: `scale(${scale})` }}
              >
                <div 
                  className={`
                    relative p-6 rounded-2xl min-h-[160px]
                    bg-card border border-border
                    transition-all duration-300
                    ${isCenter ? 'shadow-xl border-primary/40 bg-card/95' : 'shadow-sm'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Level badge */}
                    <div className={`
                      w-12 h-12 rounded-xl ${level.color}
                      flex items-center justify-center text-white font-bold text-lg
                      shadow-md
                    `}>
                      {level.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {level.title}
                        </h3>
                        <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                          {level.ageRange}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {level.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className={`p-2 rounded-lg ${level.color}/10 text-${level.color.replace('bg-', '')}`}>
                      {level.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <p className="text-center text-xs text-muted-foreground mt-3">
        Hover to pause • Swipe to explore
      </p>
    </div>
  );
};

export default InfiniteScrollLevels;
