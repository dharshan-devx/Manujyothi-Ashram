"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, Sun, Compass, Heart, Sparkles, MessageCircle,
  MapPin, ShieldCheck, Eye, Quote, Scroll, HandHelping,
  User, Info, Map, List, Book, Calendar, Mail, Mic2,
  BookOpen, Star, Users, LucideIcon, Newspaper, Video,
  History as HistoryIcon,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/design-system";

interface NavItemData {
  name: string;
  icon: LucideIcon;
  id: string;
  path: string;
}

const navItems: NavItemData[] = [
  { name: "Sanctuary", icon: Home, id: "sanctuary", path: "/" },
  { name: "Gurudev", icon: User, id: "gurudev", path: "/gurudev" },
  { name: "Grounds", icon: MapPin, id: "grounds", path: "/sacred-grounds" },
  { name: "Teachings", icon: BookOpen, id: "teachings", path: "/teachings" },
  { name: "Seva", icon: HandHelping, id: "seva", path: "/seva" },
  { name: "Gallery", icon: ImageIcon, id: "gallery", path: "/gallery" }
];

function NavItem({ item, hoveredItem, setHoveredItem }: { item: NavItemData; hoveredItem: string | null; setHoveredItem: (id: string | null) => void }) {
  const pathname = usePathname();
  const isActive = pathname === item.path || hoveredItem === item.id;
  const isActuallyCurrent = pathname === item.path;

  return (
    <Link href={item.path}>
      <div
        className="relative flex items-center py-4 cursor-pointer"
        onMouseEnter={() => setHoveredItem(item.id)}
      >
        {/* SIDEBAR BUTTON */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "w-11 h-11 flex items-center justify-center transition-all duration-500 relative z-20 bg-transparent",
            isActuallyCurrent ? "text-royal-gold scale-125" : "text-silence-charcoal/30",
            hoveredItem === item.id && "text-royal-gold"
          )}
        >
          <item.icon size={22} className={cn((isActive || isActuallyCurrent) && "drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]")} />
        </motion.div>
      </div>
    </Link>
  );
}


export default function SidebarNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav
      className="fixed left-0 top-0 bottom-0 z-[1000] hidden md:flex flex-col items-center justify-center w-16 bg-transparent"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex flex-col gap-6 relative z-10">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </div>
    </nav>
  );
}


