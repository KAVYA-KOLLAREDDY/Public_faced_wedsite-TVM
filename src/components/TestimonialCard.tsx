import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  image?: string;
  avatar?: string;
  content: string;
  rating: number;
  delay?: number;
}

export const TestimonialCard = ({
  name,
  role,
  image,
  avatar,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <div
      className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-vedic-gold/20 rounded-full flex items-center justify-center group-hover:bg-vedic-gold/30 transition-colors duration-300">
        <Quote className="w-8 h-8 text-vedic-gold" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5 transition-all duration-300",
              i < rating ? "text-vedic-gold fill-vedic-gold" : "text-white/30"
            )}
            style={{ animationDelay: `${delay + i * 100}ms` }}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-white/90 leading-relaxed mb-6 italic">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-vedic-gold/30 group-hover:ring-vedic-gold transition-all duration-300">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-vedic-teal flex items-center justify-center text-white text-lg font-bold ring-2 ring-vedic-gold/30 group-hover:ring-vedic-gold transition-all duration-300">
            {avatar}
          </div>
        )}
        <div>
          <h4 className="font-display font-bold text-white group-hover:text-vedic-gold transition-colors duration-300">
            {name}
          </h4>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;