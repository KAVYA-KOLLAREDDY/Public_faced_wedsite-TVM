import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Globe, GraduationCap, Clock, Award } from "lucide-react";

// Counter hook
const useCounter = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      setCount(Math.floor(easeOutQuart(progress) * end));
      
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [shouldStart, end, duration]);

  return count;
};

const StatRibbon = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const studentsCount = useCounter(200, 2000, isInView);
  const countriesCount = useCounter(5, 1500, isInView);
  const hoursCount = useCounter(1000, 2500, isInView);

  const stats = [
    {
      icon: Globe,
      value: `${studentsCount}+`,
      label: "Students Worldwide",
      color: "hsl(var(--gold))",
    },
    {
      icon: Award,
      value: `${countriesCount}`,
      label: "Countries Served",
      color: "hsl(var(--teal))",
    },
    {
      icon: GraduationCap,
      value: "Expert",
      label: "Certified Teachers",
      color: "hsl(var(--gold))",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      color: "hsl(var(--teal))",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative -mt-16 z-20 mx-6 lg:mx-auto max-w-5xl"
    >
      <div className="rounded-2xl p-6 md:p-8 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border dark:border-vedic-gold/20 shadow-lg dark:shadow-none dark:ring-1 dark:ring-vedic-gold/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-center group"
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 border ${
                  stat.color.includes("gold") ? "bg-vedic-gold/20 dark:bg-vedic-gold/30 border-vedic-gold/30" : "bg-vedic-teal/20 dark:bg-vedic-teal/30 border-vedic-teal/30"
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${stat.color.includes("gold") ? "text-vedic-gold" : "text-vedic-teal"}`}
                />
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold mb-1 text-foreground"
                key={stat.value}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatRibbon;
