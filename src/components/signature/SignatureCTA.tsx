import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { Calendar, Phone } from "lucide-react";

// Course-related symbols for background
const courseSymbols = [
  // Math symbols
  "÷", "×", "∑", "π", "√", "%", "=", "+",
  // Handwriting symbols
  "Aa", "Bb", "Cc",
  // Phonetics symbols
  "æ", "ə", "θ", "ʃ"
];

const SignatureCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vedic-navy via-vedic-navy-light to-vedic-teal-dark" />
      
      {/* Course-related floating symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {courseSymbols.map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-bold select-none"
            style={{
              fontSize: `${30 + (i % 4) * 15}px`,
              left: `${(i * 6.25) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Additional decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-vedic-gold/20"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              left: `${15 + i * 18}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vedic-gold/20 backdrop-blur-sm text-vedic-gold text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-vedic-gold animate-pulse" />
              Limited Spots Available
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Empower Your Child's Learning Journey{" "}
            <span className="text-vedic-gold">One Personalized Step</span> at a Time!
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Help your child build essential skills in Math, HandWriting, and Phonetics — 
            with engaging small group classes designed for maximum learning!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <Link
                to="/contact#contact-form"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-vedic-gold text-vedic-navy font-bold text-lg shadow-xl overflow-hidden"
              >
                {/* Pulse animation background */}
                <motion.div
                  className="absolute inset-0 bg-vedic-gold"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(var(--gold) / 0.4)",
                      "0 0 0 20px hsl(var(--gold) / 0)",
                      "0 0 0 0 hsl(var(--gold) / 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  animate={{ translateY: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 inline-flex"
                >
                  <Calendar className="w-5 h-5" />
                </motion.span>
                <span className="relative z-10">Book Free Demo</span>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-lg border border-vedic-gold/30 hover:bg-white/20 hover:border-vedic-gold/50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-vedic-gold">✓</span>
              Free Trial Session
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vedic-gold">✓</span>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vedic-gold">✓</span>
              100% Satisfaction Guarantee
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SignatureCTA;