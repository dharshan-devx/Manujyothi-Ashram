import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SidebarNav from "@/components/SidebarNav";
import SacredBackground from "@/components/SacredBackground";
import SharedHeader from "@/components/SharedHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Manujyothi Ashram | A Digital Temple",
  description: "Experience the divine presence of Gurudev Sree Lahari Krishna. A journey of light to mankind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden bg-white text-silence-charcoal`}>
        {/* GLOBAL AMBIENT BACKGROUND */}
        <SacredBackground />
        
        <div className="flex min-h-screen relative">
          
          {/* SIDEBAR NAVIGATION (Fixed but with a spacer to protect content) */}
          <SidebarNav />
          <div className="hidden md:block w-16 md:w-28 lg:w-32 flex-shrink-0" />

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 flex flex-col min-w-0">
            
            {/* HEADER (Fixed but with a spacer to protect content) */}
            <SharedHeader />
            <div className="h-24 md:h-32 lg:h-40 flex-shrink-0" />

            <main className="flex-1 relative z-10">
              <SmoothScroll>
                <div className="px-6 md:px-12 lg:px-20 pb-20">
                  {children}
                </div>
              </SmoothScroll>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
