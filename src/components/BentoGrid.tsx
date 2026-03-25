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
    small: "p-6 sm:p-7",
    medium: "p-6 sm:p-7",
    large: "p-6 sm:p-8",
  };

  const variantClasses = {
    default: "bg-card hover:bg-card/80",
    highlight: "bg-gradient-to-br from-vedic-gold/10 to-vedic-teal/10 hover:from-vedic-gold/20 hover:to-vedic-teal/20",
    subtle: "bg-muted/50 hover:bg-muted/80",
  };

  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-3xl transition-all duration-500 md:min-h-0",
        sizeClasses[size],
        variantClasses[variant],
        "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-r from-vedic-gold/20 to-vedic-teal/20 blur-xl" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {Icon && (
          <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vedic-gold/20 to-vedic-teal/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6 text-vedic-gold" />
          </div>
        )}
        <h3 className="mb-2 shrink-0 font-display text-lg font-bold text-foreground transition-colors group-hover:text-vedic-gold sm:text-xl">
          {title}
        </h3>
        <p className="min-h-[3.25rem] flex-1 text-sm leading-relaxed text-muted-foreground">
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
        "grid auto-rows-[minmax(17.5rem,auto)] gap-4 sm:gap-5",
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
