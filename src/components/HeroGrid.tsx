import Image from "next/image";
import Link from "next/link";
import { Grid } from "lucide-react";
import { listingPhotos } from "@/data/referenceListingData";
import { cn } from "@/lib/utils";

export default function HeroGrid() {
  // Take the first 5 photos for the hero section
  const photos = listingPhotos.slice(0, 5);

  if (photos.length < 5) return null;

  return (
    <div className="relative pt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile view: single image or swipeable gallery (keeping it simple with 1 image for now as requested desktop-first) */}
      <div className="md:hidden relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src={photos[0].url}
          alt="Main property view"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <Link
          href="?modal=PHOTO_TOUR_SCROLLABLE"
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-lg text-sm font-medium border border-gray-200 shadow-sm flex items-center gap-2"
        >
          <Grid size={16} /> Show all photos
        </Link>
      </div>

      {/* Desktop view: Asymmetrical grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[380px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden relative">
        {/* Large Left Image (spans 2 columns, 2 rows) */}
        <Link href={`?modal=PHOTO_TOUR_SCROLLABLE#photo-${photos[0].id}`} scroll={false} className="col-span-2 row-span-2 relative overflow-hidden block">
          <Image
            src={photos[0].url}
            alt="Main property view"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
        </Link>

        {/* Small Top-Right 1 */}
        <Link href={`?modal=PHOTO_TOUR_SCROLLABLE#photo-${photos[1].id}`} scroll={false} className="col-span-1 row-span-1 relative overflow-hidden block">
          <Image
            src={photos[1].url}
            alt="Property view 2"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
        </Link>

        {/* Small Top-Right 2 */}
        <Link href={`?modal=PHOTO_TOUR_SCROLLABLE#photo-${photos[2].id}`} scroll={false} className="col-span-1 row-span-1 relative overflow-hidden block rounded-tr-2xl">
          <Image
            src={photos[2].url}
            alt="Property view 3"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
        </Link>

        {/* Small Bottom-Right 1 */}
        <Link href={`?modal=PHOTO_TOUR_SCROLLABLE#photo-${photos[3].id}`} scroll={false} className="col-span-1 row-span-1 relative overflow-hidden block">
          <Image
            src={photos[3].url}
            alt="Property view 4"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
        </Link>

        {/* Small Bottom-Right 2 */}
        <Link href={`?modal=PHOTO_TOUR_SCROLLABLE#photo-${photos[4].id}`} scroll={false} className="col-span-1 row-span-1 relative overflow-hidden block rounded-br-2xl">
          <Image
            src={photos[4].url}
            alt="Property view 5"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
        </Link>

        {/* Floating Button */}
        <Link
          href="?modal=PHOTO_TOUR_SCROLLABLE"
          className="absolute bottom-6 right-6 bg-white px-4 py-1.5 rounded-lg text-sm font-medium border border-gray-800 flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md z-10"
        >
          <Grid size={16} /> Show all photos
        </Link>
      </div>
    </div>
  );
}
