import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Youtube, 
  Instagram, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Globe,
  Clock,
  ExternalLink,
  Camera,
  Heart,
  Sparkles,
  Calendar
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SocialSidebar } from "@/components/SocialSidebar";

// Import images
import childrenLearningImg from "@/assets/children-learning.jpg";
import confidentChildrenImg from "@/assets/confident-children.jpg";
import curiousChildImg from "@/assets/curious-child.jpg";
import digitalClassroomImg from "@/assets/digital-classroom.jpg";
import teamFounderImg from "@/assets/team-founder.jpg";
import teamTeacher1Img from "@/assets/team-teacher1.jpg";
import teamTeacher2Img from "@/assets/team-teacher2.jpg";

// Data
const instagramReels = [
  {
    embedUrl: "https://www.instagram.com/reel/DJgDiA4txfb/?igsh=MTVhczg0OHo2aHVo",
    caption: "Our Abacus Level 1 stars at work 🌟",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DKizx6xttOw/?igsh=dXdna2pwMWtxaHVz",
    caption: "Quick mental math challenge 🧠💡",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DJs6tbztAeC/?igsh=MW5rbGJnc2p3aW5jeQ==",
    caption: "Kids across the world solving together 🌎",
  },
];

const playlistVideoIds = ["j4BNwKJLfb0", "W5atWB1FszM", "8w5eDclKS_w"];
const videoTitles = [
  "Tips, Tricks & Learning Activities",
  "Interactive Math Sessions",
  "Learning Activities & Training Tips",
];

const galleryPhotos = [
  { url: childrenLearningImg, caption: "Our Little Achievers 💫", height: "tall" },
  { url: confidentChildrenImg, caption: "Happy Learning Moments", height: "normal" },
  { url: curiousChildImg, caption: "Teachers Guiding Online", height: "short" },
  { url: digitalClassroomImg, caption: "Certificates & Achievements", height: "normal" },
  { url: teamFounderImg, caption: "Interactive Learning", height: "tall" },
  { url: teamTeacher1Img, caption: "Confidence Building", height: "short" },
];

const achievementsStats = [
  { value: 200, suffix: "+", label: "Happy Students", icon: Users },
  { value: 5, suffix: "+", label: "Countries", icon: Globe },
  { value: 1000, suffix: "+", label: "Hours of Learning", icon: Clock },
];

const behindScenes = [
  { img: teamFounderImg, label: "Passionate Teachers" },
  { img: digitalClassroomImg, label: "Live Online Sessions" },
  { img: teamTeacher2Img, label: "Interactive Workshops" },
];

// Dynamic Mesh Gradient Background for Hero - Artistic "Aura" style
const MeshGradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Dynamic mesh gradient blobs - soft purple, sky blue, sunny yellow */}
    <motion.div
      className="absolute w-[800px] h-[800px] rounded-full opacity-60"
      style={{ 
        background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
        top: "-30%", 
        left: "-20%" 
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -80, 50, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[700px] h-[700px] rounded-full opacity-50"
      style={{ 
        background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)",
        top: "20%", 
        right: "-15%" 
      }}
      animate={{
        x: [0, -80, 60, 0],
        y: [0, 100, -60, 0],
        scale: [1, 0.8, 1.1, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full opacity-50"
      style={{ 
        background: "radial-gradient(circle, rgba(250,204,21,0.35) 0%, transparent 70%)",
        bottom: "-20%", 
        left: "30%" 
      }}
      animate={{
        x: [0, 60, -80, 0],
        y: [0, -60, 80, 0],
        scale: [1, 1.15, 0.85, 1],
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full opacity-40"
      style={{ 
        background: "radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)",
        bottom: "10%", 
        right: "20%" 
      }}
      animate={{
        x: [0, -40, 80, 0],
        y: [0, 80, -40, 0],
        scale: [1, 0.9, 1.1, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Subtle noise texture overlay */}
    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

// Floating Image Cluster for Hero - 2x2 Grid Layout
const FloatingImageCluster = () => {
  const images = [
    { src: childrenLearningImg, alt: "Students smiling" },
    { src: confidentChildrenImg, alt: "Abacus work" },
    { src: curiousChildImg, alt: "Certificate" },
    { src: digitalClassroomImg, alt: "Learning" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-md mx-auto">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: [-3, 3, -3] }}
            transition={{ 
              duration: 5 + index, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
          </motion.div>
          {/* Colored glow shadow */}
          <div 
            className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-40"
            style={{ 
              background: index % 2 === 0 
                ? "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--teal)))" 
                : "linear-gradient(135deg, rgba(167,139,250,0.6), rgba(56,189,248,0.6))",
              transform: "translate(8px, 8px)"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Pulsing Play Button
const PulsingPlayButton = () => (
  <motion.button
    className="relative z-50 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-vedic-gold via-vedic-gold-light to-vedic-gold flex items-center justify-center shadow-2xl cursor-pointer group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.open("https://www.youtube.com/@tinyvividminds", "_blank")}
  >
    {/* Pulse rings */}
    <motion.div
      className="absolute inset-0 rounded-full border-4 border-vedic-gold/50"
      animate={{ scale: [1, 1.5, 1.8], opacity: [0.6, 0.3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <motion.div
      className="absolute inset-0 rounded-full border-4 border-vedic-gold/40"
      animate={{ scale: [1, 1.4, 1.7], opacity: [0.5, 0.2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
    />
    
    <Play className="w-8 h-8 md:w-10 md:h-10 text-vedic-navy ml-1 group-hover:scale-110 transition-transform" />
  </motion.button>
);

// Wave Divider Component - Organic brush stroke style
const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    <svg 
      viewBox="0 0 1440 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      {/* Brush stroke wave - organic feel */}
      <path 
        d="M0 180L40 165C80 150 160 120 240 112.5C320 105 400 120 480 127.5C560 135 640 135 720 120C800 105 880 75 960 67.5C1040 60 1120 75 1200 90C1280 105 1360 120 1400 127.5L1440 135V180H1400C1360 180 1280 180 1200 180C1120 180 1040 180 960 180C880 180 800 180 720 180C640 180 560 180 480 180C400 180 320 180 240 180C160 180 80 180 40 180H0Z" 
        fill="hsl(var(--background))"
      />
      {/* Secondary wave for depth */}
      <path 
        d="M0 180L48 170C96 160 192 140 288 135C384 130 480 140 576 145C672 150 768 150 864 140C960 130 1056 110 1152 105C1248 100 1344 110 1392 115L1440 120V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0Z" 
        fill="hsl(var(--background))"
        opacity="0.7"
      />
    </svg>
  </div>
);

// Stats Counter with bounce effect
const StatsCounter = ({ 
  end, 
  suffix, 
  label, 
  icon: Icon 
}: { 
  end: number; 
  suffix: string; 
  label: string; 
  icon: typeof Users;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bouncing, setBouncing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        setBouncing(true);
        setTimeout(() => setBouncing(false), 500);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center group cursor-pointer">
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-vedic-gold to-vedic-gold-light flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-vedic-gold/30"
        whileHover={{ y: -5 }}
      >
        <Icon className="w-8 h-8 text-vedic-navy" />
      </motion.div>
      <motion.div 
        className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
        animate={bouncing ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <p className="text-white/70 font-medium group-hover:text-vedic-gold transition-colors duration-300">{label}</p>
    </div>
  );
};

// Lightbox Component
const Lightbox = ({ 
  photo, 
  onClose, 
  onPrev, 
  onNext 
}: { 
  photo: typeof galleryPhotos[0]; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-vedic-navy/95 backdrop-blur-lg flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button
      onClick={(e) => { e.stopPropagation(); onClose(); }}
      className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-vedic-gold hover:text-vedic-navy transition-all duration-300 hover:scale-110"
    >
      <X className="w-6 h-6" />
    </button>
    
    <button
      onClick={(e) => { e.stopPropagation(); onPrev(); }}
      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-vedic-gold hover:text-vedic-navy transition-all duration-300 hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    
    <button
      onClick={(e) => { e.stopPropagation(); onNext(); }}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-vedic-gold hover:text-vedic-navy transition-all duration-300 hover:scale-110"
    >
      <ChevronRight className="w-6 h-6" />
    </button>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="max-w-5xl max-h-[85vh] relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={photo.url}
        alt={photo.caption}
        className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-vedic-navy via-vedic-navy/80 to-transparent rounded-b-2xl">
        <p className="text-white text-xl font-display font-semibold">{photo.caption}</p>
      </div>
    </motion.div>
  </motion.div>
);

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : null);
  const nextPhoto = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryPhotos.length : null);

  const getSafeInstagramUrl = (url: string) => {
    if (!url) return "";
    const embedUrl = url.trim();
    if (embedUrl.includes("/embed/")) return embedUrl;

    let postId = "";
    if (embedUrl.includes("instagram.com/reel/")) {
      const reelMatch = embedUrl.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
      if (reelMatch?.[1]) postId = reelMatch[1];
    } else if (embedUrl.includes("instagram.com/p/")) {
      const postMatch = embedUrl.match(/instagram\.com\/p\/([A-Za-z0-9_-]+)/);
      if (postMatch?.[1]) postId = postMatch[1];
    }
    // Redirect back to our app when user leaves the embed (rd=redirect URL, rp=redirect path)
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const path = typeof window !== "undefined" ? (window.location.pathname || "/") : "/";
    const redirectParams = origin ? `&rd=${encodeURIComponent(origin)}&rp=${encodeURIComponent(path)}` : "";
    return postId ? `https://www.instagram.com/reel/${postId}/embed/?cr=1&v=14&wp=540${redirectParams}#%7B%22ci%22%3A0%2C%22os%22%3A0%7D` : "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />

      {/* Hero Section - Visual Storytelling / Art Gallery Style */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-32 overflow-hidden bg-gradient-to-br from-vedic-navy via-vedic-navy to-[#1a1a3e]">
        {/* Dynamic Mesh Gradient Background - "Aura" Effect */}
        <MeshGradientBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              {/* Decorative badge */}
              <motion.div 
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-vedic-gold" />
                <span className="text-white/80 text-sm font-medium tracking-wide">Welcome to Our Gallery</span>
              </motion.div>
              
              {/* Main heading with handwritten accent */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block"
                >
                  See How Our
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block"
                >
                  <span className="text-vedic-gold">Young Minds</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block relative"
                >
                  {/* Handwritten-style accent for "Shine" */}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      fontFamily: "'Quicksand', cursive",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Shine
                    {/* Decorative underline swoosh */}
                    <motion.svg
                      viewBox="0 0 200 20"
                      className="absolute -bottom-2 left-0 w-full h-auto"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <motion.path
                        d="M5 15 Q50 5, 100 12 T195 8"
                        stroke="url(#goldGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#fcd34d" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                  <span className="text-white"> Every Day!</span>
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                From online classrooms to real smiles — witness the magic of learning 
                through our gallery of achievements, moments, and celebrations.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-display px-8 py-6 text-lg rounded-2xl group transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://www.instagram.com/tinyvividminds", "_blank")}
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:text-vedic-gold transition-colors" />
                  Follow on Instagram
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Image Cluster with Pulsing Play Button (same on all screen sizes) */}
            <div className="relative flex items-center justify-center min-h-[200px] lg:min-h-0">
              <FloatingImageCluster />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                  <PulsingPlayButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave/Brush-Stroke Divider - Organic gallery edge */}
        <WaveDivider />
      </section>

      {/* Featured Video Section - The Cinematic Player */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch How Learning <span className="text-vedic-gold">Comes Alive!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience how our expert trainers connect with students across 5+ countries 
              through fun, engaging math activities.
            </p>
          </AnimatedSection>

          {/* Macbook-style Video Frame */}
          <AnimatedSection animation="zoom" className="max-w-4xl mx-auto">
            <motion.div 
              className="relative group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-vedic-gold/30 via-vedic-teal/20 to-vedic-gold/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Laptop Frame */}
              <div className="relative bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/80 rounded-t-2xl p-2 pt-6 group-hover:from-muted-foreground/70 group-hover:to-muted-foreground/90 transition-colors duration-300">
                {/* Camera dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-muted-foreground/50 rounded-full group-hover:bg-green-400 transition-colors duration-300" />
                
                {/* Screen */}
                <div className="relative bg-background rounded-lg overflow-hidden aspect-video shadow-inner">
                  <iframe
                    src="https://www.youtube.com/embed/j4BNwKJLfb0"
                    title="Featured Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="relative h-4 bg-gradient-to-b from-muted-foreground/50 to-muted-foreground/60 rounded-b-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-muted-foreground/40 rounded-full" />
              </div>
              <div className="h-2 bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/70 rounded-b-2xl mx-8" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Reels - TikTok-Style Feed */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-500 font-semibold tracking-wider uppercase text-sm rounded-full mb-4 border border-pink-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-4 h-4" />
              From Our Instagram
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Our Instagram <span className="text-vedic-gold">Classroom</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Short, joyful moments captured from our real sessions!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {instagramReels.map((reel, index) => (
              <AnimatedSection key={index} animation="pop" delay={index * 150}>
                <motion.div 
                  className="group relative rounded-[24px] overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 aspect-[9/16] border-2 border-transparent hover:border-pink-500/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 0 40px rgba(236,72,153,0.4)"
                  }}
                  onHoverStart={() => setHoveredVideo(index)}
                  onHoverEnd={() => setHoveredVideo(null)}
                >
                  {/* Instagram Embed with video autoplay */}
                  <iframe
                    src={getSafeInstagramUrl(reel.embedUrl)}
                    title={reel.caption}
                    className="w-full h-full scale-[1.02]"
                    style={{ border: "none" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  
                  {/* Caption Overlay - Instagram Style */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-vedic-navy via-vedic-navy/90 to-transparent pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">tinyvividminds</span>
                    </div>
                    <p className="text-white/90 text-sm">{reel.caption}</p>
                  </div>
                  
                  {/* Hover play indicator */}
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: hoveredVideo === index ? 1 : 0, scale: hoveredVideo === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-5 h-5 text-white fill-white" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Instagram CTA */}
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-2 border-pink-500/50 text-pink-500 hover:bg-pink-500 hover:text-white font-display group transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/tinyvividminds", "_blank")}
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Follow @tinyvividminds
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Masonry Wall */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tiny Moments, <span className="text-vedic-gold">Big Achievements</span>
            </h2>
          </AnimatedSection>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
            {galleryPhotos.map((photo, index) => (
              <AnimatedSection 
                key={index} 
                animation="pop" 
                delay={index * 100}
                className="break-inside-avoid mb-4"
              >
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => openLightbox(index)}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className={cn(
                      "w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110",
                      photo.height === "tall" && "h-80",
                      photo.height === "normal" && "h-64",
                      photo.height === "short" && "h-48"
                    )}
                  />
                  {/* Hover Overlay with sliding caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy via-vedic-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <p className="text-white font-display font-semibold">{photo.caption}</p>
                      <p className="text-vedic-gold text-sm mt-1">Click to view</p>
                    </motion.div>
                  </div>
                  
                  {/* Corner badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-vedic-gold/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-12">
                    <Camera className="w-4 h-4 text-vedic-navy" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* More YouTube Videos */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch More on Our <span className="text-vedic-gold">YouTube Channel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore tips, tricks, and learning activities from our trainers.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {playlistVideoIds.map((id, index) => (
              <AnimatedSection key={id} animation="pop" delay={index * 150}>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden shadow-lg bg-card"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-vedic-navy relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={videoTitles[index]}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-vedic-gold/0 group-hover:bg-vedic-gold/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                  <div className="p-4 group-hover:bg-vedic-gold/5 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                      <p className="font-display font-semibold text-foreground group-hover:text-vedic-gold transition-colors duration-300 flex-1">
                        {videoTitles[index]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-vedic-gold text-vedic-gold hover:bg-vedic-gold hover:text-vedic-navy font-display group transition-all duration-300"
                onClick={() => window.open("https://www.youtube.com/@tinyvividminds", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Visit Our YouTube Channel
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Stats - Glassmorphism Cards */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)' }}
        />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-vedic-gold/20 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%",
                opacity: 0
              }}
              animate={{ 
                y: "-10%",
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrating Our Students' <span className="text-vedic-gold">Success</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From national competitions to personal milestones — our students keep making us proud!
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievementsStats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="pop" delay={index * 200}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(212,175,55,0.5)"
                  }}
                >
                  <StatsCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    icon={stat.icon}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Behind Every Smile */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Behind Every Smile, <span className="text-vedic-gold">There's a Story</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the passionate teachers and trainers who make every class meaningful.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {behindScenes.map((item, index) => (
              <AnimatedSection key={item.label} animation="pop" delay={index * 150}>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: -5
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vedic-navy/90 via-vedic-navy/30 to-transparent group-hover:from-vedic-navy/95 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <p className="text-white font-display font-semibold text-lg">{item.label}</p>
                    <p className="text-vedic-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Learn more →</p>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--teal-dark)) 100%)' }}
        />
        
        {/* Course-related floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["÷", "×", "∑", "π", "√", "∞", "%", "=", "+", "-"].map((symbol, index) => (
            <motion.span
              key={index}
              className="absolute text-4xl md:text-6xl text-white/5 font-bold select-none"
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              style={{
                left: `${(index * 10) + 5}%`,
                top: `${(index % 3) * 30 + 15}%`,
              }}
            >
              {symbol}
            </motion.span>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection animation="zoom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Be Part of Our <span className="text-vedic-gold">Growing Family!</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Join hundreds of happy learners from around the world who are discovering the fun side of math.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-display font-semibold px-8 py-6 text-lg rounded-2xl cta-glow"
                    asChild
                  >
                    <Link to="/contact#contact-form" className="flex items-center gap-2">
                      <motion.span
                        className="inline-flex"
                        animate={{ translateY: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Calendar className="w-5 h-5" />
                      </motion.span>
                      Book a Free Demo Now
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-vedic-gold text-vedic-gold hover:bg-vedic-gold hover:text-vedic-navy font-display px-8 py-6 text-lg rounded-2xl"
                    asChild
                  >
                    <Link to="/courses/abacus">Explore Programs</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photo={galleryPhotos[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
