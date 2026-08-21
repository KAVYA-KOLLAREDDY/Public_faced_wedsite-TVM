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
    description:
      "Introduction to abacus with simple addition and subtraction, plus Small and Half Big Friends.",
    skills: [
      "Introduction to abacus",
      "Simple addition and subtraction (3 columns and 4 columns)",
      "Small friends upto 3 columns and 4 columns",
      "Half Big friends upto 3 columns and 4 columns",
    ],
    accentColor: "teal",
  },
  {
    id: 2,
    title: "Level 1",
    subtitle: "Friends Practice",
    description:
      "Half Big Friends, revision of Small and Big Friends, Mixed Friends, and full friends revision.",
    skills: [
      "Half Big friends upto 3 columns and 4 columns",
      "Revision on Small and big friends upto 4 columns and 5 columns",
      "Mixed friends upto 3 columns and 4 columns",
      "Revision on Small, big and mixed friends upto 4 columns and 5 columns",
    ],
    accentColor: "gold",
  },
  {
    id: 3,
    title: "Level 2",
    subtitle: "Digit Expansion",
    description: "Single-digit and double-digit addition and subtraction with multi-column practice.",
    skills: [
      "Single digit addition and subtraction upto 4 columns to 6 columns",
      "Basic double digit addition and subtraction (4 columns)",
      "Double digit sums (4 columns)",
    ],
    accentColor: "teal",
  },
  {
    id: 4,
    title: "Level 3",
    subtitle: "Advanced Addition",
    description:
      "Single and double revision with and without board, plus triple-digit addition and subtraction.",
    skills: [
      "Single double revision for with and without board upto 6 columns",
      "Triple digit addition and subtraction (2 to 4 columns)",
    ],
    accentColor: "gold",
  },
  {
    id: 5,
    title: "Level 4",
    subtitle: "Multiplication Begins",
    description:
      "Higher column work with and without board, and multiplication by a single digit with board.",
    skills: [
      "Single (upto 10 cols), double (upto 7 cols) & triple (upto 4 cols) with and without board",
      "Multiplication: single, double and triple by single with board",
    ],
    accentColor: "teal",
  },
  {
    id: 6,
    title: "Level 5",
    subtitle: "Multi-Digit Mastery",
    description:
      "Extended column work, multiplication with and without board, and simple statement problems.",
    skills: [
      "Single (upto 10 cols without board), double (upto 10) & triple (upto 7) with and without board",
      "Multiplication: single/double/triple × single without board; double × double with board",
      "Simple statement problems in addition and subtraction",
    ],
    accentColor: "gold",
  },
  {
    id: 7,
    title: "Level 6",
    subtitle: "Four-digit & Advanced Multiply",
    description:
      "Four-digit addition and subtraction, 3×3 and 3×2 multiplications, and combination sums.",
    skills: [
      "Four digit addition and subtractions upto 4 columns (with single, double and triple digit)",
      "Multiplications — 3×3, 3×2",
      "Combination of addition and multiplications",
    ],
    accentColor: "teal",
  },
  {
    id: 8,
    title: "Level 7",
    subtitle: "Division & Mixed Mastery",
    description:
      "Four-digit operations, multiplications, combination sums, simple divisions, and statement problems.",
    skills: [
      "Additions and subtractions upto four digit",
      "Multiplications",
      "Combinations sums",
      "Simple divisions",
      "Statement problems",
    ],
    accentColor: "gold",
  },
  {
    id: 9,
    title: "Level 8",
    subtitle: "Decimals Operations",
    description:
      "Decimal addition, subtraction, and multiplication with and without board.",
    skills: [
      "Decimal addition with and without board",
      "Decimal subtraction with and without board",
      "Decimal multiplication with and without board",
    ],
    accentColor: "teal",
  },
  {
    id: 10,
    title: "Level 9",
    subtitle: "Decimal Division & Number Theory",
    description: "Decimal division, LCM, and GCD with and without board.",
    skills: [
      "Decimal division with and without board",
      "LCM with and without board",
      "GCD with and without board",
    ],
    accentColor: "gold",
  },
  {
    id: 11,
    title: "Level 10",
    subtitle: "Percentages & Negatives",
    description:
      "Percentages, decimal multiplication and division, and negative numbers addition and subtraction with and without board.",
    skills: [
      "Percentages with and without board",
      "Decimal multiplication and division with and without board",
      "Negative numbers addition and subtraction with and without board",
    ],
    accentColor: "teal",
  },
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
              py-0
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch px-3 sm:px-4
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            {visibleLevels.map((level, index) => {
              const isVedic = variant === "vedic";
              const compactSyllabus =
                isVedic ||
                level.title === "Level 1" ||
                level.title === "Level 5";

              return (
              <div
                key={`${safePage}-${level.id}`}
                className="relative flex h-full w-full min-h-0 min-w-0"
                style={{
                  transitionDelay: isVisible ? `${Math.min(index, 8) * 60}ms` : '0ms',
                }}
              >
                <div className="flex h-full min-h-0 min-w-0 w-full flex-1 transition-[transform,opacity] duration-500 ease-out hover:-translate-y-0.5">
                <div
                  className={`
                    relative flex w-full min-w-0 flex-col overflow-hidden rounded-2xl
                    border border-gold/40 bg-gradient-to-br from-white/15 to-white/5
                    shadow-xl shadow-gold/15 backdrop-blur-xl transition-all duration-500
                    ${isVedic
                      ? "h-[13.5rem] sm:h-[14.25rem]"
                      : "h-[17.5rem] sm:h-[18.5rem]"
                    }
                  `}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${
                    level.accentColor === 'gold'
                      ? 'from-transparent via-gold to-transparent'
                      : 'from-transparent via-teal to-transparent'
                  }`} />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-teal/10" />

                  <div className="relative z-[1] flex h-full min-h-0 min-w-0 flex-col px-3.5 pb-3 pt-3.5 sm:px-4 sm:pb-3.5 sm:pt-4">
                    <div className="shrink-0 text-center">
                      <h3 className="font-display text-base font-bold leading-none tracking-tight text-white sm:text-lg">
                        {level.title}
                      </h3>
                    </div>

                    <p
                      className={`line-clamp-2 shrink-0 text-left text-xs leading-snug text-white/70 sm:text-sm ${
                        compactSyllabus ? "mt-1.5" : "mt-2.5"
                      }`}
                    >
                      {level.description}
                    </p>

                    <ol
                      className={`min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5 [scrollbar-width:thin] ${
                        compactSyllabus
                          ? "mt-1 space-y-0.5"
                          : "mt-2.5 space-y-1"
                      }`}
                    >
                      {level.skills.map((skill, skillIndex) => (
                        <li
                          key={skill}
                          className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 text-left"
                        >
                          <span
                            className={`pt-px font-mono text-xs font-semibold tabular-nums leading-snug sm:text-[13px] ${
                              level.accentColor === 'gold' ? 'text-gold/75' : 'text-teal/75'
                            }`}
                          >
                            {String(skillIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xs leading-snug text-white/90 sm:text-sm">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <div
                      className={`flex shrink-0 justify-end border-t border-white/10 ${
                        compactSyllabus ? "mt-1.5 pt-1.5" : "mt-2.5 pt-2.5"
                      }`}
                    >
                      <Link
                        to="/contact#contact-form"
                        className={`
                          inline-flex items-center gap-1.5 rounded-md px-3 py-1.5
                          font-sans text-xs font-semibold tracking-tight sm:text-sm
                          transition-all duration-300 hover:scale-[1.02]
                          ${level.accentColor === 'gold'
                            ? 'bg-gold text-navy-dark hover:bg-gold-light'
                            : 'bg-teal text-white hover:bg-teal-light'
                          }
                        `}
                      >
                        Enroll
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              );
            })}
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
