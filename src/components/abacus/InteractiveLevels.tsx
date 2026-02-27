import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Calculator, Sigma, Divide, Percent, Award, Crown,
  ArrowRight, GripVertical
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

const levels = [
  { 
    title: "Foundation Level", 
    ages: "Ages 4-6", 
    badge: "The Counter",
    badgeIcon: Calculator,
    description: "Introduction to abacus basics, number recognition, and simple counting.",
    color: "from-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/20"
  },
  { 
    title: "Basic Operations", 
    ages: "Ages 6-8", 
    badge: "Addition Ace",
    badgeIcon: Sigma,
    description: "Addition and subtraction using abacus techniques.",
    color: "from-cyan-400 to-blue-500",
    bgGlow: "bg-cyan-500/20"
  },
  { 
    title: "Multiplication Mastery", 
    ages: "Ages 8-10", 
    badge: "Multiplication Ninja",
    badgeIcon: Award,
    description: "Advanced multiplication and mental math strategies.",
    color: "from-violet-400 to-purple-500",
    bgGlow: "bg-violet-500/20"
  },
  { 
    title: "Division & Fractions", 
    ages: "Ages 10-12", 
    badge: "Division Master",
    badgeIcon: Divide,
    description: "Complex division and fraction calculations.",
    color: "from-orange-400 to-red-500",
    bgGlow: "bg-orange-500/20"
  },
  { 
    title: "Advanced Techniques", 
    ages: "Ages 12-14", 
    badge: "Decimal Pro",
    badgeIcon: Percent,
    description: "Decimal operations and problem-solving.",
    color: "from-pink-400 to-rose-500",
    bgGlow: "bg-pink-500/20"
  },
  { 
    title: "Mastery Level", 
    ages: "Ages 14+", 
    badge: "Grand Master",
    badgeIcon: Crown,
    description: "Complete mastery for competitive mathematics.",
    color: "from-amber-400 to-yellow-500",
    bgGlow: "bg-amber-500/20"
  },
];

export const InteractiveLevels = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [levelOrder, setLevelOrder] = useState(levels.map((_, i) => i));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setIsDragging(true);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newOrder = [...levelOrder];
    const draggedItem = newOrder[draggedIndex];
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(index, 0, draggedItem);
    setLevelOrder(newOrder);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedIndex(null);
  };

  const activeData = levels[levelOrder[activeLevel]];
  const ActiveIcon = activeData.badgeIcon;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Level Cards Grid */}
      <div 
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12"
      >
        {levelOrder.map((levelIndex, orderIndex) => {
          const level = levels[levelIndex];
          const BadgeIcon = level.badgeIcon;
          const isActive = orderIndex === activeLevel;
          
          return (
            <AnimatedSection
              key={levelIndex}
              animation="pop"
              delay={orderIndex * 50}
            >
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, orderIndex)}
                onDragOver={(e) => handleDragOver(e, orderIndex)}
                onDragEnd={handleDragEnd}
                onClick={() => setActiveLevel(orderIndex)}
                className={cn(
                  "group relative cursor-grab active:cursor-grabbing",
                  "p-4 rounded-2xl border transition-all duration-300",
                  "hover:scale-105 hover:-translate-y-1",
                  isDragging && draggedIndex === orderIndex && "opacity-50 scale-95",
                  isActive 
                    ? "bg-white/15 border-white/30 shadow-lg shadow-white/10" 
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                )}
              >
                {/* Drag handle */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity">
                  <GripVertical className="w-4 h-4 text-white/50" />
                </div>

                {/* Glow effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl",
                  level.bgGlow
                )} />

                {/* Level number */}
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-3 font-bold text-sm transition-all duration-300",
                  isActive 
                    ? `bg-gradient-to-br ${level.color} text-white shadow-lg` 
                    : "bg-white/10 text-white/60 group-hover:bg-white/20"
                )}>
                  {orderIndex + 1}
                </div>

                {/* Badge */}
                <div className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold mb-2 transition-all duration-300",
                  isActive 
                    ? `bg-gradient-to-r ${level.color} text-white` 
                    : "bg-white/10 text-white/70 group-hover:bg-white/20"
                )}>
                  <BadgeIcon className="w-3 h-3" />
                  <span>{level.badge}</span>
                </div>

                {/* Title */}
                <h4 className={cn(
                  "font-display font-bold text-sm leading-tight transition-colors duration-300",
                  isActive ? "text-white" : "text-white/80 group-hover:text-white"
                )}>
                  {level.title}
                </h4>

                {/* Ages */}
                <p className="text-xs text-white/50 mt-1">{level.ages}</p>

                {/* Active indicator */}
                {isActive && (
                  <div className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r",
                    level.color
                  )} />
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Active Level Detail Card */}
      <AnimatedSection animation="fade-up">
        <div className={cn(
          "relative overflow-hidden rounded-3xl p-8 md:p-12",
          "bg-white/5 backdrop-blur-xl border border-white/10",
          "transition-all duration-500"
        )}>
          {/* Background glow */}
          <div className={cn(
            "absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 transition-all duration-700",
            activeData.bgGlow
          )} />
          <div className={cn(
            "absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-700",
            activeData.bgGlow
          )} />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Left - Icon & Badge */}
            <div className="flex-shrink-0">
              <div className={cn(
                "w-24 h-24 rounded-3xl flex items-center justify-center bg-gradient-to-br shadow-2xl",
                activeData.color
              )}>
                <ActiveIcon className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-gradient-to-r",
                activeData.color
              )}>
                <ActiveIcon className="w-4 h-4 text-white" />
                <span className="text-white">{activeData.badge}</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                {activeData.title}
              </h3>
              
              <p className="text-teal font-medium mb-4">{activeData.ages}</p>
              
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl">
                {activeData.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/contact"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300",
                    "bg-gradient-to-r hover:shadow-lg hover:scale-105",
                    activeData.color
                  )}
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-6 py-3 rounded-xl font-medium text-white/80 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-white/10">
            {levelOrder.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveLevel(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === activeLevel 
                    ? `w-8 h-2 bg-gradient-to-r ${activeData.color}` 
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hint text */}
      <p className="text-center text-white/40 text-sm mt-6">
        💡 Drag and drop cards to reorder • Click to explore each level
      </p>
    </div>
  );
};

export default InteractiveLevels;
