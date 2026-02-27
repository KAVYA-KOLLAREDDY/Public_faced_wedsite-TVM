import React from 'react';

const FloatingMathSymbols = () => {
  const symbols = [
    // Basic operations
    '+', '−', '×', '÷', '=',
    // Math symbols
    '∑', '∏', '√', '∞', 'π', 'θ', '%',
    // Shapes
    '○', '△', '□', '◇', '◯',
    // Numbers
    '1', '2', '3', '4', '5',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute font-display font-bold text-gold/[0.08] animate-float-gentle"
          style={{
            left: `${(index * 7 + 5) % 95}%`,
            top: `${(index * 11 + 3) % 90}%`,
            fontSize: `${20 + (index % 5) * 8}px`,
            animationDelay: `${index * 0.3}s`,
            animationDuration: `${6 + (index % 4) * 2}s`,
          }}
        >
          {symbol}
        </div>
      ))}
      
      {/* Floating circles */}
      <div className="absolute top-[10%] left-[15%] w-8 h-8 border-2 border-gold/10 rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[20%] w-12 h-12 border border-teal/10 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[25%] left-[10%] w-6 h-6 border-2 border-gold/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[40%] right-[15%] w-10 h-10 border border-gold/10 rounded-full animate-rotate-slow" />
      
      {/* Geometric shapes */}
      <div className="absolute top-[20%] left-[75%] w-6 h-6 border border-teal/10 rotate-45 animate-bounce-gentle" />
      <div className="absolute top-[60%] left-[5%] w-8 h-8 border border-gold/10 rotate-12 animate-wiggle" />
      <div className="absolute bottom-[15%] right-[30%] w-4 h-4 bg-gold/5 rotate-45 animate-float-slow" />
      <div className="absolute top-[45%] right-[5%] w-10 h-10 border border-teal/10 rounded-lg animate-float-gentle" style={{ animationDelay: '3s' }} />
      
      {/* Plus signs scattered */}
      <div className="absolute top-[15%] left-[40%] text-2xl text-gold/10 animate-wiggle" style={{ animationDelay: '0.7s' }}>+</div>
      <div className="absolute top-[70%] right-[45%] text-3xl text-teal/10 animate-bounce-gentle" style={{ animationDelay: '1.2s' }}>+</div>
      <div className="absolute bottom-[30%] left-[60%] text-xl text-gold/10 animate-float" style={{ animationDelay: '2.5s' }}>×</div>
      
      {/* Division and equals */}
      <div className="absolute top-[55%] left-[25%] text-2xl text-gold/10 animate-float-gentle" style={{ animationDelay: '1.8s' }}>÷</div>
      <div className="absolute bottom-[50%] right-[60%] text-xl text-teal/10 animate-wiggle" style={{ animationDelay: '0.9s' }}>=</div>
    </div>
  );
};

export default FloatingMathSymbols;
