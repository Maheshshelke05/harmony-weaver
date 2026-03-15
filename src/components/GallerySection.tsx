import { useScrollReveal } from "@/hooks/useScrollReveal";

const GallerySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            GALLERY
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground">
            MUSIC GALAXY PHOTO GALLERY
          </h2>
        </div>

        <div className="scroll-reveal grid grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] bg-gradient-to-br from-card to-secondary rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl text-primary/10 font-serif">♪</span>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">📷</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 border border-primary text-primary font-body font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
