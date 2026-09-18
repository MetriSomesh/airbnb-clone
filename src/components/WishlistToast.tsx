"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleShowToast = (e: Event) => {
      const customEvent = e as CustomEvent;
      setMessage(customEvent.detail || "Saved to wishlist");
      setIsVisible(true);

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("show-toast", handleShowToast);
    return () => {
      window.removeEventListener("show-toast", handleShowToast);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-xl shadow-2xl z-50 text-sm font-medium flex items-center gap-2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

