"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChevronLeft, Share, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { listingPhotos, photoCategories } from "@/data/referenceListingData";

export default function PhotoTourModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isModalOpen = searchParams.get("modal") === "PHOTO_TOUR_SCROLLABLE";

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 400); // Wait for modal animation
      }
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const scrollToCategory = (categoryId: string) => {
    const el = document.getElementById(`category-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-40 bg-white overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-30 bg-white h-[72px] flex items-center justify-between px-6">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 font-semibold text-base text-gray-900">
              Photo tour
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg text-[14px] font-medium transition-colors">
                <Share size={16} /> <span className="hidden sm:inline">Share</span>
              </button>
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg text-[14px] font-medium transition-colors">
                <Heart size={16} /> <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          </div>

          {/* Top Category Thumbnails Component (Centered & Larger Thumbnails) */}
          <div className="max-w-5xl mx-auto px-6 pt-6 pb-6 flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3.5 max-w-4xl w-full justify-items-center">
              {photoCategories.map((cat) => {
                const firstPhoto = listingPhotos.find((p) => p.category === cat.id);
                if (!firstPhoto) return null;

                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className="flex flex-col text-left group cursor-pointer w-full max-w-[120px]"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-2 bg-gray-100 shadow-sm">
                      <Image
                        src={firstPhoto.url}
                        alt={cat.title}
                        fill
                        sizes="140px"
                        className="object-cover transition-transform duration-300 scale-110 group-hover:scale-100"
                      />
                    </div>
                    <span className="text-[12px] sm:text-[13px] text-gray-700 group-hover:text-black font-medium leading-tight">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories & Image Grids */}
          <div className="max-w-4xl mx-auto px-6 pt-4 pb-16 flex flex-col gap-14">
            {photoCategories.map((category) => {
              const categoryPhotos = listingPhotos.filter((p) => p.category === category.id);
              if (categoryPhotos.length === 0) return null;

              return (
                <section
                  key={category.id}
                  id={`category-${category.id}`}
                  className="scroll-mt-24 flex flex-col md:flex-row gap-8 justify-between relative"
                >
                  {/* Left Column: Sticky Title & Description */}
                  <div className="md:w-1/3 max-w-[240px]">
                    <div className="sticky top-[88px] self-start pr-2">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                        {category.title}
                      </h2>
                      {category.description && (
                        <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mt-2">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Decreased Size Image Grid */}
                  <div className="md:w-[62%] max-w-[480px] grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full">
                    {categoryPhotos.map((photo, idx) => (
                      <Link
                        key={photo.id}
                        id={`photo-${photo.id}`}
                        href={`?modal=PHOTO_TOUR_SCROLLABLE&modalItem=${photo.id}`}
                        scroll={false}
                        className={`relative group overflow-hidden rounded-2xl ${
                          idx % 3 === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={photo.url}
                          alt={`${category.title} photo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-colors"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
