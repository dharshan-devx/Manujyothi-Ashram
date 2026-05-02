"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SacredBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    // Generate static-ish particles that drift slowly
    const p = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
    }));
    setParticles(p);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* MOUSE-FOLLOWING DIVINE AURA */}
      <motion.div
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50, restDelta: 0.001 }}
        className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full blur-[40px] z-0"
      />

      {/* Deep Radial Glows for 3D Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
      
      {/* Floating Divine Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: ["0%", "-20%"],
            x: ["0%", `${(Math.random() - 0.5) * 10}%`]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute rounded-full bg-[#D4AF37] blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}

      {/* Subtle Sacred Grid/Pattern in 3D perspective */}
      <div className="absolute inset-0 opacity-[0.05] [perspective:1000px]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" 
          style={{ transform: "rotateX(60deg) translateY(0%) scale(2)" }}
        />
      </div>

      {/* Vignette - Inverted for light mode or softened */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)]" />

      {/* DIVINE FRAME - High Premium Finish */}
      <div className="absolute inset-0 border-[12px] border-dawn-gold/5 pointer-events-none z-10" />
    </div>
  );
}
