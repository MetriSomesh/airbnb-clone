import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { listingPhotos } from "@/data/referenceListingData";

export function useLightboxNav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalItem = searchParams.get("modalItem");

  useEffect(() => {
    if (!modalItem) return;

    const currentIndex = listingPhotos.findIndex(p => p.id === modalItem);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      } else if (e.key === "ArrowRight") {
        if (currentIndex < listingPhotos.length - 1) {
          const nextId = listingPhotos[currentIndex + 1].id;
          router.replace(`?modalItem=${nextId}`, { scroll: false });
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          const prevId = listingPhotos[currentIndex - 1].id;
          router.replace(`?modalItem=${prevId}`, { scroll: false });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItem, router]);

  return {
    modalItem,
    currentIndex: modalItem ? listingPhotos.findIndex(p => p.id === modalItem) : -1,
    totalPhotos: listingPhotos.length,
    goNext: () => {
      if (!modalItem) return;
      const idx = listingPhotos.findIndex(p => p.id === modalItem);
      if (idx < listingPhotos.length - 1) {
        router.replace(`?modalItem=${listingPhotos[idx + 1].id}`, { scroll: false });
      }
    },
    goPrev: () => {
      if (!modalItem) return;
      const idx = listingPhotos.findIndex(p => p.id === modalItem);
      if (idx > 0) {
        router.replace(`?modalItem=${listingPhotos[idx - 1].id}`, { scroll: false });
      }
    },
    close: () => router.back()
  };
}
