import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import abacusHandsImg from "@/assets/students-learning/hand_writing.png";
import curiousChildImg from "@/assets/students-learning/maths.png";
import confidentChildrenImg from "@/assets/students-learning/phonetics.png";

const courses = [
  {
    id: 1,
    title: "Mathematics Mastery",
    description: "Build strong mathematical foundations with personalized problem-solving techniques and concept clarity.",
    image: curiousChildImg,
    tags: ["Ages 5-14", "Weekly Reports", "Certified Tutors"],
    // Match SignatureHero subject colors
    ringActive: "ring-vedic-teal/50",
    ringIdle: "ring-vedic-teal/25",
    badge: "bg-vedic-teal/10 text-vedic-teal border-vedic-teal/20",
    check: "text-vedic-teal",
    dot: "bg-vedic-teal",
  },
  {
    id: 2,
    title: "HandWriting Excellence",
    description: "Develop beautiful, legible handwriting through structured practice and motor skill development.",
    image: abacusHandsImg,
    tags: ["Ages 4-12", "Progress Tracking", "Custom Worksheets"],
    ringActive: "ring-vedic-gold/50",
    ringIdle: "ring-vedic-gold/25",
    badge: "bg-vedic-gold/10 text-vedic-gold border-vedic-gold/20",
    check: "text-vedic-gold",
    dot: "bg-vedic-gold",
  },
  {
    id: 3,
    title: "Phonetics Foundation",
    description: "Master reading and pronunciation with phonetic awareness and fluency building exercises.",
    image: confidentChildrenImg,
    tags: ["Ages 3-10", "Audio Lessons", "Reading Support"],
    ringActive: "ring-purple-500/50",
    ringIdle: "ring-purple-500/25",
    badge: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    check: "text-purple-500",
    dot: "bg-purple-500",
  },
];

const SpotlightCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % courses.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentSlide;
    const isActive = diff === 0;
    const isLeft = diff === -1 || (currentSlide === 0 && index === courses.length - 1);
    const isRight = diff === 1 || (currentSlide === courses.length - 1 && index === 0);

    if (isActive) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        z: 100,
        opacity: 1,
      };
    } else if (isLeft) {
      return {
        x: -280,
        scale: 0.85,
        rotateY: 20,
        z: 0,
        opacity: 1,
      };
    } else if (isRight) {
      return {
        x: 280,
        scale: 0.85,
        rotateY: -20,
        z: 0,
        opacity: 1,
      };
    }
    return {
      x: 0,
      scale: 0.6,
      rotateY: 0,
      z: -100,
      opacity: 0,
    };
  };

  return (
    <section id="courses" className="py-14 bg-muted/30 overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-vedic-teal/10 text-vedic-teal">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              Spotlight Slider
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured programs in the skills that support every subject—math, handwriting, and phonics.
          </p>
        </AnimatedSection>

        {/* 3D Carousel — mobile nav sits below fixed-height stage; side arrows from md+ */}
        <div className="relative px-10 sm:px-12 md:px-0 perspective-1000">
          <div className="relative h-[420px] sm:h-[480px] md:h-[500px]">
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {courses.map((course, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentSlide;

              return (
                <motion.div
                  key={course.id}
                  className="absolute w-[min(100%,18rem)] cursor-pointer max-w-[calc(100vw-5rem)] sm:w-80 md:w-96 sm:max-w-none"
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    zIndex: isActive ? 10 : 1,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className={`
                    relative rounded-3xl overflow-hidden shadow-2xl
                    ${isActive ? `ring-4 ${course.ringActive}` : `ring-2 ${course.ringIdle}`}
                  `}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content — horizontal padding on mobile keeps title clear of arrow hit zones */}
                    <div className="bg-card px-5 py-5 sm:p-6 md:px-6">
                      <h3 className="text-lg font-bold text-foreground sm:text-xl mb-2 pr-1">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${course.badge}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 pt-4 border-t border-border space-y-2"
                        >
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className={`h-4 w-4 shrink-0 ${course.check}`} strokeWidth={2.5} />
                            Live instruction with expert tutors
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className={`h-4 w-4 shrink-0 ${course.check}`} strokeWidth={2.5} />
                            Flexible Scheduling
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className={`h-4 w-4 shrink-0 ${course.check}`} strokeWidth={2.5} />
                            Progress Tracking
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-vedic-gold/20 bg-card/90 p-2.5 shadow-lg backdrop-blur-sm transition-colors hover:border-vedic-gold/40 hover:bg-card md:left-4 md:block md:p-3"
            aria-label="Previous course"
          >
            <ChevronLeft className="h-5 w-5 text-foreground md:h-6 md:w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-vedic-gold/20 bg-card/90 p-2.5 shadow-lg backdrop-blur-sm transition-colors hover:border-vedic-gold/40 hover:bg-card md:right-4 md:block md:p-3"
            aria-label="Next course"
          >
            <ChevronRight className="h-5 w-5 text-foreground md:h-6 md:w-6" />
          </button>
          </div>

          {/* Indicators & Auto-play — below cards so they don't overlap */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex gap-2">
              {courses.map((course, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? `w-8 ${course.dot}`
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="rounded-full border border-vedic-gold/20 bg-card/80 p-2 backdrop-blur-sm transition-colors hover:border-vedic-gold/40 hover:bg-card"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4 text-foreground" />
              ) : (
                <Play className="h-4 w-4 text-foreground" />
              )}
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-10 pb-1 md:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="rounded-full border border-vedic-gold/20 bg-card/95 p-3 shadow-md backdrop-blur-sm transition-colors hover:border-vedic-gold/40"
              aria-label="Previous course"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="rounded-full border border-vedic-gold/20 bg-card/95 p-3 shadow-md backdrop-blur-sm transition-colors hover:border-vedic-gold/40"
              aria-label="Next course"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightCarousel;