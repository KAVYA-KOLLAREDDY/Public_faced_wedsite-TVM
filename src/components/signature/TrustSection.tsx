import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Award, Users, Star, Clock, HeartHandshake } from "lucide-react";
import teamFounderImg from "@/assets/team-founder.jpg";
import teamTeacher1Img from "@/assets/team-teacher1.jpg";
import teamTeacher2Img from "@/assets/team-teacher2.jpg";
import founderPicImg from "@/assets/founder_pic.jpeg";

const parentAvatars = [
  { src: teamFounderImg, alt: "Parent" },
  { src: teamTeacher1Img, alt: "Parent" },
  { src: teamTeacher2Img, alt: "Parent" },
  { src: founderPicImg, alt: "Parent" },
  { src: teamTeacher1Img, alt: "Parent" },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Verified & Background-Checked Tutors",
    description: "Every instructor passes rigorous background checks and credential verification",
    stat: "100%",
    statLabel: "Verified"
  },
  {
    icon: Award,
    title: "Certified Teaching Experts",
    description: "All tutors hold relevant teaching certifications and education degrees",
    stat: "5+",
    statLabel: "Years Avg. Experience"
  },
  {
    icon: Users,
    title: "Trusted by 500+ Families",
    description: "Join hundreds of satisfied parents who've seen real results in their children",
    stat: "500+",
    statLabel: "Happy Families"
  },
  {
    icon: Star,
    title: "4.9 Star Parent Rating",
    description: "Consistently rated excellent by parents for quality, communication, and results",
    stat: "4.9",
    statLabel: "Average Rating"
  },
  {
    icon: Clock,
    title: "Flexible & Convenient",
    description: "Easy rescheduling, session recordings, and parent-friendly communication",
    stat: "24hr",
    statLabel: "Reschedule Notice"
  },
  {
    icon: HeartHandshake,
    title: "100% Satisfaction Guarantee",
    description: "Not happy with a session? We'll make it right or refund your payment",
    stat: "100%",
    statLabel: "Money-Back Guarantee"
  }
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-vedic-teal/10 text-vedic-teal">
            Parent Peace of Mind
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Parents{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your child's safety and success are our top priorities. Here's what sets us apart.
          </p>
        </AnimatedSection>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <AnimatedSection
              key={point.title}
              animation="fade-up"
              delay={index * 100}
            >
              <motion.div
                className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-vedic-gold/40 dark:border-vedic-gold/20 dark:hover:border-vedic-gold/40 hover:shadow-xl dark:shadow-vedic-gold/5 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Icon with glow */}
                <div className="relative mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-vedic-gold/20 to-vedic-teal/20 dark:from-vedic-gold/30 dark:to-vedic-teal/30 flex items-center justify-center group-hover:from-vedic-gold/30 group-hover:to-vedic-teal/30 transition-colors"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <point.icon className="w-7 h-7 text-vedic-gold" />
                  </motion.div>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 w-14 h-14 rounded-xl bg-vedic-gold/20 dark:bg-vedic-gold/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-vedic-gold transition-colors">
                  {point.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {point.description}
                </p>

                {/* Stat Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-border dark:border-vedic-gold/20">
                  <span className="text-2xl font-bold text-vedic-gold">{point.stat}</span>
                  <span className="text-xs text-muted-foreground">{point.statLabel}</span>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-vedic-gold/10 to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Social Proof Bar - theme-aware bg and border */}
        <AnimatedSection animation="fade-up" className="mt-12 md:mt-16">
          <div className="relative p-6 md:p-8 rounded-3xl bg-card border border-border dark:border-vedic-gold/20 shadow-sm dark:shadow-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-vedic-gold/5 via-vedic-teal/5 to-vedic-gold/5 dark:from-vedic-gold/10 dark:via-vedic-teal/10 dark:to-vedic-gold/10 pointer-events-none" aria-hidden />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left: Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {parentAvatars.map((avatar, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-border dark:border-card overflow-hidden flex-shrink-0 bg-muted"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">Join 500+ Parents</p>
                  <p className="text-sm text-muted-foreground">Who trust us with their children's education</p>
                </div>
              </div>

              {/* Right: Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-vedic-gold text-vedic-gold" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-foreground">4.9/5</span>
                  <span className="text-sm text-muted-foreground ml-1">from 200+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustSection;
