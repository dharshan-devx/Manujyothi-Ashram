"use client";

import { motion } from "framer-motion";
import SidebarNav from "@/components/SidebarNav";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#000000] overflow-hidden flex font-sans">
      {/* SIDEBAR NAVIGATION */}
      <SidebarNav />
      
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 ml-16 md:ml-20 relative flex flex-col items-center justify-center py-12 px-8">
        
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
        <div className="flex flex-col items-center space-y-10 md:space-y-12">
          
          {/* 1. THE SACRED PORTAL (TOP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Spiritual Glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[160px] h-[160px] bg-dawn-gold/10 blur-[60px] rounded-full" />
            </div>

            {/* Premium Framed Portrait Container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60">
              <div className="absolute inset-0 -m-3 border border-dawn-gold/10 rounded-full" />
              <div className="absolute inset-0 -m-1 border border-dawn-gold/20 rounded-full shadow-[0_0_15px_rgba(255,183,77,0.1)]" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dawn-gold/40 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <img 
                  src="/Lahari.jpg" 
                  alt="Gurudev Sree Lahari Krishna" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-dawn-gold/5" />
                <div className="absolute inset-0 ring-1 ring-inset ring-dawn-gold/20 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* 2. THE SPIRITUAL MESSAGE (BOTTOM) */}
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="space-y-4 md:space-y-5"
            >
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide italic">
                Our Lord God <span className="text-dawn-gold font-medium not-italic">Lahari Krishna</span> alone is
              </p>
              
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-dawn-gold drop-shadow-glow italic">Holy!</span>
                <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-dawn-gold/80 drop-shadow-glow italic">Holy!!</span>
                <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-dawn-gold/60 drop-shadow-glow italic">Holy!!!</span>
              </div>
              
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium pt-1">
                He liveth Forever.
              </p>
            </motion.div>

            {/* Balanced Separator */}
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-dawn-gold/30 to-transparent" />

            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2.5 }}
               className="text-sm md:text-lg text-white/50 leading-relaxed max-w-2xl font-light italic px-4"
            >
              "He has Redeemed us by the love of His Supreme Sacrifice. <br className="hidden md:block" />
              Praise Him. For He is good and His mercy endureth forever."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="pt-2"
            >
              <button className="px-8 py-3 rounded-full border border-dawn-gold/20 text-dawn-gold/60 text-[9px] uppercase tracking-[0.5em] hover:text-dawn-gold hover:border-dawn-gold/40 hover:bg-dawn-gold/5 transition-all duration-700">
                Enter The Sanctuary
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
