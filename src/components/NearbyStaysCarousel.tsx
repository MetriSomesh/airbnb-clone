"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const nearbyStays = [
  {
    id: "nb-1",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-2",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-3",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-4",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-5",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
    imageUrl: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-6",
    title: "Vagator Haven | Private Balcony 1BHK",
    price: "₹27,500",
    rating: "4.92",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-7",
    title: "Candolim Suite | Pool & Jacuzzi",
    price: "₹31,000",
    rating: "4.98",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-8",
    title: "Goa Palms Luxury Villa",
    price: "₹52,000",
    rating: "4.97",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-9",
    title: "Sea Breeze Serviced Apartment",
    price: "₹25,400",
    rating: "4.89",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nb-10",
    title: "Anjuna Sunset Heights 1BHK",
    price: "₹29,800",
    rating: "4.93",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function NearbyStaysCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (scrollLeft > clientWidth / 2) {
      setCurrentPage(2);
    } else {
      setCurrentPage(1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const clientWidth = scrollRef.current.clientWidth;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="py-12 mt-4 border-t border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900">
          More stays nearby
        </h2>

        {/* Page Counter & Controls */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600 mr-1">
            {currentPage} / 2
          </span>
          <button
            onClick={() => scroll("left")}
            disabled={currentPage === 1}
            aria-label="Previous stays"
            className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-2xs transition-all ${
              currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:border-gray-900 hover:shadow-sm"
            }`}
          >
            <ChevronLeft size={18} className="text-gray-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={currentPage === 2}
            aria-label="Next stays"
            className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-2xs transition-all ${
              currentPage === 2 ? "opacity-30 cursor-not-allowed" : "hover:border-gray-900 hover:shadow-sm"
            }`}
          >
            <ChevronRight size={18} className="text-gray-800" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {nearbyStays.map((stay) => (
          <div
            key={stay.id}
            className="w-[calc((100%-16px)/2)] sm:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] snap-start flex-shrink-0 cursor-pointer group flex flex-col"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3.5 bg-gray-100">
              <Image
                src={stay.imageUrl}
                alt={stay.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug min-h-[40px] mb-1">
              {stay.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-gray-900">
              <span className="font-medium text-gray-800">{stay.price}</span>
              <span className="text-gray-400">★</span>
              <span className="font-medium text-gray-800">{stay.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      ` }} />
    </div>
  );
}

