import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { text: "I've been learning guitar here for about 3 months, and it's been a really nice experience! The teacher is patient and explains everything clearly. I like that the class provides guitars, so we don't have to bring our own. The timings are flexible, and since classes are 5 days a week, it's easy to keep improving.", name: "Pragati Sawant", date: "September 2025", instrument: "Guitar" },
  { text: "I've been taking guitar classes here for about 3 months, and I've already learned quite a lot! The teachers are really good at explaining and make every session enjoyable. One thing I love is that they have guitars available in the class, so we don't need to bring our own — it's super convenient!", name: "Khushboo Pathan", date: "September 2025", instrument: "Guitar" },
  { text: "I had a wonderful experience learning guitar here! I had only 7 days before leaving for college, and sir very patiently and skillfully covered an entire month's portion within that short time. His teaching style is clear, encouraging, and makes even difficult concepts easy to understand. Highly recommended!", name: "Medha Gaji", date: "September 2025", instrument: "Guitar" },
  { text: "If anyone wants to learn guitar from zero to Hero, you can join Music Galaxy. From first string to last string, basic chords to advanced songs, how to sing a song with guitar — teachers are also friendly.", name: "Shubham Takras", date: "August 2025", instrument: "Guitar" },
  { text: "I have been learning synthesizer for 10 months at Music Galaxy, where the instructor is very calm and knowledgeable. His teaching style is very efficient which makes learning easier and interesting. My overall experience has been great and I have made significant progress.", name: "Saanvi Shirude", date: "July 2025", instrument: "Keyboard" },
  { text: "I've been learning guitar since 3 months at Music Galaxy classes, they cover the portion step by step in simple way from basic to advance level with proper guidance. They provide the instruments as well. Detailed notes are provided. It has flexible time batches. Great to be here!", name: "Vishakha Magar", date: "October 2024", instrument: "Guitar" },
  { text: "I have been learning guitar since 4 months at Music Galaxy India, where the knowledgeable and patient instructor provides an engaging learning experience. He effectively simplifies complex concepts, ensuring all students understand before progressing.", name: "Harshada Chaudhari", date: "October 2024", instrument: "Guitar" },
  { text: "I joined Guitar classes for 4 months now, it was a worth it journey. Great mentorship, simple and easy to learn notes, easy going and proper explanation and friendly environment. I enjoyed learning here and wish to continue.", name: "Guddu Pattnaik", date: "October 2024", instrument: "Guitar" },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,30%,97%)" }}>

      {/* Gold glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(202,138,4,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Student Reviews</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5 mb-5">
            WHAT OUR <span className="text-primary">STUDENTS</span> SAY
          </h2>
          <div className="scroll-reveal inline-flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-full">
            <span className="text-primary text-base">★★★★★</span>
            <span className="font-body font-semibold text-foreground text-sm">93 Google Reviews</span>
            <span className="text-muted-foreground font-body text-xs hidden sm:inline">— Music Galaxy India</span>
          </div>
        </div>

        {/* Main card */}
        <div className="scroll-reveal max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
            {/* Gold top accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="p-8 sm:p-12">
              {/* Big quote mark */}
              <span className="block text-8xl text-primary/10 font-serif leading-none -mb-4 select-none">"</span>

              {/* Slide container */}
              <div className="overflow-hidden">
                <div className="transition-all duration-500 ease-out">
                  <p className="font-serif italic text-base sm:text-lg lg:text-xl text-foreground/85 leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <span className="font-display text-primary text-sm">{t.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs font-body">{t.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm">★★★★★</span>
                      <span className="text-[10px] tracking-widest uppercase font-body font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {t.instrument}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button onClick={prev}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted w-1.5"}`} />
              ))}
            </div>
            <button onClick={next}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C360,70 1080,0 1440,50 L1440,70 L0,70 Z" fill="hsl(40,20%,93%)" />
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;
