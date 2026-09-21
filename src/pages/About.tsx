import { Link } from "react-router-dom";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Users,
  UsersRound,
  Quote,
  Sparkles,
  GraduationCap,
  Globe,
  Activity,
  BrainCircuit,
  HeartHandshake,
  Mail,
  Laptop,
  ChartLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import { TextReveal } from "@/components/TextReveal";
import { BentoGrid, AnimatedBentoItem } from "@/components/BentoGrid";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HIGHLIGHTED_COUNTRY_COUNT } from "@/config/globalNetworkCountries";

import abacusCourseImg from "@/assets/TVM_tools/abacus.png";
import vedicMathImg from "@/assets/students-learning/vedic_math_learning.png";
import founderImg from "@/assets/founder_pic2.jpeg";
import curiousChildImg from "@/assets/students-learning/curious-child.jpg";
import worldNetworkImg from "@/assets/world-network.jpg";
import mathematicsImg from "@/assets/students-learning/maths.png";
import handwritingImg from "@/assets/students-learning/hand_writing.png";
import phonicsImg from "@/assets/students-learning/phonetics.png";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive to provide thoughtful, structured, and high-quality learning experiences that help every child make meaningful progress.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our passion for learning inspires us to create engaging experiences that help children stay curious and excited to grow.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We combine proven teaching approaches with engaging, modern learning experiences that make learning relevant and enjoyable.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build a supportive learning community where children, parents, and educators work together toward meaningful growth.",
  },
];

const fourPillars = [
  {
    icon: UsersRound,
    title: "Socially",
    description:
      "Building confidence through communication, collaboration, and positive learning interactions.",
    color: "from-vedic-gold/20 to-vedic-gold/5",
  },
  {
    icon: Heart,
    title: "Emotionally",
    description:
      "Encouraging resilience, curiosity, and a positive attitude toward learning and challenges.",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Activity,
    title: "Physically",
    description:
      "Developing coordination, focus, and physical engagement through age-appropriate learning activities.",
    color: "from-vedic-teal/20 to-vedic-teal/5",
  },
  {
    icon: BrainCircuit,
    title: "Mentally",
    description:
      "Strengthening thinking, reasoning, concentration, and problem-solving skills through meaningful learning experiences.",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

type Accent = "gold" | "teal" | "purple" | "rose" | "orange";

const aboutPrograms: {
  name: string;
  headline: [string, string];
  description: string;
  features: string[];
  image: string;
  alt: string;
  accent: Accent;
}[] = [
  {
    name: "Abacus",
    headline: ["Numbers Made Simple,", "Minds Made Strong"],
    description:
      "A visual and hands-on approach to numbers that helps children build a strong foundation for mental math while making learning active and engaging.",
    features: ["Mental Calculation", "Concentration", "Number Sense", "Visual Learning"],
    image: abacusCourseImg,
    alt: "Abacus Learning",
    accent: "gold",
  },
  {
    name: "Vedic Mathematics",
    headline: ["Ancient Wisdom,", "Modern Thinking"],
    description:
      "Explore smart mathematical techniques that encourage learners to see patterns, simplify calculations, and approach problems in new ways.",
    features: ["Faster Calculations", "Pattern Recognition", "Logical Thinking", "Problem-Solving"],
    image: vedicMathImg,
    alt: "Vedic Mathematics",
    accent: "teal",
  },
  {
    name: "Mathematics",
    headline: ["Think Beyond", "the Numbers"],
    description:
      "Build a deeper understanding of mathematics through concept-focused learning, practical application, and step-by-step exploration.",
    features: ["Concept Clarity", "Mathematical Reasoning", "Practical Application", "Analytical Thinking"],
    image: mathematicsImg,
    alt: "Mathematics Learning",
    accent: "purple",
  },
  {
    name: "Handwriting",
    headline: ["Where Every Stroke", "Builds Confidence"],
    description:
      "Develop a clear and comfortable writing style through guided practice that encourages consistency, control, and attention to detail.",
    features: ["Letter Formation", "Writing Control", "Neatness", "Writing Fluency"],
    image: handwritingImg,
    alt: "Handwriting Practice",
    accent: "rose",
  },
  {
    name: "Phonics",
    headline: ["Where Sounds", "Become Words"],
    description:
      "Discover the building blocks of language by learning how sounds connect with letters and words in a fun, structured learning environment.",
    features: ["Sound Recognition", "Letter-Sound Connection", "Word Building", "Early Reading"],
    image: phonicsImg,
    alt: "Phonics Learning",
    accent: "orange",
  },
];

const accentStyles: Record<
  Accent,
  { glow: string; text: string; chip: string; dot: string }
> = {
  gold: {
    glow: "from-vedic-gold/30 to-vedic-gold/10",
    text: "text-vedic-gold",
    chip: "bg-vedic-gold/5 hover:bg-vedic-gold/10",
    dot: "bg-vedic-gold",
  },
  teal: {
    glow: "from-vedic-teal/30 to-vedic-teal/10",
    text: "text-vedic-teal",
    chip: "bg-vedic-teal/5 hover:bg-vedic-teal/10",
    dot: "bg-vedic-teal",
  },
  purple: {
    glow: "from-purple-500/30 to-purple-500/10",
    text: "text-purple-500",
    chip: "bg-purple-500/5 hover:bg-purple-500/10",
    dot: "bg-purple-500",
  },
  rose: {
    glow: "from-rose-500/30 to-rose-500/10",
    text: "text-rose-500",
    chip: "bg-rose-500/5 hover:bg-rose-500/10",
    dot: "bg-rose-500",
  },
  orange: {
    glow: "from-orange-500/30 to-orange-500/10",
    text: "text-orange-500",
    chip: "bg-orange-500/5 hover:bg-orange-500/10",
    dot: "bg-orange-500",
  },
};

const About = () => {
  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip">
      <Navbar />
      <SocialSidebar />

      {/* ============================================
          PART 1: THE VISIONARY HERO HEADER
          ============================================ */}
      <section className="relative min-h-[58vh] flex items-center pt-20 pb-8">
        <ParallaxWatermark text="VIVID" className="top-1/3 -left-20" speed={0.15} />
        
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-vedic-gold/5 via-transparent to-vedic-teal/5" />
        
        {/* Floating decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-vedic-gold/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-vedic-teal/10 rounded-full blur-[100px] animate-float-delayed" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <AnimatedSection animation="pop-in">
              <span className="inline-flex items-center gap-2 text-vedic-gold font-semibold tracking-widest uppercase text-xs bg-vedic-gold/10 px-4 py-2 rounded-full mt-8 mb-4">
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
              A globally recognized online academy committed to children's overall learning & skill development through well-researched, need-based, quality programs for ages 4 and above.
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
      <section className="py-10 md:py-12 relative overflow-hidden">
        <ParallaxWatermark text="CURIOUS" className="-right-32 top-0" speed={0.2} />
        
        <div className="container mx-auto">
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
                    alt="Child exploring and learning with curiosity"
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
                From learning basic counting to building vocabulary, improving handwriting, recognizing sounds and patterns, and solving complex problems — young children are just curious souls. They are nimble at picking skills and hop to another one fast.
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
                  Your child can grow and learn in so many different ways. Sometimes, all they need is the right
                  opportunity, encouragement, and environment. We understand that you want the best for your child —
                  and that's exactly what we strive to provide.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          PART 3: THE 'FOUR PILLARS' BENTO GRID
          ============================================ */}
      <section className="py-10 md:py-12 bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="GROWTH" className="top-20 -left-20" speed={0.18} />
        
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <AnimatedSection animation="blur-in">
              <span className="text-vedic-teal font-semibold tracking-widest uppercase text-sm">
                Holistic Development
              </span>
            </AnimatedSection>
            <TextReveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 pt-1 leading-snug md:leading-[1.12]">
                Growing as an
                <span className="text-vedic-gold"> Individual</span>
              </h2>
            </TextReveal>
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-xl text-muted-foreground mt-3">
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
              Let your child explore, discover, and grow with Tiny Vivid Minds — developing{" "}
              <span className="text-vedic-gold font-semibold">communication</span>,{" "}
              <span className="text-vedic-teal font-semibold">creativity</span>, reasoning, concentration,
              problem-solving, and essential academic skills during their formative years.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          PART 4: THE 'ANYWHERE, EVERYWHERE' FEATURE
          ============================================ */}
      <section className="py-10 md:py-12 relative overflow-hidden">
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

        <div className="container mx-auto relative z-10">
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
                        Learn from
                        <span className="text-vedic-gold"> Anywhere</span>
                      </h2>
                    </TextReveal>

                    <AnimatedSection animation="fade-up" delay={400}>
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Access our online classes from anywhere in the world with
                        <span className="text-vedic-gold font-semibold"> flexible timings</span> and
                        <span className="text-vedic-teal font-semibold"> personalized attention</span>.
                      </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={500}>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Learn from top-notch selected professionals with hassle-free online education.
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
      <section className="py-10 md:py-12 relative overflow-hidden bg-vedic-navy">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vedic-gold/20 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vedic-teal/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-vedic-gold/10 rounded-full blur-[80px]" />

        <div className="container mx-auto relative z-10">
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
                  At Tiny Vivid Minds, we believe learning should spark the same sense of wonder that stories do —
                  engaging children's curiosity, encouraging exploration, and making every new discovery exciting.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS SECTION - Z-Pattern Layout (5 programs)
          ============================================ */}
      <section className="py-10 md:py-12 relative overflow-hidden">
        <ParallaxWatermark text="LEARN" className="top-1/4 -left-32" speed={0.2} />
        
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-up">
            <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Our Programs</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Curated for
              <span className="text-vedic-gold"> GEN Z Kids</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Programs where your kid learns, plays, creates, and engages.
            </p>
          </AnimatedSection>

          {aboutPrograms.map((program, index) => {
            const styles = accentStyles[program.accent];
            const flip = index % 2 === 1;
            const isLast = index === aboutPrograms.length - 1;

            return (
              <div
                key={program.name}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isLast ? "" : "mb-12 md:mb-10"}`}
              >
                <AnimatedSection
                  animation="fade-right"
                  delay={flip ? 200 : 0}
                  className={`relative ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="relative group">
                    <div
                      className={`absolute -inset-6 bg-gradient-to-br ${styles.glow} rounded-[3rem] ${
                        flip ? "-rotate-3 group-hover:-rotate-6" : "rotate-3 group-hover:rotate-6"
                      } transition-transform duration-700`}
                    />
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={program.image}
                        alt={program.alt}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/90 via-vedic-navy/20 to-transparent flex items-end p-8">
                        <div className="text-white">
                          <h3 className="font-display text-3xl font-bold">{program.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation="fade-left"
                  delay={flip ? 0 : 200}
                  className={flip ? "lg:order-1" : ""}
                >
                  <TextReveal>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {program.headline[0]}
                      <span className={`block ${styles.text}`}>{program.headline[1]}</span>
                    </h3>
                  </TextReveal>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{program.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {program.features.map((feature, i) => (
                      <AnimatedSection key={feature} animation="pop-in" delay={300 + i * 100}>
                        <div className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${styles.chip}`}>
                          <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US - Bento Grid
          ============================================ */}
      <section className="py-10 md:py-12 bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="WHY" className="top-10 -right-20" speed={0.15} />
        
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10" animation="blur-in">
            <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Expertise Meets
              <span className="text-vedic-gold"> Personalization</span>
            </h2>
          </AnimatedSection>

          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <AnimatedBentoItem
              title="Expert Educators"
              description="Experienced educators who bring subject knowledge, thoughtful guidance, and a child-friendly approach to every learning session."
              icon={GraduationCap}
              variant="highlight"
              animation="pop-in"
              delay={0}
            />
            <AnimatedBentoItem
              title="Flexible Online Learning"
              description="Live, interactive classes designed to fit your family's schedule while keeping children engaged and supported."
              icon={Laptop}
              animation="pop-in"
              delay={100}
            />
            <AnimatedBentoItem
              title="Progress You Can See"
              description="Structured learning, regular practice, and progress tracking help parents understand how their child is developing over time."
              icon={ChartLine}
              variant="subtle"
              animation="pop-in"
              delay={200}
            />
            <AnimatedBentoItem
              title="Child-Centered"
              description="Every learning experience is designed around the child's needs, pace, strengths, and areas for growth."
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
      <section className="py-10 md:py-12 relative overflow-hidden">
        <ParallaxWatermark text="VALUES" className="top-1/4 -left-20" speed={0.2} />
        
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10" animation="fade-up">
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
      <section className="py-10 md:py-12 bg-muted/30 relative overflow-hidden">
        <ParallaxWatermark text="TEAM" className="-right-32 top-20" speed={0.18} />
        
        <div className="container mx-auto">
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
                    "Learning is not just about acquiring knowledge; it is about developing the confidence, curiosity,
                    and skills that help children navigate the world around them. At Tiny Vivid Minds, we believe every
                    child has the ability to learn and grow when given the right guidance, encouragement, and
                    environment. Through our programs in Mathematics, Abacus, Vedic Mathematics, Handwriting, and
                    Phonics, we aim to strengthen essential skills while making learning engaging, meaningful, and
                    enjoyable."
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    "Our approach brings together structured learning, personalized attention, and engaging practice so
                    that children can progress at their own pace. Whether a child is developing early reading and writing
                    skills, strengthening mathematical foundations, or exploring advanced calculation strategies, we want
                    every learning experience to build not only ability, but also confidence."
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At <b>Tiny Vivid Minds,</b> we blend proven approaches with thoughtful, modern learning experiences
                    to nurture curious, confident, and capable learners. We invite you to explore our programs, meet our
                    educators, and join us in creating a learning journey where every child has the opportunity to grow
                    and shine.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="pop-in" delay={400}>
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <h5 className="font-display font-bold text-lg text-foreground">Sai Tejasvi Peravali</h5>
                    <p className="text-vedic-gold text-sm font-medium">Director, Tiny Vivid Minds</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className="py-14 bg-gradient-to-r from-vedic-navy via-vedic-navy-light to-vedic-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto text-center">
            <StatsCounter end={HIGHLIGHTED_COUNTRY_COUNT} suffix="+" label="Countries Reached" />
            <StatsCounter end={4} suffix="+" label="Years of Experience" />
            <StatsCounter end={95} suffix="%" label="Success Rate" />
            {/* <div className="text-center group">
              <div className="text-4xl md:text-5xl font-display font-bold text-vedic-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                Growing
              </div>
              <p className="text-white/70 font-medium">Learning Community</p>
            </div> */}
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-10 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vedic-gold/10 via-transparent to-vedic-teal/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vedic-gold/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="zoom">
              <span className="text-vedic-gold font-semibold tracking-widest uppercase text-sm">Start Today</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Ready to Begin Your Child's
                <span className="block text-vedic-gold">Learning Journey?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Explore personalized programs in Mathematics, Abacus, Vedic Mathematics, Handwriting, and Phonics — and
                give your child the opportunity to build strong skills, confidence, and a love for learning.
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
                      <Mail className="h-5 w-5" />
                    </motion.span>
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-vedic-gold text-vedic-gold hover:bg-vedic-gold hover:text-vedic-navy px-10 py-6 text-lg transition-all"
                >
                  <DiscoverProgramsLink>Explore Programs</DiscoverProgramsLink>
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
