import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Circle, Sparkles, Target, Zap, Trophy, Crown,
  ArrowRight, ChevronLeft, ChevronRight
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
  accentColor: string;
}

// Hook for scroll-triggered animations
const useScrollReveal = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Hook for parallax effect based on scroll position
const useParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from -1 (below viewport) to 1 (above viewport)
      // 0 means the element is centered in the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const progress = (viewportCenter - elementCenter) / (windowHeight / 2);
      
      // Clamp between -1 and 1
      setScrollProgress(Math.max(-1, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, scrollProgress };
};

interface StackedLevelCardsProps {
  variant?: 'abacus' | 'vedic';
}

const abacusLevels: Level[] = [
  {
    id: 1,
    title: "Level 0",
    subtitle: "Introduction to Abacus",
    ageRange: "Beginner",
    description: "Introduction to abacus fundamentals with basic addition and subtraction up to 4 columns.",
    skills: [
      "Abacus basics",
      "Simple addition & subtraction (3–4 columns)",
      "Small & Half Big Friends"
    ],
    icon: <Circle className="w-6 h-6" />,
    accentColor: "teal"
  },
  {
    id: 2,
    title: "Level 1",
    subtitle: "Friends Practice",
    ageRange: "Beginner+",
    description: "Strengthening small, big, and mixed friends with extended column practice.",
    skills: [
      "Half Big Friends",
      "Small, Big & Mixed Friends",
      "Up to 5 columns"
    ],
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 3,
    title: "Level 2",
    subtitle: "Digit Expansion",
    ageRange: "Intermediate",
    description: "Single and double-digit operations up to 6 columns.",
    skills: [
      "Single digit (4–6 columns)",
      "Basic double-digit sums",
      "4-column double-digit practice"
    ],
    icon: <Target className="w-6 h-6" />,
    accentColor: "teal"
  },
  {
    id: 4,
    title: "Level 3",
    subtitle: "Advanced Addition",
    ageRange: "Intermediate+",
    description: "Triple-digit operations and board / non-board practice.",
    skills: [
      "Single & double revision (up to 6 columns)",
      "Triple-digit addition & subtraction",
      "With & without board"
    ],
    icon: <Zap className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 5,
    title: "Level 4",
    subtitle: "Multiplication Begins",
    ageRange: "Advanced",
    description: "Higher column mastery and introduction to multiplication.",
    skills: [
      "Single digit (up to 10 columns)",
      "Double & triple digits",
      "Single-digit multiplication"
    ],
    icon: <Trophy className="w-6 h-6" />,
    accentColor: "teal"
  },
  {
    id: 6,
    title: "Level 5",
    subtitle: "Multi-Digit Mastery",
    ageRange: "Advanced+",
    description: "Multi-digit multiplication and statement problem solving.",
    skills: [
      "Double × double multiplication",
      "Up to 10 columns",
      "Word problems (add & subtract)"
    ],
    icon: <Crown className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 7,
    title: "Level 6–7",
    subtitle: "Comprehensive Operations",
    ageRange: "Expert",
    description: "Four-digit operations, multiplication combinations, and division.",
    skills: [
      "4-digit addition & subtraction",
      "3×3 & 3×2 multiplication",
      "Division & combination sums"
    ],
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: "teal"
  }
];


const vedicLevels: Level[] = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Vedic Basics",
    ageRange: "Ages 8-10",
    description: "Master the fundamentals of ancient Vedic calculation techniques.",
    skills: ["Vedic Sutras", "Fast addition", "Number patterns"],
    icon: <Circle className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 2,
    title: "Rapid Multiply",
    subtitle: "Speed Tricks",
    ageRange: "Ages 9-11",
    description: "Learn shortcut techniques for lightning-fast multiplication.",
    skills: ["2-digit shortcuts", "Crosswise method", "Speed drills"],
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: "teal"
  },
  {
    id: 3,
    title: "Smart Division",
    subtitle: "Elegant Methods",
    ageRange: "Ages 10-12",
    description: "Master the Nikhilam method and mental fraction work.",
    skills: ["Nikhilam division", "Quick remainders", "Mental fractions"],
    icon: <Target className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 4,
    title: "Powers & Roots",
    subtitle: "Pattern Mastery",
    ageRange: "Ages 11-13",
    description: "Turn complex calculations into recognizable patterns.",
    skills: ["Square shortcuts", "Cube methods", "Root estimation"],
    icon: <Zap className="w-6 h-6" />,
    accentColor: "teal"
  },
  {
    id: 5,
    title: "Algebra Pro",
    subtitle: "Advanced Math",
    ageRange: "Ages 12-14",
    description: "Apply ancient wisdom to modern algebraic concepts.",
    skills: ["Linear equations", "Quadratic solutions", "Word problems"],
    icon: <Trophy className="w-6 h-6" />,
    accentColor: "gold"
  },
  {
    id: 6,
    title: "Grand Master",
    subtitle: "Competition Ready",
    ageRange: "Ages 13+",
    description: "Achieve elite performance in competitive mathematics.",
    skills: ["Problem-solving", "Olympiad prep", "Peer mentoring"],
    icon: <Crown className="w-6 h-6" />,
    accentColor: "teal"
  }
];

export const StackedLevelCards: React.FC<StackedLevelCardsProps> = ({ variant = 'abacus' }) => {
  const levels = variant === 'abacus' ? abacusLevels : vedicLevels;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal(0.15);
  const { ref: parallaxRef, scrollProgress } = useParallax();

  // Auto-advance when section is visible
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex(prev => (prev + 1) % levels.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, levels.length]);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % levels.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + levels.length) % levels.length);
  };

  return (
    <div ref={(el) => {
      // Combine both refs
      (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      (parallaxRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    }} className="max-w-5xl mx-auto">
      {/* Main reveal container with staggered animation */}
      <div 
        className={`
          transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
          }
        `}
      >
        <div 
          ref={containerRef}
          className="relative"
        >
          {/* Cards Stack Container */}
          <div 
            className={`
              relative h-[420px] md:h-[380px] perspective-1000 flex items-center justify-center
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            {levels.map((level, index) => {
            const isActive = index === activeIndex;
            if (!isActive) return null;

            const parallaxOffset = scrollProgress * 15;
            const parallaxRotate = scrollProgress;

            return (
              <div
                key={`${level.id}-${activeIndex}`}
                className="absolute w-full max-w-2xl px-4 cursor-pointer"
                style={{
                  animation: `${direction === 1 ? 'levelCardFadeNext' : 'levelCardFadePrev'} 320ms ease-out`,
                }}
              >
                <div
                  className="transition-[transform,opacity] duration-300 ease-out"
                  style={{
                  transform: `translateY(${parallaxOffset}px) scale(1) rotateX(${parallaxRotate}deg)`,
                  opacity: 1,
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                {/* Premium Card */}
                <div 
                  className={`
                    relative rounded-3xl overflow-hidden
                    backdrop-blur-xl border transition-all duration-500
                    bg-gradient-to-br from-white/15 to-white/5 border-gold/40 shadow-2xl shadow-gold/20
                  `}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                    level.accentColor === 'gold' 
                      ? 'from-transparent via-gold to-transparent' 
                      : 'from-transparent via-teal to-transparent'
                  }`} />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-teal/10 pointer-events-none" />

                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left: Level Badge & Icon */}
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                        <div className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center
                          font-display font-bold text-2xl
                          transition-all duration-300
                          ${level.accentColor === 'gold'
                            ? 'bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-lg shadow-gold/30'
                            : 'bg-gradient-to-br from-teal to-teal-light text-white shadow-lg shadow-teal/30'
                          }
                          ${isActive ? 'scale-110' : ''}
                        `}>
                          {level.id}
                        </div>
                        <div className={`
                          p-3 rounded-xl backdrop-blur-sm
                          ${level.accentColor === 'gold' ? 'bg-gold/10 text-gold' : 'bg-teal/10 text-teal'}
                        `}>
                          {level.icon}
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 space-y-4">
                        {/* Header */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                              {level.title}
                            </h3>
                            <span className={`
                              px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                              ${level.accentColor === 'gold' 
                                ? 'bg-gold/20 text-gold border border-gold/30' 
                                : 'bg-teal/20 text-teal border border-teal/30'
                              }
                            `}>
                              {level.ageRange}
                            </span>
                          </div>
                          <p className={`text-sm font-medium ${
                            level.accentColor === 'gold' ? 'text-gold/70' : 'text-teal/70'
                          }`}>
                            {level.subtitle}
                          </p>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                          {level.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {level.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium
                                bg-white/10 text-white/80 border border-white/10
                                hover:bg-white/15 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 animate-fade-in">
                          <Link
                            to="/contact"
                            className={`
                              inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                              font-display font-semibold text-sm
                              transition-all duration-300 hover:scale-105 hover:shadow-lg
                              ${level.accentColor === 'gold'
                                ? 'bg-gold text-navy-dark hover:bg-gold-light hover:shadow-gold/30'
                                : 'bg-teal text-white hover:bg-teal-light hover:shadow-teal/30'
                              }
                            `}
                          >
                            Enroll Now
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
          </div>

          {/* Navigation Arrows */}
          <div 
            className={`
              flex justify-center items-center gap-4 mt-6
              transition-all duration-700 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous level"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Progress Dots */}
            <div className="flex gap-2">
              {levels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === activeIndex 
                    ? 'w-8 bg-gold' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                  }
                `}
                aria-label={`Go to level ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next level"
          >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA with scroll reveal */}
      <div 
        className={`
          mt-12 text-center transition-all duration-700 delay-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
          <div className="text-center sm:text-left">
            <p className="text-white font-display font-bold text-lg">Not sure which level?</p>
            <p className="text-white/50 text-sm">Take our free assessment to find the perfect starting point</p>
          </div>
          <Link
            to="/contact#contact-form"
            className="px-6 py-3 rounded-xl bg-gold text-navy-dark font-display font-bold text-sm hover:bg-gold-light transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-gold/20"
          >
            <Sparkles className="w-4 h-4" />
            Book Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <style>{`
        @keyframes levelCardFadeNext {
          from {
            opacity: 0;
            filter: blur(3px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes levelCardFadePrev {
          from {
            opacity: 0;
            filter: blur(3px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StackedLevelCards;
