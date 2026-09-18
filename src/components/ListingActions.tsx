"use client";

import { useState } from "react";
import { Share, Heart } from "lucide-react";

export default function ListingActions() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = () => {
    const nextSavedState = !isSaved;
    setIsSaved(nextSavedState);

    const toastMessage = nextSavedState ? "Saved to wishlist" : "Removed from wishlist";
    window.dispatchEvent(new CustomEvent("show-toast", { detail: toastMessage }));
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg text-[14px] font-semibold underline text-gray-900 transition-colors cursor-pointer">
        <Share size={16} className="stroke-[2]" /> Share
      </button>

      <button
        onClick={handleSaveToggle}
        className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg text-[14px] font-semibold underline text-gray-900 transition-colors cursor-pointer"
      >
        <Heart
          size={16}
          className={`transition-all duration-200 ${
            isSaved ? "fill-[#ff385c] stroke-[#ff385c] text-[#ff385c]" : "stroke-current fill-none stroke-[2]"
          }`}
        />
        <span>{isSaved ? "Saved" : "Save"}</span>
      </button>
    </div>
  );
}

