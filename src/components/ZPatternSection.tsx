import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface ZPatternSectionProps {
  image: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  reversed?: boolean;
  className?: string;
  accentColor?: "gold" | "teal";
}

export const ZPatternSection = ({
  image,
  title,
  subtitle,
  description,
  features,
  reversed = false,
  className,
  accentColor = "gold",
}: ZPatternSectionProps) => {
  const accent = accentColor === "gold" ? "vedic-gold" : "vedic-teal";

  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24",
        className
      )}
    >
      {/* Image Side */}
      <AnimatedSection
        animation={reversed ? "fade-left" : "fade-right"}
        className={cn(
          "relative",
          reversed && "lg:order-2"
        )}
      >
        <div className="relative">
          {/* Overlapping background shape */}
          <div
            className={cn(
              "absolute -inset-4 bg-gradient-to-br rounded-[2rem] -z-10 opacity-20",
              accentColor === "gold"
                ? "from-vedic-gold to-vedic-gold-light"
                : "from-vedic-teal to-vedic-teal-light",
              reversed ? "-rotate-3" : "rotate-3"
            )}
          />
          {/* Main image container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
            {image}
          </div>
          {/* Floating accent */}
          <div
            className={cn(
              "absolute w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center",
              accentColor === "gold"
                ? "bg-gradient-to-br from-vedic-gold to-vedic-gold-light"
                : "bg-gradient-to-br from-vedic-teal to-vedic-teal-light",
              reversed ? "-left-6 -bottom-6" : "-right-6 -bottom-6",
              "animate-float"
            )}
          >
            <span className="font-display font-bold text-3xl text-vedic-navy">∞</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Text Side */}
      <AnimatedSection
        animation={reversed ? "fade-right" : "fade-left"}
        delay={200}
        className={cn(reversed && "lg:order-1")}
      >
        <div className="space-y-6">
          {subtitle && (
            <span className={cn(
              "text-sm font-semibold tracking-wider uppercase",
              `text-${accent}`
            )}>
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          {features && features.length > 0 && (
            <ul className="space-y-3 pt-4">
              {features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-foreground"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full",
                    `bg-${accent}`
                  )} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ZPatternSection;
