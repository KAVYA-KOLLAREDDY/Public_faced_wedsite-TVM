import React, { useEffect, useRef } from 'react';

const MathGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const symbols = ['×', '+', '÷', '−', '=', '√', 'π', '∑', '∞', '%'];
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.002;

      // Draw animated grid
      const gridSize = 80;
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const offset = Math.sin(time + x * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(x, offset);
        ctx.lineTo(x, canvas.height + offset);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        const offset = Math.cos(time + y * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(offset, y);
        ctx.lineTo(canvas.width + offset, y);
        ctx.stroke();
      }

      // Draw floating math symbols
      ctx.font = '20px "Space Mono", monospace';
      for (let i = 0; i < 20; i++) {
        const x = ((i * 137.5 + time * 50) % canvas.width);
        const y = ((i * 97.3 + time * 30) % canvas.height);
        const alpha = 0.06 + Math.sin(time * 2 + i) * 0.03;
        ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`;
        ctx.fillText(symbols[i % symbols.length], x, y);
      }

      // Draw subtle radial gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default MathGridBackground;
