import { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";
import AgeGroupsSection from "./AgeGroupsSection";
import CoreFeaturesSection from "./CoreFeaturesSection";
import WhyMusicGalaxy from "./WhyMusicGalaxy";
import FacultySection from "./FacultySection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import GallerySection from "./GallerySection";
import ContactCTA from "./ContactCTA";
import Footer from "./Footer";

// Map from nav href → tab id
export const NAV_TO_TAB: Record<string, string> = {
  "#home":         "about",
  "#about":        "about",
  "#courses":      "courses",
  "#testimonials": "team",
  "#gallery":      "gallery",
  "#contact":      "contact",
};

const tabs = [
  { id: "about",   label: "About",   icon: "🏠" },
  { id: "courses", label: "Courses", icon: "🎸" },
  { id: "team",    label: "Team",    icon: "👨🏫" },
  { id: "gallery", label: "Gallery", icon: "📷" },
  { id: "contact", label: "Contact", icon: "📞" },
];

const MobileTabs = () => {
  const [active, setActive] = useState("about");

  // Listen for switchTab events dispatched by Navbar
  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail;
      setActive(tab);
    };
    window.addEventListener("switchTab", handler);
    return () => window.removeEventListener("switchTab", handler);
  }, []);

  const switchTab = (id: string) => {
    setActive(id);
  };

  return (
    <div className="lg:hidden">
      {/* Sticky tab bar */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="flex overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`flex-1 min-w-[64px] flex flex-col items-center gap-0.5 py-2.5 px-2 text-[10px] font-body font-semibold uppercase tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap ${
                active === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div>
        {active === "about" && <AboutSection />}
        {active === "courses" && (
          <>
            <CoursesSection />
            <AgeGroupsSection />
            <CoreFeaturesSection />
            <WhyMusicGalaxy />
          </>
        )}
        {active === "team" && (
          <>
            <FacultySection />
            <TestimonialsSection />
          </>
        )}
        {active === "gallery" && (
          <>
            <GallerySection />
            <FAQSection />
          </>
        )}
        {active === "contact" && (
          <>
            <ContactCTA />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default MobileTabs;
