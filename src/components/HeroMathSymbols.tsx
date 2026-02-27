import React, { useEffect, useState } from 'react';

const HeroMathSymbols = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const symbols = [
    // Basic operations - with parallax speed multipliers
    { symbol: '+', size: 'text-3xl', position: 'top-[15%] left-[8%]', delay: '0s', animation: 'animate-float', speed: 0.15 },
    { symbol: '−', size: 'text-4xl', position: 'top-[25%] right-[12%]', delay: '1s', animation: 'animate-float-slow', speed: 0.08 },
    { symbol: '×', size: 'text-2xl', position: 'top-[45%] left-[5%]', delay: '0.5s', animation: 'animate-bounce-gentle', speed: 0.2 },
    { symbol: '÷', size: 'text-3xl', position: 'bottom-[35%] right-[8%]', delay: '1.5s', animation: 'animate-float-gentle', speed: 0.12 },
    { symbol: '=', size: 'text-4xl', position: 'bottom-[25%] left-[10%]', delay: '2s', animation: 'animate-wiggle', speed: 0.18 },
    
    // Math symbols
    { symbol: '∑', size: 'text-5xl', position: 'top-[20%] left-[85%]', delay: '0.3s', animation: 'animate-float-slow', speed: 0.1 },
    { symbol: '√', size: 'text-4xl', position: 'top-[60%] right-[5%]', delay: '0.8s', animation: 'animate-float', speed: 0.22 },
    { symbol: 'π', size: 'text-3xl', position: 'bottom-[45%] left-[3%]', delay: '1.2s', animation: 'animate-bounce-gentle', speed: 0.14 },
    { symbol: '∞', size: 'text-4xl', position: 'top-[35%] left-[15%]', delay: '1.8s', animation: 'animate-float-gentle', speed: 0.06 },
    { symbol: '%', size: 'text-2xl', position: 'bottom-[20%] right-[15%]', delay: '2.2s', animation: 'animate-wiggle', speed: 0.16 },
    
    // Numbers scattered
    { symbol: '1', size: 'text-2xl', position: 'top-[50%] left-[92%]', delay: '0.4s', animation: 'animate-float', speed: 0.25 },
    { symbol: '2', size: 'text-3xl', position: 'top-[70%] left-[7%]', delay: '0.9s', animation: 'animate-float-slow', speed: 0.09 },
    { symbol: '3', size: 'text-2xl', position: 'top-[18%] right-[25%]', delay: '1.4s', animation: 'animate-bounce-gentle', speed: 0.19 },
    { symbol: '7', size: 'text-3xl', position: 'bottom-[55%] right-[3%]', delay: '1.9s', animation: 'animate-float-gentle', speed: 0.11 },
    { symbol: '9', size: 'text-2xl', position: 'bottom-[15%] left-[25%]', delay: '2.4s', animation: 'animate-wiggle', speed: 0.23 },
  ];

  const shapes = [
    // Floating circles with different parallax speeds
    { type: 'circle', className: 'w-10 h-10 border-2 border-gold/15 rounded-full', position: 'top-[12%] left-[20%]', delay: '0.7s', animation: 'animate-float', speed: 0.13 },
    { type: 'circle', className: 'w-14 h-14 border border-white/10 rounded-full', position: 'top-[55%] right-[18%]', delay: '1.3s', animation: 'animate-float-slow', speed: 0.07 },
    { type: 'circle', className: 'w-8 h-8 border-2 border-teal/15 rounded-full', position: 'bottom-[30%] left-[18%]', delay: '0.2s', animation: 'animate-float-gentle', speed: 0.21 },
    { type: 'circle', className: 'w-12 h-12 border border-gold/10 rounded-full', position: 'bottom-[50%] right-[22%]', delay: '0s', animation: 'animate-rotate-slow', speed: 0.05 },
    { type: 'circle', className: 'w-6 h-6 border border-white/10 rounded-full', position: 'top-[75%] right-[10%]', delay: '1.6s', animation: 'animate-bounce-gentle', speed: 0.17 },
    
    // Geometric shapes
    { type: 'square', className: 'w-8 h-8 border border-gold/10 rotate-45', position: 'top-[30%] right-[30%]', delay: '0.6s', animation: 'animate-wiggle', speed: 0.14 },
    { type: 'square', className: 'w-6 h-6 border border-white/10 rotate-12', position: 'top-[65%] left-[12%]', delay: '1.1s', animation: 'animate-float', speed: 0.24 },
    { type: 'square', className: 'w-5 h-5 bg-gold/5 rotate-45', position: 'bottom-[40%] right-[28%]', delay: '1.7s', animation: 'animate-float-slow', speed: 0.08 },
    { type: 'rounded', className: 'w-10 h-10 border border-teal/10 rounded-lg rotate-12', position: 'top-[42%] left-[28%]', delay: '2.1s', animation: 'animate-float-gentle', speed: 0.12 },
  ];

  const extraSymbols = [
    { symbol: '+', className: 'text-2xl text-white/[0.06]', position: 'top-[38%] right-[40%]', delay: '0.9s', animation: 'animate-float', speed: 0.18 },
    { symbol: '+', className: 'text-3xl text-gold/[0.08]', position: 'bottom-[28%] left-[35%]', delay: '1.5s', animation: 'animate-bounce-gentle', speed: 0.1 },
    { symbol: '×', className: 'text-xl text-white/[0.05]', position: 'top-[22%] left-[45%]', delay: '2.3s', animation: 'animate-wiggle', speed: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Math symbols with parallax */}
      {symbols.map((item, index) => (
        <div
          key={`symbol-${index}`}
          className={`absolute font-display font-bold text-white/[0.08] ${item.size} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed}px)`
          }}
        >
          {item.symbol}
        </div>
      ))}
      
      {/* Shapes with parallax */}
      {shapes.map((item, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${item.className} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed}px)`
          }}
        />
      ))}
      
      {/* Extra symbols with parallax */}
      {extraSymbols.map((item, index) => (
        <div
          key={`extra-${index}`}
          className={`absolute ${item.className} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed}px)`
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default HeroMathSymbols;
