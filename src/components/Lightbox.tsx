"use client";

import { useLightboxNav } from "@/hooks/useLightboxNav";
import { listingPhotos } from "@/data/referenceListingData";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Lightbox() {
  const { modalItem, currentIndex, totalPhotos, goNext, goPrev, close } = useLightboxNav();
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Focus trap implementation
  useEffect(() => {
    if (!modalItem) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const focusableElements = lightboxRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [modalItem]);

  if (!modalItem || currentIndex === -1) return null;

  const photo = listingPhotos[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex flex-col focus:outline-none"
      ref={lightboxRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <button 
          onClick={close}
          className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close lightbox"
        >
          <X size={20} /> <span className="text-sm font-medium">Close</span>
        </button>

        <div className="text-sm font-medium">
          {currentIndex + 1} / {totalPhotos}
        </div>

        <div className="flex gap-2">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Share">
            <Share size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Save">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {currentIndex > 0 && (
          <button 
            onClick={goPrev}
            className="absolute left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={photo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-6xl h-full max-h-[85vh] p-4"
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {currentIndex < totalPhotos - 1 && (
          <button 
            onClick={goNext}
            className="absolute right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
