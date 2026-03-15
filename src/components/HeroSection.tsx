import { useEffect, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const notes = ["♪", "♫", "♬", "🎵", "🎶"];

const FloatingNote = ({ delay, left, size }: { delay: number; left: number; size: number }) => (
  <span
    className="absolute text-primary/[0.04] pointer-events-none select-none"
    style={{
      left: `${left}%`,
      fontSize: `${size}px`,
      animationDuration: `${8 + Math.random() * 6}s`,
      animationDelay: `${delay}s`,
      animation: `float-up ${10 + Math.random() * 8}s linear ${delay}s infinite`,
    }}
  >
    {notes[Math.floor(Math.random() * notes.length)]}
  </span>
);

const FloatingCard = ({ emoji, text, className, delay }: { emoji: string; text: string; className: string; delay: number }) => (
  <div
    className={`absolute px-4 py-3 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-md text-foreground text-sm font-body font-medium z-10 ${className}`}
    style={{
      animation: `hero-bob 3s ease-in-out ${delay}s infinite`,
    }}
  >
    <span className="mr-2">{emoji}</span>{text}
  </div>
);

const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-4xl font-display text-primary">{count}{suffix}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-body">{label}</span>
    </div>
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const instruments = [
    { emoji: "🎸", name: "Guitar" },
    { emoji: "🎹", name: "Keyboard" },
    { emoji: "🎤", name: "Vocal" },
    { emoji: "🎵", name: "Mouth Organ" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Background floating notes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <FloatingNote key={i} delay={i * 1.5} left={Math.random() * 100} size={80 + Math.random() * 80} />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-6 transition-all duration-[800ms] ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <span className="inline-block text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold">
              PUNE • CHANDRAPUR • SINCE 2006
            </span>

            <h1 className="font-display leading-none text-foreground hero-heading">
              {["LEARN MUSIC.", "FEEL THE", "RHYTHM."].map((word, i) => (
                <span
                  key={i}
                  className={`block transition-all duration-500 ${i === 2 ? "text-primary" : ""}`}
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 150 + 200}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="font-serif italic text-xl lg:text-2xl text-muted-foreground">
              Your Gateway to Musical Excellence
            </p>

            {/* Instrument tags */}
            <div className="flex flex-wrap gap-2">
              {instruments.map(({ emoji, name }) => (
                <span
                  key={name}
                  className="px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-body text-foreground/80"
                >
                  {emoji} {name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-500"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "600ms",
              }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md animate-pulse-glow hover:scale-105 transition-transform duration-300 text-center"
              >
                Book Free Demo Class →
              </a>
              <a
                href="#courses"
                className="px-8 py-4 border-2 border-primary text-primary font-body font-semibold text-sm rounded-md hover:bg-primary/10 transition-all duration-300 text-center"
              >
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              <StatItem target={1000} suffix="+" label="Students" />
              <StatItem target={30} suffix="+" label="Faculty" />
              <StatItem target={25} suffix="+" label="Years" />
              <StatItem target={2} suffix="" label="Branches" />
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="hidden lg:flex justify-center items-center relative transition-all duration-[1000ms] ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(60px)",
            }}
          >
            {/* Floating info cards */}
            <FloatingCard emoji="🏆" text="Best Music Classes" className="top-4 right-4" delay={0} />
            <FloatingCard emoji="🎓" text="1000+ Students Trained" className="bottom-16 -left-4" delay={0.5} />
            <FloatingCard emoji="⭐" text="93 Google Reviews" className="bottom-4 right-8" delay={1} />

            {/* Rotating ring */}
            <div
              className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
              style={{ animation: "hero-spin 20s linear infinite" }}
            >
              {/* Inner circle - counter-rotates to stay still */}
              <div
                className="w-[340px] h-[340px] rounded-full bg-secondary flex items-center justify-center"
                style={{ animation: "hero-spin-reverse 20s linear infinite" }}
              >
                <span
                  className="text-[200px] text-primary/90 font-serif select-none leading-none"
                  style={{ animation: "hero-bob 3s ease-in-out infinite" }}
                >
                  ♪
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
