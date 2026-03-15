import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What music courses are available?", a: "We offer Guitar, Piano/Keyboard, Vocal Singing, and Mouth Organ classes for all skill levels from beginner to advanced." },
  { q: "What is the minimum age to join?", a: "Students as young as 6 years old can join our specially designed kids' program. We also welcome adults and senior citizens." },
  { q: "Can beginners with no background join?", a: "Absolutely! Most of our students start with zero musical background. Our curriculum is designed to take you from basics to advanced levels." },
  { q: "What are the batch timings?", a: "We offer flexible batch timings from morning to evening, including weekends. Timings can be customized based on availability." },
  { q: "Do you offer online classes?", a: "Yes! We offer live online classes in English, Hindi, and Marathi via video call, making it accessible from anywhere." },
  { q: "Is certification provided?", a: "Yes, we provide recognized course completion certificates for all our programs." },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="scroll-reveal text-xs tracking-[0.3em] text-primary uppercase font-body font-semibold block mb-4">
            FAQ
          </span>
          <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-foreground">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="scroll-reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/40 transition-colors duration-300"
              >
                <AccordionTrigger className="font-body text-foreground text-left hover:no-underline hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-5">
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
