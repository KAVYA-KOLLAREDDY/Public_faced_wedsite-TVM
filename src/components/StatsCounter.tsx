import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export const StatsCounter = ({
  end,
  suffix = "",
  label,
  duration = 2000,
  delay = 0,
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, end, duration, delay]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-display font-bold text-vedic-gold mb-2 group-hover:scale-110 transition-transform duration-300">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-white/70 font-medium">{label}</p>
    </div>
  );
};

export default StatsCounter;
