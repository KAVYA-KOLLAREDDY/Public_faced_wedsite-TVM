import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator,
  Brain,
  GraduationCap,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowRight,
  Layers,
  Sparkles,
  HeartHandshake,
  Mail,
  PenLine,
  BookOpen,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MathBackground } from "@/components/MathBackground";
import { SocialSidebar } from "@/components/SocialSidebar";
import { FuturisticHero } from "@/components/home/FuturisticHero";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { DISCOVER_PROGRAMS_HASH } from "@/lib/homeAnchors";
import childrenLearning from "@/assets/students-learning/children-learning.jpg";
import teamTeacher from "@/assets/students-learning/certified.png";
import abacusHands from "@/assets/students-learning/abacus.png";
import vedicCourse from "@/assets/students-learning/vedic-math.png";

const programs = [
  {
    icon: Calculator,
    title: "Abacus Learning",
    description:
      "Build number sense, concentration, visualization, and mental calculation skills through structured Abacus learning.",
    color: "teal",
    to: "/courses/abacus",
  },
  {
    icon: Brain,
    title: "Vedic Mathematics",
    description:
      "Discover powerful calculation strategies that strengthen mathematical thinking, flexibility, and problem-solving confidence.",
    color: "gold",
    to: "/courses/vedic-math",
  },
  {
    icon: GraduationCap,
    title: "Mathematics",
    description:
      "Strengthen mathematical concepts, problem-solving, and confidence through clear instruction and personalized practice.",
    color: "navy",
    to: "/courses/signature-programs",
  },
  {
    icon: PenLine,
    title: "Handwriting",
    description:
      "Develop clear, legible, and confident handwriting through guided practice that builds control, consistency, and good writing habits.",
    color: "teal",
    to: "/courses/signature-programs",
  },
  {
    icon: BookOpen,
    title: "Phonics",
    description:
      "Build sound awareness, pronunciation, and early reading confidence through engaging phonics activities and guided practice.",
    color: "gold",
    to: "/courses/signature-programs",
  },
];

const whyChooseFeatures = [
  {
    icon: Layers,
    title: "Strong Foundations",
    description:
      "Build essential academic skills through clear instruction, guided practice, and learning experiences designed around each child's needs.",
  },
  {
    icon: Sparkles,
    title: "Engaging Learning",
    description:
      "Interactive activities and age-appropriate practice help children stay curious, involved, and motivated to learn.",
  },
  {
    icon: HeartHandshake,
    title: "Confidence to Grow",
    description:
      "Celebrate progress, encourage effort, and help children become more confident and independent learners.",
  },
];

const testimonials = [
  {
    name: "Rama Devi",
    attribution: "Parent of an 8-year-old",
    rating: 5,
    message:
      "We are very happy with the classes. Thank you for conducting such wonderful classes. My child is enjoying the sessions and is excited to attend them every time. The teaching is interactive, and the concepts are explained in a simple way that is easy for children to understand. I can see a positive change in my child's interest and confidence. We truly appreciate your hard work and care. Thank you!",
    date: "2024-01-15",
  },
  {
    name: "Bharathi",
    attribution: "Parent of an 8-year-old",
    rating: 5,
    message:
      "We can clearly see a positive change in our child's concentration and confidence. Thank you for your wonderful guidance and care.",
    date: "2024-02-20",
  },
  {
    name: "Bhavani Ashok",
    attribution: "Parent of a 10-year-old boy",
    rating: 5,
    message:
      "Previously my son used to take class with one of the teachers and then it did not work out properly. But he is doing good with the concept so I approached TVM team they allotted us a new teacher. Surprisingly from day 1 she is teaching beautifully in the class. Now my son is in level 7 and he is doing a great job. Thank you mam.",
    date: "2024-03-10",
  },
  {
    name: "Hiryanya",
    attribution: "Parent of an 8-year-old",
    rating: 5,
    message:
      "Very clear explanation and impressed with the way Sai Tejasvi mam is teaching my child.",
    date: "2024-04-05",
  },
  {
    name: "Shalini",
    attribution: "Parent of a 9-year-old boy",
    rating: 5,
    message:
      "My son is doing good with calculations after joining in Tiny Vivid Minds. But the teacher is little strict.",
    date: "2024-05-12",
  },
];

const faqs = [
  {
    question: "What programs does Tiny Vivid Minds offer?",
    answer:
      "We currently offer Abacus, Vedic Mathematics, Mathematics, Handwriting, and Phonics programs. Each program is designed to support different learning needs and skill levels.",
  },
  {
    question: "How do your online classes work?",
    answer:
      "Our live online classes are interactive and instructor-led. Children learn through clear explanations, guided practice, activities, questions, and feedback while receiving support throughout the session.",
  },
  {
    question: "What age groups do you teach?",
    answer:
      "Our programs are designed for children across different age groups, with learning levels and activities adapted to their age, abilities, and individual needs.",
  },
  {
    question: "How are classes structured?",
    answer:
      "Classes combine clear instruction, interactive activities, guided practice, and regular feedback to keep children engaged while helping them build skills step by step.",
  },
  {
    question: "Can my child attend a demo or trial session?",
    answer:
      "Yes, we offer demo sessions so parents and children can experience our teaching approach and learn more about the program before getting started.",
  },
];

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const discoverSectionWasVisibleRef = useRef(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.hash !== `#${DISCOVER_PROGRAMS_HASH}`) return;
    const el = document.getElementById(DISCOVER_PROGRAMS_HASH);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/" || location.hash !== `#${DISCOVER_PROGRAMS_HASH}`) return;
    discoverSectionWasVisibleRef.current = false;
    const el = document.getElementById(DISCOVER_PROGRAMS_HASH);
    if (!el) return;

    let clearHashTimer: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
          discoverSectionWasVisibleRef.current = true;
          return;
        }
        if (!discoverSectionWasVisibleRef.current || entry.isIntersecting) return;

        const rect = entry.boundingClientRect;
        const vh = window.innerHeight;
        const sectionAbove = rect.bottom < 120;
        const sectionBelow = rect.top > vh - 80;
        if (!(sectionAbove || sectionBelow)) return;

        // Debounce: immediate navigate() here can race with a course <Link> click and cancel SPA navigation.
        window.clearTimeout(clearHashTimer);
        clearHashTimer = window.setTimeout(() => {
          if (window.location.pathname !== "/" || window.location.hash !== `#${DISCOVER_PROGRAMS_HASH}`) {
            return;
          }
          const r = el.getBoundingClientRect();
          const v = window.innerHeight;
          if (r.bottom < 120 || r.top > v - 80) {
            navigate({ pathname: "/", hash: "" }, { replace: true });
          }
        }, 220);
      },
      { threshold: [0, 0.05, 0.15] }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(clearHashTimer);
    };
  }, [location.pathname, location.hash, navigate]);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip">
      <Navbar transparent />
      <SocialSidebar />

      {/* Futuristic Glassmorphism Hero */}
      <FuturisticHero />

      {/* Programs Section */}
      <section
        id={DISCOVER_PROGRAMS_HASH}
        className="scroll-mt-[1.5rem] pt-6 pb-16 sm:pt-10 md:pt-14 lg:pt-16 bg-background relative overflow-hidden"
      >
        <MathBackground />
        <div className="absolute top-20 right-10 w-32 h-32 border border-gold/10 rounded-full animate-float-slow" />
        <div
          className="absolute bottom-20 left-10 w-20 h-20 bg-teal/5 rotate-45 animate-float"
          style={{ animationDelay: "300ms" }}
        />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Discover
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 lg:whitespace-nowrap">
              Our Programs That Build <span className="text-gold">Strong Foundations</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-5xl mx-auto">
              From Mathematics and Abacus to Vedic Mathematics, Handwriting, and Phonics, our programs help children develop essential skills through engaging, structured, and personalized learning.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4 xl:gap-5">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 80} animation="pop" className="h-full min-w-0">
                <Link
                  to={program.to}
                  className="group block h-full rounded-2xl text-center transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Open ${program.title} course page`}
                >
                  <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-transparent bg-card p-5 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/20 hover:shadow-xl sm:p-6 xl:p-7">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
                    </div>

                    <div
                      className={`relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 xl:mb-5 xl:h-16 xl:w-16 ${
                        program.color === "teal"
                          ? "bg-teal/15 group-hover:bg-teal/25"
                          : program.color === "gold"
                            ? "bg-gold/15 group-hover:bg-gold/25"
                            : "bg-navy/10 group-hover:bg-navy/20"
                      }`}
                    >
                      <program.icon
                        className={`h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5 xl:h-8 xl:w-8 ${
                          program.color === "teal" ? "text-teal" : program.color === "gold" ? "text-gold" : "text-navy"
                        }`}
                      />
                    </div>
                    <h3 className="relative z-10 mb-2 shrink-0 font-display text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-gold xl:text-lg">
                      {program.title}
                    </h3>
                    <p className="relative z-10 flex-1 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {program.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:border-gold hover:text-gold font-display px-6"
                asChild
              >
                <DiscoverProgramsLink>Explore Programs</DiscoverProgramsLink>
              </Button>
              <Button variant="link" className="text-gold hover:text-gold-dark font-display group" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section - Fixed Image */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "200ms" }}
        />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-teal/5 rounded-full blur-2xl animate-float-slow" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="zoom">
              <div className="relative group">
                <img
                  src={childrenLearning}
                  alt="Teacher and student learning together"
                  className="rounded-3xl shadow-2xl w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-pulse-glow" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal/15 rounded-full blur-xl animate-float" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="w-16 h-16 bg-gold/15 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <Globe className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our mission is to make every child's learning journey{" "}
                <span className="text-gold relative">
                  meaningful and joyful
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/40 rounded-full" />
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Tiny Vivid Minds, we believe strong foundations are built one skill at a time. Through engaging
                instruction and personalized support, we help children strengthen their Mathematics, Abacus, Vedic
                Mathematics, Handwriting, and Phonics skills while developing confidence, curiosity, and independence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Clean Cards */}
      <section className="py-16 bg-background relative overflow-hidden">
        <MathBackground />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 lg:whitespace-nowrap">
              Build Skills. Grow Confidence. <span className="text-gold">Love Learning.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
              Our teaching approach combines clear instruction, meaningful practice, and personalized support to help every child make steady progress.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 150} animation="pop" className="h-full">
                <div className="group bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl text-center transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-teal/20 h-full flex flex-col">
                  <div className="w-20 h-20 rounded-full bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-10 h-10 text-teal transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-teal transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute top-40 right-10 w-20 h-20 bg-gold/5 rounded-full animate-float"
          style={{ animationDelay: "100ms" }}
        />
        <div
          className="absolute bottom-40 left-10 w-16 h-16 border border-teal/10 rotate-45 animate-float"
          style={{ animationDelay: "400ms" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
                Trust
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Trusted Partner in Your Child's <span className="text-gold">Learning Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We are a government-certified educational institution committed to providing structured, engaging, and
                high-quality learning experiences that help children build strong academic foundations and confidence.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Certified",
                    desc: "A government-certified educational institution committed to maintaining high standards in learning and teaching.",
                  },
                  {
                    title: "Experienced Educators",
                    desc: "Our instructors bring knowledge, experience, and a caring approach to every learning session.",
                  },
                ].map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 200} animation="fade-right">
                    <div className="flex gap-4 group cursor-pointer">
                      <div className="w-14 h-14 bg-gold/15 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-all duration-300 group-hover:scale-110">
                        <GraduationCap className="w-7 h-7 text-gold transition-transform duration-300 group-hover:-translate-y-1" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-foreground/20 text-foreground hover:border-gold hover:text-gold font-display px-6"
                  asChild
                >
                  <DiscoverProgramsLink>Explore Programs</DiscoverProgramsLink>
                </Button>
                <Button variant="link" className="text-gold hover:text-gold-dark font-display group" asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom" delay={300}>
              <div className="relative group">
                <img
                  src={teamTeacher}
                  alt="Teacher supporting a confident student"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-2xl animate-pulse-glow" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/15 rounded-full blur-xl animate-float" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-20 h-20 border border-gold/10 rounded-full animate-float" />
        <div
          className="absolute bottom-10 right-1/4 w-16 h-16 bg-teal/5 rotate-45 animate-float"
          style={{ animationDelay: "300ms" }}
        />

        <div className="container mx-auto">
          <AnimatedSection animation="blur" className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>

            <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed italic transition-all duration-500">
              "{currentTestimonial.message}"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold transition-transform duration-300 hover:scale-110 hover:-translate-y-1 shrink-0">
                {currentTestimonial.name.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-display font-bold text-lg text-foreground">{currentTestimonial.name}</h4>
                <p className="text-muted-foreground">
                  <span className="text-gold">{currentTestimonial.attribution}</span>
                </p>
              </div>
              <div className="md:ml-4 md:pl-4 md:border-l border-border">
                <span className="text-gold font-display font-semibold">Tiny Vivid Minds</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentTestimonialIndex
                        ? "bg-gold w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {currentTestimonialIndex + 1} of {testimonials.length}
            </p>
          </AnimatedSection>
        </div>
      </section> 

      {/* Learning Moments Section - Fixed Images */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <MathBackground />
        <div className="absolute top-20 left-20 w-24 h-24 border border-gold/10 rounded-full animate-float-slow" />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-5xl lg:max-w-6xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Learning <span className="text-gold">Moments</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-5xl mx-auto lg:whitespace-nowrap">
              A glimpse into the engaging, interactive learning experiences that help children build skills and confidence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="flip">
              <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
                <img
                  src={abacusHands}
                  alt="Student hands working with abacus beads"
                  className="w-full h-[350px] object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-display font-bold text-xl">Abacus Training</h4>
                  <p className="text-white/80 text-sm sm:text-base leading-snug mt-1">
                    Building number sense, concentration, and mental calculation skills through hands-on practice.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="flip" delay={200}>
              <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
                <img
                  src={vedicCourse}
                  alt="Vedic math learning session"
                  className="w-full h-[350px] object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-display font-bold text-xl">Vedic Mathematics</h4>
                  <p className="text-white/80 text-sm sm:text-base leading-snug mt-1">
                    Exploring efficient mathematical strategies that encourage flexible thinking and confident problem-solving.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="py-16 bg-background relative overflow-hidden">
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-gold/5 rotate-45 animate-float"
          style={{ animationDelay: "200ms" }}
        />
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-teal/10 rounded-full animate-float-slow" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="slide-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-gold">Frequently Asked Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Find answers to common questions about our programs, learning approach, classes, and student progress.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="fade-right">
                  <div
                    className={`bg-card rounded-2xl overflow-hidden transition-all duration-500 ${
                      activeFaq === index ? "shadow-lg ring-1 ring-gold/20 scale-[1.02]" : "shadow-md hover:shadow-lg"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-all duration-300 group"
                    >
                      <h3 className="font-display font-bold text-lg text-foreground pr-4 group-hover:text-gold transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gold flex-shrink-0 transition-all duration-500 ${
                          activeFaq === index ? "rotate-180 scale-110" : "group-hover:scale-110"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section> 
      */}

      {/* Contact CTA Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <MathBackground />
        <div
          className="absolute top-20 right-1/4 w-24 h-24 bg-teal/5 rounded-full animate-float"
          style={{ animationDelay: "150ms" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="slide-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Have Questions About Our <span className="text-gold">Programs?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're here to help you find the right learning program for your child and answer any questions you may
                have.
              </p>
              <Button
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:border-gold hover:text-gold font-display px-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gold/10 via-background to-teal/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold/20 rotate-45 animate-float" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal/10 rounded-full animate-float-slow" />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gold/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "300ms" }}
        />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-teal/10 rounded-full animate-float-slow" />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="blur" className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Begin Your Child's <span className="text-gold">Learning Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Explore Mathematics, Abacus, Vedic Mathematics, Handwriting, and Phonics programs designed to help your
              child build strong skills, confidence, and a love for learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-display font-semibold text-lg px-8 hover:shadow-xl hover:shadow-gold/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/20"
                asChild
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
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <DiscoverProgramsLink>
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Explore Programs
                </DiscoverProgramsLink>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
