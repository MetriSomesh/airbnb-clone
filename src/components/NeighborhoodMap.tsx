import { Search, Plus, Minus, Home } from "lucide-react";

export default function NeighborhoodMap() {
  return (
    <div className="py-8 border-b border-gray-200">
      {/* Title & Location Subtitle Above Map */}
      <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900 mb-1">
        Where you&apos;ll be
      </h2>
      <p className="text-sm text-gray-700 font-normal mb-6">
        Candolim, Goa, India
      </p>
      
      {/* Map Graphic Container */}
      <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#e5edd8] shadow-sm border border-gray-200/60">
        {/* Natural Coastline & Ocean Water SVG */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path
            d="M 0 0 L 42 0 C 38 25, 32 55, 24 75 C 20 85, 16 95, 12 100 L 0 100 Z"
            fill="#a0c4df"
          />
        </svg>

        {/* Soft Translucent Green Radius Circles */}
        <div className="absolute top-[26%] left-[30%] w-24 h-24 rounded-full bg-[#c9e0b5]/70 border border-[#b3d49c]/40 pointer-events-none" />
        <div className="absolute bottom-[24%] right-[24%] w-32 h-32 rounded-full bg-[#c9e0b5]/70 border border-[#b3d49c]/40 pointer-events-none" />

        {/* Grid Line Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#2d3748 1px, transparent 1px), linear-gradient(90deg, #2d3748 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />

        {/* Top-Left Search Button */}
        <button 
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors z-10"
          aria-label="Search location"
        >
          <Search size={18} />
        </button>

        {/* Center Black House Pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
          <div className="w-11 h-11 bg-black rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-black/10">
            <Home size={20} className="stroke-[2]" />
          </div>
        </div>

        {/* Top-Right Zoom Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md flex flex-col overflow-hidden z-10 border border-gray-100">
          <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 border-b border-gray-100" aria-label="Zoom in">
            <Plus size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50" aria-label="Zoom out">
            <Minus size={18} />
          </button>
        </div>
      </div>

      {/* Text Below Map */}
      <p className="text-xs sm:text-sm text-gray-600 font-normal my-5">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood Highlights Section */}
      <div className="pt-2">
        <h3 className="font-semibold text-base text-gray-900 mb-2">
          Neighbourhood highlights
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mb-3">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="font-semibold underline text-sm text-gray-900 hover:text-black">
          Show more &gt;
        </button>
      </div>
    </div>
  );
}
