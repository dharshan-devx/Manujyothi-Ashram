"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Sun, Compass, Heart, Sparkles, MessageCircle,
  MapPin, ShieldCheck, Eye, Quote, Scroll, HandHelping,
  User, Info, Map, List, Book, Calendar, Mail, Mic2,
  BookOpen, Star, Users, LucideIcon, Newspaper, Video,
  History as HistoryIcon,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/design-system";

interface SubItem {
  name: string;
  desc: string;
  icon: LucideIcon;
}

interface NavItemData {
  name: string;
  icon: LucideIcon;
  id: string;
  subItems: SubItem[];
}

const navItems: NavItemData[] = [
  {
    name: "Home",
    icon: Home,
    id: "home",
    subItems: [
      { name: "Welcome", desc: "Entrance to the digital temple", icon: Star },
      { name: "Latest", desc: "News and recent updates", icon: Newspaper }
    ]
  },
  {
    name: "Gurudev",
    icon: User,
    id: "gurudev",
    subItems: [
      { name: "Life Story", desc: "The journey of Sree Lahari Krishna", icon: HistoryIcon },
      { name: "Philosophy", desc: "Core spiritual principles", icon: Eye },
      { name: "Divine Presence", desc: "Understanding the Master", icon: Sun }
    ]
  },
  {
    name: "Ashram",
    icon: MapPin,
    id: "ashram",
    subItems: [
      { name: "About Us", desc: "History and purpose", icon: Info },
      { name: "Sacred Spaces", desc: "Explore the temple grounds", icon: Map },
      { name: "Milestones", desc: "Significant dates and events", icon: List }
    ]
  },
  {
    name: "Wisdom",
    icon: BookOpen,
    id: "teachings",
    subItems: [
      { name: "Teachings", desc: "Divine words and insights", icon: MessageCircle },
      { name: "Reflections", desc: "Daily wisdom for the path", icon: Quote },
      { name: "Literature", desc: "Sacred texts and publications", icon: Book }
    ]
  },
  {
    name: "Seva",
    icon: HandHelping,
    id: "service",
    subItems: [
      { name: "Selfless Action", desc: "Participate in ashram service", icon: Sparkles },
      { name: "Festivals", desc: "Upcoming sacred gatherings", icon: Calendar },
      { name: "Support", desc: "Sustain the ashram's mission", icon: Heart }
    ]
  },
  {
    name: "Library",
    icon: ImageIcon,
    id: "media",
    subItems: [
      { name: "Gallery", desc: "Moments of divine grace", icon: ImageIcon },
      { name: "Discourses", desc: "Video library of teachings", icon: Video },
      { name: "Audio", desc: "Chants and spiritual music", icon: Mic2 }
    ]
  },
  {
    name: "Connect",
    icon: Mail,
    id: "connect",
    subItems: [
      { name: "Visit Us", desc: "Location and travel guide", icon: MapPin },
      { name: "Stay", desc: "Guest accommodations", icon: Home },
      { name: "Get in Touch", desc: "Reach out for guidance", icon: MessageCircle }
    ]
  },
];

function NavItem({ item, hoveredItem, setHoveredItem }: any) {
  return (
    <div
      className="relative flex items-center py-2"
      onMouseEnter={() => setHoveredItem(item.id)}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative z-20",
          hoveredItem === item.id
            ? "bg-white text-black"
            : "text-white/20 hover:text-white/60"
        )}
      >
        <item.icon size={20} />
      </motion.button>

      {/* FLYOUT CONTENT - REFINED STYLE */}
      <AnimatePresence>
        {hoveredItem === item.id && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-full py-4 px-6 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/5 min-w-[260px] shadow-[0_20px_60px_rgba(0,0,0,1)] z-50"
          >
            <div className="space-y-4">
              {item.subItems.map((sub: any, i: number) => (
                <button
                  key={sub.name}
                  className="flex items-center gap-4 group/sub w-full text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover/sub:text-white transition-all">
                    <sub.icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/80 group-hover/sub:text-white transition-colors">{sub.name}</div>
                    <div className="text-[10px] text-white/20 group-hover/sub:text-white/40 transition-colors uppercase tracking-widest">{sub.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SidebarNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav 
      className="fixed left-0 top-0 bottom-0 z-[1000] hidden md:flex flex-col items-center justify-center w-16"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex flex-col gap-2">
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
