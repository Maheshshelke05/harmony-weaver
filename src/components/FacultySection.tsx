import { useScrollReveal } from "@/hooks/useScrollReveal";

const faculty = [
  { name: "Mr. Kunal Nagrale",    role: "Founder – Guitar, Keyboard, Mouth Organ", exp: "25+ Years", initial: "KN" },
  { name: "Mrs. Chandrama N",     role: "Guitar & Keyboard",                        exp: "15+ Years", initial: "CN" },
  { name: "Mr. Akash Maigavwali", role: "Sitar & Organ",                            exp: "24+ Years", initial: "AM" },
  { name: "Mrs. Anamika D",       role: "Vocal & Classical",                        exp: "29+ Years", initial: "AD" },
  { name: "Ms. Paarul T",         role: "Guitar & Music Theory",                    exp: "10+ Years", initial: "PT" },
  { name: "Mr. Pratik S",         role: "Keyboard & Guitar",                        exp: "8+ Years",  initial: "PS" },
  { name: "Mr. Rahul Suryawanshi",role: "Harmonica",                                exp: "10+ Years", initial: "RS" },
  { name: "Ms. Vaibhavi S",       role: "Mouth Organ",                              exp: "7+ Years",  initial: "VS" },
  { name: "Mr. Prateeksh Mule",   role: "Mouth Organ",                              exp: "5+ Years",  initial: "PM" },
];

const FacultySection = () => {
  const ref = useScrollReveal();
  return (
    <section className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,20%,93%)" }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Our Team</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5 mb-4">
            MEET OUR <span className="text-primary">MUSICIANS</span>
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg">
            Expert faculty committed to your musical growth
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {faculty.map((f, i) => (
            <div key={f.name}
              className="scroll-reveal group relative bg-card border border-border rounded-2xl p-5 sm:p-6 overflow-hidden card-hover text-center"
              style={{ transitionDelay: `${i * 50}ms` }}>

              {/* Circular avatar — Torrins style */}
              <div className="circle-frame w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-card flex items-center justify-center">
                  <span className="font-display text-lg sm:text-2xl text-primary">{f.initial}</span>
                </div>
              </div>

              <h3 className="font-display text-base sm:text-xl text-foreground leading-tight mb-1">{f.name}</h3>
              <p className="text-primary font-body text-xs sm:text-sm leading-snug mb-1">{f.role}</p>
              <span className="text-xs text-muted-foreground font-body">{f.exp}</span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary flex items-center justify-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl">
                <div className="text-center">
                  <h4 className="font-display text-xl sm:text-2xl text-primary-foreground">{f.name}</h4>
                  <p className="text-primary-foreground/80 font-body text-xs sm:text-sm mt-2">{f.role}</p>
                  <p className="text-primary-foreground/70 font-body text-xs mt-1">{f.exp} Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C480,0 960,70 1440,25 L1440,70 L0,70 Z" fill="hsl(40,30%,97%)" />
        </svg>
      </div>
    </section>
  );
};

export default FacultySection;
