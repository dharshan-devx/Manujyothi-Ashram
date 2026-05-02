"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SacredBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static-ish particles that drift slowly
    const p = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      {/* Deep Radial Glows for 3D Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,183,77,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,183,77,0.02)_0%,transparent_50%)]" />
      
      {/* Floating Divine Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: ["0%", "-20%"],
            x: ["0%", `${(Math.random() - 0.5) * 10}%`]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute rounded-full bg-dawn-gold/20 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}

      {/* Subtle Sacred Grid/Pattern in 3D perspective */}
      <div className="absolute inset-0 opacity-[0.03] [perspective:1000px]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,183,77,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,183,77,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" 
          style={{ transform: "rotateX(60deg) translateY(0%) scale(2)" }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}
