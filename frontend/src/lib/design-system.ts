import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uiStyles = {
  neumorphism: "bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[50px]",
  glassmorphism: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl",
  claymorphism: "bg-blue-400 shadow-[inset_8px_8px_16px_0_rgba(255,255,255,0.3),inset_-8px_-8px_16px_0_rgba(0,0,0,0.1),12px_12px_24px_0_rgba(0,0,0,0.2)] rounded-3xl",
  brutalism: "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-yellow-400 font-black uppercase p-4",
  retro: "border-2 border-dashed border-gray-400 bg-amber-50 shadow-inner font-mono p-4",
};
