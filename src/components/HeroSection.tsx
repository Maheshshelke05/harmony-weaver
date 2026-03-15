import { useEffect, useState } from "react";

const notes = ["♪", "♫", "♬", "🎵", "🎶"];

const FloatingNote = ({ delay, left }: { delay: number; left: number }) => (
  <span
    className="absolute text-primary/20 text-2xl animate-float-up pointer-events-none select-none"
    style={{
      left: `${left}%`,
      animationDuration: `${8 + Math.random() * 6}s`,
      animationDelay: `${delay}s`,
    }}
  >
    {notes[Math.floor(Math.random() * notes.length)]}
  </span>
);

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const headline = "LEARN MUSIC.\nFEEL THE\nRHYTHM.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Floating notes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingNote key={i} delay={i * 1.2} left={Math.random() * 100} />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold">
              PUNE • CHANDRAPUR • SINCE 2006
            </span>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-[100px] leading-[0.95] text-foreground">
              {headline.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 30}ms`,
                    transitionDuration: "0.4s",
                  }}
                >
                  {char === "\n" ? <br /> : char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="font-serif italic text-xl lg:text-2xl text-foreground/70">
              Your Gateway to Musical Excellence
            </p>

            <p className="text-muted-foreground font-body text-lg">
              Guitar • Keyboard • Vocal Singing • Mouth Organ
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md animate-pulse-glow hover:scale-105 transition-transform duration-300"
              >
                Book Free Demo Class →
              </a>
              <a
                href="#courses"
                className="px-8 py-4 border border-primary text-primary font-body font-semibold text-sm rounded-md hover:bg-primary/10 transition-all duration-300"
              >
                Explore Courses
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground font-body">
              {[
                ["1000+", "Students"],
                ["30+", "Faculty"],
                ["25+", "Years"],
                ["2", "Branches"],
              ].map(([num, label]) => (
                <div key={label} className="text-center">
                  <span className="block text-2xl font-display text-primary">{num}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right decorative */}
          <div className="hidden lg:flex justify-center items-center">
            <span
              className="text-[280px] text-primary/10 font-serif select-none"
              style={{ animation: "float-up 20s ease-in-out infinite alternate" }}
            >
              ♪
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
