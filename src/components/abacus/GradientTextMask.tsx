import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextMaskProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientTextMask = ({ 
  children, 
  className,
  gradient = "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--teal)) 50%, hsl(45, 100%, 70%) 100%)"
}: GradientTextMaskProps) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent animate-gradient-shift",
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 200%",
      }}
    >
      {children}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease-in-out infinite;
        }
      `}</style>
    </span>
  );
};

export default GradientTextMask;
