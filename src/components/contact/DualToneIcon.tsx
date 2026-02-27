import { Globe, GraduationCap, Clock } from "lucide-react";
import { motion } from "framer-motion";

type IconType = "globe" | "teacher" | "support";

interface DualToneIconProps {
  type: IconType;
  className?: string;
}

const DualToneIcon = ({ type, className = "" }: DualToneIconProps) => {
  const icons = {
    globe: Globe,
    teacher: GraduationCap,
    support: Clock,
  };

  const Icon = icons[type];

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* 3D shadow layer */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--vedic-teal) / 0.5))",
          transform: "translateZ(-10px) translateY(4px)",
          filter: "blur(8px)",
        }}
      />
      
      {/* Main icon container */}
      <div 
        className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--vedic-teal)))",
          boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)",
        }}
      >
        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
      </div>

      {/* Shine effect */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl opacity-30"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)",
        }}
      />
    </motion.div>
  );
};

export default DualToneIcon;
