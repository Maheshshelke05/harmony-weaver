import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { icon: "🎵", text: "Experienced Faculty" },
  { icon: "📚", text: "Structured Curriculum" },
  { icon: "👤", text: "One-on-One Training" },
  { icon: "🕐", text: "Flexible Timing" },
  { icon: "💰", text: "Affordable Fees" },
  { icon: "🎭", text: "Stage Exposure" },
  { icon: "📋", text: "Theory + Practical Notes" },
  { icon: "🌐", text: "Online + Offline Options" },
];

const WhyMusicGalaxy = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
              OUR DIFFERENCE
            </span>
            <h2 className="scroll-reveal font-display text-5xl lg:text-6xl text-foreground mb-8">
              WHY MUSIC GALAXY INDIA?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div
                  key={r.text}
                  className="scroll-reveal flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-2xl">{r.icon}</span>
                  <span className="text-foreground font-body text-sm font-medium">{r.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden">
              <span className="text-[200px] text-primary/15 font-serif select-none">♫</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMusicGalaxy;
