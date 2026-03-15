import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const features = [
  { icon: "🏆", title: "19+ Years Experience",          desc: "Trusted music education since 2006 with a proven track record of excellence." },
  { icon: "🎓", title: "5783+ Students Trained",        desc: "Thousands of happy students across Pune and Chandrapur branches." },
  { icon: "💻", title: "Online & Offline Classes",      desc: "Flexible learning modes — attend from home or visit our music center." },
  { icon: "📜", title: "Certified Music Trainers",      desc: "Learn from qualified, experienced musicians with performance backgrounds." },
  { icon: "🎤", title: "Performance Opportunities",     desc: "Regular stage events and concerts to build confidence and showcase talent." },
  { icon: "📚", title: "Structured Curriculum",         desc: "Systematic, easy-to-follow approach from basic to advanced levels." },
];

const StatBig = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div className="text-center p-5 rounded-2xl bg-primary/8 border border-primary/20">
      <span ref={ref} className="block text-3xl sm:text-4xl font-display text-primary">{count}{suffix}</span>
      <span className="text-muted-foreground font-body text-xs mt-1 block uppercase tracking-wider">{label}</span>
    </div>
  );
};

const WhyMusicGalaxy = () => {
  const ref = useScrollReveal();
  return (
    <section className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,30%,97%)" }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: features */}
          <div className="space-y-8">
            <div>
              <span className="scroll-reveal pill-label">Why Choose Us</span>
              <h2 className="scroll-reveal font-display section-heading text-foreground mt-4">
                WHY MUSIC <span className="text-primary">GALAXY</span> INDIA?
              </h2>
              <p className="scroll-reveal text-muted-foreground font-body text-base mt-4 leading-relaxed">
                Join Music Galaxy India for expert-led music training that transforms beginners into confident performers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={f.title}
                  className="scroll-reveal group flex gap-3 p-4 rounded-2xl bg-card border border-border card-hover"
                  style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl shrink-0 group-hover:bg-primary/20 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted-foreground font-body text-xs leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="scroll-reveal">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-2xl animate-pulse-glow hover:scale-[1.03] active:scale-95 transition-transform duration-200">
                Book Free Demo →
              </a>
            </div>
          </div>

          {/* Right: visual stats panel */}
          <div className="scroll-reveal relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(202,138,4,0.06) 0%, transparent 70%)" }} />

            <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-10 space-y-6">
              {/* Big emoji visual */}
              <div className="flex justify-center">
                <div className="circle-frame w-40 h-40 sm:w-52 sm:h-52"
                  style={{ animation: "hero-bob 5s ease-in-out infinite" }}>
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <span className="text-7xl sm:text-8xl" style={{ filter: "drop-shadow(0 0 20px rgba(234,179,8,0.5))" }}>🎵</span>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                <StatBig target={5783} suffix="+" label="Students" />
                <StatBig target={19}   suffix="+" label="Years" />
                <StatBig target={10}   suffix="+" label="Faculty" />
                <StatBig target={93}   suffix=""  label="Reviews ⭐" />
              </div>

              {/* Quote */}
              <div className="border-t border-border pt-5">
                <p className="font-serif italic text-sm text-foreground/70 text-center leading-relaxed">
                  "From basic to advanced — we nurture every student's musical journey."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C480,70 960,0 1440,50 L1440,70 L0,70 Z" fill="hsl(40,20%,93%)" />
        </svg>
      </div>
    </section>
  );
};

export default WhyMusicGalaxy;
