import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = ["Home", "Courses", "About", "Gallery", "Testimonials", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-display text-2xl lg:text-3xl text-primary tracking-wider leading-none">
            MUSIC GALAXY<span className="text-xs align-super">™</span>
          </span>
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            Basic to Advance Training
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-body text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mr-2">
            <Phone className="w-3 h-3 text-primary" />
            <span>9595464804</span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-foreground/80 hover:text-primary transition-colors font-body"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-md"
          >
            Book Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
