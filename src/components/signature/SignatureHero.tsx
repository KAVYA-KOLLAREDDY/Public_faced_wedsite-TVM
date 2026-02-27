import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { TextReveal } from "@/components/TextReveal";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import HeroMathSymbols from "@/components/HeroMathSymbols";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import { useConfetti } from "@/hooks/useConfetti";

const subjects = [
  { 
    name: "Mathematics", 
    color: "from-vedic-teal via-teal-light to-vedic-teal",
    bgColor: "bg-vedic-teal",
    textColor: "text-white",
    symbols: ["÷", "×", "∑", "π", "√", "∞", "%", "="]
  },
  { 
    name: "HandWriting", 
    color: "from-vedic-gold via-vedic-gold-light to-vedic-gold",
    bgColor: "bg-vedic-gold",
    textColor: "text-vedic-navy",
    symbols: ["✎", "Aa", "Bb", "✍", "📝", "✒", "Cc", "Dd"]
  },
  { 
    name: "Phonetics", 
    color: "from-purple-400 via-purple-300 to-purple-400",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    symbols: ["🔊", "♪", "æ", "ə", "θ", "ʃ", "ŋ", "ɪ"]
  }
];

const SignatureHero = () => {
  const [currentSubject, setCurrentSubject] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const navigate = useNavigate();
  const { triggerConfetti } = useConfetti();

  // Typing animation effect
  useEffect(() => {
    const subject = subjects[currentSubject].name;
    let charIndex = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < subject.length) {
        setDisplayText(subject.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait 2 seconds then switch to next subject
        setTimeout(() => {
          setCurrentSubject((prev) => (prev + 1) % subjects.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentSubject]);

  const handleBookDemo = () => {
    triggerConfetti();
    setTimeout(() => {
      navigate('/contact#contact-form');
    }, 400);
  };

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background Gradient - Matching other pages */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)' }}
      />
      <div className="absolute inset-0 math-pattern opacity-20" />
      
      {/* Dynamic Floating Symbols based on active subject */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {subjects[currentSubject].symbols.map((symbol, index) => (
          <motion.div
            key={`${currentSubject}-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="absolute text-white/20 font-bold select-none"
            style={{
              fontSize: `${Math.random() * 40 + 30}px`,
              left: `${(index * 12) + 5}%`,
              top: `${(index % 3) * 25 + 15}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      
      {/* Floating Elements - Same as other pages */}
      <div className="absolute top-32 left-20 w-16 h-16 border-2 border-gold/30 rotate-45 animate-float" />
      <div className="absolute bottom-40 right-32 w-20 h-20 border-2 border-teal-light/20 rounded-full animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gold/10 rotate-12 animate-bounce-gentle" />
      <div className="absolute top-40 right-20 w-8 h-8 bg-teal/20 rounded-lg animate-wiggle" />
      <div className="absolute bottom-60 left-32 w-24 h-24 border border-gold/10 rounded-full animate-rotate-slow" />

      <ParallaxWatermark text="SIGNATURE" className="top-1/3 -left-20" speed={0.15} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Same style as other pages */}
          <AnimatedSection animation="pop-in">
            <span className="inline-flex items-center gap-2 text-gold font-semibold tracking-widest uppercase text-xs bg-gold/10 px-4 py-2 rounded-full mb-8 badge-warm">
              <Sparkles className="w-4 h-4 animate-wiggle" />
              Signature Small Group Programs
            </span>
          </AnimatedSection>

          {/* Heading - Using TextReveal like other pages */}
          <TextReveal delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Learning made personal —
              <motion.span 
                key={currentSubject}
                className={`block bg-gradient-to-r ${subjects[currentSubject].color} bg-clip-text text-transparent mt-2`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                tailored classes in{" "}
                <span className="inline-block min-w-[280px] md:min-w-[320px] text-left">
                  {displayText}
                  <span className={`${isTyping ? 'animate-pulse' : 'opacity-0'} ml-0.5`}>|</span>
                </span>
              </motion.span>
            </h1>
          </TextReveal>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Intimate small group sessions (3-5 students) that strengthen skills and build confidence 
              through engaging, collaborative learning experiences.
            </p>
          </AnimatedSection>

          {/* Subject Tab Navigation */}
          <AnimatedSection animation="fade-up" delay={350}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {subjects.map((subject, index) => (
                <button
                  key={subject.name}
                  onClick={() => setCurrentSubject(index)}
                  className={`
                    relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden
                    ${currentSubject === index 
                      ? `${subject.bgColor} ${subject.textColor} shadow-lg scale-105` 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }
                  `}
                >
                  <span className="relative z-10">{subject.name}</span>
                  {currentSubject === index && (
                    <motion.div
                      layoutId="activeSubjectTab"
                      className={`absolute inset-0 ${subject.bgColor} rounded-full`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Buttons - Same style as other pages */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-wrap justify-center gap-4 hero-content-warm">
              <MagneticButton strength={0.25}>
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-light text-navy-dark font-display font-semibold px-8 py-6 text-lg rounded-2xl hero-cta-warm ripple-effect group transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                  onClick={handleBookDemo}
                >
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gold text-gold font-display font-medium px-8 py-6 text-lg rounded-2xl backdrop-blur-sm outline-cta-warm group transform hover:-translate-y-2 hover:bg-gold hover:text-navy-dark transition-all duration-300"
                >
                  Learn More
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 group-hover:animate-bounce transition-all" />
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSubject === index ? `w-10 ${subject.bgColor}` : 'w-2 bg-white/30'
                }`}
                layoutId={currentSubject === index ? "activeProgress" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureHero;
