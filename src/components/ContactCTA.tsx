import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="scroll-reveal font-display text-5xl lg:text-7xl text-primary-foreground mb-4">
          READY TO START YOUR MUSICAL JOURNEY?
        </h2>
        <p className="scroll-reveal text-primary-foreground/80 font-body text-lg mb-8">
          Book a FREE Demo Class Today — No Experience Needed!
        </p>

        <div className="scroll-reveal flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#"
            className="px-8 py-4 bg-primary-foreground text-primary font-body font-bold rounded-md hover:scale-105 transition-transform duration-300"
          >
            Book Demo Class
          </a>
          <a
            href="tel:9595464804"
            className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold rounded-md hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        <div className="scroll-reveal flex flex-wrap justify-center gap-8 text-primary-foreground/90 font-body">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>9595464804 (Pune)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>9022759411 (Chandrapur)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@musicgalaxyindia.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
