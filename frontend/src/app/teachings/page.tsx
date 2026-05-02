"use client";

import SectionTemplate from "@/components/SectionTemplate";

export default function TeachingsPage() {
  const wisdoms = [
    "Truth is the only path to liberation.",
    "Love all, serve all, for the divine resides in everyone.",
    "Silence is the language of the soul."
  ];

  return (
    <SectionTemplate 
      title="Teachings" 
      subtitle="The Eternal Wisdom of Sree Lahari Krishna"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {wisdoms.map((quote, i) => (
          <div key={i} className="relative py-12 px-8 border-l-2 border-dawn-gold/20 italic font-serif text-2xl text-silence-charcoal/80 leading-snug">
            <span className="absolute top-0 left-0 text-6xl text-dawn-gold/20 -mt-4 -ml-4 font-serif">"</span>
            {quote}
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
