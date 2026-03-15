import { useScrollReveal } from "@/hooks/useScrollReveal";

const faculty = [
  { name: "Mr. Kunal Nagrale", role: "Founder – Guitar, Keyboard, Mouth Organ", exp: "25+ Years" },
  { name: "Mrs. Chandrama N", role: "Guitar & Keyboard", exp: "15+ Years" },
  { name: "Mr. Akash Maigavwali", role: "Sitar & Organ", exp: "24+ Years" },
  { name: "Mrs. Anamika D", role: "Vocal & Classical", exp: "29+ Years" },
  { name: "Ms. Paarul T", role: "Guitar & Music Theory", exp: "10+ Years" },
  { name: "Mr. Pratik S", role: "Keyboard & Guitar", exp: "8+ Years" },
  { name: "Mr. Rahul Suryawanshi", role: "Harmonica", exp: "10+ Years" },
  { name: "Ms. Vaibhavi S", role: "Mouth Organ", exp: "7+ Years" },
  { name: "Mr. Prateeksh Mule", role: "Mouth Organ", exp: "5+ Years" },
];

const FacultySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            OUR TEAM
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground mb-4">
            MEET OUR PROFESSIONAL MUSICIANS
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-lg">
            Expert faculty committed to your musical growth
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f, i) => (
            <div
              key={f.name}
              className="scroll-reveal group relative bg-card border border-border rounded-lg p-6 overflow-hidden hover:border-primary/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-primary/40">♪</span>
              </div>
              <h3 className="font-display text-2xl text-foreground text-center">{f.name}</h3>
              <p className="text-primary font-body text-sm text-center mt-1">{f.role}</p>
              <span className="block text-center text-xs text-muted-foreground mt-2 font-body">{f.exp}</span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-center">
                  <h4 className="font-display text-2xl text-primary-foreground">{f.name}</h4>
                  <p className="text-primary-foreground/80 font-body text-sm mt-2">{f.role}</p>
                  <p className="text-primary-foreground/80 font-body text-sm mt-1">{f.exp} Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
