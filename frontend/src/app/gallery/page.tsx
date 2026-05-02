"use client";

import SectionTemplate from "@/components/SectionTemplate";

export default function GalleryPage() {
  return (
    <SectionTemplate 
      title="Gallery" 
      subtitle="Moments of Divine Grace"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div key={n} className={cn(
            "relative rounded-2xl overflow-hidden border border-dawn-gold/10 group bg-ivory",
            n % 3 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          )}>
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center font-royal text-royal-gold/10 text-xs tracking-widest uppercase group-hover:scale-110 transition-transform duration-700">Sacred Image {n}</div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}

// Helper function in case cn is not available locally
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
