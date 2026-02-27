import { Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  { 
    name: "Priya Sharma", 
    child: "Aarav, Age 8", 
    content: "My son's confidence in math has skyrocketed! He now solves problems faster than his calculator. The teachers are incredibly patient and supportive.", 
    rating: 5,
    color: "bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30"
  },
  { 
    name: "Michael Chen", 
    child: "Emma, Age 10", 
    content: "The structured levels make it easy to track progress. Emma loves the virtual abacus tools!", 
    rating: 5,
    color: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"
  },
  { 
    name: "Sarah Johnson", 
    child: "Noah, Age 7", 
    content: "Amazing program! Noah went from struggling with basic math to being the top of his class. Can't recommend enough!", 
    rating: 5,
    color: "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
  },
  { 
    name: "Anita Patel", 
    child: "Riya, Age 9", 
    content: "The monthly competitions keep Riya motivated. She looks forward to every class!", 
    rating: 5,
    color: "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30"
  },
  { 
    name: "David Kim", 
    child: "Lucas, Age 11", 
    content: "Lucas has developed incredible mental math abilities. He can now multiply large numbers in his head. The progress tracking helps us see exactly how far he's come.", 
    rating: 5,
    color: "bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30"
  },
];

const avatarColors = [
  "from-rose-400 to-pink-500",
  "from-blue-400 to-cyan-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
];

export const MasonryTestimonials = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {testimonials.map((testimonial, index) => (
        <AnimatedSection
          key={testimonial.name}
          animation={index % 2 === 0 ? "fade-up" : "scale"}
          delay={index * 100}
          className="break-inside-avoid"
        >
          <div className={cn(
            "rounded-3xl p-6 border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            testimonial.color
          )}>
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>

            {/* Content */}
            <p className="text-foreground/90 leading-relaxed mb-6 text-sm md:text-base">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br shadow-md",
                avatarColors[index % avatarColors.length]
              )}>
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal/10 text-teal text-[10px] font-medium">
                    <BadgeCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  Parent of {testimonial.child}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default MasonryTestimonials;
