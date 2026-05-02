"use client";

import SectionTemplate from "@/components/SectionTemplate";

export default function SevaPage() {
  return (
    <SectionTemplate 
      title="Seva" 
      subtitle="The Path of Selfless Service"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="p-12 bg-ivory/50 rounded-[3rem] border border-dawn-gold/10 flex flex-col justify-center">
          <h2 className="font-royal text-2xl text-royal-gold mb-6 tracking-widest">Active Seva</h2>
          <ul className="space-y-6 font-serif text-lg text-silence-charcoal/60 italic">
            <li>• Anna Seva (Food Service)</li>
            <li>• Vidya Seva (Educational Support)</li>
            <li>• Ashram Maintenance & Care</li>
          </ul>
        </div>
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-dawn-gold/20 shadow-sacred">
          <div className="absolute inset-0 bg-gradient-to-br from-dawn-gold/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center font-royal text-royal-gold/30 tracking-[0.3em] uppercase text-xl">Service is Worship</div>
        </div>
      </div>
    </SectionTemplate>
  );
}
