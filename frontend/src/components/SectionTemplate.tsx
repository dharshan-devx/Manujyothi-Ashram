"use client";

import { motion } from "framer-motion";

interface SectionTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionTemplate({ title, subtitle, children }: SectionTemplateProps) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-16 text-center"
        >
          <h1 className="font-royal text-4xl md:text-5xl lg:text-6xl text-royal-gold uppercase tracking-[0.4em] mb-4 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif text-lg md:text-xl text-silence-charcoal/40 italic tracking-widest uppercase">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-dawn-gold to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
