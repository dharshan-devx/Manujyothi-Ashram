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
    <main className="relative min-h-screen w-full bg-[#FFFFFF] overflow-hidden flex font-sans">
      {/* IMMERSIVE BACKGROUND */}
      <SacredBackground />

      {/* SIDEBAR NAVIGATION */}
      <SidebarNav />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-16 md:ml-20 relative flex flex-col items-center justify-center py-12 px-8 z-10">

        {/* TOP LEVEL SPIRITUAL ANCHORS */}
        <div className="absolute top-1 left-12 right-12 flex justify-between items-center z-50 pointer-events-none px-4 md:px-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-royal-gold tracking-tighter drop-shadow-sm">
              One God!
            </h2>
          </motion.div>

          {/* CENTRAL SACRED LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-dawn-gold/20 shadow-lg bg-white">
              <img
                src="/logo.png"
                alt="Sacred Ashram Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-royal-gold tracking-tighter drop-shadow-sm">
              One Nation!
            </h2>
          </motion.div>
        </div>



        {/* VERTICAL DEVOTIONAL STACK */}
        <div className="flex flex-col items-center w-full max-w-7xl">

          {/* MAIN CONTENT ROW (Message + Portal) */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-24">

            {/* CENTRAL SPIRITUAL MESSAGE */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6 max-w-2xl">
              {messageLayers.map((layer, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 + (index * 0.15) }}
                  className="text-xl md:text-2xl lg:text-3xl font-serif text-silence-charcoal/90 leading-relaxed tracking-wide italic font-medium"
                  style={{ textShadow: "0 1px 2px rgba(212,175,55,0.1)" }}
                >
                  {layer}
                </motion.p>
              ))}

              {/* Subtle Entrance CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="pt-10 w-full flex justify-center lg:justify-start"
              >
                <button className="px-12 py-3 rounded-none border border-dawn-gold text-royal-gold text-[11px] uppercase tracking-[0.5em] hover:bg-dawn-gold hover:text-white transition-all duration-700 shadow-sm hover:shadow-lg">
                  Enter Sanctuary
                </button>
              </motion.div>
            </div>

            {/* THE SACRED PORTAL (Now on the Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[180px] h-[180px] bg-dawn-gold/10 blur-[50px] rounded-full" />
              </div>

              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 -m-4 border-2 border-dawn-gold/20 rounded-full" />
                <div className="absolute inset-0 -m-2 border border-dawn-gold/40 rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dawn-gold shadow-[0_20px_50px_rgba(212,175,55,0.25)]">
                  <img
                    src="/Lahari.jpg"
                    alt="Gurudev Sree Lahari Krishna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>


      {/* GLOBAL AMBIENCE - Soft White Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(212,175,55,0.05)_100%)]" />
    </main>

  );
}
