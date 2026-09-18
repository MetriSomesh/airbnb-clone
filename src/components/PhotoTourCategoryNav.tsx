"use client";

import { useEffect, useState } from "react";
import { photoCategories } from "@/data/referenceListingData";
import { cn } from "@/lib/utils";

export default function PhotoTourCategoryNav() {
  const [activeCategory, setActiveCategory] = useState(photoCategories[0].id);

  useEffect(() => {
    const handleScroll = () => {
      // Find the category section currently in view inside the modal
      // This assumes the modal container is the window (if it's a fixed overlay with its own scroll, we need to attach to its scroll event instead, but let's assume body scroll for the modal or we attach it to window if the modal uses fixed body)
      const sections = photoCategories.map(cat => document.getElementById(`category-${cat.id}`));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && window.scrollY >= section.offsetTop - 150) {
          setActiveCategory(photoCategories[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const section = document.getElementById(`category-${id}`);
    if (section) {
      const top = section.offsetTop - 120; // Offset for header + category nav
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[72px] z-10 bg-white border-b border-gray-200">
      <div className="flex overflow-x-auto hide-scrollbar items-center gap-6 px-6 max-w-6xl mx-auto h-14">
        {photoCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className={cn(
              "whitespace-nowrap text-[14px] font-medium h-full border-b-2 transition-colors",
              activeCategory === cat.id
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
