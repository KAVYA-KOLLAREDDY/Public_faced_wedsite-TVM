import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  asChild?: boolean;
}

export const GlassButton = ({ 
  children, 
  onClick, 
  variant = "primary",
  className 
}: GlassButtonProps) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    px-8 py-4 text-lg font-semibold rounded-2xl
    transition-all duration-300 ease-out
    before:absolute before:inset-0 before:rounded-2xl before:transition-opacity before:duration-300
    hover:scale-[1.02] hover:-translate-y-0.5
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-gold via-gold-light to-gold
      text-navy-dark
      shadow-[0_8px_32px_-8px_hsl(var(--gold)/0.5),inset_0_1px_0_hsl(var(--gold-light)/0.5)]
      hover:shadow-[0_12px_40px_-8px_hsl(var(--gold)/0.6),inset_0_1px_0_hsl(var(--gold-light)/0.8),0_0_20px_hsl(var(--gold)/0.3)]
      before:bg-gradient-to-t before:from-transparent before:to-white/20 before:opacity-0
      hover:before:opacity-100
    `,
    secondary: `
      bg-white/10 backdrop-blur-md
      text-white border border-white/20
      shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
      hover:bg-white/15 hover:border-white/30
      hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.1)]
      before:bg-gradient-to-t before:from-transparent before:to-white/10 before:opacity-0
      hover:before:opacity-100
    `,
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default GlassButton;
