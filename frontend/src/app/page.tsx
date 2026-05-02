"use client";

import { motion } from "framer-motion";

export default function Home() {
  const messageLayers = [
    "Our Lord God Lahari Krishna alone is",
    "Holy! Holy!! Holy!!!",
    "He liveth Forever.",
    "He has Redeemed us by the love of His Supreme Sacrifice.",
    "Praise Him.",
    "For He is good and His mercy",
    "endureth forever."
  ];

  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden">
      {/* VERTICAL DEVOTIONAL STACK */}
      <div className="flex flex-col items-center w-full max-w-7xl relative px-8">

        {/* DIVINE AURA BACKGROUND */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] -z-10 animate-pulse pointer-events-none" />

        {/* MAIN CONTENT ROW (Message + Portal) */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-16 lg:space-y-0 lg:space-x-16 xl:space-x-24">

          {/* CENTRAL SPIRITUAL MESSAGE */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
            {messageLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="relative group"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-silence-charcoal/90 leading-relaxed tracking-wider italic font-medium group-hover:text-royal-gold transition-colors duration-700">
                  {layer}
                </p>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-dawn-gold group-hover:h-full transition-all duration-700 opacity-0 group-hover:opacity-100 hidden lg:block" />
              </motion.div>
            ))}
          </div>

          {/* THE SACRED PORTAL (Right side - Static) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing Halo around Portrait */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 animate-pulse">
              <div className="w-[200px] h-[200px] bg-dawn-gold/15 blur-[60px] rounded-full" />
            </div>

            <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 group">
              {/* Decorative Rings (Static) */}
              <div className="absolute inset-0 -m-6 border border-dawn-gold/10 rounded-full" />
              <div className="absolute inset-0 -m-4 border-2 border-dawn-gold/20 rounded-full" />
              <div className="absolute inset-0 -m-2 border border-dawn-gold/40 rounded-full group-hover:scale-105 transition-transform duration-700" />

              {/* Main Portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dawn-gold shadow-[0_25px_60px_rgba(212,175,55,0.3)]">
                <img
                  src="/Lahari.jpg"
                  alt="Gurudev Sree Lahari Krishna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dawn-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
