import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  rating: number;
  index: number;
}

const ChatBubbleTestimonial = ({ text, author, role, rating, index }: TestimonialProps) => {
  // Staggered heights for masonry effect
  const heights = ["min-h-[200px]", "min-h-[240px]", "min-h-[180px]", "min-h-[220px]", "min-h-[200px]"];
  
  return (
    <motion.div
      className={`relative ${heights[index % heights.length]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Chat bubble */}
      <div className="relative bg-card rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating 
                  ? "text-primary fill-primary" 
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-foreground/90 leading-relaxed mb-6">
          "{text}"
        </p>

        {/* Bubble tail */}
        <div
          className="absolute -bottom-3 left-12 w-6 h-6 bg-card"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
      </div>

      {/* Author with Instagram-style ring */}
      <div className="flex items-center gap-3 mt-6 ml-6">
        <div className="relative">
          {/* Gradient ring */}
          <div 
            className="absolute -inset-1 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--vedic-teal)), hsl(280, 70%, 60%))",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          
          {/* Avatar */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-vedic-teal/20 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">
              {author.charAt(0)}
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBubbleTestimonial;
