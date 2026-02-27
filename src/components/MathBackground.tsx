export const MathBackground = () => {
  const symbols = [
    "∑", "∏", "√", "∞", "π", "θ", "α", "β", "∆", "∇",
    "+", "×", "÷", "=", "%", "∫", "∂", "λ", "μ", "σ"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Floating Symbols */}
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute text-vedic-gold/10 font-display animate-float"
          style={{
            left: `${(index * 5) % 100}%`,
            top: `${(index * 7) % 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
          }}
        >
          {symbol}
        </div>
      ))}
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-vedic-gold/5 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-vedic-teal/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-vedic-gold/5 rotate-45 animate-pulse" />
    </div>
  );
};

export default MathBackground;
