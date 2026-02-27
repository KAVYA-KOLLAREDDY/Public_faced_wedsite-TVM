import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Rocket, Calendar, CheckCircle } from "lucide-react";

const personas = [
  {
    icon: Heart,
    title: "The Struggler",
    tagline: "Closing learning gaps with patience.",
    description: "For students who need extra support and encouragement to build foundational skills at their own pace.",
    gradient: "from-vedic-gold/10 to-vedic-gold/5",
    borderColor: "border-vedic-gold/30",
    iconBg: "bg-gradient-to-br from-vedic-gold to-vedic-gold-light",
    accentColor: "bg-vedic-gold",
    features: ["Patient guidance", "Gap analysis", "Confidence building"]
  },
  {
    icon: Rocket,
    title: "The Achiever",
    tagline: "Advanced curriculum to stay ahead.",
    description: "For high-performing students who want to accelerate their learning and explore beyond the regular curriculum.",
    gradient: "from-vedic-teal/10 to-vedic-teal/5",
    borderColor: "border-vedic-teal/30",
    iconBg: "bg-gradient-to-br from-vedic-teal to-vedic-teal-light",
    accentColor: "bg-vedic-teal",
    features: ["Advanced topics", "Challenge problems", "Enrichment activities"]
  },
  {
    icon: Calendar,
    title: "The Busy Bee",
    tagline: "Flexible timing for active families.",
    description: "For students with packed schedules who need quality learning sessions that fit around their activities.",
    gradient: "from-vedic-navy/5 to-vedic-navy/10",
    borderColor: "border-vedic-navy/30",
    iconBg: "bg-gradient-to-br from-vedic-navy to-vedic-navy-light",
    accentColor: "bg-vedic-navy",
    features: ["Flexible scheduling", "Weekend options", "Makeup sessions"]
  }
];

const StudentPersonas = () => {
  return (
    <section id="students" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-vedic-gold/10 text-vedic-gold">
            Student Profiles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who Is This{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              For?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our personalized approach supports diverse learning needs and skill levels
          </p>
        </AnimatedSection>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <AnimatedSection
              key={persona.title}
              animation="fade-up"
              delay={index * 150}
            >
              <motion.div
                className={`
                  relative p-8 rounded-3xl border-2 ${persona.borderColor}
                  bg-gradient-to-br ${persona.gradient}
                  shadow-lg hover:shadow-xl transition-all duration-300
                  overflow-hidden group h-full
                `}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-vedic-gold/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-vedic-teal/10 blur-xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${persona.iconBg} shadow-lg`}>
                      <persona.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`w-3 h-3 rounded-full ${persona.accentColor}`} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-vedic-gold font-medium mb-4 text-sm italic">
                    "{persona.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {persona.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {persona.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + fIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-vedic-gold flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentPersonas;