import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  { icon: "👶",   title: "Kids (6–17)",           tag: "Kids 6-17",      desc: "Fun, engaging, and foundational music training to build creativity and confidence from an early age." },
  { icon: "🧑🎓", title: "Adults (18–60)",         tag: "Adults 18-60",   desc: "Flexible programs for professionals, hobbyists, and learners returning to music after a break." },
  { icon: "👵",   title: "Senior Citizens (60+)",  tag: "Sr. Citizen 60+",desc: "Joyful, stress-relieving musical sessions designed with care for lifelong learners and retirees." },
];

const AgeGroupsSection = () => {
  const ref = useScrollReveal();
  return (
    <section className="section-py" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">BOOKING</span>
          <h2 className="scroll-reveal font-display text-4xl sm:text-5xl lg:text-7xl text-foreground mb-4">MUSIC CLASSES FOR ALL AGE GROUPS</h2>
          <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg">For Children, Adults & Senior Citizens</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="scroll-reveal bg-card border border-border rounded-xl p-6 sm:p-8 text-center card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-5xl sm:text-6xl block mb-4">{g.icon}</span>
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-body font-semibold rounded-full mb-4">{g.tag}</span>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-3">{g.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{g.desc}</p>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-xl hover:scale-105 active:scale-95 transition-transform duration-200">
                Book Demo Class
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsSection;
