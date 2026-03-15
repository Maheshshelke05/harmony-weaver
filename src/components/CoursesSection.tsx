import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const courses = [
  { icon: "🎸", name: "Guitar", desc: "Acoustic & electric guitar from basics to advanced fingerstyle and soloing." },
  { icon: "🎹", name: "Piano / Keyboard", desc: "Classical piano, chords, improvisation, and music theory fundamentals." },
  { icon: "🎵", name: "Mouth Organ", desc: "Harmonica techniques for folk, blues, and Indian classical music." },
  { icon: "🎤", name: "Vocal Singing", desc: "Pitch training, breathing techniques, and performance skills for all genres." },
];

const CourseCard = ({ icon, name, desc, index }: { icon: string; name: string; desc: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className="scroll-reveal group bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--glow-primary)] cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms`, borderTopWidth: "3px", borderTopColor: "hsl(var(--primary))" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-5xl block mb-4">{icon}</span>
      <h3 className="font-display text-3xl text-foreground mb-3">{name}</h3>
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{desc}</p>
      <span className="text-primary font-body text-sm font-semibold group-hover:tracking-wider transition-all duration-300">
        Learn More →
      </span>
    </div>
  );
};

const CoursesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="courses" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            COURSES
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground mb-4">
            START YOUR MUSICAL JOURNEY
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-lg">Choose Your Instrument</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={c.name} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
