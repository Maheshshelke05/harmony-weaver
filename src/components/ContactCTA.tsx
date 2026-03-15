import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const instruments = ["Guitar", "Piano / Keyboard", "Vocal Singing", "Mouth Organ", "Karaoke Singing"];
const inp = "w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all duration-200";

const ContactCTA = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", instrument: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative section-py overflow-hidden" ref={ref}
      style={{ background: "hsl(40,20%,93%)" }}>

      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(202,138,4,0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="scroll-reveal pill-label">Book a Demo</span>
          <h2 className="scroll-reveal font-display section-heading text-foreground mt-5 mb-4">
            BOOK YOUR <span className="text-gold-shimmer">FREE DEMO CLASS</span>
          </h2>
          <p className="scroll-reveal text-muted-foreground font-body text-base sm:text-lg">
            No experience needed — just your passion for music!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Form */}
          <div className="scroll-reveal rounded-3xl border border-border bg-card overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-3xl text-primary mb-2">Thank You!</h3>
                  <p className="text-muted-foreground font-body text-sm">We'll contact you within 24 hours to schedule your free demo class.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" required placeholder="Your name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} className={inp} />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone *</label>
                      <input type="tel" required placeholder="Your phone" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inp} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                    <input type="email" placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={inp} />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Interested In *</label>
                    <select required value={form.instrument}
                      onChange={(e) => setForm({ ...form, instrument: e.target.value })} className={inp}>
                      <option value="" disabled>Select a course</option>
                      {instruments.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Preferred Time</label>
                    <input type="text" placeholder="e.g. Morning 9–11am, Evening 6–8pm" value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} className={inp} />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-2xl hover:scale-[1.02] active:scale-95 transition-transform duration-200 animate-pulse-glow">
                    <Send className="w-4 h-4" /> Book Free Demo Class
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="scroll-reveal space-y-4">
            {[
              {
                icon: <Phone className="w-5 h-5 text-primary" />, title: "Phone",
                body: <div className="space-y-1">
                  <div><a href="tel:9595464804" className="text-foreground font-body font-semibold hover:text-primary transition-colors">9595464804</a><span className="text-muted-foreground font-body text-sm"> (Pune)</span></div>
                  <div><a href="tel:9022759411" className="text-foreground font-body font-semibold hover:text-primary transition-colors">9022759411</a><span className="text-muted-foreground font-body text-sm"> (Chandrapur)</span></div>
                </div>,
              },
              {
                icon: <Mail className="w-5 h-5 text-primary" />, title: "Email",
                body: <a href="mailto:info@musicgalaxyindia.com" className="text-foreground font-body font-semibold hover:text-primary transition-colors break-all">info@musicgalaxyindia.com</a>,
              },
              {
                icon: <MapPin className="w-5 h-5 text-primary" />, title: "Branches",
                body: <div className="space-y-3">
                  <div>
                    <p className="text-primary text-xs font-semibold font-body mb-0.5">PUNE BRANCH</p>
                    <p className="text-foreground/80 font-body text-sm">Office No. 212, 2nd Floor, Kakade Plaza,<br />Karvenagar, Pune – 411052</p>
                  </div>
                  <div>
                    <p className="text-primary text-xs font-semibold font-body mb-0.5">CHANDRAPUR BRANCH</p>
                    <p className="text-foreground/80 font-body text-sm">Ashok Nagar (Chor-Khidaki Fort) Ward,<br />Chandrapur – 442402</p>
                  </div>
                </div>,
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">{icon}</div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1.5">{title}</p>
                  {body}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe title="Music Galaxy India - Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8167!3d18.4967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2951b7b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKarvenagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom curve */}
      <div className="curve-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C480,0 960,70 1440,30 L1440,70 L0,70 Z" fill="hsl(40,30%,97%)" />
        </svg>
      </div>
    </section>
  );
};

export default ContactCTA;
