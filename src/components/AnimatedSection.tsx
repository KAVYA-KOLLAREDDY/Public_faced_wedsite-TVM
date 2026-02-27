import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur" | "blur-in" | "pop" | "pop-in" | "flip" | "slide-up" | "zoom";
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-left": "-translate-x-10 opacity-0",
    "fade-right": "translate-x-10 opacity-0",
    scale: "scale-90 opacity-0",
    blur: "opacity-0 blur-sm",
    "blur-in": "opacity-0 blur-md scale-95",
    pop: "scale-50 opacity-0",
    "pop-in": "scale-0 opacity-0 rotate-12",
    flip: "opacity-0 [transform:perspective(400px)_rotateY(90deg)]",
    "slide-up": "translate-y-16 opacity-0",
    zoom: "scale-75 opacity-0 blur-[2px]",
  };

  const visibleClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-left": "translate-x-0 opacity-100",
    "fade-right": "translate-x-0 opacity-100",
    scale: "scale-100 opacity-100",
    blur: "opacity-100 blur-0",
    "blur-in": "opacity-100 blur-0 scale-100",
    pop: "scale-100 opacity-100",
    "pop-in": "scale-100 opacity-100 rotate-0",
    flip: "opacity-100 [transform:perspective(400px)_rotateY(0deg)]",
    "slide-up": "translate-y-0 opacity-100",
    zoom: "scale-100 opacity-100 blur-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;