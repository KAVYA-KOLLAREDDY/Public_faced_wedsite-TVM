import { motion } from "framer-motion";
import { Clock, Mail, Sparkles, GraduationCap, Star } from "lucide-react";

interface GlobalHeroProps {
  onBookDemo: () => void;
  onContact: () => void;
}

const GlobalHero = ({ onBookDemo, onContact }: GlobalHeroProps) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] flex items-center pt-24 lg:pt-28 pb-32 sm:pb-36 overflow-hidden bg-gradient-to-br from-navy via-navy-light to-teal-dark">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 math-pattern opacity-10" />
      
      {/* Gradient accent */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at right top, hsl(var(--gold) / 0.4), transparent 60%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[65vh]">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8 text-white/80"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Global Learning Community
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
              We're Here to Help Your Child{" "}
              <span className="relative inline-block">
                <span className="text-gold">Shine in Maths!</span>
                {/* Teal underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path 
                    d="M0,8 Q50,0 100,8 T200,8" 
                    fill="none" 
                    stroke="hsl(var(--teal))" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
              Join our global family of learners across 5 countries. From India to Australia, 
              we empower children to discover the joy of mathematics.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA with pulse */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookDemo}
                className="relative flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl font-display font-semibold text-lg bg-gold text-navy-dark hover:bg-gold-light transition-colors shadow-lg shadow-gold/30"
              >
                {/* Pulsing shadow effect */}
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-gold -z-10"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(var(--gold) / 0.4)",
                      "0 0 0 12px hsl(var(--gold) / 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContact}
                className="flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl font-display font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Send a Message
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Feature highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 md:mt-8 lg:mt-14"
          >
            {[
              { icon: GraduationCap, label: "Expert Teachers", sublabel: "Certified instructors" },
              { icon: Star, label: "5 Countries", sublabel: "Global presence" },
              { icon: Sparkles, label: "Live Classes", sublabel: "Interactive sessions" },
              { icon: Clock, label: "24/7 Support", sublabel: "We're here when you need us" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors flex flex-col"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg">{item.label}</h3>
                <p className="text-white/60 text-sm mt-0.5 leading-snug">{item.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,45 L1440,80 L0,80 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default GlobalHero;
