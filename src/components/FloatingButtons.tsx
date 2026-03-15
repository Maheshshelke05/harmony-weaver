import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";

const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.882l6.198-1.625A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.001-1.368l-.36-.213-3.68.965.981-3.595-.234-.369A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-4 z-50 flex flex-col gap-3"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919595464804"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg text-white hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        {WA_SVG}
      </a>

      {/* Phone */}
      <a
        href="tel:9595464804"
        title="Call Us"
        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <Phone className="w-5 h-5 text-primary-foreground" />
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
          style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
