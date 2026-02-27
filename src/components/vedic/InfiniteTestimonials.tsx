import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    childName: "Aarav",
    childAge: 10,
    content: "My son now solves multiplication problems faster than I can reach for a calculator! The Vedic methods have truly transformed his confidence.",
    rating: 5
  },
  {
    name: "Rajesh Patel",
    childName: "Ananya",
    childAge: 12,
    content: "Ananya went from dreading math to absolutely loving it. The ancient techniques make complex calculations feel like magic.",
    rating: 5
  },
  {
    name: "Meera Krishnan",
    childName: "Arjun",
    childAge: 9,
    content: "The structured levels helped Arjun progress at his own pace. His school grades have improved dramatically!",
    rating: 5
  },
  {
    name: "Amit Verma",
    childName: "Kavya",
    childAge: 11,
    content: "Kavya now helps her classmates with math problems. The confidence boost has been incredible to witness.",
    rating: 5
  },
  {
    name: "Sunita Reddy",
    childName: "Vihaan",
    childAge: 8,
    content: "Started at age 8 and now Vihaan can do mental calculations that amaze everyone. Best investment in his education!",
    rating: 5
  },
  {
    name: "Deepak Gupta",
    childName: "Ishaan",
    childAge: 13,
    content: "The Olympiad preparation has been exceptional. Ishaan qualified for nationals thanks to the advanced techniques he learned.",
    rating: 5
  }
];

// Using theme-based gradients
const avatarGradients = [
  'from-navy to-navy-light',
  'from-gold to-gold-dark',
  'from-teal to-teal-dark',
  'from-navy to-navy-dark',
  'from-gold to-gold-light',
  'from-teal to-teal-light',
];

export const InfiniteTestimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex gap-6 animate-scroll-x hover:[animation-play-state:paused]">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-[380px] group"
          >
            <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center text-white font-bold`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    <CheckCircle className="w-4 h-4 text-teal" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Parent of {testimonial.childName} (Age {testimonial.childAge})
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTestimonials;