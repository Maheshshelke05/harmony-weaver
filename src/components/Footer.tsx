const footerLinks = {
  About: ["Home", "About Us", "Contact", "Free Learning", "Music Exam"],
  Facilities: ["Guitar Classes", "Keyboard Classes", "Mouth Organ", "Vocal Singing", "Kids/Adults/Sr.Citizens"],
  Courses: ["Music Course", "Short/Long Term", "Offline/Online", "Certificate", "Karaoke"],
  Important: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "FAQ", "Sitemap"],
};

const socials = [
  { icon: "📘", label: "Facebook" },
  { icon: "🐦", label: "Twitter" },
  { icon: "▶️", label: "YouTube" },
  { icon: "📸", label: "Instagram" },
];

const Footer = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Top */}
      <div className="mb-12">
        <span className="font-display text-3xl text-primary">MUSIC GALAXY™</span>
        <p className="text-muted-foreground font-body text-sm mt-1">Basic to Advance Training</p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-lg text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Branches */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Branches</h4>
          <div className="space-y-4 text-muted-foreground font-body text-sm">
            <div>
              <p className="text-primary text-xs font-semibold mb-1">PUNE</p>
              <p>Music Galaxy India, Pune, Maharashtra</p>
            </div>
            <div>
              <p className="text-primary text-xs font-semibold mb-1">CHANDRAPUR</p>
              <p>Music Galaxy India, Chandrapur, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground font-body text-sm">
          © 2025 Music Galaxy, All Rights Reserved
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              title={s.label}
            >
              <span className="text-sm">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
