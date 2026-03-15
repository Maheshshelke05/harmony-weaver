const items = [
  "🎸 Guitar Classes",
  "🎹 Piano / Keyboard",
  "🎤 Vocal Singing",
  "🎵 Mouth Organ",
  "🎼 Online Classes Available",
  "📜 Course Certification",
  "🏆 Best Music Classes in Pune",
  "⭐ 93+ Google Reviews",
  "🎓 5783+ Students Trained",
  "📍 Pune & Chandrapur",
];

const content = items.join("   ✦   ");

const MarqueeStrip = () => (
  <div className="relative overflow-hidden select-none py-3"
    style={{ background: "hsl(43,96%,94%)", borderTop: "1px solid hsl(38,92%,48%,0.20)", borderBottom: "1px solid hsl(38,92%,48%,0.20)" }}>
    <div className="flex whitespace-nowrap animate-marquee">
      {[content, content, content].map((c, i) => (
        <span key={i} className="text-foreground/50 font-body font-medium text-xs sm:text-sm tracking-wide shrink-0 px-4">
          {c}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
