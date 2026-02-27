import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Clock, 
  TrendingUp, 
  Users, 
  Target, 
  Brain,
  Monitor,
  LayoutDashboard,
  FileText,
  MessageCircle,
  Heart,
  Rocket,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";
import SignatureHero from "@/components/signature/SignatureHero";
import BenefitsSection from "@/components/signature/BenefitsSection";
import SpotlightCarousel from "@/components/signature/SpotlightCarousel";
import TrustSection from "@/components/signature/TrustSection";
import StudentPersonas from "@/components/signature/StudentPersonas";
import SignatureCTA from "@/components/signature/SignatureCTA";
import { SocialSidebar } from "@/components/SocialSidebar";

const SignaturePrograms = () => {
  return (
    <div className="min-h-screen bg-background font-quicksand">
      <Navbar />
      <SocialSidebar />
      
      <SignatureHero />
      <BenefitsSection />
      <SpotlightCarousel />
      <TrustSection />
      <StudentPersonas />
      <SignatureCTA />
      
      <Footer />
    </div>
  );
};

export default SignaturePrograms;
