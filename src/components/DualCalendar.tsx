import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

export default function DualCalendar() {
  return (
    <div className="py-8 border-b border-gray-200">
      {/* Title & Date Range */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-1">5 nights in Candolim</h2>
      <p className="text-sm text-gray-500 mb-8">18 Oct 2026 - 23 Oct 2026</p>

      {/* Dual Month Calendar */}
      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-[640px]">
        {/* October 2026 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 px-1">
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors" aria-label="Previous month">
              <ChevronLeft size={18} className="text-gray-900" />
            </button>
            <span className="font-semibold text-base text-gray-900">October 2026</span>
            <div className="w-7" /> {/* Spacer */}
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-3">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          <div className="grid grid-cols-7 text-center text-sm items-center">
            {/* 1st of Oct 2026 is Thursday */}
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10 flex items-center justify-center font-medium">1</div>
            <div className="h-10 flex items-center justify-center font-medium">2</div>
            <div className="h-10 flex items-center justify-center font-medium">3</div>

            <div className="h-10 flex items-center justify-center font-medium">4</div>
            <div className="h-10 flex items-center justify-center font-medium">5</div>
            <div className="h-10 flex items-center justify-center font-medium">6</div>
            <div className="h-10 flex items-center justify-center font-medium">7</div>
            <div className="h-10 flex items-center justify-center font-medium">8</div>
            <div className="h-10 flex items-center justify-center font-medium">9</div>
            <div className="h-10 flex items-center justify-center font-medium">10</div>

            <div className="h-10 flex items-center justify-center font-medium">11</div>
            <div className="h-10 flex items-center justify-center font-medium">12</div>
            <div className="h-10 flex items-center justify-center font-medium">13</div>
            <div className="h-10 flex items-center justify-center font-medium">14</div>
            <div className="h-10 flex items-center justify-center font-medium">15</div>
            <div className="h-10 flex items-center justify-center font-medium">16</div>
            <div className="h-10 flex items-center justify-center font-medium">17</div>

            {/* Selected Range: Oct 18 - Oct 23 */}
            <div className="h-10 flex items-center justify-center bg-gray-100 rounded-l-full relative">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold z-10">
                18
              </div>
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-100 font-medium text-gray-900">
              19
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-100 font-medium text-gray-900">
              20
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-100 font-medium text-gray-900">
              21
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-100 font-medium text-gray-900">
              22
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-100 rounded-r-full relative">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold z-10">
                23
              </div>
            </div>
            <div className="h-10 flex items-center justify-center font-medium">24</div>

            <div className="h-10 flex items-center justify-center font-medium">25</div>
            <div className="h-10 flex items-center justify-center font-medium">26</div>
            <div className="h-10 flex items-center justify-center font-medium">27</div>
            <div className="h-10 flex items-center justify-center font-medium">28</div>
            <div className="h-10 flex items-center justify-center font-medium">29</div>
            <div className="h-10 flex items-center justify-center font-medium">30</div>
            <div className="h-10 flex items-center justify-center font-medium">31</div>
          </div>
        </div>

        {/* November 2026 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="w-7" /> {/* Spacer */}
            <span className="font-semibold text-base text-gray-900">November 2026</span>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors" aria-label="Next month">
              <ChevronRight size={18} className="text-gray-900" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-3">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          <div className="grid grid-cols-7 text-center text-sm items-center">
            {/* 1st of Nov 2026 is Sunday */}
            <div className="h-10 flex items-center justify-center font-medium">1</div>
            <div className="h-10 flex items-center justify-center font-medium">2</div>
            <div className="h-10 flex items-center justify-center font-medium">3</div>
            <div className="h-10 flex items-center justify-center font-medium">4</div>
            <div className="h-10 flex items-center justify-center font-medium">5</div>
            <div className="h-10 flex items-center justify-center font-medium">6</div>
            <div className="h-10 flex items-center justify-center font-medium">7</div>

            <div className="h-10 flex items-center justify-center font-medium">8</div>
            <div className="h-10 flex items-center justify-center font-medium">9</div>
            <div className="h-10 flex items-center justify-center font-medium">10</div>
            <div className="h-10 flex items-center justify-center font-medium">11</div>
            <div className="h-10 flex items-center justify-center font-medium">12</div>
            <div className="h-10 flex items-center justify-center font-medium">13</div>
            <div className="h-10 flex items-center justify-center font-medium">14</div>

            <div className="h-10 flex items-center justify-center font-medium">15</div>
            <div className="h-10 flex items-center justify-center font-medium">16</div>
            <div className="h-10 flex items-center justify-center font-medium">17</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">18</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">19</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">20</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">21</div>

            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">22</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">23</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">24</div>
            <div className="h-10 flex items-center justify-center font-medium">25</div>
            <div className="h-10 flex items-center justify-center font-medium">26</div>
            <div className="h-10 flex items-center justify-center font-medium">27</div>
            <div className="h-10 flex items-center justify-center font-medium">28</div>

            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">29</div>
            <div className="h-10 flex items-center justify-center text-gray-300 font-medium">30</div>
          </div>
        </div>
      </div>

      {/* Footer Controls: Keyboard Icon Left & Clear dates Right */}
      <div className="flex justify-between items-center mt-6 max-w-[640px]">
        <button className="p-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors" aria-label="Keyboard shortcuts">
          <Keyboard size={16} />
        </button>
        <button className="underline font-semibold text-sm text-gray-900 hover:text-black">
          Clear dates
        </button>
      </div>
    </div>
  );
}
