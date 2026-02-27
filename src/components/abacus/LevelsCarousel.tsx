import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Circle, Sparkles, Target, Zap, Trophy, Crown,
  Star, ArrowRight, Rocket
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface Level {
  id: number;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
}

const levels: Level[] = [
  {
    id: 1,
    title: "Foundation",
    subtitle: "Building Blocks",
    ageRange: "Ages 4-6",
    description: "Introduction to abacus beads and basic number recognition through play-based learning.",
    skills: ["Number recognition 1-99", "Bead manipulation", "Simple addition"],
    icon: <Circle className="w-5 h-5" />,
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: 2,
    title: "Elementary",
    subtitle: "Growing Strong",
    ageRange: "Ages 5-7",
    description: "Developing speed and accuracy with two-digit calculations and mental math foundations.",
    skills: ["Addition & subtraction", "Two-digit operations", "Speed building"],
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "from-blue-400 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.4)"
  },
  {
    id: 3,
    title: "Intermediate",
    subtitle: "Skill Building",
    ageRange: "Ages 6-9",
    description: "Mastering multiplication concepts and transitioning to visualization techniques.",
    skills: ["Multiplication basics", "Mental visualization", "3-digit calculations"],
    icon: <Target className="w-5 h-5" />,
    gradient: "from-violet-400 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.4)"
  },
  {
    id: 4,
    title: "Advanced",
    subtitle: "Mental Math",
    ageRange: "Ages 8-11",
    description: "Complex calculations performed entirely in the mind with speed and precision.",
    skills: ["Division mastery", "Mental abacus", "4-digit operations"],
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.4)"
  },
  {
    id: 5,
    title: "Expert",
    subtitle: "Speed Champion",
    ageRange: "Ages 10-14",
    description: "Competition-level calculations with lightning speed and perfect accuracy.",
    skills: ["Speed competitions", "Complex problems", "5+ digit mastery"],
    icon: <Trophy className="w-5 h-5" />,
    gradient: "from-rose-400 to-pink-500",
    glowColor: "rgba(244, 63, 94, 0.4)"
  },
  {
    id: 6,
    title: "Grand Master",
    subtitle: "Ultimate Mastery",
    ageRange: "Ages 12+",
    description: "Elite level performance with instant mental calculations and teaching capability.",
    skills: ["Instant calculations", "Advanced formulas", "Peer mentoring"],
    icon: <Crown className="w-5 h-5" />,
    gradient: "from-yellow-400 to-amber-500",
    glowColor: "rgba(234, 179, 8, 0.4)"
  }
];

// Background particle component
const BackgroundParticle = ({ 
  size, 
  left, 
  delay, 
  duration, 
  shape 
}: { 
  size: number; 
  left: number; 
  delay: number; 
  duration: number; 
  shape: 'circle' | 'square';
}) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: `${left}%`,
      width: size,
      height: size,
      animation: `floatDownParticle ${duration}s linear ${delay}s infinite`,
      opacity: 0.15,
    }}
  >
    {shape === 'circle' ? (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/40 to-teal/40" />
    ) : (
      <div className="w-full h-full rotate-45 bg-gradient-to-br from-teal/40 to-gold/40 rounded-sm" />
    )}
  </div>
);

export const LevelsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  
  // Triple levels for seamless loop
  const extendedLevels = [...levels, ...levels, ...levels];
  const cardHeight = 200; // Card height including gap
  const totalHeight = levels.length * cardHeight;
  const containerHeight = 520;

  const animate = useCallback((currentTime: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    if (!isPaused) {
      setScrollY(prev => {
        const newY = prev + (deltaTime * 0.025);
        return newY >= totalHeight ? newY - totalHeight : newY;
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, totalHeight]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  // Get center card index
  const getCenterIndex = () => {
    const centerOffset = containerHeight / 2;
    const adjustedScroll = scrollY + centerOffset - cardHeight / 2;
    return Math.floor(adjustedScroll / cardHeight) % levels.length;
  };

  const centerIndex = getCenterIndex();

  // Generate particles (moving opposite direction - downward)
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 15,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 18,
    shape: Math.random() > 0.5 ? 'circle' : 'square' as 'circle' | 'square'
  }));

  // Touch handling for mobile flick
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const delta = touchStartY.current - currentY;
    setScrollY(prev => {
      let newY = prev + delta * 0.8;
      if (newY < 0) newY += totalHeight;
      if (newY >= totalHeight) newY -= totalHeight;
      return newY;
    });
    touchStartY.current = currentY;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 800);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-amber-400 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-teal-light text-sm font-medium">Your child's learning journey</p>
            <h3 className="text-white font-display text-lg font-bold">Watch levels flow by</h3>
          </div>
        </div>
        
        <Link 
          to="/contact"
          className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-gold to-amber-400 text-navy font-bold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-4 h-4" />
          Book Free Assessment
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Main infinite scroll container */}
      <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10">
        {/* Background particles (moving opposite to cards) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(particle => (
            <BackgroundParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy/90 via-navy/60 to-transparent z-20 pointer-events-none rounded-t-3xl" />
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent z-20 pointer-events-none rounded-b-3xl" />

        {/* Center spotlight indicator */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent z-30 pointer-events-none rounded-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent z-30 pointer-events-none rounded-full" />

        {/* Scrolling track */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden mx-auto max-w-2xl"
          style={{ height: containerHeight }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="absolute w-full px-2"
            style={{ transform: `translateY(-${scrollY}px)` }}
          >
            {extendedLevels.map((level, index) => {
              const actualIndex = index % levels.length;
              const isCenter = actualIndex === centerIndex;
              const distanceFromCenter = Math.abs(actualIndex - centerIndex);
              const adjustedDistance = Math.min(distanceFromCenter, levels.length - distanceFromCenter);
              
              // 3D cylindrical effect
              const opacity = isCenter ? 1 : Math.max(0.35, 1 - adjustedDistance * 0.25);
              const scale = isCenter ? 1.08 : Math.max(0.88, 1 - adjustedDistance * 0.07);
              const blur = isCenter ? 0 : adjustedDistance * 1.5;

              return (
                <div
                  key={`${level.id}-${index}`}
                  className="mb-5 transition-all duration-300 ease-out"
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                  }}
                >
                  {/* Glassmorphic Card */}
                  <div 
                    className={`
                      relative p-5 md:p-6 rounded-2xl
                      backdrop-blur-xl bg-white/10
                      border border-white/20
                      transition-all duration-300
                      ${isCenter ? 'shadow-2xl ring-2 ring-gold/40' : 'shadow-lg'}
                    `}
                    style={{
                      boxShadow: isCenter ? `0 0 40px ${level.glowColor}` : undefined
                    }}
                  >
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${level.gradient}`} />
                    
                    <div className="flex items-center gap-4 md:gap-5">
                      {/* Level badge with floating icon */}
                      <div className="relative flex-shrink-0">
                        <div className={`
                          w-14 h-14 md:w-16 md:h-16 rounded-xl
                          bg-gradient-to-br ${level.gradient}
                          flex items-center justify-center
                          shadow-lg transition-transform duration-300
                          ${isCenter ? 'scale-110' : ''}
                        `}>
                          <span className="text-xl md:text-2xl font-bold text-white font-display">
                            {level.id}
                          </span>
                        </div>
                        {/* Floating 3D icon */}
                        <div className={`
                          absolute -top-1.5 -right-1.5 p-1.5 rounded-lg
                          bg-gradient-to-br ${level.gradient}
                          text-white shadow-md
                          ${isCenter ? 'animate-bounce' : ''}
                        `}>
                          {level.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg md:text-xl font-bold text-white font-display truncate">
                            {level.title}
                          </h3>
                          <span className={`
                            px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide
                            bg-gradient-to-r ${level.gradient} text-white
                            flex-shrink-0
                          `}>
                            {level.ageRange}
                          </span>
                        </div>
                        <p className="text-xs text-gold/80 font-medium mb-1.5">{level.subtitle}</p>
                        <p className="text-xs md:text-sm text-white/60 line-clamp-1">
                          {level.description}
                        </p>
                        
                        {/* Skills row - only on center card */}
                        {isCenter && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5 animate-fade-in">
                            {level.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded-full text-[10px]
                                  bg-white/10 border border-white/10
                                  text-white/70"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* CTA - only on center card */}
                      {isCenter && (
                        <Link
                          to="/contact"
                          className={`
                            flex flex-shrink-0 px-4 py-2 rounded-xl
                            bg-gradient-to-r ${level.gradient}
                            text-white text-xs font-bold
                            items-center gap-1.5 hover:scale-105 transition-transform
                            shadow-lg
                          `}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enroll
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                    {/* Center glow overlay */}
                    {isCenter && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 via-transparent to-gold/5 pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interaction hint */}
        <div className="relative z-30 text-center mt-6">
          <p className="text-xs text-white/40 flex items-center justify-center gap-2">
            <Star className="w-3 h-3 text-gold/60" />
            Hover to pause • Touch to explore
            <Star className="w-3 h-3 text-gold/60" />
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <AnimatedSection animation="fade-up" delay={300} className="mt-10 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-amber-400 flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Not sure which level?</p>
              <p className="text-white/50 text-xs">Take our free assessment to find the perfect start</p>
            </div>
          </div>
          <Link
            to="/contact#contact-form"
            className="px-5 py-2.5 rounded-xl bg-white text-navy font-bold text-sm hover:bg-gold transition-colors duration-300 flex items-center gap-2"
          >
            Book Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes floatDownParticle {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.15;
          }
          95% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(600px) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LevelsCarousel;
