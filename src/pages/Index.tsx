import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  CheckSquare,
  Gauge,
  Lightbulb,
  Award,
  Users,
  Calendar,
  MessageSquare,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MathBackground } from "@/components/MathBackground";
import { SocialSidebar } from "@/components/SocialSidebar";
import { FuturisticHero } from "@/components/home/FuturisticHero";
import childrenLearning from "@/assets/children-learning.jpg";
import teamTeacher from "@/assets/team-teacher1.jpg";
import abacusHands from "@/assets/abacus-hands.jpg";
import vedicCourse from "@/assets/vedic-math-course.jpg";

const programs = [
  {
    icon: Calculator,
    title: "Abacus Learning",
    description: "Master mental calculation through traditional abacus techniques.",
    color: "teal",
  },
  {
    icon: Brain,
    title: "Vedic Math",
    description: "Explore ancient mathematical strategies for faster problem-solving.",
    color: "gold",
  },
  {
    icon: GraduationCap,
    title: "Personalized Coaching",
    description: "Tailored learning experiences that adapt to each child's unique needs.",
    color: "navy",
  },
];

const whyChooseFeatures = [
  {
    icon: CheckSquare,
    title: "Problem Solving",
    description: "Develop analytical thinking and tackle complex problems with confidence",
  },
  {
    icon: Gauge,
    title: "Mental Speed",
    description: "Enhance calculation speed through proven cognitive techniques",
  },
  {
    icon: Lightbulb,
    title: "Build Confidence",
    description: "Transform math anxiety into a love for numbers and learning",
  },
];

const testimonials = [
  {
    name: "Sunita Krishnan",
    role: "Parent",
    childName: "Arjun",
    childAge: 8,
    rating: 5,
    message:
      "My son went from struggling with basic math to doing 3-digit multiplications in his head. The Vedic methods are truly magical!",
    date: "2024-01-15",
  },
  {
    name: "Rajesh Patel",
    role: "Parent",
    childName: "Priya",
    childAge: 6,
    rating: 5,
    message:
      "The abacus training has transformed my daughter's confidence in math. She now loves solving problems and even teaches her friends!",
    date: "2024-02-20",
  },
  {
    name: "Anita Sharma",
    role: "Parent",
    childName: "Rahul",
    childAge: 10,
    rating: 5,
    message:
      "Tiny Vivid Minds' personalized approach helped my child overcome math anxiety. The teachers are patient and incredibly skilled.",
    date: "2024-03-10",
  },
];

const faqs = [
  {
    question: "What is Vedic math",
    answer:
      "Vedic math is an ancient system of mathematical techniques that simplifies complex calculations through intuitive mental strategies. It helps children develop faster computational skills.",
  },
  {
    question: "Are online classes effective",
    answer:
      "Our online classes are interactive, engaging, and designed to provide personalized attention. We use advanced digital tools to ensure an immersive learning experience.",
  },
  {
    question: "What age groups do you teach",
    answer:
      "We offer specialized math programs for children aged 3–8 in Abacus, above 12 in Vedic Math, and personalized classes for all ages — each designed to match every child's unique learning level and pace.",
  },
  {
    question: "How are classes structured",
    answer:
      "Our classes combine interactive teaching, hands-on practice, and fun learning techniques to keep children motivated and engaged.",
  },
  {
    question: "Do you offer trial classes",
    answer:
      "Yes, we provide free demo classes so parents and children can experience our teaching methodology before committing.",
  },
];

const Index = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <SocialSidebar />

      {/* Futuristic Glassmorphism Hero */}
      <FuturisticHero />

      {/* Programs Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <MathBackground />
        <div className="absolute top-20 right-10 w-32 h-32 border border-gold/10 rounded-full animate-float-slow" />
        <div
          className="absolute bottom-20 left-10 w-20 h-20 bg-teal/5 rotate-45 animate-float"
          style={{ animationDelay: "300ms" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Discover
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our innovative math learning <span className="text-gold">programs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tiny Vivid Minds offers comprehensive math education designed to make learning fun, engaging, and
              transformative for children.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 150} animation="pop">
                <div className="group bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl text-center transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-gold/20 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-shimmer" />
                  </div>

                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 ${
                      program.color === "teal"
                        ? "bg-teal/15 group-hover:bg-teal/25"
                        : program.color === "gold"
                          ? "bg-gold/15 group-hover:bg-gold/25"
                          : "bg-navy/10 group-hover:bg-navy/20"
                    }`}
                  >
                    <program.icon
                      className={`w-10 h-10 transition-transform duration-300 group-hover:-translate-y-1 ${
                        program.color === "teal" ? "text-teal" : program.color === "gold" ? "text-gold" : "text-navy"
                      }`}
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
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
                <Link to="/courses/abacus">Explore All</Link>
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
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "200ms" }}
        />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-teal/5 rounded-full blur-2xl animate-float-slow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="zoom">
              <div className="relative group">
                <img
                  src={childrenLearning}
                  alt="Teacher and student interaction - building confidence in math"
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
                Our mission is to make math learning an{" "}
                <span className="text-gold relative">
                  exciting journey
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/40 rounded-full" />
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to transform math education, we believe every child has the potential to excel in
                mathematics through engaging and supportive learning experiences.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Clean Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        <MathBackground />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build confidence and <span className="text-gold">excel in math</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our unique teaching methods are designed to make math enjoyable and empowering.
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
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute top-40 right-10 w-20 h-20 bg-gold/5 rounded-full animate-float"
          style={{ animationDelay: "100ms" }}
        />
        <div
          className="absolute bottom-40 left-10 w-16 h-16 border border-teal/10 rotate-45 animate-float"
          style={{ animationDelay: "400ms" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal font-semibold tracking-wider uppercase text-sm rounded-full mb-4">
                Trust
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                A certified and reliable math <span className="text-gold">learning partner</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We are a government-certified educational institution committed to delivering high-quality math
                education with proven methodologies.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Certified",
                    desc: "Recognized by official educational authorities for our exceptional teaching standards.",
                  },
                  {
                    title: "Experienced",
                    desc: "Our instructors bring years of specialized math education expertise.",
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
                  <Link to="/courses/abacus">Explore</Link>
                </Button>
                <Button variant="link" className="text-gold hover:text-gold-dark font-display group" asChild>
                  <Link to="/about">
                    Learn
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom" delay={300}>
              <div className="relative group">
                <img
                  src={teamTeacher}
                  alt="Trusted by Parents and Students"
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
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-20 h-20 border border-gold/10 rounded-full animate-float" />
        <div
          className="absolute bottom-10 right-1/4 w-16 h-16 bg-teal/5 rotate-45 animate-float"
          style={{ animationDelay: "300ms" }}
        />

        <div className="container mx-auto px-6">
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
                  {currentTestimonial.role}
                  {currentTestimonial.childName && (
                    <span className="text-gold">
                      {" "}
                      of {currentTestimonial.childName} ({currentTestimonial.childAge} years)
                    </span>
                  )}
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
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <MathBackground />
        <div className="absolute top-20 left-20 w-24 h-24 border border-gold/10 rounded-full animate-float-slow" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Learning <span className="text-gold">moments</span>
            </h2>
            <p className="text-muted-foreground text-lg">Glimpses of our engaging math learning environment</p>
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
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-display font-bold text-xl">Abacus Training</h4>
                  <p className="text-white/80">Building mental math foundations with hands-on practice</p>
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
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-display font-bold text-xl">Vedic Math</h4>
                  <p className="text-white/80">Ancient techniques for modern learners</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     <section className="py-24 bg-background relative overflow-hidden">
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-gold/5 rotate-45 animate-float"
          style={{ animationDelay: "200ms" }}
        />
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-teal/10 rounded-full animate-float-slow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="slide-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-gold">FAQs</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Find answers to common questions about our math learning programs
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

      {/* Contact CTA Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <MathBackground />
        <div
          className="absolute top-20 right-1/4 w-24 h-24 bg-teal/5 rounded-full animate-float"
          style={{ animationDelay: "150ms" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="slide-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Need more <span className="text-gold">information</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're here to answer all your questions and help you get started.
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
      <section className="py-24 bg-gradient-to-br from-gold/10 via-background to-teal/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold/20 rotate-45 animate-float" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal/10 rounded-full animate-float-slow" />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gold/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "300ms" }}
        />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-teal/10 rounded-full animate-float-slow" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="blur" className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to start your math <span className="text-gold">journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join thousands of parents who have transformed their children's math learning experience with Tiny Vivid
              Minds.
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
                    <Calendar className="h-5 w-5" />
                  </motion.span>
                  Book a Free Demo Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <Link to="/courses/abacus">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Explore Programs
                </Link>
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
