import { Check, Lightbulb, GraduationCap, Shield, Calendar, Key, ShieldCheck } from "lucide-react";

export default function HostDetails() {
  const coHosts = [
    { name: "Sharath", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Aman Dev Pahwa", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Maria Karen Priyanka", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Simran", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Pallavi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Sanyukta", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80", isInitials: false },
    { name: "Shruti", avatar: "S", isInitials: true, bg: "bg-pink-100 text-pink-500" },
    { name: "Amisha", avatar: "A", isInitials: true, bg: "bg-blue-100 text-blue-500" },
  ];

  return (
    <div className="py-12 border-t border-gray-200 flex flex-col gap-12 text-[#222222]">
      {/* Section 1: Meet your host */}
      <div>
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900 mb-8">
          Meet your host
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
          {/* Left Column: Host Profile Card & Info */}
          <div className="flex flex-col gap-6 max-w-[340px] w-full">
            {/* Host Card with drop shadow and border */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-between">
              {/* Left Side: Avatar + Host Title */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-24 h-24 rounded-full bg-[#1b3b2b] p-1.5 flex items-center justify-center mb-3 shadow-sm">
                  {/* Inner Circular Logo Emblem */}
                  <div className="w-full h-full rounded-full border border-[#c5a363]/40 flex flex-col items-center justify-center p-1 text-center bg-[#183426]">
                    <span className="text-[9px] font-serif tracking-widest text-[#d4af37] font-semibold uppercase leading-tight">
                      Mirashya
                    </span>
                    <span className="text-[7px] font-serif tracking-widest text-[#c5a363] uppercase">
                      Homes
                    </span>
                  </div>
                  {/* Red Checkmark Badge */}
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#e31c5f] rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-gray-900 leading-tight">
                  Mirashya<br />Homes
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Host</p>
              </div>

              {/* Right Side: Metrics Column */}
              <div className="flex flex-col gap-3.5 text-left pl-6 border-l border-gray-100">
                <div>
                  <div className="font-bold text-xl text-gray-900 leading-none">1,463</div>
                  <div className="text-xs text-gray-500 mt-1">Reviews</div>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="font-bold text-xl text-gray-900 leading-none flex items-center gap-0.5">
                    4.68<span className="text-sm">★</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Rating</div>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="font-bold text-xl text-gray-900 leading-none">2</div>
                  <div className="text-xs text-gray-500 mt-1">Years hosting</div>
                </div>
              </div>
            </div>

            {/* Sub-bullets below host card */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-4 text-sm sm:text-[15px] text-gray-800">
                <Lightbulb size={22} className="text-gray-800 shrink-0 stroke-[1.75]" />
                <span>Born in the 80s</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-[15px] text-gray-800">
                <GraduationCap size={22} className="text-gray-800 shrink-0 stroke-[1.75]" />
                <span>Where I went to school: NICMAR GOA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Co-Hosts & Host details */}
          <div className="flex-1 max-w-[620px] flex flex-col gap-8">
            {/* Co-Hosts */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-4">Co-Hosts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
                {coHosts.map((ch, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {ch.isInitials ? (
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm ${ch.bg}`}>
                        {ch.avatar}
                      </div>
                    ) : (
                      <img src={ch.image} alt={ch.name} className="w-9 h-9 rounded-full object-cover" />
                    )}
                    <span className="text-xs sm:text-sm text-gray-800 font-medium truncate">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Details */}
            <div className="pt-2">
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3">Host details</h3>
              <p className="text-sm sm:text-[15px] text-gray-700 mb-1">Response rate: 100%</p>
              <p className="text-sm sm:text-[15px] text-gray-700 mb-6">Responds within an hour</p>
              
              <button className="px-6 py-3 bg-[#f7f7f7] hover:bg-gray-200/80 border border-gray-200 rounded-xl font-semibold text-sm text-gray-900 transition-colors">
                Message host
              </button>
            </div>

            {/* Protection Disclaimer */}
            <div className="flex items-center gap-3 pt-2 text-xs text-gray-500 max-w-[480px]">
              <Shield size={24} className="text-gray-400 shrink-0 stroke-[1.5]" />
              <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Things to know */}
      <div className="pt-8 border-t border-gray-200">
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900 mb-8">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cancellation Policy */}
          <div className="flex flex-col items-start">
            <Calendar size={24} className="text-gray-900 mb-4 stroke-[1.75]" />
            <h3 className="font-semibold text-base text-gray-900 mb-2">Cancellation policy</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-1">
              Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Review this host&apos;s full policy for details.
            </p>
            <button className="font-semibold underline text-sm text-gray-900 hover:text-black mt-auto">
              Learn more
            </button>
          </div>

          {/* House Rules */}
          <div className="flex flex-col items-start">
            <Key size={24} className="text-gray-900 mb-4 stroke-[1.75]" />
            <h3 className="font-semibold text-base text-gray-900 mb-2">House rules</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">Check-in after 2:00 pm</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">Checkout before 11:00 am</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">3 guests maximum</p>
            <button className="font-semibold underline text-sm text-gray-900 hover:text-black mt-auto">
              Learn more
            </button>
          </div>

          {/* Safety & Property */}
          <div className="flex flex-col items-start">
            <ShieldCheck size={24} className="text-gray-900 mb-4 stroke-[1.75]" />
            <h3 className="font-semibold text-base text-gray-900 mb-2">Safety &amp; property</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">Carbon monoxide alarm not reported</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">Smoke alarm not reported</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">Exterior security cameras on property</p>
            <button className="font-semibold underline text-sm text-gray-900 hover:text-black mt-auto">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

