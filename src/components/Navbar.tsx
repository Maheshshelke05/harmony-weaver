import { useState, useEffect } from "react";
import { Menu, X, Phone, Download } from "lucide-react";
import { NAV_TO_TAB } from "./MobileTabs";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "Music Courses", href: "#courses" },
  { label: "About Us",      href: "#about" },
  { label: "Testimonial",   href: "#testimonials" },
  { label: "Gallery",       href: "#gallery" },
  { label: "Contact Us",    href: "#contact" },
];

const isMobile = () => window.innerWidth < 1024;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isMobile()) {
      e.preventDefault();
      const tabId = NAV_TO_TAB[href];
      if (tabId) {
        window.dispatchEvent(new CustomEvent("switchTab", { detail: tabId }));
      }
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/97 backdrop-blur-xl border-b border-border shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {/* Top info bar — desktop only */}
        <div className="hidden lg:flex bg-secondary border-b border-border px-8 py-1.5 justify-between items-center text-xs font-body">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:9595464804" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3 text-primary" /> 9595464804 (Pune)
            </a>
            <a href="tel:9022759411" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3 text-primary" /> 9022759411 (Chandrapur)
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#contact" className="text-primary font-semibold hover:underline underline-offset-2">
              Book Demo Class
            </a>
            <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Download className="w-3 h-3" /> Download Brochure
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="flex items-center justify-between h-16 lg:h-[60px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex flex-col leading-none shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl lg:text-3xl text-primary tracking-wider leading-none">
              MUSIC GALAXY<span className="text-[10px] align-super">™</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-0.5">
              Basic to Advance Training
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-foreground/75 hover:text-primary transition-colors duration-200 tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300 shrink-0"
          >
            Book Demo
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col animate-slide-down"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 64px)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex flex-col h-full px-6 py-6 overflow-y-auto">
            {/* Phone numbers */}
            <div className="flex flex-col gap-2 pb-5 mb-5 border-b border-border">
              <a href="tel:9595464804" onClick={close} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                <Phone className="w-4 h-4 text-primary shrink-0" /> 9595464804 (Pune)
              </a>
              <a href="tel:9022759411" onClick={close} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                <Phone className="w-4 h-4 text-primary shrink-0" /> 9022759411 (Chandrapur)
              </a>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center py-3.5 px-2 text-lg font-body text-foreground/80 hover:text-primary border-b border-border/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="flex flex-col gap-3 pt-6 mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center py-4 bg-primary text-primary-foreground font-body font-bold text-base rounded-xl animate-pulse-glow"
              >
                Book Free Demo Class
              </a>
              <a
                href="#"
                onClick={close}
                className="flex items-center justify-center gap-2 py-3.5 border border-primary/40 text-primary font-body font-semibold text-sm rounded-xl hover:bg-primary/10 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Brochure
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
