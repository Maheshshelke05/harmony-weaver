import { useScrollReveal } from "@/hooks/useScrollReveal";

const circleImages = [
  { emoji: "🎸", label: "Guitar Classes",   size: "w-36 h-36 sm:w-44 sm:h-44", color: "from-amber-100 to-amber-50" },
  { emoji: "🎹", label: "Keyboard Classes", size: "w-28 h-28 sm:w-36 sm:h-36", color: "from-yellow-100 to-yellow-50" },
  { emoji: "🎤", label: "Vocal Training",   size: "w-32 h-32 sm:w-40 sm:h-40", color: "from-orange-100 to-amber-50" },
  { emoji: "👶", label: "Kids Program",     size: "w-24 h-24 sm:w-32 sm:h-32", color: "from-lime-100 to-yellow-50" },
  { emoji: "🏫", label: "Music Classroom",  size: "w-28 h-28 sm:w-36 sm:h-36", color: "from-amber-100 to-orange-50" },
];

const AboutSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="about" className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,20%,93%)" }}>

      {/* Top curve */}
      <div className="curve-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="hsl(40,20%,93%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: content */}
          <div className="space-y-6">
            <span className="scroll-reveal pill-label">About Music Galaxy</span>
            <h2 className="scroll-reveal font-display section-heading text-foreground">
              LEADING MUSIC ACADEMY <span className="text-primary">SINCE 2006</span>
            </h2>
            <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg leading-relaxed">
              Established in 2006, Music Galaxy India is a premier music school dedicated to nurturing
              musical talent across all age groups. With highly experienced instructors, we specialize
              in offering comprehensive music training from basic to advanced levels.
            </p>
            <p className="scroll-reveal text-muted-foreground font-body leading-relaxed">
              Our core courses include Guitar, Keyboard (Synthesizer/Piano), Mouth Organ (Harmonica),
              Vocal Singing (Sugam Sangeet/Soft Music), and Karaoke Singing. Whether you're a passionate
              beginner or an aspiring performer, we provide personalized, structured, and enjoyable
              learning experiences.
            </p>

            {/* Feature list */}
            <ul className="scroll-reveal space-y-3">
              {[
                "Branches in Pune (Karvenagar) & Chandrapur",
                "Classes for Kids, Adults & Senior Citizens",
                "Online & Offline modes available",
                "Certified Music Galaxy Diploma on completion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="scroll-reveal pt-2">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-2xl animate-pulse-glow hover:scale-[1.03] active:scale-95 transition-transform duration-200">
                Join Today →
              </a>
            </div>
          </div>

          {/* Right: Torrins-style circular image cluster */}
          <div className="scroll-reveal relative flex items-center justify-center h-[380px] sm:h-[460px]">

            {/* Gold glow behind */}
            <div className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(202,138,4,0.10) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Center large circle */}
            <div className={`circle-frame ${circleImages[0].size} absolute`}
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "hero-bob 5s ease-in-out infinite" }}>
              <div className={`w-full h-full bg-gradient-to-br ${circleImages[0].color} flex items-center justify-center`}>
                <span className="text-6xl sm:text-7xl">{circleImages[0].emoji}</span>
              </div>
            </div>

            {/* Orbiting circles */}
            {[
              { ...circleImages[1], top: "8%",  left: "60%", delay: "0.5s" },
              { ...circleImages[2], top: "55%", left: "72%", delay: "1s" },
              { ...circleImages[3], top: "70%", left: "15%", delay: "1.5s" },
              { ...circleImages[4], top: "10%", left: "8%",  delay: "2s" },
            ].map(({ emoji, label, size, color, top, left, delay }) => (
              <div key={label}
                className={`circle-frame ${size} absolute`}
                style={{ top, left, animation: `hero-bob 4s ease-in-out ${delay} infinite` }}>
                <div className={`w-full h-full bg-gradient-to-br ${color} flex flex-col items-center justify-center gap-1`}>
                  <span className="text-3xl sm:text-4xl">{emoji}</span>
                  <span className="text-[9px] text-foreground/60 font-body text-center px-1 leading-tight hidden sm:block">{label}</span>
                </div>
              </div>
            ))}

            {/* Decorative ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-primary/10 pointer-events-none"
              style={{ animation: "hero-spin 35s linear infinite" }} />
          </div>

        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C360,0 1080,70 1440,35 L1440,70 L0,70 Z" fill="hsl(40,30%,97%)" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
