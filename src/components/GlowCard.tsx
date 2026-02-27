import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "gold" | "teal" | "mixed";
  interactive?: boolean;
}

export const GlowCard = ({
  children,
  className,
  glowColor = "gold",
  interactive = false,
}: GlowCardProps) => {
  const glowClasses = {
    gold: "from-vedic-gold/30 to-vedic-gold/10",
    teal: "from-vedic-teal/30 to-vedic-teal/10",
    mixed: "from-vedic-gold/20 via-vedic-teal/20 to-vedic-gold/20",
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Background glow */}
      <div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500",
          glowClasses[glowColor]
        )}
      />
      {/* Content container */}
      <div
        className={cn(
          "relative rounded-3xl",
          interactive && [
            "backdrop-blur-md bg-card/80 border border-white/10",
            "hover:border-white/20 transition-all duration-300",
          ]
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
