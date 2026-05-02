"use client";

import { motion } from "framer-motion";
import SidebarNav from "@/components/SidebarNav";
import SacredBackground from "@/components/SacredBackground";

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
    <main className="relative min-h-screen w-full bg-[#000000] overflow-hidden flex font-sans">
      {/* IMMERSIVE BACKGROUND */}
      <SacredBackground />

      {/* SIDEBAR NAVIGATION */}
      <SidebarNav />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-16 md:ml-20 relative flex flex-col items-center justify-center py-12 px-8 z-10">

        {/* TOP LEVEL SPIRITUAL ANCHORS */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight drop-shadow-glow">
              One God!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight drop-shadow-glow">
              One Nation!
            </h2>
          </motion.div>
        </div>

        {/* VERTICAL DEVOTIONAL STACK */}
        <div className="flex flex-col items-center space-y-12 md:space-y-14">

          {/* 1. THE SACRED PORTAL (TOP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[120px] h-[120px] bg-white/5 blur-[40px] rounded-full" />
            </div>

            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <div className="absolute inset-0 -m-2 border border-white/10 rounded-full" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <img
                  src="/Lahari.jpg"
                  alt="Gurudev Sree Lahari Krishna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* 2. THE SEVEN LAYERS OF SPIRITUAL MESSAGE (BOTTOM) - Refined & Moderate */}
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 w-full">
            {messageLayers.map((layer, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1 + (index * 0.15) }}
                className="text-xl md:text-2xl lg:text-3xl font-serif text-white/80 leading-relaxed tracking-wide italic"
              >
                {layer}
              </motion.p>
            ))}

            {/* Subtle Entrance CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="pt-10"
            >
              <button className="px-10 py-3 rounded-full border border-white/5 text-white/20 text-[10px] uppercase tracking-[0.5em] hover:text-white/60 hover:border-white/20 hover:bg-white/5 transition-all duration-700">
                Enter Sanctuary
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* GLOBAL AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
    </main>
  );
}
