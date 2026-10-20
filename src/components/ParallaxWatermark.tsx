import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxWatermarkProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ParallaxWatermark = ({
  text,
  className,
  speed = 0.3,
}: ParallaxWatermarkProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <span
        className={cn(
          "absolute font-display font-black text-[20vw] md:text-[15vw] text-foreground/[0.05] whitespace-nowrap tracking-tighter leading-none",
          className
        )}
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ParallaxWatermark;
