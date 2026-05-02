"use client";

import SectionTemplate from "@/components/SectionTemplate";
import { motion } from "framer-motion";

export default function GurudevPage() {
  return (
    <SectionTemplate 
      title="Gurudev" 
      subtitle="The Divine Avatar of Truth"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 font-serif text-lg md:text-xl text-silence-charcoal/80 leading-relaxed italic">
          <p>
            Experience the life and teachings of Sree Lahari Krishna, whose presence brought the light of eternal truth to humanity.
          </p>
          <p>
            From his early years to the establishment of the Manujyothi Ashram, every moment was a testament to divine sacrifice and selfless love.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-dawn-gold/10 blur-3xl -z-10 rounded-full" />
          <div className="border border-dawn-gold/20 p-4 rounded-[3rem]">
            <div className="aspect-[4/5] bg-ivory rounded-[2.5rem] overflow-hidden border border-dawn-gold/10">
              {/* Placeholder for Gurudev's portrait or life image */}
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] flex items-center justify-center">
                <span className="font-royal text-royal-gold/20 tracking-tighter text-4xl">Divine Presence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
