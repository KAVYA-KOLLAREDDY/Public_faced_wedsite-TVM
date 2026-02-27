import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialBubbleProps {
  text: string;
  author: string;
  role: string;
  rating: number;
  index: number;
  variant?: "normal" | "featured";
}

const TestimonialBubble = ({
  text,
  author,
  role,
  rating,
  index,
  variant = "normal",
}: TestimonialBubbleProps) => {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      className="relative h-full flex flex-col"
    >
      {/* Bubble card */}
      <div
        className={`relative rounded-3xl p-6 flex-1 flex flex-col ${isFeatured ? "shadow-xl" : "shadow-lg"}`}
        style={{
          background: isFeatured
            ? "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--gold) / 0.05))"
            : "hsl(var(--card))",
          border: `1px solid ${isFeatured ? "hsl(var(--gold) / 0.3)" : "hsl(var(--border))"}`,
        }}
      >
        {/* Quote icon */}
        <Quote
          className={`w-8 h-8 mb-3 ${isFeatured ? "text-gold" : "text-primary/20"}`}
          fill="currentColor"
        />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "text-gold fill-gold"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-foreground/90 leading-relaxed mb-4 text-sm md:text-base">
          "{text}"
        </p>

        {/* Bubble tail */}
        <div
          className="absolute -bottom-3 left-8 w-6 h-6"
          style={{
            background: isFeatured
              ? "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--gold) / 0.05))"
              : "hsl(var(--card))",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            borderLeft: `1px solid ${isFeatured ? "hsl(var(--gold) / 0.3)" : "hsl(var(--border))"}`,
            borderRight: `1px solid ${isFeatured ? "hsl(var(--gold) / 0.3)" : "hsl(var(--border))"}`,
          }}
        />
      </div>

      {/* Author with ring */}
      <div className="flex items-center gap-3 mt-6 ml-4">
        {/* Instagram-style gradient ring */}
        <div className="relative">
          <div
            className="absolute -inset-1 rounded-full p-[3px]"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--teal)))",
            }}
          >
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          
          {/* Avatar */}
          <div
            className="relative w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--gold) / 0.15))",
            }}
          >
            <span className="text-lg font-bold text-primary">
              {author.charAt(0)}
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-sm">{author}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialBubble;
