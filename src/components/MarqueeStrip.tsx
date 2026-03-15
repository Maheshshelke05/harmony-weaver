const items = [
  "🎸 Guitar Classes",
  "🎹 Piano / Keyboard",
  "🎤 Vocal Singing",
  "🎵 Mouth Organ",
  "🎼 Online Classes Available",
  "📜 Course Certification",
  "🏆 Best Music Classes",
];

const MarqueeStrip = () => {
  const content = items.join("  •  ");

  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-primary-foreground font-body font-semibold text-sm tracking-wide mx-4">
          {content}  •  {content}  •  {content}
        </span>
      </div>
    </div>
  );
};

export default MarqueeStrip;
