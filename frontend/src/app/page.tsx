"use client";

import { motion } from "framer-motion";
import SidebarNav from "@/components/SidebarNav";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#000000] overflow-hidden flex">
      {/* SIDEBAR NAVIGATION */}
      <SidebarNav />
      
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-16 md:ml-20 relative flex flex-col items-center justify-center p-8 md:p-16 lg:p-24">
        
        {/* TOP LEVEL SPIRITUAL ANCHORS */}
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              One God!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              One Nation!
            </h2>
          </motion.div>
        </div>

        {/* CENTRAL SACRED CONTENT - Now centered */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="space-y-12 flex flex-col items-center"
          >
            {/* Spiritual Message Header */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-ethereal-white leading-relaxed font-sans font-light tracking-wide">
                Our Lord God <span className="text-dawn-gold font-medium">Lahari Krishna</span> alone is
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <span className="italic font-serif text-3xl md:text-5xl lg:text-6xl text-dawn-gold">Holy!</span>
                <span className="italic font-serif text-3xl md:text-5xl lg:text-6xl text-dawn-gold/80">Holy!!</span>
                <span className="italic font-serif text-3xl md:text-5xl lg:text-6xl text-dawn-gold/60">Holy!!!</span>
              </div>
              
              <p className="text-ethereal-white/40 text-base uppercase tracking-[0.6em] font-medium pt-2">
                He liveth Forever.
              </p>
            </div>

            {/* Separator */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-dawn-gold/40 to-transparent" />
            
            {/* Spiritual Message Body */}
            <p className="text-lg md:text-xl text-ethereal-white/50 leading-relaxed font-sans max-w-2xl italic px-4">
              "He has Redeemed us by the love of His Supreme Sacrifice.
              Praise Him. For He is good and His mercy endureth forever."
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="pt-12"
            >
              <button className="group relative px-12 py-4 overflow-hidden rounded-full border border-white/5 transition-all duration-500 hover:border-dawn-gold/30">
                 <span className="relative z-10 text-xs uppercase tracking-[0.5em] text-white/40 group-hover:text-dawn-gold transition-colors duration-500">
                   Enter Sanctuary
                 </span>
                 <div className="absolute inset-0 bg-dawn-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* GLOBAL AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
    </main>
  );
}
