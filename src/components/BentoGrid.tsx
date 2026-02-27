import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";
import { LucideIcon } from "lucide-react";

interface BentoItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  size?: "small" | "medium" | "large";
  variant?: "default" | "highlight" | "subtle";
  className?: string;
}

export const BentoItem = ({
  title,
  description,
  icon: Icon,
  size = "small",
  variant = "default",
  className,
}: BentoItemProps) => {
  const sizeClasses = {
    small: "p-6",
    medium: "p-8",
    large: "p-10",
  };

  const variantClasses = {
    default: "bg-card hover:bg-card/80",
    highlight: "bg-gradient-to-br from-vedic-gold/10 to-vedic-teal/10 hover:from-vedic-gold/20 hover:to-vedic-teal/20",
    subtle: "bg-muted/50 hover:bg-muted/80",
  };

  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col",
        sizeClasses[size],
        variantClasses[variant],
        "hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-vedic-gold/20 to-vedic-teal/20 blur-xl" />
      </div>

      <div className="relative z-10">
        {Icon && (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-vedic-gold/20 to-vedic-teal/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon className="w-7 h-7 text-vedic-gold" />
          </div>
        )}
        <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-vedic-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

interface AnimatedBentoItemProps extends BentoItemProps {
  delay?: number;
  animation?: "fade-up" | "scale" | "blur-in" | "pop-in";
}

export const AnimatedBentoItem = ({
  delay = 0,
  animation = "fade-up",
  ...props
}: AnimatedBentoItemProps) => {
  return (
    <AnimatedSection animation={animation} delay={delay} className="h-full">
      <BentoItem {...props} />
    </AnimatedSection>
  );
};

export default BentoGrid;
