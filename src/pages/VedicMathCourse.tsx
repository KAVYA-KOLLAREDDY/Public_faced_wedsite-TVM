import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Puzzle, 
  Lightbulb, 
  Timer, 
  Brain, 
  Smile, 
  Trophy,
  Users,
  Headphones,
  Sparkles,
  Globe,
  CheckCircle,
  Calendar
} from "lucide-react";
import FloatingMathSymbols from "@/components/FloatingMathSymbols";
import HeroMathSymbols from "@/components/HeroMathSymbols";
import CTAMathSymbols from "@/components/CTAMathSymbols";
import MagneticButton from "@/components/MagneticButton";
import { useConfetti } from "@/hooks/useConfetti";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/TextReveal";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import { SocialSidebar } from "@/components/SocialSidebar";

// Vedic-specific components
import StackedLevelCards from "@/components/levels/StackedLevelCards";
import VedicBentoGrid from "@/components/vedic/VedicBentoGrid";
import InfiniteTestimonials from "@/components/vedic/InfiniteTestimonials";
import VedicFAQ from "@/components/vedic/VedicFAQ";

// Images
import worldNetworkImg from "@/assets/world-network.jpg";

const whyChoose = [
  { 
    icon: Zap, 
    title: "Lightning Speed", 
    description: "Perform calculations 10-15 times faster than conventional methods while maintaining accuracy.",
    color: "gold"
  },
  { 
    icon: Puzzle, 
    title: "Pattern Recognition", 
    description: "Develop the ability to recognize mathematical patterns, enhancing analytical thinking.",
    color: "teal"
  },
  { 
    icon: Lightbulb, 
    title: "Creative Problem Solving", 
    description: "Learn multiple approaches to solve the same problem, fostering creativity and flexibility.",
    color: "navy"
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students" },
  { icon: Trophy, value: "Level 6", label: "Mastery" },
  { icon: Headphones, value: "Live 1-on-1", label: "Support" },
];

const benefits = [
  { icon: Timer, title: "10x Faster Calculations", description: "Students perform operations 10-15 times faster than traditional methods." },
  { icon: Brain, title: "Enhanced Memory", description: "Pattern-based learning improves memory retention significantly." },
  { icon: Smile, title: "Reduced Math Anxiety", description: "Simple techniques make mathematics more approachable." },
  { icon: Trophy, title: "Competitive Edge", description: "Superior speed gives advantage in exams and competitions." },
];

const VedicMathCourse = () => {
  const levelsRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { triggerConfetti } = useConfetti();

  const scrollToLevels = () => {
    levelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookDemo = () => {
    triggerConfetti();
    setTimeout(() => {
      navigate('/contact#contact-form');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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

        <ParallaxWatermark text="VEDIC" className="top-1/3 -left-20" speed={0.15} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Same style as About */}
            <AnimatedSection animation="pop-in">
              <span className="inline-flex items-center gap-2 text-gold font-semibold tracking-widest uppercase text-xs bg-gold/10 px-4 py-2 rounded-full mb-8 badge-warm">
                <Sparkles className="w-4 h-4 animate-wiggle" />
                Vedic Mathematics Program
              </span>
            </AnimatedSection>

            {/* Heading - Using TextReveal like About */}
            <TextReveal delay={100}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Think Faster, Solve
                <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mt-2">
                  Smarter
                </span>
              </h1>
            </TextReveal>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Empower your child with ancient Indian techniques that make math faster, easier, and fun. 
                Designed for ages 8–14.
              </p>
            </AnimatedSection>

            {/* CTA Buttons - Same style as Home with warm hover */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-wrap justify-center gap-4 hero-content-warm">
                <MagneticButton strength={0.25}>
                  <Button 
                    size="lg" 
                    className="bg-gold hover:bg-gold-light text-navy-dark font-display font-semibold px-8 py-6 text-lg rounded-2xl hero-cta-warm ripple-effect group transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                    onClick={handleBookDemo}
                  >
                    <motion.span
                      className="inline-flex mr-2"
                      animate={{ translateY: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Calendar className="w-5 h-5" />
                    </motion.span>
                    Book Free Demo
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gold text-gold font-display font-medium px-8 py-6 text-lg rounded-2xl backdrop-blur-sm outline-cta-warm group transform hover:-translate-y-2 hover:bg-gold hover:text-navy-dark transition-all duration-300"
                    onClick={scrollToLevels}
                  >
                    View Course Levels
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 group-hover:animate-bounce transition-all" />
                  </Button>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar - Below Hero */}
      <div className="relative py-6 border-y border-border bg-gradient-to-r from-gold/5 via-transparent to-teal/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="flex items-center gap-3 group stat-card-warm cursor-default px-4 py-2 rounded-xl"
              >
                <div className="stat-icon w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-teal/20 flex items-center justify-center transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Vedic Maths - Matching Programs Section Style */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-gold/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-teal/5 rotate-45 animate-bounce-gentle" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4 animate-pop-in">
              Why Vedic Maths?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ancient Wisdom, <span className="text-gold animate-shimmer">Modern Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Revolutionary techniques that transform how children approach and solve mathematical problems.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150} animation="pop">
                <div className="group bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl text-center transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-transparent hover:border-gold/20 relative overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-shimmer" />
                  </div>
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    item.color === 'gold' ? 'bg-gold/15 group-hover:bg-gold/25' :
                    item.color === 'teal' ? 'bg-teal/15 group-hover:bg-teal/25' :
                    'bg-navy/10 group-hover:bg-navy/20'
                  }`}>
                    <item.icon className={`w-10 h-10 transition-transform duration-300 group-hover:scale-110 ${
                      item.color === 'gold' ? 'text-gold' :
                      item.color === 'teal' ? 'text-teal' :
                      'text-navy'
                    }`} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Program - Bento Grid */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-zoom" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-teal/5 rounded-full blur-2xl animate-float-slow" />
        
        <ParallaxWatermark text="LEARN" className="-right-20 top-1/4" speed={0.12} />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              About the Program
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything Your Child <span className="text-gold">Needs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our program introduces children to ancient Indian math techniques that simplify even the toughest calculations.
            </p>
          </AnimatedSection>

          <VedicBentoGrid />
        </div>
      </section>

      {/* Auto-Glide Levels */}
      <section ref={levelsRef} id="levels" className="py-24 relative overflow-hidden">
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

        <ParallaxWatermark text="LEVELS" className="-right-20 top-1/4" speed={0.12} />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Learning Path
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Master Vedic Math in <span className="text-gold">Six Levels</span>
            </h2>
            <p className="text-white/70 text-lg">
              Navigate through our carefully designed curriculum that builds mathematical confidence step by step.
            </p>
          </AnimatedSection>

          <StackedLevelCards variant="vedic" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Benefits
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transform Your Child's <span className="text-gold">Math Skills</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100} animation="pop" className="h-full">
                <div className="group text-center p-6 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-teal/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <benefit.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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

        <div className="container mx-auto px-6 relative z-10">
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
                        Master Vedic Mathematics from the comfort of your home with 
                        <span className="text-gold font-semibold transition-colors duration-300 hover:text-gold-light cursor-default"> flexible schedules</span> and 
                        <span className="text-teal font-semibold transition-colors duration-300 hover:text-teal-light cursor-default"> dedicated mentors</span>.
                      </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={500}>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Join thousands of families worldwide who've discovered the joy of learning.
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

      {/* Testimonials - Infinite Slider */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Parents <span className="text-gold">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real feedback from families who've experienced the power of Vedic Mathematics.
            </p>
          </AnimatedSection>
        </div>

        <InfiniteTestimonials />
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection animation="fade-right">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Find answers to common questions about our Vedic Math program.
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

            <VedicFAQ />
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
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Help Your Child Discover the{" "}
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                Joy of Numbers
              </span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Transform your child's mathematical journey with ancient techniques that make learning fun and effective.
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
                      <Calendar className="w-5 h-5" />
                    </motion.span>
                    Book Free Demo Now
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
                  <Link to="/courses/abacus">
                    View All Courses
                  </Link>
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

export default VedicMathCourse;
