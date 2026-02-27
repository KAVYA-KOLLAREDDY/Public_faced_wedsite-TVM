import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample student images for social proof
const studentAvatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
];

// Floating 3D icons data
const floatingIcons = [
  { symbol: "+", x: "8%", y: "25%", delay: 0, size: 48, color: "gold" },
  { symbol: "×", x: "88%", y: "20%", delay: 0.5, size: 40, color: "teal" },
  { symbol: "÷", x: "12%", y: "70%", delay: 1, size: 36, color: "teal" },
  { symbol: "=", x: "85%", y: "65%", delay: 1.5, size: 44, color: "gold" },
];

// 3D floating elements
const floating3DElements = [
  { type: "cube", x: "5%", y: "45%", delay: 0.3 },
  { type: "sphere", x: "92%", y: "40%", delay: 0.8 },
  { type: "pyramid", x: "15%", y: "85%", delay: 1.2 },
  { type: "pencil", x: "82%", y: "80%", delay: 0.6 },
];

export const FuturisticHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0">
      {/* Base gradient background using theme navy colors */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy-dark"
      />

      {/* Vibrant Glow Orbs - Behind everything */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Emerald Green Glow - Right side */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            right: "-10%",
            top: "20%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Deep Gold Glow - Left side */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            left: "-5%",
            top: "30%",
            background: "radial-gradient(circle, rgba(234, 179, 8, 0.35) 0%, rgba(234, 179, 8, 0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {/* Additional subtle teal glow at top */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            left: "40%",
            top: "-10%",
            background: "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Faded world map projection */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="none" stroke="hsl(var(--gold))" strokeWidth="0.8">
            <path d="M150,120 Q180,100 220,110 L250,130 Q280,150 260,180 L220,200 Q180,190 150,160 Z" />
            <path d="M220,220 Q250,240 240,280 L220,330 Q200,360 190,340 L200,280 Q210,240 220,220 Z" />
            <path d="M450,100 Q480,90 520,100 L540,120 Q550,140 530,150 L480,140 Q450,130 450,100 Z" />
            <path d="M480,160 Q520,150 540,180 L550,240 Q540,300 500,310 L470,280 Q460,220 480,160 Z" />
            <path d="M560,80 Q620,60 700,80 L750,120 Q780,160 760,200 L700,220 Q620,200 580,160 L560,120 Z" />
            <path d="M750,280 Q790,270 820,290 L830,320 Q820,350 780,340 L750,310 Q740,290 750,280 Z" />
            <path d="M620,160 Q640,150 660,165 L665,200 Q655,230 635,235 L620,210 Q610,180 620,160 Z" />
          </g>
        </svg>
      </div>

      {/* Floating 3D Math Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center justify-center"
          style={{ 
            left: icon.x, 
            top: icon.y,
            width: icon.size,
            height: icon.size,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            delay: icon.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div
            className="w-full h-full rounded-xl flex items-center justify-center font-bold backdrop-blur-sm"
            style={{
              fontSize: icon.size * 0.6,
              background: icon.color === "gold" 
                ? "linear-gradient(135deg, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0.1) 100%)"
                : "linear-gradient(135deg, rgba(45, 212, 191, 0.3) 0%, rgba(45, 212, 191, 0.1) 100%)",
              color: icon.color === "gold" ? "hsl(var(--gold))" : "hsl(var(--teal))",
              boxShadow: icon.color === "gold"
                ? "0 8px 32px rgba(234, 179, 8, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 8px 32px rgba(45, 212, 191, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {icon.symbol}
          </div>
        </motion.div>
      ))}

      {/* 3D Floating Elements */}
      {floating3DElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            delay: element.delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.type === "cube" && (
            <div 
              className="w-8 h-8 border border-teal/40 rotate-45"
              style={{ 
                background: "linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, transparent 100%)",
                boxShadow: "0 0 20px rgba(45, 212, 191, 0.2)",
              }}
            />
          )}
          {element.type === "sphere" && (
            <div 
              className="w-6 h-6 rounded-full"
              style={{ 
                background: "radial-gradient(circle at 30% 30%, rgba(234, 179, 8, 0.4) 0%, rgba(234, 179, 8, 0.1) 100%)",
                boxShadow: "0 0 25px rgba(234, 179, 8, 0.3)",
              }}
            />
          )}
          {element.type === "pyramid" && (
            <div 
              className="w-0 h-0"
              style={{ 
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderBottom: "20px solid rgba(45, 212, 191, 0.3)",
                filter: "drop-shadow(0 0 15px rgba(45, 212, 191, 0.3))",
              }}
            />
          )}
          {element.type === "pencil" && (
            <div 
              className="w-3 h-10 rounded-t-sm rotate-45"
              style={{ 
                background: "linear-gradient(180deg, rgba(234, 179, 8, 0.4) 0%, rgba(234, 179, 8, 0.2) 80%, rgba(100, 100, 100, 0.3) 100%)",
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.2)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Main Content - Softened Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-4 max-w-4xl w-full"
      >
        <div
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Main Headline - Larger */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Unlock your child's{" "}
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(45, 100%, 50%) 0%, hsl(50, 100%, 60%) 50%, hsl(40, 100%, 55%) 100%)",
                }}
              >
                math potential
              </span>
            </motion.h1>

            {/* Sub-headline - Increased line height */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-loose"
            >
              Transforming math learning into an exciting adventure for every age! Explore Abacus for ages 3–8, Vedic Math for ages 12+, and Personalized Math Coaching for learners of all ages.
            </motion.p>

         

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-5"
            >
              {/* Primary Button with Glow */}
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-display font-semibold px-8 py-6 text-lg rounded-2xl group transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  boxShadow: "0 0 30px rgba(234, 179, 8, 0.4), 0 0 60px rgba(234, 179, 8, 0.2), 0 4px 20px rgba(0,0,0,0.3)",
                }}
                asChild
              >
                <Link to="/contact#contact-form" className="flex items-center gap-2">
                  <motion.span
                    className="inline-flex"
                    animate={{ translateY: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Calendar className="w-5 h-5" />
                  </motion.span>
                  Book a Free Demo
                </Link>
              </Button>

              {/* Secondary Glass Button */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-display font-medium px-8 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link to="/courses/abacus">
                  <Play className="w-5 h-5 mr-2 fill-white/20" />
                  Explore Courses
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FuturisticHero;
