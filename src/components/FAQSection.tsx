import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What music courses are available at Music Galaxy India?",  a: "We offer personalized one-on-one music classes in: 🎸 Guitar classes (Acoustic & Semi-Electric), 🎹 Keyboard / Piano lessons (Synthesizer), 🎤 Vocal training / Singing classes (Karaoke & Classical), 🎼 Harmonica lessons (Mouth Organ)." },
  { q: "What is the minimum age to join your music academy?",      a: "We teach students aged 6 and above – kids, teenagers, adults, and senior citizens are all welcome." },
  { q: "Can beginners with no music background join?",             a: "Yes! Our beginner-friendly music courses are designed for students with zero prior experience." },
  { q: "Can adults or seniors learn music at Music Galaxy India?", a: "Absolutely! We welcome learners up to age 65+ with customized music training programs." },
  { q: "Do you offer online music classes?",                       a: "Yes! We offer live online classes in English, Hindi, and Marathi via video call, making it accessible from anywhere in India and abroad." },
  { q: "What are the batch timings?",                              a: "We offer flexible batch timings from morning to evening, including weekends. Timings can be customized based on your convenience and batch availability." },
  { q: "Is certification provided?",                               a: "Yes, upon successful completion of the course, students receive a recognized Music Galaxy India Certification." },
  { q: "Do I need to bring my own instrument?",                    a: "No! Instruments are available at the class. You don't need to bring your own, especially for beginners." },
];

const FAQSection = () => {
  const ref = useScrollReveal();
  return (
    <section className="section-py bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-10 sm:mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">FAQ</span>
          <h2 className="scroll-reveal font-display text-4xl sm:text-5xl lg:text-7xl text-foreground mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="scroll-reveal text-muted-foreground font-body text-sm leading-relaxed">
            Looking to learn music? Whether you're a beginner or looking to enhance your skills, our FAQs will help you understand everything about learning music online and offline at Music Galaxy India.
          </p>
        </div>
        <div className="scroll-reveal">
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/40 transition-colors duration-300"
              >
                <AccordionTrigger className="font-body text-sm sm:text-base text-foreground text-left hover:no-underline hover:text-primary py-4 sm:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm pb-4 sm:pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
