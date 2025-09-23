import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import CropListings from "@/components/crop-listings";
import TrustImpact from "@/components/trust-impact";
import EducationalTips from "@/components/educational-tips";
import FinalCTA from "@/components/final-cta";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <CropListings />
      <TrustImpact />
      <EducationalTips />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
