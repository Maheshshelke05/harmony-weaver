import { useEffect, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-2xl sm:text-3xl font-display text-primary">{count}{suffix}</span>
      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-body mt-0.5 block">{label}</span>
    </div>
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(43,96%,97%) 0%, hsl(40,30%,97%) 50%, hsl(43,96%,97%) 100%)" }}>

      {/* Animated background blobs */}
      <div className="blob-bg w-[500px] h-[500px] top-[-10%] right-[-5%] animate-float-orb"
        style={{ background: "rgba(202,138,4,0.07)" }} />
      <div className="blob-bg w-[350px] h-[350px] bottom-[10%] left-[-5%]"
        style={{ background: "rgba(202,138,4,0.05)", animationDelay: "3s" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.4) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left content ── */}
          <div className="space-y-6 sm:space-y-8"
            style={{ transition: "all 900ms cubic-bezier(0.16,1,0.3,1)", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(32px)" }}>

            <span className="pill-label">
              <span className="glow-dot" /> Pune · Chandrapur · Since 2006
            </span>

            <h1 className="font-display hero-heading text-foreground">
              {["INDIA'S BEST", "MUSIC", "CLASSES"].map((w, i) => (
                <span key={i} className={`block ${i === 1 ? "text-gold-shimmer" : ""}`}
                  style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: `all 700ms cubic-bezier(0.16,1,0.3,1) ${i * 130 + 150}ms` }}>
                  {w}
                </span>
              ))}
              <span className="block text-foreground"
                style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "all 700ms cubic-bezier(0.16,1,0.3,1) 540ms" }}>
                FOR ALL AGES
              </span>
            </h1>

            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed max-w-md">
              Structured, personalized music courses in Guitar, Keyboard, Singing & Mouth Organ — for Children, Adults & Senior Citizens.
            </p>

            {/* Instrument tags */}
            <div className="flex flex-wrap gap-2">
              {[["🎸","Guitar"],["🎹","Keyboard"],["🎤","Vocal"],["🎵","Mouth Organ"]].map(([e,n]) => (
                <span key={n} className="px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs font-body text-foreground/70 hover:border-primary/50 hover:text-primary transition-all duration-200">
                  {e} {n}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row gap-3"
              style={{ opacity: loaded ? 1 : 0, transition: "all 700ms cubic-bezier(0.16,1,0.3,1) 600ms" }}>
              <a href="#contact"
                className="flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-2xl animate-pulse-glow hover:scale-[1.03] active:scale-95 transition-transform duration-200">
                Book Free Demo Class →
              </a>
              <a href="#courses"
                className="flex items-center justify-center px-8 py-4 border border-border/60 text-foreground/80 font-body font-semibold text-sm rounded-2xl hover:border-primary/50 hover:text-primary transition-all duration-200">
                Explore Courses
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-border/40"
              style={{ opacity: loaded ? 1 : 0, transition: "all 700ms cubic-bezier(0.16,1,0.3,1) 750ms" }}>
              <StatItem target={5783} suffix="+" label="Students" />
              <StatItem target={10}   suffix="+" label="Faculty" />
              <StatItem target={19}   suffix="+" label="Years" />
              <StatItem target={2}    suffix=""  label="Branches" />
            </div>
          </div>

          {/* ── Right: Torrins-style circular image cluster ── */}
          <div className="hidden lg:flex justify-center items-center relative h-[540px]"
            style={{ transition: "all 1000ms cubic-bezier(0.16,1,0.3,1) 250ms", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateX(40px)" }}>

            {/* Outer decorative ring */}
            <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-primary/15"
              style={{ animation: "hero-spin 30s linear infinite" }} />

            {/* Main large circle */}
            <div className="circle-frame w-[300px] h-[300px]"
              style={{ animation: "hero-bob 5s ease-in-out infinite" }}>
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary flex items-center justify-center">
                <span className="text-[120px] leading-none" style={{ filter: "drop-shadow(0 0 20px rgba(234,179,8,0.5))" }}>🎸</span>
              </div>
            </div>

            {/* Small floating circles */}
            {[
              { emoji: "🎹", size: "w-20 h-20", pos: "top-12 right-16", delay: "0.5s" },
              { emoji: "🎤", size: "w-16 h-16", pos: "bottom-16 right-8", delay: "1s" },
              { emoji: "🎵", size: "w-14 h-14", pos: "top-20 left-12", delay: "1.5s" },
            ].map(({ emoji, size, pos, delay }) => (
              <div key={emoji}
                className={`absolute ${pos} ${size} circle-frame bg-card flex items-center justify-center text-2xl`}
                style={{ animation: `hero-bob 4s ease-in-out ${delay} infinite` }}>
                <div className="w-full h-full bg-card flex items-center justify-center text-2xl">{emoji}</div>
              </div>
            ))}

            {/* Floating info badges */}
            {[
              { text: "🏆 Best in Pune", pos: "top-6 right-4" },
              { text: "⭐ 93 Reviews", pos: "bottom-10 left-6" },
            ].map(({ text, pos }, i) => (
              <div key={text}
                className={`absolute ${pos} px-4 py-2.5 rounded-2xl glass text-sm font-body font-medium text-foreground whitespace-nowrap`}
                style={{ animation: `hero-bob 3.5s ease-in-out ${i * 0.8}s infinite` }}>
                {text}
              </div>
            ))}
          </div>

          {/* Mobile emoji strip */}
          <div className="lg:hidden flex justify-center gap-4 pb-2">
            {["🎸","🎹","🎤","🎵"].map((e, i) => (
              <div key={i} className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-3xl"
                style={{ animation: `hero-bob 3s ease-in-out ${i * 0.35}s infinite` }}>{e}</div>
            ))}
          </div>

        </div>
      </div>

      {/* Curved bottom divider — Torrins style */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="hsl(40,20%,93%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
