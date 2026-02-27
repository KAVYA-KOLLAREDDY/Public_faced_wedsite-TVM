import { useState, useRef } from "react";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  highlight: string;
  level: string;
  delay?: number;
}

export const CourseCard = ({
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  highlight,
  level,
  delay = 0,
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt (max 8 degrees)
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 30px rgba(212,175,55,0.15)'
          : '0 10px 15px -3px rgba(0,0,0,0.1)',
      }}
    >
      {/* Warm glow effect on hover */}
      <div 
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-gold/50 via-teal/30 to-gold/50 rounded-3xl blur opacity-0 transition-opacity duration-500 -z-10",
          isHovered && "opacity-100"
        )}
      />
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/80 via-transparent to-transparent" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4" style={{ transform: 'translateZ(30px)' }}>
          <span className="px-3 py-1 bg-vedic-gold/90 text-vedic-navy text-sm font-semibold rounded-full shadow-lg">
            {level}
          </span>
        </div>

        {/* Floating sparkle effect */}
        <div className={cn(
          "absolute top-4 right-4 w-8 h-8 opacity-0 transition-all duration-500",
          isHovered && "opacity-100"
        )}>
          <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping" />
          <div className="absolute inset-2 bg-gold/50 rounded-full animate-pulse" />
        </div>

        {/* Quick Tip Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-vedic-navy/95 flex flex-col items-center justify-center p-6 text-center transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="w-12 h-12 bg-vedic-gold/20 rounded-full flex items-center justify-center mb-4 animate-bounce-gentle">
            <Star className="w-6 h-6 text-vedic-gold" />
          </div>
          <h4 className="text-vedic-gold font-display font-bold text-lg mb-2">Course Highlight</h4>
          <p className="text-white/80 text-sm leading-relaxed">{highlight}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative" style={{ transform: 'translateZ(10px)' }}>
        {/* Subtle shine effect */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700",
            isHovered && "translate-x-full"
          )}
        />
        
        <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-vedic-gold transition-colors duration-300 relative z-10">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 relative z-10">{description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground relative z-10">
          <div className="flex items-center gap-1 group-hover:text-vedic-teal transition-colors duration-300">
            <Clock className="w-4 h-4 text-vedic-teal" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-vedic-teal transition-colors duration-300">
            <Users className="w-4 h-4 text-vedic-teal" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-vedic-gold fill-vedic-gold" />
            <span className="group-hover:text-vedic-gold transition-colors duration-300">{rating}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
          <div>
            <span className="text-2xl font-bold text-vedic-gold group-hover:scale-110 inline-block transition-transform duration-300">{price}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <Button
            size="sm"
            className="bg-vedic-navy hover:bg-vedic-gold hover:text-vedic-navy transition-all duration-300 group/btn hover:scale-105 hover:shadow-lg hover:shadow-vedic-gold/20"
          >
            Enroll Now
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
