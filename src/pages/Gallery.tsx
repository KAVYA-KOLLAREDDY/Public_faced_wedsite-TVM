import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Instagram, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Award,
  Globe,
  Clock,
  ExternalLink,
  Camera,
  Heart,
  Sparkles,
  Mail
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HIGHLIGHTED_COUNTRY_COUNT } from "@/config/globalNetworkCountries";
import { SITE_LINKS } from "@/config/siteLinks";
import { trackSocialClick } from "@/lib/analytics";

// every-
import studentsLearningImg from "@/assets/students-learning/online_class.png";
import teamFounderImg from "@/assets/students-learning/teacher_teaching.png";
import studentsLearningImg2Img from "@/assets/students-learning/competitions.png";
//tiny-moments-big-achievements
import teamTeacher2Img from "@/assets/student-prizes/Acheivement16.jpeg";
import childrenLearningImg from "@/assets/student-prizes/student_moment1.jpg";
import confidentChildrenImg from "@/assets/student-prizes/student_moment2.jpg";
import curiousChildImg from "@/assets/student-prizes/student_moment3.jpg";
import digitalClassroomImg from "@/assets/student-prizes/student_moment4.jpg";

import prize1Img from "@/assets/student-prizes/Acheivement1.png";
import prize2Img from "@/assets/student-prizes/Acheivement2.png";
import prize3Img from "@/assets/student-prizes/Acheivement3.png";
import prize4Img from "@/assets/student-prizes/Acheivement4.png";
import prize5Img from "@/assets/student-prizes/Acheivement5.png";
import prize6Img from "@/assets/student-prizes/Acheivement6.png";
import prize11Img from "@/assets/student-prizes/Acheivement11.png";
import prize12Img from "@/assets/student-prizes/Acheivement12.png";
import prize13Img from "@/assets/student-prizes/Acheivement13.png";
import prize14Img from "@/assets/student-prizes/Acheivement14.png";
import abacus3dImg from "@/assets/student-prizes/Acheivement7.jpeg";
import acheivement18Img from "@/assets/student-prizes/Achievement18.jpeg";
import acheivement17Img from "@/assets/student-prizes/Acheivement17.jpeg";
import acheivement19Img from "@/assets/student-prizes/Acheivement15.jpeg";
import abacusCourseImg from "@/assets/student-prizes/Acheivement8.jpeg";
import abacusHandsImg from "@/assets/student-prizes/Acheivement9.jpeg";
import abacusHeroImg from "@/assets/student-prizes/Acheivement10.jpeg";
import aboutHeroImg from "@/assets/student-prizes/student_moment6.jpeg";
import brainDevelopmentImg from "@/assets/student-prizes/student_moment7.jpeg";
import heroStudentsImg from "@/assets/student-prizes/student_moment8.jpeg";
import tutoringCourseImg from "@/assets/student-prizes/student_moment5.jpeg";
import vedicMathCourseImg from "@/assets/student-prizes/student_moments9.jpeg";
import worldNetworkImg from "@/assets/student-prizes/student_moment10.jpeg";
import founderPicImg from "@/assets/student-prizes/student_moment11.jpeg";
import studentMoment3 from "@/assets/student-prizes/student_moment12.jpeg";

const GALLERY_PAGE_SIZE = 6;

type GalleryPhotoHeight = "tall" | "normal" | "short";

/** Per-slide slot pattern (6 photos): tall → normal → short → normal → tall → normal */
const GALLERY_PAGE_HEIGHTS: GalleryPhotoHeight[] = [
  "tall",
  "normal",
  "short",
  "normal",
  "tall",
  "normal",
];

type GalleryPhoto = {
  url: string;
  caption: string;
};

/** Split galleryPhotos into slides of up to 6 — no duplicates; last slide may be shorter. */
function buildGallerySlides(
  photos: GalleryPhoto[],
  size = GALLERY_PAGE_SIZE
): { photo: GalleryPhoto; sourceIndex: number }[][] {
  if (photos.length === 0) return [];

  const slides: { photo: GalleryPhoto; sourceIndex: number }[][] = [];
  for (let i = 0; i < photos.length; i += size) {
    const slide = photos.slice(i, i + size).map((photo, offset) => ({
      photo,
      sourceIndex: i + offset,
    }));
    slides.push(slide);
  }
  return slides;
}

function heightForSlot(slotIndex: number): GalleryPhotoHeight {
  return GALLERY_PAGE_HEIGHTS[slotIndex % GALLERY_PAGE_HEIGHTS.length] ?? "normal";
}

// Data
const instagramReels = [
  {
    embedUrl: "https://www.instagram.com/reel/DJgDiA4txfb/?igsh=MTVhczg0OHo2aHVo",
    caption: "Our Abacus Level 1 stars at work 🌟",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DcMzCwEhZcd/?igsh=ZDBsdmJlcWJyaXFs&igsi=ZDBsdmJlcWJyaXFs",
    caption: "Quick mental math challenge 🧠💡",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DKgK9d3tAmc/?igsh=MzVreTd0b2Vyemlx&igsi=MzVreTd0b2Vyemlx",
    caption: "Kids across the world solving together 🌎",
  },
];

const playlistVideoIds = ["j4BNwKJLfb0", "W5atWB1FszM", "8w5eDclKS_w"];
const youtubeWatchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;
const youtubeEmbedUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}`;
const videoTitles = [
  "Tips, Tricks & Learning Activities",
  "Interactive Math Sessions",
  "Learning Activities & Training Tips",
];

const galleryPhotos: GalleryPhoto[] = [
  { url: prize11Img, caption: "Competition Winner" },
  { url: prize4Img, caption: "Certificate of Achievement" },
  { url: prize5Img, caption: "Medal of Excellence" },
  { url: teamTeacher2Img, caption: "Competition Day Pride" },
  { url: prize1Img, caption: "Trophy & Medal Winner" },
  { url: prize2Img, caption: "Young Abacus Champions" },
  { url: prize3Img, caption: "First Place Achiever" },
  { url: acheivement17Img, caption: "Hard-Earned Trophy Moment" },
  { url: acheivement18Img, caption: "Smiles After the Contest" },
  { url: acheivement19Img, caption: "Champion in the Making" },
  { url: prize6Img, caption: "Prize Winners Showcase" },
  { url: abacus3dImg, caption: "Victory Celebration" },
  { url: prize14Img, caption: "Proud Competition Winner" },
  { url: prize12Img, caption: "Abacus Olympiad Champion" },
  { url: abacusHandsImg, caption: "Award-Winning Moment" },
  { url: abacusHeroImg, caption: "Olympiad Success Story" },
  { url: abacusCourseImg, caption: "Bright Contest Performer" },
  { url: prize13Img, caption: "Star of the Contest Stage" },
  { url: heroStudentsImg, caption: "Rising Competition Stars" },
  { url: vedicMathCourseImg, caption: "Math Competition Winner" },
  { url: brainDevelopmentImg, caption: "Top Contest Performer" },
  { url: tutoringCourseImg, caption: "Shine Bright Winner" },
  { url: aboutHeroImg, caption: "Competition Glory" },
  { url: worldNetworkImg, caption: "Cross-Border Contest Pride" },
  { url: founderPicImg, caption: "Proud Prize Achiever" },
  { url: studentMoment3, caption: "Winning With Confidence" },
];

const achievementsStats = [
  { value: 20, suffix: "+", label: "Certificates Awarded", icon: Award },
  { value: HIGHLIGHTED_COUNTRY_COUNT, suffix: "+", label: "Countries", icon: Globe },
  { value: 1000, suffix: "+", label: "Hours of Learning", icon: Clock },
];

const behindScenes = [
  { img: teamFounderImg, label: "Passionate Teachers" },
  { img: studentsLearningImg, label: "Live Online Sessions" },
  { img: studentsLearningImg2Img, label: "Interactive Workshops" },
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
    { src: curiousChildImg, alt: "Certificate" },
    { src: digitalClassroomImg, alt: "Learning" },
    { src: confidentChildrenImg, alt: "Abacus work" }
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
    onClick={() => {
      trackSocialClick("youtube", "gallery_play_button");
      window.open(SITE_LINKS.youtube, "_blank");
    }}
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
  photo: GalleryPhoto;
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

const GALLERY_AUTO_ADVANCE_MS = 5000;

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [galleryPage, setGalleryPage] = useState(0);
  const [galleryAutoplayPaused, setGalleryAutoplayPaused] = useState(false);

  const gallerySlides = buildGallerySlides(galleryPhotos);
  const totalGalleryPages = Math.max(1, gallerySlides.length);
  const safeGalleryPage = Math.min(Math.max(0, galleryPage), totalGalleryPages - 1);
  const visibleGalleryPhotos = gallerySlides[safeGalleryPage] ?? [];

  useEffect(() => {
    setGalleryPage((page) => Math.min(page, Math.max(0, totalGalleryPages - 1)));
  }, [totalGalleryPages]);

  useEffect(() => {
    if (galleryAutoplayPaused || lightboxIndex !== null || totalGalleryPages <= 1) return;

    const timer = window.setInterval(() => {
      setGalleryPage((page) => (page + 1) % totalGalleryPages);
    }, GALLERY_AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [galleryAutoplayPaused, lightboxIndex, totalGalleryPages]);

  const pauseGalleryAutoplay = () => setGalleryAutoplayPaused(true);

  const openLightbox = (sourceIndex: number) => {
    pauseGalleryAutoplay();
    setLightboxIndex(sourceIndex);
  };
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
    <div className="min-h-screen bg-background min-w-0 w-full max-w-[100vw] overflow-x-clip">
      <Navbar />
      <SocialSidebar />

      {/* Hero Section - Visual Storytelling / Art Gallery Style */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden bg-gradient-to-br from-vedic-navy via-vedic-navy to-[#1a1a3e]">
        {/* Dynamic Mesh Gradient Background - "Aura" Effect */}
        <MeshGradientBackground />
        
        <div className="container mx-auto relative z-10">
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
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 mt-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
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
                  onClick={() => {
                    trackSocialClick("instagram", "gallery_hero");
                    window.open(SITE_LINKS.instagram, "_blank");
                  }}
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
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Watch How Learning <span className="text-vedic-gold">Comes Alive!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience how our expert trainers connect with students across {HIGHLIGHTED_COUNTRY_COUNT}+ countries
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
                
                {/* Real YouTube embed UI; iframe ignores clicks — overlay sends users to YouTube to play */}
                <div className="relative bg-background rounded-lg overflow-hidden aspect-video shadow-inner">
                  <iframe
                    src={youtubeEmbedUrl("j4BNwKJLfb0")}
                    title="Featured Video"
                    className="absolute inset-0 h-full w-full border-0 pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <a
                    href={youtubeWatchUrl("j4BNwKJLfb0")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Play featured video"
                    onClick={() =>
                      trackSocialClick("youtube", "gallery_featured_video", {
                        video_id: "j4BNwKJLfb0",
                      })
                    }
                    className="absolute inset-0 z-10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-vedic-gold focus-visible:ring-inset"
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
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto">
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
              onClick={() => {
                trackSocialClick("instagram", "gallery_reels_cta");
                window.open(SITE_LINKS.instagram, "_blank");
              }}
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Follow @tinyvividminds
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Masonry Wall */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tiny Moments, <span className="text-vedic-gold">Big Achievements</span>
            </h2>
          </AnimatedSection>

          {/* Masonry grid — 6 images/slide from galleryPhotos; last slide padded to 6 */}
          <div className="mx-auto max-w-6xl columns-1 gap-1 sm:columns-2 lg:columns-3 [column-gap:0.35rem]">
            {visibleGalleryPhotos.map(({ photo, sourceIndex }, index) => {
              const height = heightForSlot(index);
              return (
                <div
                  key={`${safeGalleryPage}-${sourceIndex}-${index}`}
                  className="mb-3 break-inside-avoid"
                >
                  <motion.button
                    type="button"
                    className="group relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
                    onClick={() => openLightbox(sourceIndex)}
                    onPointerDown={pauseGalleryAutoplay}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className={cn(
                        "mx-auto block h-auto max-w-full object-contain shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:brightness-110 group-hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]",
                        height === "tall" && "max-h-80",
                        height === "normal" && "max-h-64",
                        height === "short" && "max-h-48"
                      )}
                    />
                    {/* Hover overlay + sliding caption */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vedic-navy via-vedic-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="font-display font-semibold text-white">{photo.caption}</p>
                        <p className="mt-1 text-sm text-vedic-gold">Click to view</p>
                      </div>
                    </div>
                    {/* Corner badge */}
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-vedic-gold/90 opacity-0 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100">
                      <Camera className="h-4 w-4 text-vedic-navy" />
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {totalGalleryPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  pauseGalleryAutoplay();
                  setGalleryPage((page) =>
                    page <= 0 ? totalGalleryPages - 1 : page - 1
                  );
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-105 hover:bg-muted sm:h-11 sm:w-11"
                aria-label="Previous gallery page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5" role="tablist" aria-label="Gallery pages">
                {Array.from({ length: totalGalleryPages }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === safeGalleryPage}
                    aria-label={`Gallery page ${i + 1}`}
                    onClick={() => {
                      pauseGalleryAutoplay();
                      setGalleryPage(i);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === safeGalleryPage
                        ? "w-7 bg-vedic-gold"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  pauseGalleryAutoplay();
                  setGalleryPage((page) => (page + 1) % totalGalleryPages);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-105 hover:bg-muted sm:h-11 sm:w-11"
                aria-label="Next gallery page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* More YouTube Videos */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto">
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
                      src={youtubeEmbedUrl(id)}
                      title={videoTitles[index]}
                      className="absolute inset-0 h-full w-full border-0 pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-vedic-gold/0 group-hover:bg-vedic-gold/10 transition-colors duration-300 pointer-events-none z-[1]" />
                  </div>
                  <div className="p-4 group-hover:bg-vedic-gold/5 transition-colors duration-300 relative z-0">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                      <p className="font-display font-semibold text-foreground group-hover:text-vedic-gold transition-colors duration-300 flex-1">
                        {videoTitles[index]}
                      </p>
                    </div>
                  </div>
                  <a
                    href={youtubeWatchUrl(id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={videoTitles[index]}
                    onClick={() =>
                      trackSocialClick("youtube", "gallery_playlist_video", {
                        video_id: id,
                      })
                    }
                    className="absolute inset-0 z-10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-vedic-gold focus-visible:ring-inset rounded-2xl"
                  />
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
                onClick={() => {
                  trackSocialClick("youtube", "gallery_channel_cta");
                  window.open(SITE_LINKS.youtube, "_blank");
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Visit Our YouTube Channel
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Stats - Glassmorphism Cards */}
      <section className="py-16 relative overflow-hidden">
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

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrating Our Students' <span className="text-vedic-gold">Success</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From national competitions to personal milestones — our students keep making us proud!
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {achievementsStats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="pop"
                delay={index * 200}
                className="flex h-full min-h-0 w-full"
              >
                <motion.div
                  className="flex h-full min-h-[220px] w-full flex-col rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 cursor-pointer md:min-h-[240px]"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(212,175,55,0.5)",
                  }}
                >
                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <StatsCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Behind Every Smile */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto">
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
      <section className="py-16 relative overflow-hidden">
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

        <div className="container mx-auto relative z-10 text-center">
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
                        <Mail className="w-5 h-5" />
                      </motion.span>
                      Contact Us
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
                    <DiscoverProgramsLink>Explore Programs</DiscoverProgramsLink>
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
