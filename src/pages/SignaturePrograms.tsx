import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignatureHero from "@/components/signature/SignatureHero";
import BenefitsSection from "@/components/signature/BenefitsSection";
import SpotlightCarousel from "@/components/signature/SpotlightCarousel";
import GlobalFoundationsSection from "@/components/signature/GlobalFoundationsSection";
import StudentPersonas from "@/components/signature/StudentPersonas";
import SignatureCTA from "@/components/signature/SignatureCTA";
import { SocialSidebar } from "@/components/SocialSidebar";

const SignaturePrograms = () => {
  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip font-quicksand">
      <Navbar />
      <SocialSidebar />

      <SignatureHero />
      <BenefitsSection />
      <SpotlightCarousel />
      <GlobalFoundationsSection />
      <StudentPersonas />
      <SignatureCTA />

      <Footer />
    </div>
  );
};

export default SignaturePrograms;
