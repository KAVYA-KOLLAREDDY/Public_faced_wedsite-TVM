import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal = ({
  children,
  className,
  delay = 0,
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1400;
        const start = Date.now();

        const animate = () => {
          const elapsed = Date.now() - start;
          const t = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setProgress(eased);

          if (t < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        className="pt-[0.15em] pb-[0.35em]"
        style={{
          clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
        }}
      >
        {children}
      </div>
      {/* Same `progress` as clip-path — no CSS transition on `left` (that lagged the wipe) */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-vedic-gold via-vedic-gold to-transparent"
        style={{
          left: `${progress * 100}%`,
          opacity: progress > 0 && progress < 1 ? 1 : 0,
        }}
      />
    </div>
  );
};

export default TextReveal;
