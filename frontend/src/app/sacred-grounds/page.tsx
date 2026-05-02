"use client";

import SectionTemplate from "@/components/SectionTemplate";

export default function GroundsPage() {
  return (
    <SectionTemplate 
      title="Sacred Grounds" 
      subtitle="Explore the Holy Land of Manujyothi"
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Holy Sites", desc: "Discover the energy centers of the ashram." },
            { title: "Meditation Halls", desc: "Spaces of absolute silence and peace." },
            { title: "Divine Nature", desc: "The flora and fauna blessed by Gurudev." }
          ].map((site, i) => (
            <div key={i} className="group p-8 border border-dawn-gold/10 rounded-2xl hover:border-dawn-gold/30 transition-all duration-500 bg-white/50 backdrop-blur-sm">
              <h3 className="font-royal text-royal-gold text-lg mb-4 tracking-widest">{site.title}</h3>
              <p className="font-serif text-silence-charcoal/50 italic leading-relaxed">{site.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
}
