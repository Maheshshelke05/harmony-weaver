import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "🎓", title: "1-on-1 Personalized Support", desc: "Every student gets dedicated one-on-one attention from expert faculty." },
  { icon: "🏫", title: "Offline Classes", desc: "In-person training at our Pune & Chandrapur music centres." },
  { icon: "💻", title: "Live Online Classes", desc: "Learn from home in English, Hindi, or Marathi via live sessions." },
  { icon: "⏰", title: "45–60 Min Sessions", desc: "Focused sessions designed for maximum learning and practice." },
  { icon: "📜", title: "Course Certification", desc: "Receive recognized certification upon course completion." },
  { icon: "🎭", title: "Stage Exposure", desc: "Perform live at concerts, events, and recitals to build confidence." },
];

const CoreFeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            FEATURES
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground">
            MUSIC GALAXY CORE FEATURES
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="scroll-reveal bg-card border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="font-display text-2xl text-primary mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
