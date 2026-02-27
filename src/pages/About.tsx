import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Target, Heart, Lightbulb, Users, Award, Calculator, Brain, 
  UserCheck, Laptop, ChartLine, Shield, Medal, Gamepad2, UsersRound, 
  BarChart3, Quote, Eye, Sparkles, GraduationCap, BookOpen, Star, Zap, Globe,
  Smile, Activity, BrainCircuit, HeartHandshake, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import { TextReveal } from "@/components/TextReveal";
import { GlowCard } from "@/components/GlowCard";
import { BentoGrid, AnimatedBentoItem } from "@/components/BentoGrid";
import { SocialSidebar } from "@/components/SocialSidebar";

// Images
import abacusCourseImg from "@/assets/abacus-course.jpg";
import vedicMathImg from "@/assets/vedic-math-course.jpg";
import tutoringImg from "@/assets/tutoring-course.jpg";
import founderImg from "@/assets/founder_pic.jpeg";
import curiousChildImg from "@/assets/curious-child.jpg";
import worldNetworkImg from "@/assets/world-network.jpg";
import childrenLearningImg from "@/assets/children-learning.jpg";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for the highest standards in education and student outcomes." },
  { icon: Heart, title: "Passion", description: "Our love for mathematics inspires us to create engaging learning experiences." },
  { icon: Lightbulb, title: "Innovation", description: "We blend ancient wisdom with modern teaching methodologies." },
  { icon: Users, title: "Community", description: "Building a supportive network of learners, parents, and educators." },
];

const fourPillars = [
  { 
    icon: UsersRound, 
    title: "Socially", 
    description: "Building confidence through collaborative learning and peer interactions",
    color: "from-vedic-gold/20 to-vedic-gold/5"
  },
  { 
    icon: Heart, 
    title: "Emotionally", 
    description: "Nurturing resilience and positive attitudes toward challenges",
    color: "from-rose-500/20 to-rose-500/5"
  },
  { 
    icon: Activity, 
    title: "Physically", 
    description: "Engaging activities that develop fine motor skills and coordination",
    color: "from-vedic-teal/20 to-vedic-teal/5"
  },
  { 
    icon: BrainCircuit, 
    title: "Mentally", 
    description: "Strengthening cognitive abilities and problem-solving skills",
    color: "from-purple-500/20 to-purple-500/5"
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <SocialSidebar />

      {/* ============================================
          PART 1: THE VISIONARY HERO HEADER
          ============================================ */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20">
        <ParallaxWatermark text="VIVID" className="top-1/3 -left-20" speed={0.15} />
        
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-vedic-gold/5 via-transparent to-vedic-teal/5" />
        
        {/* Floating decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-vedic-gold/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-vedic-teal/10 rounded-full blur-[100px] animate-float-delayed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <AnimatedSection animation="pop-in">
              <span className="inline-flex items-center gap-2 text-vedic-gold font-semibold tracking-widest uppercase text-xs bg-vedic-gold/10 px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4" />
                About Tiny Vivid Minds
              </span>
            </AnimatedSection>

            {/* Main Heading - Large Scale */}
            <TextReveal delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-8">
                Nurturing the
                <span className="block bg-gradient-to-r from-vedic-gold via-vedic-gold-light to-vedic-gold bg-clip-text text-transparent">
                  Next Generation
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">of Vivid Minds</span>
              </h1>
            </TextReveal>

            {/* Sub-headline - Lead paragraph with larger font */}
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                A globally recognized online academy committed to children's mathematical 
                skill development through well-researched, need-based, quality programs 
                for ages 4 and above.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-semibold px-10 py-6 text-lg hover:shadow-2xl hover:shadow-vedic-gold/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          PART 2: THE 'CURIOUS SOULS' SPLIT SECTION
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden">
        <ParallaxWatermark text="CURIOUS" className="-right-32 top-0" speed={0.2} />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Artistic Image */}
            <AnimatedSection animation="fade-right" className="relative">
              <div className="relative group">
                {/* Overlapping decorative layer */}
                <div className="absolute -inset-8 bg-gradient-to-br from-vedic-gold/30 via-vedic-teal/20 to-vedic-gold/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-all duration-700" />
                <div className="absolute -inset-4 bg-gradient-to-tl from-vedic-teal/20 to-transparent rounded-[2.5rem] -rotate-2 group-hover:-rotate-4 transition-all duration-700" />
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={curiousChildImg}
                    alt="Child looking at mathematical shapes with wonder"
                    className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/20 via-transparent to-transparent" />
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-vedic-gold to-vedic-gold-light rounded-2xl p-5 shadow-xl animate-float">
                  <Sparkles className="w-8 h-8 text-vedic-navy" />
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Text Content */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-8">
                <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">
                  The Curious Souls
                </span>
                
                <TextReveal>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Always Seeking
                    <span className="block text-vedic-gold mt-2">
                      "Something More, Something New"
                    </span>
                  </h2>
                </TextReveal>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From learning basic counting to building mathematical vocabulary, 
                  recognizing patterns to solving complex problems — young children are 
                  just curious souls. They are nimble at picking skills and hop to 
                  another one fast.
                </p>

                <div className="relative pl-6 border-l-4 border-vedic-gold/40">
                  <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed italic">
                    It's fascinating how fast children learn in their growing years. 
                    These curious souls always look for something more — and this is the 
                    <span className="text-vedic-gold font-semibold not-italic"> perfect age </span>
                    to give a kick for growth.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your child can "grow more and learn more" in so many different ways. 
                  It's a matter of opportunity and environment. We understand that you 
                  want the best for your kids — and so do we.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          PART 3: THE 'FOUR PILLARS' BENTO GRID
          ============================================ */}
      <section className="py-[120px] bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="GROWTH" className="top-20 -left-20" speed={0.18} />
        
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection animation="blur-in">
              <span className="text-vedic-teal font-semibold tracking-widest uppercase text-sm">
                Holistic Development
              </span>
            </AnimatedSection>
            <TextReveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 pt-3 leading-tight">
                Growing as an
                <span className="text-vedic-gold"> Individual</span>
              </h2>
            </TextReveal>
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-xl text-muted-foreground mt-6">
                With Tiny Vivid Minds, your kids get exposed to a surrounding which 
                helps them grow as an individual — in every dimension.
              </p>
            </AnimatedSection>
          </div>

          {/* Bento Grid - 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fourPillars.map((pillar, index) => (
              <AnimatedSection 
                key={pillar.title} 
                animation="pop-in" 
                delay={index * 150}
              >
                <div className={`
                  relative group p-8 rounded-3xl bg-gradient-to-br ${pillar.color}
                  hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                  border border-white/10 backdrop-blur-sm h-full
                `}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-vedic-gold/30 to-vedic-teal/30 blur-xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <pillar.icon className="w-8 h-8 text-vedic-gold" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Supporting text */}
          <AnimatedSection animation="fade-up" delay={600} className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let your kid dive deep into Tiny Vivid Minds, developing 
              <span className="text-vedic-gold font-semibold"> creative thinking</span>, 
              <span className="text-vedic-teal font-semibold"> reasoning skills</span>, 
              verbal skills and logic reasoning in their growing years.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          PART 4: THE 'ANYWHERE, EVERYWHERE' FEATURE
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0">
          <img 
            src={worldNetworkImg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <ParallaxWatermark text="GLOBAL" className="-right-20 top-1/3" speed={0.12} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism Panel */}
            <AnimatedSection animation="scale">
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-vedic-gold/30 via-vedic-teal/20 to-vedic-gold/30 rounded-[3rem] blur-2xl opacity-60" />
                
                {/* Glass Panel */}
                <div className="relative backdrop-blur-xl bg-card/70 border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl">
                  <div className="text-center space-y-8">
                    <AnimatedSection animation="pop-in" delay={200}>
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-vedic-gold to-vedic-teal flex items-center justify-center mb-6 shadow-xl">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                    </AnimatedSection>

                    <TextReveal delay={300}>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        Anywhere,
                        <span className="text-vedic-gold"> Everywhere</span>
                      </h2>
                    </TextReveal>

                    <AnimatedSection animation="fade-up" delay={400}>
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Access is spread across the globe. You can get access to our services 
                        online, with <span className="text-vedic-gold font-semibold">flexible timings</span> and 
                        <span className="text-vedic-teal font-semibold"> personalized attention</span>.
                      </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={500}>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        You get access to hassle-free online education, where your kids 
                        learn from top-notch selected professionals.
                      </p>
                    </AnimatedSection>

                    {/* Feature badges */}
                    <AnimatedSection animation="fade-up" delay={600}>
                      <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {["24/7 Access", "Expert Teachers", "Live Classes", "Global Community"].map((feature, i) => (
                          <span 
                            key={feature}
                            className="px-4 py-2 bg-vedic-gold/10 border border-vedic-gold/20 rounded-full text-sm font-medium text-vedic-gold"
                          >
                            {feature}
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

      {/* ============================================
          PART 5: THE EINSTEIN QUOTE FINALE
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden bg-vedic-navy">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vedic-gold/20 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vedic-teal/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-vedic-gold/10 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <Quote className="w-16 h-16 text-vedic-gold/40 mx-auto mb-8" />
            </AnimatedSection>

            <AnimatedSection animation="blur-in" delay={200}>
              <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed italic">
                "If you want your children to be intelligent, read them fairy tales. 
                <span className="block mt-4">
                  If you want them to be 
                  <span className="text-vedic-gold font-semibold"> more intelligent</span>, 
                  read them more fairy tales."
                </span>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <cite className="block mt-8 text-xl text-vedic-gold font-semibold not-italic tracking-wide">
                — Albert Einstein
              </cite>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={600}>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-lg text-white/70">
                  At Tiny Vivid Minds, we make learning feel like discovering fairy tales — 
                  magical, engaging, and transformative.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS SECTION - Z-Pattern Layout
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden">
        <ParallaxWatermark text="LEARN" className="top-1/4 -left-32" speed={0.2} />
        
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20" animation="fade-up">
            <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Our Programs</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Curated for
              <span className="text-vedic-gold"> GEN Z Kids</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Programs where your kid learns, plays, creates, and engages.
            </p>
          </AnimatedSection>

          {/* Program 1 - Abacus */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
            <AnimatedSection animation="fade-right" className="relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-vedic-gold/30 to-vedic-gold/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={abacusCourseImg} 
                    alt="Abacus Learning" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/90 via-vedic-navy/20 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <span className="inline-block bg-vedic-gold text-vedic-navy px-3 py-1 rounded-full text-sm font-semibold mb-3">Ages 3-8</span>
                      <h3 className="font-display text-3xl font-bold">Abacus</h3>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <TextReveal>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ancient Tool,
                  <span className="block text-vedic-gold">Modern Minds</span>
                </h3>
              </TextReveal>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Program includes tools & visualization. Our Abacus program develops mental 
                calculation skills that form the foundation for mathematical excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Mental calculation", "Concentration", "Enhanced memory", "Visual-spatial"].map((feature, i) => (
                  <AnimatedSection key={feature} animation="pop-in" delay={300 + i * 100}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-vedic-gold/5 hover:bg-vedic-gold/10 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-vedic-gold" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Program 2 - Vedic Math (Z-Pattern flip) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
            <AnimatedSection animation="fade-right" delay={200} className="lg:order-2 relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-vedic-teal/30 to-vedic-teal/10 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={vedicMathImg} 
                    alt="Vedic Mathematics" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/90 via-vedic-navy/20 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <span className="inline-block bg-vedic-teal text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Ages 12+</span>
                      <h3 className="font-display text-3xl font-bold">Vedic Maths</h3>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" className="lg:order-1">
              <TextReveal>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Speed Meets
                  <span className="block text-vedic-teal">Elegance</span>
                </h3>
              </TextReveal>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ancient techniques for modern mathematical excellence. Unlock rapid-calculation 
                techniques that sharpen analytical thinking.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Speed calculation", "Pattern recognition", "Problem-solving", "Creativity"].map((feature, i) => (
                  <AnimatedSection key={feature} animation="pop-in" delay={300 + i * 100}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-vedic-teal/5 hover:bg-vedic-teal/10 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-vedic-teal" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Program 3 - Personalized Coaching */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection animation="fade-right" className="relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={childrenLearningImg} 
                    alt="Personalized Coaching" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/90 via-vedic-navy/20 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">All Ages</span>
                      <h3 className="font-display text-3xl font-bold">Personalized Coaching</h3>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <TextReveal>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Individual
                  <span className="block text-purple-500">Attention</span>
                </h3>
              </TextReveal>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                One-on-one tutoring tailored to individual needs. Your child learns at their 
                own pace with customized curriculum.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["1-on-1 attention", "Custom curriculum", "Flexible timing", "Progress tracking"].map((feature, i) => (
                  <AnimatedSection key={feature} animation="pop-in" delay={300 + i * 100}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US - Bento Grid
          ============================================ */}
      <section className="py-[120px] bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="WHY" className="top-10 -right-20" speed={0.15} />
        
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="blur-in">
            <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Expertise Meets
              <span className="text-vedic-gold"> Innovation</span>
            </h2>
          </AnimatedSection>

          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <AnimatedBentoItem
              title="Expert Teachers"
              description="Certified instructors with years of experience in child education and specialized training."
              icon={GraduationCap}
              variant="highlight"
              animation="pop-in"
              delay={0}
            />
            <AnimatedBentoItem
              title="Online Learning"
              description="Flexible online classes that fit your family's schedule with interactive tools."
              icon={Laptop}
              animation="pop-in"
              delay={100}
            />
            <AnimatedBentoItem
              title="Proven Results"
              description="95% success rate with measurable improvements in math skills and confidence."
              icon={ChartLine}
              variant="subtle"
              animation="pop-in"
              delay={200}
            />
            <AnimatedBentoItem
              title="Child-Centered"
              description="Every program is designed with the child's well-being and learning style at center."
              icon={HeartHandshake}
              animation="pop-in"
              delay={300}
            />
          </BentoGrid>
        </div>
      </section>

      {/* ============================================
          CORE VALUES
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden">
        <ParallaxWatermark text="VALUES" className="top-1/4 -left-20" speed={0.2} />
        
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-up">
            <span className="text-vedic-teal font-semibold tracking-widest uppercase text-sm">Our Core Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              What <span className="text-vedic-gold">Drives</span> Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="flip" delay={index * 150} className="h-full">
                <div className="group text-center p-8 rounded-3xl bg-card hover:bg-gradient-to-br hover:from-vedic-gold/10 hover:to-vedic-teal/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-vedic-gold/20 h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-vedic-gold/20 to-vedic-teal/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-vedic-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-vedic-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOUNDER'S MESSAGE
          ============================================ */}
      <section className="py-[120px] bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="TEAM" className="-right-32 top-20" speed={0.18} />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image */}
            <AnimatedSection animation="fade-right" className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-vedic-gold/30 to-vedic-teal/20 rounded-[2rem] rotate-2 group-hover:rotate-4 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={founderImg} 
                    alt="Founders of Tiny Vivid Minds" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/60 to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <AnimatedSection animation="blur-in">
                <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">
                  A Message from Our Founders
                </span>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="relative pl-6 border-l-4 border-vedic-gold/40">
                  <Quote className="w-8 h-8 text-vedic-gold/30 mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                   
                    "Mathematics is not just about numbers and calculations; it's about developing critical thinking, problem-solving skills, and confidence that will help children throughout their lives.Our dedicated team nurtures young minds of age 3-8 years through the timeless art of abacus, building foundational numeracy, concentration, and confidence. For students over the age 12, we unlock the power of Vedic Mathematics, offering elegant, rapid‑calculation techniques that sharpen analytical thinking and problem‑solving skills."


                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At <b>Tiny Vivid Minds,</b> we blend tradition with innovation, ensuring every learner embarks on a journey of curiosity, excellence, and joy. Explore our programs, meet our instructors, and join us in shaping the mathematicians of tomorrow.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="pop-in" delay={400}>
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <h5 className="font-display font-bold text-lg text-foreground">Sai Tejasvi Peravali</h5>
                    <p className="text-vedic-gold text-sm font-medium">Director of Tiny Vivid Minds</p>
                  </div>
                  {/* <div>
                    <h5 className="font-display font-bold text-lg text-foreground">Yasasvi Peravali</h5>
                    <p className="text-vedic-teal text-sm font-medium">Founder & Chief Education Officer</p>
                  </div> */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className="py-20 bg-gradient-to-r from-vedic-navy via-vedic-navy-light to-vedic-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatsCounter end={200} suffix="+" label="Students Taught" />
              <StatsCounter end={95} suffix="%" label="Success Rate" />
              <StatsCounter end={4} suffix="+" label="Years Experience" />
              <StatsCounter end={5} suffix="+" label="Countries Reached" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vedic-gold/10 via-transparent to-vedic-teal/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vedic-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="zoom">
              <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Start Today</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Ready to Join Our
                <span className="block text-vedic-gold">Learning Community?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Discover how Tiny Vivid Minds can transform your child's mathematical 
                journey and unlock their full potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-semibold px-10 py-6 text-lg hover:shadow-2xl hover:shadow-vedic-gold/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <Link to="/contact#contact-form" className="flex items-center gap-2">
                    <motion.span
                      className="inline-flex"
                      animate={{ translateY: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Calendar className="h-5 w-5" />
                    </motion.span>
                    Book a Free Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-vedic-gold text-vedic-gold hover:bg-vedic-gold hover:text-vedic-navy px-10 py-6 text-lg transition-all"
                >
                  <Link to="/courses/abacus">Explore Programs</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
