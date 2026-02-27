import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Circle, Sparkles, Target, Zap, Trophy, Crown, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface Level {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const levels: Level[] = [
  {
    id: 1,
    title: "Foundation",
    ageRange: "Ages 4-6",
    description: "Introduction to abacus beads and basic number recognition.",
    skills: ["Number recognition", "Bead manipulation", "Counting 1-100"],
    icon: <Circle className="w-5 h-5" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    id: 2,
    title: "Elementary",
    ageRange: "Ages 5-7",
    description: "Developing speed with two-digit calculations.",
    skills: ["Addition basics", "Subtraction", "Speed drills"],
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 3,
    title: "Intermediate",
    ageRange: "Ages 6-9",
    description: "Mastering multiplication and visualization techniques.",
    skills: ["Multiplication", "Mental imagery", "3-digit numbers"],
    icon: <Target className="w-5 h-5" />,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10"
  },
  {
    id: 4,
    title: "Advanced",
    ageRange: "Ages 8-11",
    description: "Complex calculations performed entirely in the mind.",
    skills: ["Division", "Mental abacus", "Competition prep"],
    icon: <Zap className="w-5 h-5" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    id: 5,
    title: "Expert",
    ageRange: "Ages 10-14",
    description: "Competition-level calculations with speed and accuracy.",
    skills: ["Flash anzan", "Multi-digit ops", "Speed mastery"],
    icon: <Trophy className="w-5 h-5" />,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10"
  },
  {
    id: 6,
    title: "Grand Master",
    ageRange: "Ages 12+",
    description: "Elite performance with instant mental calculations.",
    skills: ["Instant recall", "Complex operations", "Teaching ability"],
    icon: <Crown className="w-5 h-5" />,
    color: "text-gold",
    bgColor: "bg-gold/10"
  }
];

export const LevelsGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Grid of levels */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level, index) => (
          <AnimatedSection key={level.id} delay={index * 80} animation="slide-up">
            <div
              className={`
                group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm
                border border-white/10 hover:border-white/25
                transition-all duration-300 hover:-translate-y-1
                ${hoveredId === level.id ? 'shadow-xl shadow-white/5' : ''}
              `}
              onMouseEnter={() => setHoveredId(level.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Level number badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`
                  w-10 h-10 rounded-xl ${level.bgColor} ${level.color}
                  flex items-center justify-center font-bold text-lg
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {level.id}
                </div>
                <span className={`${level.bgColor} ${level.color} p-2 rounded-lg`}>
                  {level.icon}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-gold transition-colors duration-300">
                    {level.title}
                  </h3>
                  <span className="text-xs text-white/50 px-2 py-0.5 bg-white/5 rounded-full">
                    {level.ageRange}
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  {level.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {level.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-white/40 px-2 py-1 bg-white/5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none
                bg-gradient-to-br from-white/5 via-transparent to-transparent
              `} />
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA */}
      <AnimatedSection delay={500} className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark font-display font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20 group"
        >
          Book Free Assessment
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="text-white/40 text-sm mt-4">
          Not sure which level? We'll help you find the right starting point.
        </p>
      </AnimatedSection>
    </div>
  );
};

export default LevelsGrid;
