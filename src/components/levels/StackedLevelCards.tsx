import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const LEVELS_PAGE_SIZE = 6;

interface Level {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
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

interface StackedLevelCardsProps {
  variant?: 'abacus' | 'vedic';
}

const abacusLevels: Level[] = [
  {
    id: 1,
    title: "Level 0",
    subtitle: "Introduction to Abacus",
    description: "Introduction to abacus fundamentals with basic addition and subtraction up to 4 columns.",
    skills: [
      "Abacus basics",
      "Simple addition & subtraction (3–4 columns)",
      "Small & Half Big Friends"
    ],
    accentColor: "teal"
  },
  {
    id: 2,
    title: "Level 1",
    subtitle: "Friends Practice",
    description: "Strengthening small, big, and mixed friends with extended column practice.",
    skills: [
      "Half Big Friends",
      "Small, Big & Mixed Friends",
      "Up to 5 columns"
    ],
    accentColor: "gold"
  },
  {
    id: 3,
    title: "Level 2",
    subtitle: "Digit Expansion",
    description: "Single and double-digit operations up to 6 columns.",
    skills: [
      "Single digit (4–6 columns)",
      "Basic double-digit sums",
      "4-column double-digit practice"
    ],
    accentColor: "teal"
  },
  {
    id: 4,
    title: "Level 3",
    subtitle: "Advanced Addition",
    description: "Triple-digit operations and board / non-board practice.",
    skills: [
      "Single & double revision (up to 6 columns)",
      "Triple-digit addition & subtraction",
      "With & without board"
    ],
    accentColor: "gold"
  },
  {
    id: 5,
    title: "Level 4",
    subtitle: "Multiplication Begins",
    description: "Higher column mastery and introduction to multiplication.",
    skills: [
      "Single digit (up to 10 columns)",
      "Double & triple digits",
      "Single-digit multiplication"
    ],
    accentColor: "teal"
  },
  {
    id: 6,
    title: "Level 5",
    subtitle: "Multi-Digit Mastery",
    description: "Multi-digit multiplication and statement problem solving.",
    skills: [
      "Double × double multiplication",
      "Up to 10 columns",
      "Word problems (add & subtract)"
    ],
    accentColor: "gold"
  },
  {
    id: 7,
    title: "Level 6",
    subtitle: "Four-digit & advanced multiply",
    description: "Four-digit operations and larger multiplication combinations with strong column discipline.",
    skills: [
      "4-digit addition & subtraction",
      "3×3 & 3×2 multiplication",
      "Combination sums"
    ],
    accentColor: "teal"
  },
  {
    id: 8,
    title: "Level 7",
    subtitle: "Division & mixed mastery",
    description: "Division fluency alongside mixed operations and longer mental chains.",
    skills: [
      "Division routines",
      "Mixed operation sets",
      "Longer column chains"
    ],
    accentColor: "gold"
  },
  {
    id: 9,
    title: "Level 8",
    subtitle: "Speed & accuracy",
    description: "Timed sets and error-free execution at higher difficulty—tighten accuracy under pressure.",
    skills: ["Timed drills", "Error review", "Consistency goals"],
    accentColor: "teal"
  },
  {
    id: 10,
    title: "Level 9",
    subtitle: "Competition prep",
    description: "Competition-style formats, pacing, and problem sets that mirror event conditions.",
    skills: ["Event pacing", "Problem banks", "Mock rounds"],
    accentColor: "gold"
  },
  {
    id: 11,
    title: "Level 10",
    subtitle: "Mental transfer",
    description: "Transfer abacus imagery to mental calculation with increasingly abstract prompts.",
    skills: ["Image-based solving", "No-board sets", "Visualization drills"],
    accentColor: "teal"
  },
  {
    id: 12,
    title: "Level 11",
    subtitle: "Capstone",
    description: "Capstone practice integrating the full skill stack—review, refine, and perform at peak level.",
    skills: ["Integrated review", "Peak difficulty sets", "Performance polish"],
    accentColor: "gold"
  }
];


const vedicLevels: Level[] = [
  {
    id: 1,
    title: "Level 0",
    subtitle: "Vedic Basics",
    description: "Master the fundamentals of ancient Vedic calculation techniques.",
    skills: ["Vedic Sutras", "Fast addition", "Number patterns"],
    accentColor: "gold"
  },
  {
    id: 2,
    title: "Level 1",
    subtitle: "Speed Tricks",
    description: "Learn shortcut techniques for lightning-fast multiplication.",
    skills: ["2-digit shortcuts", "Crosswise method", "Speed drills"],
    accentColor: "teal"
  },
  {
    id: 3,
    title: "Level 2",
    subtitle: "Elegant Methods",
    description: "Master the Nikhilam method and mental fraction work.",
    skills: ["Nikhilam division", "Quick remainders", "Mental fractions"],
    accentColor: "gold"
  },
  {
    id: 4,
    title: "Level 3",
    subtitle: "Pattern Mastery",
    description: "Turn complex calculations into recognizable patterns.",
    skills: ["Square shortcuts", "Cube methods", "Root estimation"],
    accentColor: "teal"
  },
  {
    id: 5,
    title: "Level 4",
    subtitle: "Advanced Math",
    description: "Apply ancient wisdom to modern algebraic concepts.",
    skills: ["Linear equations", "Quadratic solutions", "Word problems"],
    accentColor: "gold"
  },
  {
    id: 6,
    title: "Level 5",
    subtitle: "Competition Ready",
    description: "Achieve elite performance in competitive mathematics.",
    skills: ["Problem-solving", "Olympiad prep", "Peer mentoring"],
    accentColor: "teal"
  }
];

export const StackedLevelCards: React.FC<StackedLevelCardsProps> = ({ variant = 'abacus' }) => {
  const levels = variant === 'abacus' ? abacusLevels : vedicLevels;
  const [page, setPage] = useState(0);
  const { ref: revealRef, isVisible } = useScrollReveal(0.15);

  const totalPages = Math.max(1, Math.ceil(levels.length / LEVELS_PAGE_SIZE));
  const safePage = Math.min(Math.max(0, page), totalPages - 1);
  const visibleLevels = levels.slice(
    safePage * LEVELS_PAGE_SIZE,
    safePage * LEVELS_PAGE_SIZE + LEVELS_PAGE_SIZE
  );

  useEffect(() => {
    setPage(0);
  }, [variant]);

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  return (
    <div ref={revealRef} className="max-w-7xl mx-auto pb-20 sm:pb-16 md:pb-6 lg:pb-4">
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
        <div className="relative">
          <div 
            className={`
              relative z-[1] w-full
              py-2 sm:py-3
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch px-3 sm:px-4
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            {visibleLevels.map((level, index) => (
              <div
                key={`${safePage}-${level.id}`}
                className="relative flex w-full min-w-0 min-h-0 h-full"
                style={{
                  transitionDelay: isVisible ? `${Math.min(index, 8) * 60}ms` : '0ms',
                }}
              >
                <div className="flex flex-1 min-h-0 min-w-0 transition-[transform,opacity] duration-500 ease-out hover:-translate-y-0.5">
                {/* Premium Card */}
                <div 
                  className={`
                    relative flex flex-col flex-1 min-h-0 min-w-0 w-full rounded-2xl overflow-hidden
                    backdrop-blur-xl border transition-all duration-500
                    bg-gradient-to-br from-white/15 to-white/5 border-gold/40 shadow-xl shadow-gold/15
                  `}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${
                    level.accentColor === 'gold' 
                      ? 'from-transparent via-gold to-transparent' 
                      : 'from-transparent via-teal to-transparent'
                  }`} />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-teal/10 pointer-events-none" />

                  <div className="relative z-[1] flex min-h-0 min-w-0 flex-1 flex-col p-3 sm:p-4">
                      {/* No flex-1 on body: avoids a tall empty band above the footer in stretched grid cells */}
                      <div className="flex min-w-0 flex-col gap-1 font-sans antialiased sm:gap-1.5">
                        <div className="w-full shrink-0">
                          <h3 className="text-center font-display text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
                            {level.title}
                          </h3>
                          <p
                            className={`mt-0.5 line-clamp-2 text-left text-xs font-medium leading-snug tracking-normal sm:text-[13px] ${
                              level.accentColor === 'gold' ? 'text-gold/80' : 'text-teal/80'
                            }`}
                          >
                            {level.subtitle}
                          </p>
                        </div>

                        <p className="line-clamp-2 text-left text-sm leading-snug tracking-normal text-white/75">
                          {level.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {level.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[11px] font-medium leading-snug tracking-normal text-white/85
                                hover:bg-white/15 sm:px-2 sm:text-xs
                                transition-colors break-words"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex shrink-0 justify-end pt-2 sm:pt-2.5">
                        <Link
                          to="/contact#contact-form"
                          className={`
                            inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5
                            font-sans text-xs font-semibold tracking-tight
                            transition-all duration-300 hover:scale-[1.02] hover:shadow-md
                            ${level.accentColor === 'gold'
                              ? 'bg-gold text-navy-dark hover:bg-gold-light hover:shadow-gold/30'
                              : 'bg-teal text-white hover:bg-teal-light hover:shadow-teal/30'
                            }
                          `}
                        >
                          Enroll
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div
              className={`
                relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-3
                transition-all duration-700 delay-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <button
                type="button"
                onClick={() =>
                  setPage((p) => Math.max(0, Math.min(p, totalPages - 1) - 1))
                }
                disabled={safePage <= 0}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100"
                aria-label="Previous page of levels"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/60 text-xs sm:text-sm font-medium tabular-nums">
                  {safePage + 1} / {totalPages}
                </span>
                <div className="flex gap-1.5" role="tablist" aria-label="Level pages">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === safePage}
                      aria-label={`Levels page ${i + 1}`}
                      onClick={() => setPage(i)}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${i === safePage ? 'w-7 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'}
                      `}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setPage((p) =>
                    Math.min(totalPages - 1, Math.min(p, totalPages - 1) + 1)
                  )
                }
                disabled={safePage >= totalPages - 1}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100"
                aria-label="Next page of levels"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
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
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StackedLevelCards;
