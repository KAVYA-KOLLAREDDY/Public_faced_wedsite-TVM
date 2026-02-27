import React, { useEffect, useState } from 'react';

const CTAMathSymbols = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const symbols = [
    // Math operations
    { symbol: '+', size: 'text-4xl', position: 'top-[10%] left-[5%]', delay: '0s', animation: 'animate-float', speed: 0.1 },
    { symbol: '−', size: 'text-3xl', position: 'top-[20%] right-[8%]', delay: '0.8s', animation: 'animate-float-slow', speed: 0.15 },
    { symbol: '×', size: 'text-5xl', position: 'bottom-[15%] left-[10%]', delay: '0.4s', animation: 'animate-bounce-gentle', speed: 0.12 },
    { symbol: '÷', size: 'text-4xl', position: 'bottom-[25%] right-[5%]', delay: '1.2s', animation: 'animate-float-gentle', speed: 0.18 },
    { symbol: '=', size: 'text-3xl', position: 'top-[40%] left-[3%]', delay: '1.6s', animation: 'animate-wiggle', speed: 0.08 },
    
    // Advanced symbols
    { symbol: '∑', size: 'text-6xl', position: 'top-[15%] right-[15%]', delay: '0.2s', animation: 'animate-float-slow', speed: 0.06 },
    { symbol: '√', size: 'text-5xl', position: 'bottom-[35%] left-[8%]', delay: '0.6s', animation: 'animate-float', speed: 0.14 },
    { symbol: 'π', size: 'text-4xl', position: 'top-[60%] right-[3%]', delay: '1s', animation: 'animate-bounce-gentle', speed: 0.2 },
    { symbol: '∞', size: 'text-5xl', position: 'bottom-[10%] right-[18%]', delay: '1.4s', animation: 'animate-float-gentle', speed: 0.05 },
    { symbol: '%', size: 'text-3xl', position: 'top-[70%] left-[5%]', delay: '1.8s', animation: 'animate-wiggle', speed: 0.16 },
    { symbol: 'Δ', size: 'text-4xl', position: 'top-[50%] right-[10%]', delay: '0.3s', animation: 'animate-float', speed: 0.11 },
    
    // Numbers
    { symbol: '1', size: 'text-3xl', position: 'top-[30%] left-[12%]', delay: '0.5s', animation: 'animate-float', speed: 0.17 },
    { symbol: '2', size: 'text-4xl', position: 'bottom-[45%] right-[12%]', delay: '0.9s', animation: 'animate-float-slow', speed: 0.09 },
    { symbol: '3', size: 'text-3xl', position: 'top-[75%] right-[6%]', delay: '1.3s', animation: 'animate-bounce-gentle', speed: 0.13 },
    { symbol: '5', size: 'text-4xl', position: 'bottom-[55%] left-[4%]', delay: '1.7s', animation: 'animate-float-gentle', speed: 0.19 },
    { symbol: '7', size: 'text-3xl', position: 'top-[5%] right-[22%]', delay: '0.1s', animation: 'animate-wiggle', speed: 0.07 },
    { symbol: '9', size: 'text-4xl', position: 'bottom-[5%] left-[20%]', delay: '2s', animation: 'animate-float', speed: 0.22 },
  ];

  const shapes = [
    // Circles
    { className: 'w-12 h-12 border-2 border-gold/20 rounded-full', position: 'top-[25%] left-[15%]', delay: '0.4s', animation: 'animate-float', speed: 0.12 },
    { className: 'w-16 h-16 border border-white/10 rounded-full', position: 'bottom-[30%] right-[15%]', delay: '0.8s', animation: 'animate-float-slow', speed: 0.08 },
    { className: 'w-10 h-10 border-2 border-teal/20 rounded-full', position: 'top-[55%] left-[6%]', delay: '1.2s', animation: 'animate-float-gentle', speed: 0.15 },
    { className: 'w-14 h-14 border border-gold/15 rounded-full', position: 'top-[8%] left-[25%]', delay: '0.2s', animation: 'animate-rotate-slow', speed: 0.05 },
    { className: 'w-8 h-8 border border-white/15 rounded-full', position: 'bottom-[18%] left-[30%]', delay: '1.6s', animation: 'animate-bounce-gentle', speed: 0.18 },
    { className: 'w-20 h-20 border border-teal/10 rounded-full', position: 'bottom-[40%] left-[2%]', delay: '0.6s', animation: 'animate-float', speed: 0.04 },
    
    // Squares and diamonds
    { className: 'w-10 h-10 border border-gold/15 rotate-45', position: 'top-[35%] right-[20%]', delay: '0.5s', animation: 'animate-wiggle', speed: 0.14 },
    { className: 'w-8 h-8 border border-white/10 rotate-12', position: 'bottom-[50%] right-[4%]', delay: '0.9s', animation: 'animate-float', speed: 0.21 },
    { className: 'w-6 h-6 bg-gold/10 rotate-45', position: 'top-[65%] left-[12%]', delay: '1.3s', animation: 'animate-float-slow', speed: 0.1 },
    { className: 'w-12 h-12 border border-teal/15 rounded-lg rotate-12', position: 'bottom-[60%] right-[8%]', delay: '1.7s', animation: 'animate-float-gentle', speed: 0.16 },
    { className: 'w-8 h-8 bg-teal/10 rotate-45', position: 'top-[80%] right-[25%]', delay: '0.3s', animation: 'animate-bounce-gentle', speed: 0.13 },
  ];

  const extraSymbols = [
    { symbol: '+', className: 'text-3xl text-white/[0.08]', position: 'top-[45%] left-[18%]', delay: '0.7s', animation: 'animate-float', speed: 0.11 },
    { symbol: '+', className: 'text-4xl text-gold/[0.1]', position: 'bottom-[20%] right-[25%]', delay: '1.1s', animation: 'animate-bounce-gentle', speed: 0.14 },
    { symbol: '×', className: 'text-2xl text-white/[0.06]', position: 'top-[12%] left-[35%]', delay: '1.5s', animation: 'animate-wiggle', speed: 0.18 },
    { symbol: '−', className: 'text-3xl text-teal/[0.1]', position: 'bottom-[65%] left-[22%]', delay: '1.9s', animation: 'animate-float-slow', speed: 0.07 },
    { symbol: '÷', className: 'text-2xl text-gold/[0.08]', position: 'top-[85%] left-[40%]', delay: '0.1s', animation: 'animate-float-gentle', speed: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Math symbols with parallax */}
      {symbols.map((item, index) => (
        <div
          key={`cta-symbol-${index}`}
          className={`absolute font-display font-bold text-white/[0.1] ${item.size} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed * 0.3}px)`
          }}
        >
          {item.symbol}
        </div>
      ))}
      
      {/* Shapes with parallax */}
      {shapes.map((item, index) => (
        <div
          key={`cta-shape-${index}`}
          className={`absolute ${item.className} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed * 0.3}px)`
          }}
        />
      ))}
      
      {/* Extra symbols with parallax */}
      {extraSymbols.map((item, index) => (
        <div
          key={`cta-extra-${index}`}
          className={`absolute ${item.className} ${item.position} ${item.animation} transition-transform duration-100`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${scrollY * item.speed * 0.3}px)`
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default CTAMathSymbols;
