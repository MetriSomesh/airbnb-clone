"use client";

import { useState } from "react";
import { Star, SprayCan, CheckCircle2, KeyRound, MessageSquare, Map, Tag, Image as ImageIcon } from "lucide-react";

export default function ReviewsSection() {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      id: "r1",
      name: "Amit",
      subtitle: "2 months on Airbnb",
      rating: 5,
      date: "1 week ago",
      comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
      avatar: "A",
      isInitials: true,
      bg: "bg-amber-100 text-amber-800"
    },
    {
      id: "r2",
      name: "Aheesh",
      subtitle: "3 years on Airbnb",
      rating: 5,
      date: "2 weeks ago",
      comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      isInitials: false
    },
    {
      id: "r3",
      name: "Samiksha",
      subtitle: "8 months on Airbnb",
      rating: 5,
      date: "May 2026",
      comment: "the host nitish was really great help",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      isInitials: false
    },
    {
      id: "r4",
      name: "Vedant",
      subtitle: "4 years on Airbnb",
      rating: 5,
      date: "May 2026",
      comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable. The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!",
      avatar: "V",
      isInitials: true,
      bg: "bg-purple-100 text-purple-800"
    },
    {
      id: "r5",
      name: "Vaibhav S",
      subtitle: "3 years on Airbnb",
      rating: 5,
      date: "May 2026",
      comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      isInitials: false
    },
    {
      id: "r6",
      name: "Mohd",
      subtitle: "5 years on Airbnb",
      rating: 5,
      date: "May 2026",
      comment: "Great place. Exactly as described in the listing.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      isInitials: false
    },
    {
      id: "r7",
      name: "Priyanka",
      subtitle: "1 year on Airbnb",
      rating: 5,
      date: "April 2026",
      comment: "Beautiful flat in Candolim. Very close to the main strip yet peaceful at night. The Jacuzzi experience was awesome!",
      avatar: "P",
      isInitials: true,
      bg: "bg-teal-100 text-teal-800"
    },
    {
      id: "r8",
      name: "Rohan",
      subtitle: "6 years on Airbnb",
      rating: 5,
      date: "April 2026",
      comment: "Mirashya Homes hosted us wonderfully. High speed wifi was super fast for working remotely.",
      avatar: "R",
      isInitials: true,
      bg: "bg-blue-100 text-blue-800"
    },
    {
      id: "r9",
      name: "Kavya",
      subtitle: "2 years on Airbnb",
      rating: 5,
      date: "March 2026",
      comment: "Clean rooms, top quality bed linen, and super helpful staff on site.",
      avatar: "K",
      isInitials: true,
      bg: "bg-rose-100 text-rose-800"
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <div className="py-12 border-b border-gray-200">
      {/* Header Badge */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center justify-center gap-3">
          {/* Left Laurel Wreath */}
          <svg width="44" height="80" viewBox="0 0 42 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 shrink-0">
            <path d="M38 72C33.5 60 25 38 34.5 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M36 65C28 62 20 56 24 48C28 40 35 48 36 65Z" fill="currentColor" />
            <path d="M33 52C23 48 15 40 20 32C25 24 31 34 33 52Z" fill="currentColor" />
            <path d="M31 38C20 32 14 24 20 16C26 8 30 20 31 38Z" fill="currentColor" />
            <path d="M32 22C24 14 20 6 27 2C34 -2 34 10 32 22Z" fill="currentColor" />
            <path d="M36 12C32 4 36 0 40 2C44 4 40 12 36 12Z" fill="currentColor" />
          </svg>

          {/* Large Rating 4.95 */}
          <span className="text-7xl sm:text-[92px] font-extrabold tracking-tighter text-gray-900 leading-none">
            4.95
          </span>

          {/* Right Laurel Wreath */}
          <svg width="44" height="80" viewBox="0 0 42 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 shrink-0 transform -scale-x-100">
            <path d="M38 72C33.5 60 25 38 34.5 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M36 65C28 62 20 56 24 48C28 40 35 48 36 65Z" fill="currentColor" />
            <path d="M33 52C23 48 15 40 20 32C25 24 31 34 33 52Z" fill="currentColor" />
            <path d="M31 38C20 32 14 24 20 16C26 8 30 20 31 38Z" fill="currentColor" />
            <path d="M32 22C24 14 20 6 27 2C34 -2 34 10 32 22Z" fill="currentColor" />
            <path d="M36 12C32 4 36 0 40 2C44 4 40 12 36 12Z" fill="currentColor" />
          </svg>
        </div>

        {/* Guest favourite title */}
        <h2 className="text-2xl sm:text-[26px] font-bold text-gray-900 mt-4 mb-2">
          Guest favourite
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 max-w-[380px] leading-snug text-center">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        {/* Link */}
        <button className="text-xs sm:text-sm font-semibold underline text-gray-900 mt-3 hover:text-black cursor-pointer">
          How reviews work
        </button>
      </div>

      {/* Sub-Ratings Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-2 py-8 border-y border-gray-200 text-xs text-gray-800 my-8 items-start">
        {/* Overall rating bar */}
        <div className="col-span-2 sm:col-span-1 pr-6 border-r border-gray-200">
          <span className="font-semibold block mb-2.5 text-gray-900 text-sm">Overall rating</span>
          <div className="flex flex-col gap-1.5 text-[11px] text-gray-500 font-medium">
            <div className="flex items-center gap-2"><span>5</span><div className="flex-1 bg-gray-900 h-[5px] rounded-full" /></div>
            <div className="flex items-center gap-2"><span>4</span><div className="flex-1 bg-gray-200 h-[5px] rounded-full" /></div>
            <div className="flex items-center gap-2"><span>3</span><div className="flex-1 bg-gray-200 h-[5px] rounded-full" /></div>
            <div className="flex items-center gap-2"><span>2</span><div className="flex-1 bg-gray-200 h-[5px] rounded-full" /></div>
            <div className="flex items-center gap-2"><span>1</span><div className="flex-1 bg-gray-200 h-[5px] rounded-full" /></div>
          </div>
        </div>

        {/* Cleanliness */}
        <div className="flex flex-col pl-4 pr-2 sm:border-r border-gray-200">
          <span className="font-semibold text-gray-900 text-sm block">Cleanliness</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">5.0</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 mt-0.5">
            <path d="M8 11h6v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-9z" />
            <path d="M11 7v4" />
            <path d="M8 7h6l-1-2h-4l-1 2z" />
            <path d="M8 7H5" />
            <circle cx="17" cy="6" r="0.8" fill="currentColor" />
            <circle cx="19" cy="7.5" r="0.8" fill="currentColor" />
            <circle cx="16.5" cy="9" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* Accuracy */}
        <div className="flex flex-col pl-4 pr-2 sm:border-r border-gray-200">
          <span className="font-semibold text-gray-900 text-sm block">Accuracy</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">5.0</span>
          <CheckCircle2 size={26} className="text-gray-900 stroke-[1.6] mt-0.5" />
        </div>

        {/* Check-in */}
        <div className="flex flex-col pl-4 pr-2 sm:border-r border-gray-200">
          <span className="font-semibold text-gray-900 text-sm block">Check-in</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">5.0</span>
          <KeyRound size={26} className="text-gray-900 stroke-[1.6] mt-0.5" />
        </div>

        {/* Communication */}
        <div className="flex flex-col pl-4 pr-2 sm:border-r border-gray-200">
          <span className="font-semibold text-gray-900 text-sm block">Communication</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">5.0</span>
          <MessageSquare size={26} className="text-gray-900 stroke-[1.6] mt-0.5" />
        </div>

        {/* Location */}
        <div className="flex flex-col pl-4 pr-2 sm:border-r border-gray-200">
          <span className="font-semibold text-gray-900 text-sm block">Location</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">4.8</span>
          <Map size={26} className="text-gray-900 stroke-[1.6] mt-0.5" />
        </div>

        {/* Value */}
        <div className="flex flex-col pl-4">
          <span className="font-semibold text-gray-900 text-sm block">Value</span>
          <span className="text-lg font-bold text-gray-900 mt-1 mb-2 block">4.8</span>
          <Tag size={26} className="text-gray-900 stroke-[1.6] mt-0.5" />
        </div>
      </div>

      {/* Tag Filter Pills matching Image 1 exact styling */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🛋️</span>
          <span>Comfort</span>
          <span className="text-gray-500 font-normal">6</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🟢</span>
          <span>Accuracy</span>
          <span className="text-gray-500 font-normal">5</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🛁</span>
          <span>Hot tub</span>
          <span className="text-gray-500 font-normal">5</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🎨</span>
          <span>Condition</span>
          <span className="text-gray-500 font-normal">4</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🎁</span>
          <span>Hospitality</span>
          <span className="text-gray-500 font-normal">8</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🪠</span>
          <span>Cleanliness</span>
          <span className="text-gray-500 font-normal">4</span>
        </div>
        <div className="px-4 py-2.5 border border-gray-300/80 rounded-2xl text-sm font-semibold text-gray-900 flex items-center gap-2 hover:border-gray-900 cursor-pointer shadow-2xs">
          <span>🧺</span>
          <span>Amenities</span>
          <span className="text-gray-500 font-normal">2</span>
        </div>
        <div className="p-2.5 border border-gray-300/80 rounded-2xl text-gray-700 flex items-center justify-center hover:border-gray-900 cursor-pointer shadow-2xs">
          <ImageIcon size={18} />
        </div>
      </div>

      {/* Reviews Grid (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {visibleReviews.map((r) => {
          const isExpanded = !!expandedReviews[r.id];
          const isLong = r.comment.length > 160;
          const displayComment = isLong && !isExpanded ? r.comment.slice(0, 160) + "..." : r.comment;

          return (
            <div key={r.id} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {r.isInitials ? (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${r.bg}`}>
                    {r.avatar}
                  </div>
                ) : (
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                )}
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">{r.name}</h3>
                  <p className="text-xs text-gray-500">{r.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={10} fill="black" stroke="none" />
                  ))}
                </div>
                <span>·</span>
                <span>{r.date}</span>
              </div>

              <p className="text-sm text-gray-800 leading-relaxed">
                {displayComment}
              </p>
              {isLong && (
                <button
                  onClick={() => toggleExpand(r.id)}
                  className="text-xs sm:text-sm font-semibold underline text-gray-900 text-left hover:text-black mt-0.5 w-fit cursor-pointer"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div className="mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border border-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {showAll ? "Show less reviews" : `Show all 19 reviews`}
        </button>
      </div>
    </div>
  );
}




