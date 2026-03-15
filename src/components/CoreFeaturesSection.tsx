import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const features = [
  { icon: "🎓", title: "1-on-1 Personalized Support",  desc: "Individual attention with customized guidance tailored to your learning pace." },
  { icon: "💻", title: "Live Online Classes",           desc: "Learn from home. Teaching in English, Hindi & Marathi." },
  { icon: "📜", title: "Course Certification",          desc: "Receive a recognized certificate upon successful course completion." },
  { icon: "🏫", title: "Offline Classes",               desc: "In-person training at our Pune & Chandrapur centers." },
  { icon: "⏱️",title: "45–60 Min Sessions",            desc: "Focused sessions with in-depth practical and theoretical knowledge." },
  { icon: "📅", title: "Short / Long Term Courses",     desc: "Flexible duration — from quick skill exploration to full mastery." },
];

const StatBadge = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div className="text-center p-5 sm:p-6 bg-card border border-border rounded-2xl">
      <span ref={ref} className="block text-3xl sm:text-4xl font-display text-primary">{count}{suffix}</span>
      <span className="text-muted-foreground font-body text-xs mt-1.5 block uppercase tracking-wider">{label}</span>
    </div>
  );
};

const CoreFeaturesSection = () => {
  const ref = useScrollReveal();
  return (
    <section className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,30%,97%)" }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Core Features</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5">
            MUSIC GALAXY <span className="text-primary">CORE FEATURES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {features.map((f, i) => (
            <div key={f.title}
              className="scroll-reveal group flex gap-4 p-6 sm:p-7 bg-card border border-border rounded-2xl card-hover"
              style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-1.5">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <StatBadge target={10}   suffix="+" label="Years Experience" />
          <StatBadge target={5783} suffix="" label="Satisfied Students" />
          <div className="col-span-2 sm:col-span-1 text-center p-5 sm:p-6 bg-primary/8 border border-primary/20 rounded-2xl flex flex-col items-center justify-center">
            <span className="block text-3xl sm:text-4xl font-display text-primary">⭐ 93</span>
            <span className="text-muted-foreground font-body text-xs mt-1.5 block uppercase tracking-wider">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C360,70 1080,0 1440,50 L1440,70 L0,70 Z" fill="hsl(40,20%,93%)" />
        </svg>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
