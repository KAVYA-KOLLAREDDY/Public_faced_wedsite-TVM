import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import abacusHandsImg from "@/assets/abacus-hands.jpg";
import curiousChildImg from "@/assets/curious-child.jpg";
import confidentChildrenImg from "@/assets/confident-children.jpg";

const courses = [
  {
    id: 1,
    title: "Mathematics Mastery",
    description: "Build strong mathematical foundations with personalized problem-solving techniques and concept clarity.",
    image: curiousChildImg,
    tags: ["Ages 5-14", "Weekly Reports", "Certified Tutors"],
    icon: "📐",
    accent: "from-vedic-teal to-vedic-teal-dark"
  },
  {
    id: 2,
    title: "HandWriting Excellence",
    description: "Develop beautiful, legible handwriting through structured practice and motor skill development.",
    image: abacusHandsImg,
    tags: ["Ages 4-12", "Progress Tracking", "Custom Worksheets"],
    icon: "✍️",
    accent: "from-vedic-gold to-vedic-gold-dark"
  },
  {
    id: 3,
    title: "Phonetics Foundation",
    description: "Master reading and pronunciation with phonetic awareness and fluency building exercises.",
    image: confidentChildrenImg,
    tags: ["Ages 3-10", "Audio Lessons", "Reading Support"],
    icon: "🗣️",
    accent: "from-purple-500 to-purple-700"
  }
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
        filter: "brightness(1) saturate(1)"
      };
    } else if (isLeft) {
      return {
        x: -280,
        scale: 0.85,
        rotateY: 20,
        z: 0,
        opacity: 0.85,
        filter: "brightness(0.7) saturate(0.8)"
      };
    } else if (isRight) {
      return {
        x: 280,
        scale: 0.85,
        rotateY: -20,
        z: 0,
        opacity: 0.85,
        filter: "brightness(0.7) saturate(0.8)"
      };
    }
    return {
      x: 0,
      scale: 0.6,
      rotateY: 0,
      z: -100,
      opacity: 0,
      filter: "brightness(0.5) saturate(0.5)"
    };
  };

  return (
    <section id="courses" className="py-20 bg-muted/30 overflow-hidden">
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
            Specialized small group instruction in essential academic skills
          </p>
        </AnimatedSection>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] perspective-1000">
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
                  className="absolute w-80 md:w-96 cursor-pointer"
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    zIndex: isActive ? 10 : 1,
                    opacity: style.opacity,
                    filter: style.filter
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
                    ${isActive ? 'ring-4 ring-vedic-gold/50' : 'ring-2 ring-white/20'}
                  `}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${course.accent} opacity-40`} />
                      <div className="absolute top-4 left-4 text-4xl">{course.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-card">
                      <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-vedic-gold/10 text-vedic-gold border border-vedic-gold/20"
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
                            <span className="text-vedic-gold">✓</span> Small Group (3-5 Students)
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="text-vedic-gold">✓</span> Flexible Scheduling
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="text-vedic-gold">✓</span> Progress Tracking
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-vedic-gold/20 shadow-lg hover:bg-card hover:border-vedic-gold/40 transition-colors"
            aria-label="Previous course"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-vedic-gold/20 shadow-lg hover:bg-card hover:border-vedic-gold/40 transition-colors"
            aria-label="Next course"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Indicators & Auto-play Toggle */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <div className="flex gap-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-vedic-gold' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full bg-card/80 backdrop-blur-sm border border-vedic-gold/20 hover:bg-card hover:border-vedic-gold/40 transition-colors"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-foreground" />
              ) : (
                <Play className="w-4 h-4 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightCarousel;