import { useEffect, useRef, useState } from "react";

interface Bead {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const FloatingBeadsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [beads] = useState<Bead[]>(() => {
    const colors = [
      "hsl(var(--gold))",
      "hsl(var(--teal))",
      "hsl(45, 93%, 70%)",
      "hsl(174, 60%, 50%)",
      "hsl(25, 95%, 65%)",
    ];
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 40%, hsl(var(--teal-dark)) 100%)' 
        }}
      />
      
      {/* Floating beads */}
      {beads.map((bead) => {
        const offsetX = (mousePos.x - 50) * 0.05;
        const offsetY = (mousePos.y - 50) * 0.05;
        
        return (
          <div
            key={bead.id}
            className="absolute rounded-full transition-transform duration-700 ease-out"
            style={{
              left: `${bead.x + offsetX * (bead.id % 3 + 1)}%`,
              top: `${bead.y + offsetY * (bead.id % 3 + 1)}%`,
              width: bead.size,
              height: bead.size,
              background: `radial-gradient(circle at 30% 30%, ${bead.color}, transparent)`,
              opacity: bead.opacity,
              filter: "blur(1px)",
              boxShadow: `0 0 ${bead.size / 2}px ${bead.color}`,
              animation: `float-bead-${bead.id % 4} ${15 + bead.id * 2}s ease-in-out infinite`,
            }}
          />
        );
      })}

      {/* Glow orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--gold) / 0.4), transparent 60%)',
          left: '10%',
          top: '20%',
          filter: 'blur(40px)',
          animation: 'pulse-glow 8s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--teal) / 0.5), transparent 60%)',
          right: '15%',
          bottom: '20%',
          filter: 'blur(50px)',
          animation: 'pulse-glow 10s ease-in-out infinite reverse',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <style>{`
        @keyframes float-bead-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(5deg); }
          50% { transform: translate(-10px, -50px) rotate(-5deg); }
          75% { transform: translate(-30px, -20px) rotate(3deg); }
        }
        @keyframes float-bead-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(-4deg); }
          66% { transform: translate(15px, 35px) rotate(6deg); }
        }
        @keyframes float-bead-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -25px) scale(1.1); }
        }
        @keyframes float-bead-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, 25px) rotate(8deg); }
          75% { transform: translate(25px, -15px) rotate(-8deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default FloatingBeadsBackground;
