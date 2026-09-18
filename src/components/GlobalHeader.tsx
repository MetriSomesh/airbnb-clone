import { Search, Globe, Menu } from "lucide-react";
import Link from "next/link";

export default function GlobalHeader() {
  return (
    <header className="relative w-full bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-10">
      {/* Airbnb Logo */}
      <div className="flex-1">
        <Link href="/" className="inline-flex items-center gap-1.5 cursor-pointer text-[#ff385c]">
          <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 2.5C14.3 2.5 13 3.6 11.8 5.8L5.7 17.8C4.6 19.9 4 21.6 4 23.2 4 27.3 7.1 29.5 11 29.5c2.6 0 4.5-1.3 5-3.2.5 1.9 2.4 3.2 5 3.2 3.9 0 7-2.2 7-6.3 0-1.6-.6-3.3-1.7-5.4L20.2 5.8C19 3.6 17.7 2.5 16 2.5z" />
            <path d="M16 15c2.2 0 4 1.8 4 4 0 3.1-2.4 5.6-4 7.2-1.6-1.6-4-4.1-4-7.2 0-2.2 1.8-4 4-4z" />
          </svg>
          <span className="font-semibold text-[25px] tracking-tight hidden lg:inline-block leading-none">airbnb</span>
        </Link>
      </div>

      {/* Search Pill */}
      <div className="hidden md:flex flex-1 justify-center">
        <button className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow py-2 pl-3 pr-2 gap-0 text-sm font-semibold text-gray-900 h-[48px] cursor-pointer">
          <span className="text-lg leading-none mr-1.5 pl-1">🏡</span>
          <span className="pr-3.5 text-gray-900 font-semibold">Anywhere</span>
          <span className="w-px h-5 bg-gray-300"></span>
          <span className="px-3.5 text-gray-900 font-semibold">Anytime</span>
          <span className="w-px h-5 bg-gray-300"></span>
          <span className="px-3.5 text-gray-500 font-normal">Add guests</span>
          <div className="bg-[#ff385c] p-2.5 rounded-full text-white ml-2 flex items-center justify-center">
            <Search size={14} strokeWidth={3} />
          </div>
        </button>
      </div>

      {/* Profile / Actions Menu */}
      <div className="flex-1 flex justify-end items-center gap-3">
        <button className="hidden md:block text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3.5 py-2 rounded-full transition-colors cursor-pointer">
          Become a host
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer">
          <Globe size={18} className="stroke-[1.75]" />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer">
          <Menu size={18} className="stroke-[2]" />
        </button>
      </div>
    </header>
  );
}

