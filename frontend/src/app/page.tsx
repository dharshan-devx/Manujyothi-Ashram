"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarNav from "@/components/SidebarNav";

export default function Home() {
  const [activeView, setActiveView] = useState("home");

  return (
    <main className="relative h-screen w-full bg-[#000000] overflow-hidden">
      <SidebarNav />
      
      {/* IMMERSIVE CONTENT AREA (RESPONDING TO SELECTION) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            {/* Subtle Ethereal Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />
            
            <motion.h2 
              className="text-4xl md:text-6xl text-white/10 font-serif uppercase tracking-[1em] select-none"
            >
              Manujyothi
            </motion.h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NOISE & DEPTH OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </main>
  );
}
