import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ConstellationBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate random stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Generate connecting lines between nearby stars
    const getConnections = () => {
      const connections: { from: number; to: number; opacity: number }[] = [];
      const maxDistance = 150;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connections.push({
              from: i,
              to: j,
              opacity: (1 - distance / maxDistance) * 0.3,
            });
          }
        }
      }
      return connections;
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.01;

      // Update star positions (subtle drift)
      stars.forEach((star) => {
        star.y += star.speed * 0.1;
        star.x += Math.sin(time + star.x * 0.01) * 0.05;

        if (star.y > canvas.offsetHeight) {
          star.y = 0;
          star.x = Math.random() * canvas.offsetWidth;
        }
      });

      // Draw connections
      const connections = getConnections();
      connections.forEach((conn) => {
        const from = stars[conn.from];
        const to = stars[conn.to];

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${conn.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw stars
      stars.forEach((star) => {
        const pulse = Math.sin(time * 2 + star.x) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * pulse})`;
        ctx.fill();

        // Add glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(180, 200, 255, ${star.opacity * pulse * 0.3})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep indigo to royal blue gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(240, 60%, 15%) 0%, hsl(230, 70%, 25%) 50%, hsl(220, 80%, 30%) 100%)",
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, hsla(260, 70%, 40%, 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, hsla(260, 70%, 40%, 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, hsla(260, 70%, 40%, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Constellation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ConstellationBackground;
