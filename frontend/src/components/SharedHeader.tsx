"use client";

import { motion } from "framer-motion";

export default function SharedHeader() {
  return (
    <div className="fixed top-1 left-20 right-8 md:left-24 md:right-12 flex justify-between items-center z-[1001] pointer-events-none px-4 md:px-12 py-2">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h2 className="text-xs md:text-sm lg:text-base font-serif font-bold text-royal-gold tracking-[0.3em] uppercase animate-shine sacred-glow">
          One God!
        </h2>
      </motion.div>

      {/* CENTRAL SACRED LOGO (Fixed Clipping) */}
      <div className="pointer-events-auto">
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border border-dawn-gold/20 shadow-[0_0_25px_rgba(212,175,55,0.25)] bg-white p-[2px] flex items-center justify-center aspect-square">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Sacred Ashram Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h2 className="text-xs md:text-sm lg:text-base font-serif font-bold text-royal-gold tracking-[0.3em] uppercase animate-shine sacred-glow">
          One Nation!
        </h2>
      </motion.div>
    </div>
  );
}


