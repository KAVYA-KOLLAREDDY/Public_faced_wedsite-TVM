import { useRef } from "react";
import { Link } from "react-router-dom";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Zap, 
  Eye, 
  CheckCircle,
  Users,
  Trophy,
  Headphones,
  Sparkles,
  Globe,
  Mail
} from "lucide-react";
import FloatingMathSymbols from "@/components/FloatingMathSymbols";
import HeroMathSymbols from "@/components/HeroMathSymbols";
import CTAMathSymbols from "@/components/CTAMathSymbols";
import MagneticButton from "@/components/MagneticButton";
import worldNetworkImg from "@/assets/world-network.jpg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/TextReveal";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import { SocialSidebar } from "@/components/SocialSidebar";

// Course components
import StackedLevelCards from "@/components/levels/StackedLevelCards";
import BentoFeatures from "@/components/abacus/BentoFeatures";
import TestimonialsWithPagination from "@/components/abacus/TestimonialsWithPagination";
import PremiumAccordion from "@/components/abacus/PremiumAccordion";
import StatsBar from "@/components/vedic/StatsBar";

const benefits = [
  { icon: Brain, title: "Brain Development", description: "Stimulates both hemispheres, enhancing cognitive abilities." },
  { icon: Zap, title: "Speed & Accuracy", description: "Perform complex calculations faster than a calculator." },
  { icon: Eye, title: "Visual Learning", description: "Makes abstract concepts concrete and understandable." },
];

const stats = [
  { icon: Trophy, value: "Level 12", label: "Mastery" },
  { icon: Headphones, value: "Live 1-on-1", label: "Support" },
  { icon: Users, value: "Group Sessions", label: "Students" },
];

const faqs = [
  { question: "What age can my child start?", answer: "Children aged 3-8 can join our program. We have tailored levels for different age groups and abilities." },
  { question: "How long does each level take?", answer: "Typically 4-5   months per level. Progress depends on individual pace and practice." },
  { question: "Do we need a physical abacus?", answer: "Yes, a physical abacus is used throughout the learning process to help students understand and practice calculations effectively."
 },
  { question: "How many classes per week?", answer: "Up to 90 minutes of live classes per week with flexible scheduling." },
];

const AbacusCourse = () => {
  const levelsRef = useRef<HTMLElement>(null);

  const scrollToLevels = () => {
    levelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip">
      <Navbar />
      <SocialSidebar />

      {/* Hero Section - Matching Home Page Style */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)' }}
        />
        <div className="absolute inset-0 math-pattern opacity-20" />
        
        {/* Floating Math Symbols in Hero */}
        <HeroMathSymbols />
        
        {/* Floating Elements - Same as Home */}
        <div className="absolute top-32 left-20 w-16 h-16 border-2 border-gold/30 rotate-45 animate-float" />
        <div className="absolute bottom-40 right-32 w-20 h-20 border-2 border-teal-light/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gold/10 rotate-12 animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-8 h-8 bg-teal/20 rounded-lg animate-wiggle" />
        <div className="absolute bottom-60 left-32 w-24 h-24 border border-gold/10 rounded-full animate-rotate-slow" />

        <ParallaxWatermark text="ABACUS" className="top-1/3 -left-20" speed={0.15} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Same style as About */}
            <AnimatedSection animation="pop-in">
              <span className="inline-flex items-center gap-2 text-gold font-semibold tracking-widest uppercase text-xs bg-gold/10 px-4 py-2 rounded-full mb-8 badge-warm">
                <Sparkles className="w-4 h-4 animate-wiggle" />
                Abacus Mastery Program
              </span>
            </AnimatedSection>

            {/* Heading - Using TextReveal like About */}
            <TextReveal delay={100}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] px-1 sm:px-0">
                Unlock fast, confident
                <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mt-2">
                  mental mathematics
                </span>
              </h1>
            </TextReveal>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join our certified program designed for children aged 4-14. Transform how they learn numbers, calculation, and concentration through engaging digital learning.
              </p>
            </AnimatedSection>

            {/* CTA Buttons - Same style as Home with warm hover */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-wrap justify-center gap-4 hero-content-warm">
                <MagneticButton strength={0.25}>
                  <Button 
                    size="lg" 
                    className="bg-gold hover:bg-gold-light text-navy-dark font-display font-semibold px-8 py-6 text-lg rounded-2xl hero-cta-warm ripple-effect group transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact#contact-form" className="inline-flex items-center">
                      <motion.span
                        className="inline-flex mr-2"
                        animate={{ translateY: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.span>
                      Contact Us
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gold text-gold font-display font-medium px-8 py-6 text-lg rounded-2xl backdrop-blur-sm outline-cta-warm group transform hover:-translate-y-2 hover:bg-gold hover:text-navy-dark transition-all duration-300"
                    onClick={scrollToLevels}
                  >
                    View Levels
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 group-hover:animate-bounce transition-all" />
                  </Button>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar - Below Hero */}
      <StatsBar stats={stats} />

      {/* Benefits Section - Matching Programs Section Style */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-gold/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-teal/5 rotate-45 animate-bounce-gentle" />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4 animate-pop-in">
              Benefits
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gold animate-shimmer">Abacus?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              More than a calculation tool — a gateway to enhanced brain development.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 md:auto-rows-[1fr]">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                delay={index * 150}
                animation="pop"
                className="h-full min-h-0"
              >
                <div className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-transparent bg-card p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:border-gold/20 hover:shadow-xl sm:p-8">
                  {/* Shimmer effect on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
                  </div>

                  <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center">
                    <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-teal/25 sm:mb-6 sm:h-20 sm:w-20">
                      <benefit.icon className="h-9 w-9 text-teal transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="mb-3 shrink-0 font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-gold sm:text-xl">
                      {benefit.title}
                    </h3>
                    <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Levels Section */}
      <section ref={levelsRef} className="relative overflow-x-clip overflow-y-visible pt-16 pb-28 sm:pt-20 sm:pb-24 md:py-24">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)' 
          }}
        />
        <div className="absolute inset-0 math-pattern opacity-5" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold/20 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-teal/20 rotate-45 animate-float" />

        <ParallaxWatermark text="LEVELS" className="-right-20 top-[58%]" speed={0.12} />

        <div className="container mx-auto relative z-10">
          <AnimatedSection className="relative z-[2] mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Learning Path
            </span>
            <h2 className="font-display text-3xl font-bold text-white mb-4 sm:text-4xl md:mb-6 md:text-5xl">
              Six Progressive <span className="text-gold">Levels</span>
            </h2>
            <p className="text-base text-white/70 sm:text-lg">
              Navigate through our carefully designed curriculum that builds mathematical confidence step by step.
            </p>
          </AnimatedSection>

          <StackedLevelCards variant="abacus" />
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-zoom" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-teal/5 rounded-full blur-2xl animate-float-slow" />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Features
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to <span className="text-gold">Succeed</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A complete digital learning ecosystem designed for young mathematicians.
            </p>
          </AnimatedSection>

          <BentoFeatures />
        </div>
      </section>

      {/* Global Access - World Map Background Style */}
      <section className="py-[120px] relative overflow-hidden group/section">
        {/* World Map Background with subtle animation */}
        <div className="absolute inset-0 transition-transform duration-1000 group-hover/section:scale-105">
          <img 
            src={worldNetworkImg}
            alt=""
            className="w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover/section:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        {/* Floating Math Symbols */}
        <FloatingMathSymbols />

        {/* Floating warm orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px] animate-float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal/10 rounded-full blur-[80px] animate-float-gentle" style={{ animationDelay: '-3s' }} />

        <ParallaxWatermark text="GLOBAL" className="-right-20 top-1/3" speed={0.12} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism Panel */}
            <AnimatedSection animation="scale">
              <div className="relative group/card">
                {/* Animated glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-teal/20 to-gold/30 rounded-[3rem] blur-2xl opacity-60 border-glow-animate transition-opacity duration-500 group-hover/card:opacity-80" />
                
                {/* Glass Panel with warm hover */}
                <div className="relative glass-warm p-10 md:p-16 transition-all duration-500 group-hover/card:border-gold/40">
                  <div className="text-center space-y-8">
                    {/* Floating Globe Icon */}
                    <AnimatedSection animation="pop-in" delay={200}>
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold to-teal flex items-center justify-center mb-6 shadow-xl animate-float-gentle cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6 animate-warm-glow">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                    </AnimatedSection>

                    <TextReveal delay={300}>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        Learn from
                        <span className="text-gold transition-all duration-300 hover:text-gold-light cursor-default"> Anywhere</span>
                      </h2>
                    </TextReveal>

                    <AnimatedSection animation="fade-up" delay={400}>
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Access our online classes from anywhere in the world with 
                        <span className="text-gold font-semibold transition-colors duration-300 hover:text-gold-light cursor-default"> flexible timings</span> and 
                        <span className="text-teal font-semibold transition-colors duration-300 hover:text-teal-light cursor-default"> personalized attention</span>.
                      </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={500}>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Learn from top-notch selected professionals with hassle-free online education.
                      </p>
                    </AnimatedSection>

                    {/* Feature badges with warm hover effects */}
                    <AnimatedSection animation="fade-up" delay={600}>
                      <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {["24/7 Access", "Expert Teachers", "Live Classes", "Global Community"].map((feature, index) => (
                          <span 
                            key={feature}
                            className="group/badge inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/20 rounded-full text-sm font-medium text-gold transition-all duration-300 hover:bg-gold/25 hover:border-gold/40 hover:scale-110 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <CheckCircle className="w-4 h-4 transition-all duration-300 group-hover/badge:scale-125 group-hover/badge:rotate-12 group-hover/badge:text-gold-light" />
                            <span className="transition-colors duration-300 group-hover/badge:text-gold-light">{feature}</span>
                          </span>
                        ))}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Parent <span className="text-gold">Voices</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from families who've transformed their children's math skills.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <TestimonialsWithPagination />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection animation="fade-right">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
                Support
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Find answers to common questions about our abacus program.
              </p>
              <Button
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:border-gold hover:text-gold font-display px-6"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <PremiumAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA - Matching Home Hero Style */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)' }}
        />
        <div className="absolute inset-0 math-pattern opacity-20" />
        
        {/* Floating Math Symbols in CTA */}
        <CTAMathSymbols />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Transform Your Child's{" "}
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Math Journey
              </span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Unlock the power of mental mathematics and watch your child's confidence soar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton strength={0.25}>
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-light text-navy-dark font-display font-semibold px-8 py-6 text-lg rounded-2xl cta-glow group transform hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact#contact-form" className="flex items-center gap-2">
                    <motion.span
                      className="inline-flex"
                      animate={{ translateY: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.span>
                    Contact Us
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-display font-medium px-8 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all"
                    asChild
                >
                  <DiscoverProgramsLink>
                    View All Courses
                  </DiscoverProgramsLink>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AbacusCourse;
