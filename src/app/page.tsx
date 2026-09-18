import { Suspense } from "react";
import GlobalHeader from "@/components/GlobalHeader";
import HeroGrid from "@/components/HeroGrid";
import StickySubNav from "@/components/StickySubNav";
import ListingDetails from "@/components/ListingDetails";
import HostDetails from "@/components/HostDetails";
import DualCalendar from "@/components/DualCalendar";
import NeighborhoodMap from "@/components/NeighborhoodMap";
import BookingWidget from "@/components/BookingWidget";
import ReviewsSection from "@/components/ReviewsSection";
import NearbyStaysCarousel from "@/components/NearbyStaysCarousel";
import PhotoTourModal from "@/components/PhotoTourModal";
import Lightbox from "@/components/Lightbox";
import WishlistToast from "@/components/WishlistToast";
import ListingActions from "@/components/ListingActions";
import { referenceListingData } from "@/data/referenceListingData";

export default function Home() {
  return (
    <>
      <GlobalHeader />
      
      <main className="pb-24">
        {/* Title & Actions Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h1 className="text-[26px] md:text-[28px] font-semibold text-gray-900">{referenceListingData.title}</h1>
          <ListingActions />
        </div>

        <HeroGrid />
        
        <StickySubNav />

        {/* Main 2-Column Content Grid (Listing Details + Calendar on Left, Sticky Booking Widget on Right) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex flex-col lg:flex-row gap-12 relative items-start">
            
            {/* Left Column (Listing Details & Calendar) */}
            <div className="w-full lg:w-[65%]">
              <div id="photos">
                <ListingDetails />
              </div>
              
              <div id="calendar">
                <DualCalendar />
              </div>
            </div>

            {/* Right Column (Sticky Booking Widget) */}
            <div className="w-full lg:w-[35%] sticky top-28 self-start">
              <BookingWidget />
            </div>

          </div>
        </div>

        {/* Full-width Reviews Section (Below Calendar & Booking Widget) */}
        <div id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsSection />
        </div>

        {/* Location Map Section */}
        <div id="location" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <NeighborhoodMap />
        </div>

        {/* Host Details Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <HostDetails />
        </div>

        {/* Full-width Carousel Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <NearbyStaysCarousel />
        </div>
      </main>

      {/* Modals will be rendered here dynamically based on searchParams */}
      <Suspense fallback={null}>
        <PhotoTourModal />
        <Lightbox />
      </Suspense>

      <WishlistToast />
    </>
  );
}
