"use client";

import { motion } from "framer-motion";
import { uiStyles, cn } from "@/lib/design-system";
import { Boxes, Smartphone, Zap, Palette, Layers, Cpu } from "lucide-react";

const StyleCard = ({ title, style, children }: { title: string, style: string, children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className={cn("p-8 flex flex-col items-center justify-center min-h-[200px]", style)}
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {children}
  </motion.div>
);

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-12">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-black mb-4">The Ultimate Frontend Arsenal</h1>
        <p className="text-xl text-slate-600">Showcasing the styles and tools you requested.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        <StyleCard title="Neumorphism" style={uiStyles.neumorphism}>
          <div className="w-12 h-12 bg-[#e0e0e0] rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]" />
        </StyleCard>

        <StyleCard title="Glassmorphism" style={cn(uiStyles.glassmorphism, "bg-gradient-to-br from-purple-500 to-pink-500 text-white")}>
          <p className="text-sm">Frosted glass effect</p>
        </StyleCard>

        <StyleCard title="Claymorphism" style={uiStyles.claymorphism}>
          <div className="w-16 h-16 bg-blue-300 rounded-2xl shadow-inner" />
        </StyleCard>

        <StyleCard title="Brutalism" style={uiStyles.brutalism}>
          <button className="bg-white border-2 border-black p-2 font-bold">CLICK ME</button>
        </StyleCard>

        <StyleCard title="Retro / Vintage" style={uiStyles.retro}>
          <p className="text-xs uppercase tracking-tighter">EST. 1994</p>
        </StyleCard>
        
        <StyleCard title="Cyberpunk" style="bg-black border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] text-cyan-400 font-mono p-4">
           <Zap className="animate-pulse" />
        </StyleCard>
      </section>

      <section className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="text-blue-500" /> Interaction & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
             <Boxes className="mb-2 text-blue-500" />
             <span className="font-medium">Three.js</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors">
             <Layers className="mb-2 text-purple-500" />
             <span className="font-medium">Framer Motion</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-pink-50 transition-colors">
             <Palette className="mb-2 text-pink-500" />
             <span className="font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors">
             <Smartphone className="mb-2 text-orange-500" />
             <span className="font-medium">Responsive</span>
          </div>
        </div>
      </section>
    </div>
  );
}
