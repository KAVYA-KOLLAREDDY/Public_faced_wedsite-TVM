import { useState, useEffect } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  { 
    name: "Priya Sharma", 
    childName: "Aarav",
    childAge: 8,
    content: "My son's confidence in math has skyrocketed! He now solves problems faster than his calculator. The teachers are incredibly patient and supportive.", 
    rating: 5,
  },
  { 
    name: "Michael Chen", 
    childName: "Emma",
    childAge: 10,
    content: "The structured levels make it easy to track progress. Emma loves the virtual abacus tools and looks forward to every class!", 
    rating: 5,
  },
  { 
    name: "Sarah Johnson", 
    childName: "Noah",
    childAge: 7,
    content: "Amazing program! Noah went from struggling with basic math to being the top of his class. Can't recommend enough!", 
    rating: 5,
  },
  { 
    name: "Anita Patel", 
    childName: "Riya",
    childAge: 9,
    content: "The monthly competitions keep Riya motivated. She has developed incredible concentration and loves solving challenging problems.", 
    rating: 5,
  },
  { 
    name: "David Kim", 
    childName: "Lucas",
    childAge: 11,
    content: "Lucas has developed incredible mental math abilities. He can now multiply large numbers in his head. The progress tracking helps us see exactly how far he's come.", 
    rating: 5,
  },
  { 
    name: "Rajesh Patel", 
    childName: "Priya",
    childAge: 6,
    content: "The abacus training has transformed my daughter's confidence in math. She now loves solving problems and even teaches her friends!",
    rating: 5,
  },
];

const avatarColors = [
  "from-rose-400 to-pink-500",
  "from-blue-400 to-cyan-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-pink-400 to-rose-500",
];

const cardColors = [
  "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
  "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
  "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
];

const ITEMS_PER_PAGE = 3;

export const TestimonialsWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div>
      {/* Testimonial Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentTestimonials.map((testimonial, index) => {
          const globalIndex = currentPage * ITEMS_PER_PAGE + index;
          
          return (
            <AnimatedSection
              key={`${currentPage}-${index}`}
              animation="fade-up"
              delay={index * 100}
            >
              <div 
                className={cn(
                  "group relative rounded-3xl p-6 border border-border/50 transition-all duration-500",
                  "hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]",
                  cardColors[globalIndex % cardColors.length]
                )}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-muted-foreground/20 group-hover:text-gold/30 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-gold fill-gold transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6 text-sm md:text-base italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                    avatarColors[globalIndex % avatarColors.length]
                  )}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal/10 text-teal text-[10px] font-medium">
                        <BadgeCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Parent of {testimonial.childName} ({testimonial.childAge} years)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevPage}
          className="w-11 h-11 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-110 hover:-rotate-6 border border-border"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={cn(
                "h-3 rounded-full transition-all duration-500",
                index === currentPage 
                  ? "bg-gold w-10" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className="w-11 h-11 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-110 hover:rotate-6 border border-border"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page indicator text */}
      <p className="text-center text-muted-foreground text-sm mt-4">
        {currentPage + 1} of {totalPages}
      </p>
    </div>
  );
};

export default TestimonialsWithPagination;
