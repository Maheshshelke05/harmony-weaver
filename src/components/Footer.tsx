const footerLinks = {
  "Quick Links": [
    { label: "Home",              href: "#home" },
    { label: "About Us",          href: "#about" },
    { label: "Courses",           href: "#courses" },
    { label: "Gallery",           href: "#gallery" },
    { label: "Contact Us",        href: "#contact" },
    { label: "Download Brochure", href: "#" },
  ],
  Courses: [
    { label: "Guitar Classes",           href: "#courses" },
    { label: "Keyboard / Piano",         href: "#courses" },
    { label: "Mouth Organ Classes",      href: "#courses" },
    { label: "Vocal / Singing Classes",  href: "#courses" },
    { label: "Online Music Courses",     href: "#courses" },
    { label: "Karaoke Classes",          href: "#courses" },
  ],
  Legal: [
    { label: "Privacy Policy",       href: "#" },
    { label: "Terms & Conditions",   href: "#" },
    { label: "Refund Policy",        href: "#" },
    { label: "FAQ",                  href: "#" },
    { label: "Sitemap",              href: "#" },
  ],
};

const socials = [
  { label: "Facebook",  href: "https://www.facebook.com/musicgalaxyindia",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Instagram", href: "https://www.instagram.com/musicgalaxyindia",
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
  { label: "YouTube",   href: "https://www.youtube.com/@musicgalaxyindia",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="hsl(var(--primary-foreground))"/></svg> },
  { label: "Twitter",   href: "https://twitter.com/musicgalaxyind",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/musicgalaxyindia",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">

      {/* Top: Brand + Social */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 pb-12 border-b border-border">
        <div>
          <a href="#home" className="inline-block mb-2">
            <span className="font-display text-2xl sm:text-3xl text-primary">MUSIC GALAXY™</span>
          </a>
          <p className="text-muted-foreground font-body text-sm">Basic to Advance Training</p>
          <p className="text-muted-foreground font-body text-xs mt-1">Pune · Chandrapur · Since 2006</p>
        </div>
        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 active:scale-95 transition-all duration-200"
              title={s.label}>
              {s.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Links + Branches */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-sm text-foreground mb-4 tracking-wide">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-muted-foreground font-body text-xs hover:text-primary transition-colors duration-200 leading-snug block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Branches */}
        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display text-sm text-foreground mb-4 tracking-wide">Branches</h4>
          <div className="space-y-4 text-muted-foreground font-body text-xs">
            <div>
              <p className="text-primary text-[10px] font-semibold tracking-widest uppercase mb-1.5">Pune Branch</p>
              <p className="leading-relaxed">Office No. 212, 2nd Floor,<br />Kakade Plaza, Karvenagar,<br />Pune – 411052, Maharashtra</p>
              <a href="tel:9595464804" className="text-primary/70 hover:text-primary mt-1.5 block transition-colors">9595464804</a>
            </div>
            <div>
              <p className="text-primary text-[10px] font-semibold tracking-widest uppercase mb-1.5">Chandrapur Branch</p>
              <p className="leading-relaxed">Ashok Nagar (Chor-Khidaki Fort),<br />Chandrapur – 442402, Maharashtra</p>
              <a href="tel:9022759411" className="text-primary/70 hover:text-primary mt-1.5 block transition-colors">9022759411</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-muted-foreground font-body text-xs text-center sm:text-left">
          © 2025 Music Galaxy India. All Rights Reserved.
        </p>
        <a href="mailto:info@musicgalaxyindia.com"
          className="text-muted-foreground font-body text-xs hover:text-primary transition-colors">
          info@musicgalaxyindia.com
        </a>
      </div>

    </div>
  </footer>
);

export default Footer;
