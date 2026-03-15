import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919595464804"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-5 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        title="WhatsApp"
      >
        <span className="text-xl">💬</span>
      </a>

      {/* Phone */}
      <a
        href="tel:9595464804"
        className="fixed bottom-10 left-5 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        title="Call Us"
      >
        <Phone className="w-5 h-5 text-primary-foreground" />
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-5 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
