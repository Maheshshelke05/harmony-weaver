import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const courses = [
  {
    emoji: "🎸",
    name: "Guitar Classes",
    tag: "Most Popular",
    desc: "Learn acoustic or electric guitar with foundational techniques, chord progressions & performance skills.",
    highlights: ["Basic to Advanced", "Acoustic & Electric", "Stage Performance"],
    bg: "from-amber-50 to-white",
  },
  {
    emoji: "🎹",
    name: "Piano / Keyboard",
    tag: "Beginner Friendly",
    desc: "Explore melodies, scales, and music theory with hands-on training on modern keyboards and pianos.",
    highlights: ["Music Theory", "Synthesizer & Piano", "Classical & Modern"],
    bg: "from-yellow-50 to-white",
  },
  {
    emoji: "🎵",
    name: "Mouth Organ",
    tag: "Unique Course",
    desc: "Master this soulful instrument through structured lessons covering breath control, rhythm, and melodies.",
    highlights: ["Breath Techniques", "Rhythm Training", "Solo Performance"],
    bg: "from-lime-50 to-white",
  },
  {
    emoji: "🎤",
    name: "Vocal Singing",
    tag: "All Ages",
    desc: "Improve your voice with training in Sugam Sangeet, Soft Music & Karaoke. Focus on pitch and modulation.",
    highlights: ["Sugam Sangeet", "Karaoke Singing", "Voice Modulation"],
    bg: "from-rose-50 to-white",
  },
];

const CourseCard = ({ emoji, name, tag, desc, highlights, bg, index }: typeof courses[0] & { index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const c = cardRef.current; if (!c) return;
    const r = c.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
    c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)"; };

  return (
    <div ref={cardRef}
      className={`scroll-reveal group relative rounded-3xl border border-border bg-gradient-to-b ${bg} overflow-hidden cursor-pointer`}
      style={{ transitionDelay: `${index * 80}ms`, transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s" }}
      onMouseMove={onMove} onMouseLeave={onLeave}>

      {/* Gold top line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Image area — circular emoji */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="circle-frame w-24 h-24 sm:w-28 sm:h-28 group-hover:scale-110 transition-transform duration-500">
          <div className="w-full h-full bg-gradient-to-br from-primary/15 to-card flex items-center justify-center">
            <span className="text-5xl sm:text-6xl" style={{ filter: "drop-shadow(0 0 12px rgba(234,179,8,0.4))" }}>{emoji}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-7 space-y-3">
        <span className="inline-block text-[10px] tracking-widest uppercase font-body font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {tag}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">{desc}</p>

        <ul className="space-y-1.5 pt-1">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs font-body text-foreground/65">
              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{h}
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-semibold pt-2 group-hover:gap-3 transition-all duration-300">
          Enroll Now <span>→</span>
        </a>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="courses" className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,20%,93%)" }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Music Courses</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5 mb-4">
            START YOUR <span className="text-gold-shimmer">MUSICAL JOURNEY</span>
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg max-w-xl mx-auto">
            Choose from our expertly crafted courses designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {courses.map((c, i) => <CourseCard key={c.name} {...c} index={i} />)}
        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C360,0 1080,70 1440,20 L1440,70 L0,70 Z" fill="hsl(40,30%,97%)" />
        </svg>
      </div>
    </section>
  );
};

export default CoursesSection;
