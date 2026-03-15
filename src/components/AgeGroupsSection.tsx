import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  { icon: "👶", title: "Kids (6–17)", desc: "Fun, engaging foundational music training designed to spark creativity and build strong musical basics early." },
  { icon: "👨", title: "Adults (18–60)", desc: "Flexible programs for professionals and hobbyists looking to learn a new instrument or refine their skills." },
  { icon: "👴", title: "Senior Citizens", desc: "Joyful, stress-relieving music sessions designed with care, patience, and personalized attention." },
];

const AgeGroupsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            FOR EVERYONE
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground">
            MUSIC CLASSES FOR ALL AGE GROUPS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="scroll-reveal bg-card border border-border rounded-lg p-8 text-center hover:border-primary/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-6xl block mb-6">{g.icon}</span>
              <h3 className="font-display text-3xl text-foreground mb-3">{g.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsSection;
