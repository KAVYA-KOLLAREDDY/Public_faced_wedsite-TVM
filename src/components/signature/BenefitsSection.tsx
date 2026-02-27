import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Brain, Users, TrendingUp } from "lucide-react";
import childrenLearningImg from "@/assets/children-learning.jpg";

const benefits = [
  {
    icon: Target,
    title: "Focused Small Groups",
    description: "Intimate classes of 3-5 students ensure every child gets attention while learning collaboratively",
    gradient: "from-vedic-teal to-vedic-teal-light"
  },
  {
    icon: Brain,
    title: "Adaptive Learning Strategies", 
    description: "Targeted lessons that bridge gaps and accelerate understanding across all subjects",
    gradient: "from-vedic-navy to-vedic-navy-light"
  },
  {
    icon: Users,
    title: "Peer Learning Benefits",
    description: "Children learn from each other, building social skills and healthy academic motivation",
    gradient: "from-vedic-gold to-vedic-gold-light"
  },
  {
    icon: TrendingUp,
    title: "Confidence Through Mastery",
    description: "Skill-building approach that develops critical thinking and academic excellence",
    gradient: "from-vedic-teal-dark to-vedic-teal"
  }
];

const BenefitsSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-vedic-gold/10 text-vedic-gold">
            The Small Group Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Personalized learning for{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              every child
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning approach tailored to individual student needs
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits List with Floating 3D Icons */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                animation="fade-up"
                delay={index * 100}
              >
                <motion.div
                  className="flex items-start gap-5 p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-vedic-gold/20 hover:border-vedic-gold/40 hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 8 }}
                  onHoverStart={() => setHoveredIcon(index)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  {/* Floating 3D Icon */}
                  <motion.div
                    className={`
                      relative flex-shrink-0 w-14 h-14 rounded-xl 
                      bg-gradient-to-br ${benefit.gradient} 
                      flex items-center justify-center shadow-lg
                    `}
                    animate={{
                      y: hoveredIcon === index ? [-2, 2, -2] : 0,
                      rotateY: hoveredIcon === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: hoveredIcon === index ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                    {/* 3D shadow effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} opacity-40 blur-lg -z-10 translate-y-2`} />
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right: Image with overlay */}
          <AnimatedSection animation="scale" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={childrenLearningImg} 
                alt="Children engaged in small group learning" 
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/80 via-vedic-navy/20 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-vedic-gold to-vedic-gold-light border-2 border-white flex items-center justify-center text-vedic-navy font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-white font-medium">Small Groups of 3-5</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Interactive Learning</h3>
                <p className="text-white/80">Every child gets personalized attention in our engaging sessions</p>
              </div>

              {/* Floating stats */}
              <motion.div 
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-vedic-teal">95%</div>
                  <div className="text-sm text-muted-foreground">Improvement Rate</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-vedic-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-vedic-teal/20 rounded-full blur-2xl" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;