import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import AgeGroupsSection from "@/components/AgeGroupsSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import WhyMusicGalaxy from "@/components/WhyMusicGalaxy";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileTabs from "@/components/MobileTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />

      {/* ── Desktop layout — all sections visible ── */}
      <div className="hidden lg:block">
        <AboutSection />
        <CoursesSection />
        <AgeGroupsSection />
        <CoreFeaturesSection />
        <WhyMusicGalaxy />
        <FacultySection />
        <TestimonialsSection />
        <FAQSection />
        <GallerySection />
        <ContactCTA />
        <Footer />
      </div>

      {/* ── Mobile layout — tabbed ── */}
      <MobileTabs />

      <FloatingButtons />
    </div>
  );
};

export default Index;
