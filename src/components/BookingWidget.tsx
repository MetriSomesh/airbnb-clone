import { ChevronDown, Flag, Tag } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="flex flex-col w-full max-w-[360px] ml-auto">
      {/* Top 10% Off Promo Tag Banner */}
      <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-3.5 px-4 flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center text-white shrink-0">
            <Tag size={14} className="fill-white" />
          </div>
          <div className="text-xs text-gray-800 leading-tight">
            <span className="font-semibold block">Get 10% off your next stay.</span>
            <button className="underline text-gray-600 hover:text-black">Terms apply</button>
          </div>
        </div>
        <button className="px-3.5 py-1.5 border border-gray-300 bg-white rounded-lg text-xs font-semibold text-gray-800 hover:bg-gray-50 transition-colors shrink-0">
          Claim
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl w-full">
        {/* Header Price */}
        <div className="flex items-baseline mb-5">
          <span className="text-2xl font-bold text-gray-900">₹28,499</span>
          <span className="text-gray-600 font-normal text-sm ml-1.5">for 5 nights</span>
        </div>

        {/* Check-in / Checkout / Guests Box */}
        <div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
          <div className="flex border-b border-gray-400">
            <div className="flex-1 p-2.5 px-3 border-r border-gray-400">
              <div className="text-[9px] font-bold uppercase tracking-wider text-gray-800">CHECK-IN</div>
              <div className="text-xs sm:text-sm font-normal text-gray-900 mt-0.5">10/18/2026</div>
            </div>
            <div className="flex-1 p-2.5 px-3">
              <div className="text-[9px] font-bold uppercase tracking-wider text-gray-800">CHECKOUT</div>
              <div className="text-xs sm:text-sm font-normal text-gray-900 mt-0.5">10/23/2026</div>
            </div>
          </div>
          <div className="p-2.5 px-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-gray-800">GUESTS</div>
              <div className="text-xs sm:text-sm font-normal text-gray-900 mt-0.5">2 guests</div>
            </div>
            <ChevronDown size={18} className="text-gray-700" />
          </div>
        </div>

        {/* Free Cancellation Banner */}
        <div className="bg-gray-100/90 rounded-lg py-2.5 px-3 text-center text-xs font-medium text-gray-700 mb-4">
          Free cancellation before 17 October
        </div>

        {/* Reserve Button */}
        <button className="w-full py-3.5 rounded-xl text-white font-semibold text-[16px] bg-[#E51D53] hover:bg-[#D70466] transition-colors shadow-sm">
          Reserve
        </button>

        {/* Subtext */}
        <p className="text-center text-xs text-gray-500 mt-3 mb-1">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Footer Link */}
      <div className="flex justify-center items-center gap-1.5 text-gray-500 cursor-pointer hover:text-black p-2 transition-colors mx-auto mt-3">
        <Flag size={12} />
        <span className="text-xs font-medium underline">Report this listing</span>
      </div>
    </div>
  );
}
