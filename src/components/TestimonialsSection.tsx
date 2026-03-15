import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { text: "Music Galaxy transformed my child's relationship with music. The teachers are incredibly patient and talented.", name: "Priya Sharma", date: "Jan 2024" },
  { text: "I started guitar at 35 with zero experience. Within 6 months, I was playing songs I love. Highly recommended!", name: "Amit Deshmukh", date: "Mar 2024" },
  { text: "The online classes are just as effective as in-person. Flexible timings made it possible for me to learn keyboard.", name: "Sneha Kulkarni", date: "Feb 2024" },
  { text: "My daughter loves her vocal classes. The stage exposure opportunities have boosted her confidence tremendously.", name: "Rajesh Patil", date: "Dec 2023" },
  { text: "Best music academy in Pune! Professional faculty, structured curriculum, and very affordable fees.", name: "Meera Joshi", date: "Nov 2023" },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground">
            OUR STUDENTS FEEDBACK
          </h2>
        </div>

        <div className="scroll-reveal relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-lg p-8 lg:p-12 text-center">
                    <div className="text-primary text-xl mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="font-serif italic text-lg lg:text-xl text-foreground/90 mb-6">
                      "{t.text}"
                    </p>
                    <p className="font-body font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm font-body">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
