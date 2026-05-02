"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Sparkles, Book, MapPin, Calendar, Heart, X } from "lucide-react";

const menuItems = [
  { name: "Arrival", icon: Home, id: "arrival" },
  { name: "Reveal", icon: Sparkles, id: "reveal" },
  { name: "Teachings", icon: Book, id: "teachings" },
  { name: "Ashram", icon: MapPin, id: "ashram" },
  { name: "Events", icon: Calendar, id: "events" },
  { name: "Seva", icon: Heart, id: "seva" },
];

export default function RadialNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[1000]">
      {/* The Central Light Orb */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-dawn-gold flex items-center justify-center shadow-sacred group"
      >
        <div className="absolute inset-0 rounded-full bg-dawn-gold blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
        {isOpen ? <X className="text-silence-charcoal relative z-10" /> : <div className="w-2 h-2 rounded-full bg-silence-charcoal relative z-10 animate-pulse" />}
      </motion.button>

      {/* Radial Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8">
             {menuItems.map((item, idx) => {
               const angle = (idx * (180 / (menuItems.length - 1))) - 180;
               const radius = 120;
               const x = Math.cos((angle * Math.PI) / 180) * radius;
               const y = Math.sin((angle * Math.PI) / 180) * radius;

               return (
                 <motion.button
                   key={item.id}
                   initial={{ opacity: 0, x: 0, y: 0 }}
                   animate={{ opacity: 1, x, y }}
                   exit={{ opacity: 0, x: 0, y: 0 }}
                   transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 }}
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                   onClick={() => {
                     document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                     setIsOpen(false);
                   }}
                 >
                   <div className="flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full glass-sacred flex items-center justify-center text-dawn-gold hover:bg-dawn-gold hover:text-silence-charcoal transition-all duration-500">
                       <item.icon size={20} />
                     </div>
                     <span className="text-[10px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-dawn-gold whitespace-nowrap">
                       {item.name}
                     </span>
                   </div>
                 </motion.button>
               );
             })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
