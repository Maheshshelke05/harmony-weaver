import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center p-6">
      <span ref={ref} className="block text-5xl font-display text-primary">
        {count}{suffix}
      </span>
      <span className="text-muted-foreground font-body text-sm mt-1 block">{label}</span>
    </div>
  );
};

const AboutSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="scroll-reveal mb-4">
          <span className="text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold">
            WHY CHOOSE US
          </span>
        </div>
        <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground mb-12 relative inline-block">
          30 Years of Musical Excellence
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary animate-draw-underline" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal space-y-6">
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Established in 2006, Music Galaxy India is Pune's premier music academy offering
              comprehensive music education for all age groups. From beginners to advanced
              learners, our structured curriculum and expert faculty ensure every student
              discovers their musical potential.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              With branches in Pune and Chandrapur, we've empowered over 1000 students to
              find their voice through music. Our personalized approach combines traditional
              techniques with modern teaching methods.
            </p>
          </div>

          <div className="scroll-reveal grid grid-cols-2 gap-4">
            <StatItem value={1000} suffix="+" label="Satisfied Students" />
            <StatItem value={30} suffix="+" label="Music Faculty" />
            <StatItem value={25} suffix="+" label="Years Experience" />
            <StatItem value={2} suffix="" label="Branches" />
          </div>
        </div>

        <div className="scroll-reveal mt-16 p-8 border border-primary/20 rounded-lg bg-primary/5">
          <p className="font-serif italic text-lg lg:text-xl text-foreground/90 text-center">
            "Our mission is to create musically empowered individuals who not only learn
            instruments but also express emotions through music."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
