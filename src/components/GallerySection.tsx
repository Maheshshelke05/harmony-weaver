import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/gallery/guitar.jpg",     alt: "Guitar Class",    fallback: "🎸", label: "Guitar Class" },
  { src: "/gallery/keypad.jpg",     alt: "Keyboard Class",  fallback: "🎹", label: "Keyboard Class" },
  { src: "/gallery/vocal.jpg",      alt: "Vocal Class",     fallback: "🎤", label: "Vocal Class" },
  { src: "/gallery/moutorgan.jpg",  alt: "Mouth Organ",     fallback: "🎵", label: "Mouth Organ" },
  { src: "/gallery/annual.jpg",     alt: "Annual Concert",  fallback: "🎭", label: "Annual Concert" },
  { src: "/gallery/awward.jpg",     alt: "Award Ceremony",  fallback: "🏆", label: "Award Ceremony" },
  { src: "/gallery/online.jpg",     alt: "Online Classes",  fallback: "💻", label: "Online Classes" },
  { src: "/gallery/kids class.jpg", alt: "Kids Program",    fallback: "👶", label: "Kids Program" },
];

const Img = ({ item, onClick }: { item: typeof galleryImages[0]; onClick: () => void }) => {
  const [err, setErr] = useState(false);
  return (
    <div className="group relative w-full h-full rounded-2xl overflow-hidden border border-border bg-card cursor-pointer" onClick={onClick}>
      {!err
        ? <img src={item.src} alt={item.alt} onError={() => setErr(true)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        : <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-card to-secondary">
            <span className="text-5xl">{item.fallback}</span>
            <span className="text-xs text-muted-foreground font-body">{item.label}</span>
          </div>
      }
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center justify-between">
          <span className="text-white font-body text-sm font-semibold">{item.label}</span>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <ZoomIn className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const ref = useScrollReveal();
  const [lb, setLb] = useState<number | null>(null);
  const total = galleryImages.length;
  const prev = () => setLb((l) => l !== null ? (l - 1 + total) % total : null);
  const next = () => setLb((l) => l !== null ? (l + 1) % total : null);

  return (
    <section id="gallery" className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,20%,93%)" }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Gallery</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5 mb-4">
            MUSIC GALAXY <span className="text-primary">MOMENTS</span>
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg">
            Glimpses from our classes, concerts & student journeys
          </p>
        </div>

        {/* ── Desktop: fixed masonry layout ── */}
        <div className="scroll-reveal hidden sm:grid gap-3" style={{ gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "220px 220px" }}>
          {/* 0 — tall left, spans 2 rows */}
          <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <Img item={galleryImages[0]} onClick={() => setLb(0)} />
          </div>
          {/* 1 — top middle-left */}
          <div style={{ gridColumn: "2", gridRow: "1" }}>
            <Img item={galleryImages[1]} onClick={() => setLb(1)} />
          </div>
          {/* 2 — top middle-right */}
          <div style={{ gridColumn: "3", gridRow: "1" }}>
            <Img item={galleryImages[2]} onClick={() => setLb(2)} />
          </div>
          {/* 3 — tall right, spans 2 rows */}
          <div style={{ gridColumn: "4", gridRow: "1 / 3" }}>
            <Img item={galleryImages[3]} onClick={() => setLb(3)} />
          </div>
          {/* 4 — bottom middle-left */}
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <Img item={galleryImages[4]} onClick={() => setLb(4)} />
          </div>
          {/* 5 — bottom middle-right */}
          <div style={{ gridColumn: "3", gridRow: "2" }}>
            <Img item={galleryImages[5]} onClick={() => setLb(5)} />
          </div>
        </div>

        {/* Second row — remaining 2 images */}
        <div className="scroll-reveal hidden sm:grid gap-3 mt-3" style={{ gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "220px" }}>
          <div><Img item={galleryImages[6]} onClick={() => setLb(6)} /></div>
          <div><Img item={galleryImages[7]} onClick={() => setLb(7)} /></div>
        </div>

        {/* ── Mobile: simple 2-col equal grid ── */}
        <div className="scroll-reveal sm:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((item, i) => (
            <div key={i} style={{ aspectRatio: "4/3" }}>
              <Img item={item} onClick={() => setLb(i)} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lb !== null && (
        <div className="fixed inset-0 z-50 bg-black/96 backdrop-blur-md flex items-center justify-center p-4"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          onClick={() => setLb(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLb(null)}><X className="w-5 h-5" /></button>
          <button className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft className="w-5 h-5" /></button>
          <div className="max-w-3xl w-full mx-14 sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative bg-card flex items-center justify-center">
              <img src={galleryImages[lb].src} alt={galleryImages[lb].alt} className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              <span className="absolute text-7xl opacity-20">{galleryImages[lb].fallback}</span>
            </div>
            <p className="text-center text-white/50 font-body text-sm mt-3">{galleryImages[lb].label} · {lb + 1}/{total}</p>
          </div>
          <button className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight className="w-5 h-5" /></button>
        </div>
      )}

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C480,70 960,0 1440,40 L1440,70 L0,70 Z" fill="hsl(40,30%,97%)" />
        </svg>
      </div>
    </section>
  );
};

export default GallerySection;
