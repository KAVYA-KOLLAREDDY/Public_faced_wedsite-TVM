import { motion } from "framer-motion";
import { Calendar, Mail, Sparkles, GraduationCap, Users, Star } from "lucide-react";

interface GlobalHeroProps {
  onBookDemo: () => void;
  onContact: () => void;
}

const GlobalHero = ({ onBookDemo, onContact }: GlobalHeroProps) => {
  return (
    // Added extra padding-bottom to accommodate the overlapping StatRibbon
    <section className="relative min-h-[75vh] flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-navy via-navy-light to-teal-dark">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 math-pattern opacity-10" />
      
      {/* Gradient accent */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at right top, hsl(var(--gold) / 0.4), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-white/90"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Global Learning Community
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
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

            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Join our global family of learners across 5 countries. From India to Australia, 
              we empower children to discover the joy of mathematics.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA with pulse */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookDemo}
                className="relative flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg bg-gold text-navy-dark hover:bg-gold-light transition-colors shadow-lg shadow-gold/30"
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
                <Calendar className="w-5 h-5" />
                Book a Free Demo
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContact}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
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
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              { icon: Users, label: "500+ Students", sublabel: "Active learners globally" },
              { icon: Star, label: "5 Countries", sublabel: "Global presence" },
              { icon: GraduationCap, label: "Expert Teachers", sublabel: "Certified instructors" },
              { icon: Sparkles, label: "Live Classes", sublabel: "Interactive sessions" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">{item.label}</h3>
                <p className="text-white/60 text-sm">{item.sublabel}</p>
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
