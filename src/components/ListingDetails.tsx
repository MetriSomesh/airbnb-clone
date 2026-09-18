import Image from "next/image";
import { Star, DoorOpen, Wind, UtensilsCrossed, Utensils, Wifi, Laptop, Car, Waves, Bath, PawPrint, Video, Ban } from "lucide-react";

export default function ListingDetails() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Title & Capacity Subtext */}
      <div className="pb-6 border-b border-gray-200">
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900">
          Entire serviced apartment in Candolim, India
        </h2>
        <p className="text-[15px] text-gray-700 mt-1">
          3 guests · 1 bedroom · 1 bed · 1 bathroom
        </p>
      </div>

      {/* Guest Favourite Card */}
      <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex items-center justify-between my-2 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Left Laurel Wreath Icon */}
          <div className="flex items-center gap-1.5 text-gray-900">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z" />
              <path d="M16 7a2 2 0 0 1 2 2v6.586l4.293-4.293a1 1 0 0 1 1.414 1.414L18 18.414V23a2 2 0 0 1-4 0v-4.586l-5.707-5.707a1 1 0 0 1 1.414-1.414L14 15.586V9a2 2 0 0 1 2-2z" />
            </svg>
            <span className="font-semibold text-base sm:text-lg tracking-tight">Guest favourite</span>
          </div>
        </div>
        <div className="text-center hidden sm:block max-w-[240px] text-xs text-gray-600 leading-tight">
          One of the most loved homes on Airbnb, according to guests
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="font-bold text-lg sm:text-xl text-gray-900 leading-none">4.95</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="black" stroke="none" />
              ))}
            </div>
          </div>
          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block" />
          <div className="text-center">
            <div className="font-bold text-lg sm:text-xl text-gray-900 leading-none">19</div>
            <div className="text-xs text-gray-600 underline font-medium mt-1">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host Row */}
      <div className="flex items-center gap-4 py-4 border-b border-gray-200">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-800 flex items-center justify-center text-white font-bold text-sm">
          <span className="bg-emerald-900 w-full h-full flex items-center justify-center text-white text-xs font-semibold">
            mirashya
          </span>
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">Hosted by Mirashya Homes</h3>
          <p className="text-xs sm:text-sm text-gray-500">2 years hosting</p>
        </div>
      </div>

      {/* 3 Highlights */}
      <div className="flex flex-col gap-6 py-4 border-b border-gray-200">
        <div className="flex gap-4 items-start">
          <UtensilsCrossed size={24} className="text-gray-800 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-base font-semibold text-gray-900">Outdoor entertainment</h3>
            <p className="text-sm text-gray-500">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <Wind size={24} className="text-gray-800 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-base font-semibold text-gray-900">Designed for staying cool</h3>
            <p className="text-sm text-gray-500">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <DoorOpen size={24} className="text-gray-800 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-base font-semibold text-gray-900">Self check-in</h3>
            <p className="text-sm text-gray-500">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      {/* Translation Banner */}
      <div className="bg-gray-100/80 rounded-xl p-4 text-xs sm:text-sm text-gray-800 leading-relaxed">
        Some info has been automatically translated.{" "}
        <button className="font-semibold underline cursor-pointer hover:text-black">
          Show original
        </button>
      </div>

      {/* Description Section */}
      <div className="pt-2 pb-6 border-b border-gray-200">
        <p className="text-[15px] leading-relaxed text-gray-800">
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🥂, it&apos;s
        </p>
        <button className="flex items-center font-semibold underline mt-3 text-[15px] hover:text-black">
          Show more &gt;
        </button>
      </div>

      {/* Where you'll sleep Section */}
      <div className="py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Where you&apos;ll sleep</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[540px]">
          {/* Bedroom Card */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
                alt="Bedroom"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-base text-gray-900">Bedroom</h3>
            <p className="text-sm text-gray-500">1 double bed</p>
          </div>

          {/* Living room Card */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
                alt="Living room"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-base text-gray-900">Living room</h3>
            <p className="text-sm text-gray-500">1 sofa</p>
          </div>
        </div>
      </div>

      {/* What this place offers Section */}
      <div id="amenities" className="py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What this place offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[15px] text-gray-800">
          <div className="flex items-center gap-4">
            <Utensils size={22} className="text-gray-800 shrink-0" />
            <span>Kitchen</span>
          </div>
          <div className="flex items-center gap-4">
            <Wifi size={22} className="text-gray-800 shrink-0" />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-4">
            <Laptop size={22} className="text-gray-800 shrink-0" />
            <span>Dedicated workspace</span>
          </div>
          <div className="flex items-center gap-4">
            <Car size={22} className="text-gray-800 shrink-0" />
            <span>Free parking on premises</span>
          </div>
          <div className="flex items-center gap-4">
            <Waves size={22} className="text-gray-800 shrink-0" />
            <span>Pool</span>
          </div>
          <div className="flex items-center gap-4">
            <Bath size={22} className="text-gray-800 shrink-0" />
            <span>Hot tub</span>
          </div>
          <div className="flex items-center gap-4">
            <PawPrint size={22} className="text-gray-800 shrink-0" />
            <span>Pets allowed</span>
          </div>
          <div className="flex items-center gap-4">
            <Video size={22} className="text-gray-800 shrink-0" />
            <span>Exterior security cameras on property</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 line-through">
            <Ban size={22} className="text-gray-400 shrink-0" />
            <span className="text-gray-500 line-through">Carbon monoxide alarm</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 line-through">
            <Ban size={22} className="text-gray-400 shrink-0" />
            <span className="text-gray-500 line-through">Smoke alarm</span>
          </div>
        </div>

        <button className="mt-8 px-6 py-3 border border-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
          Show all 50 amenities
        </button>
      </div>
    </div>
  );
}
