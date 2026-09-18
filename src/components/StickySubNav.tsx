"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Photos", id: "photos" },
  { label: "Amenities", id: "amenities" },
  { label: "Reviews", id: "reviews" },
  { label: "Location", id: "location" }
];

export default function StickySubNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      // Sub-appbar becomes sticky after scrolling past the Hero photo grid (~500px)
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // ScrollSpy: highlight active tab based on section scroll offset
      const sections = navItems.map((item) => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && window.scrollY >= section.offsetTop - 140) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - 90; // Offset for sticky navbar height
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm transition-all duration-300 ease-out transform",
        isSticky
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Navigation Tabs */}
        <div className="flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-sm font-semibold h-full flex items-center border-b-2 transition-colors cursor-pointer -mb-[1px]",
                activeSection === item.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-600 hover:text-black hover:border-gray-300"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Price & Reserve Button Summary */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              ₹28,499 <span className="font-normal text-xs text-gray-500">for 5 nights</span>
            </div>
            <div className="text-xs text-gray-700 flex items-center justify-end gap-1 mt-0.5 font-medium">
              <Star size={10} fill="black" stroke="none" />
              <span>4.95 · 19 reviews</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("photos")}
            className="bg-[#e31c5f] hover:bg-[#d70466] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

