import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom"; // Add this import

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Hook to get current path

  // Check if we are on the events page
  const isEventsPage = location.pathname === "/events";

  const toggleVisibility = () => {
    // Only show if we are NOT on the events page AND scrolled down
    if (window.pageYOffset > 300 && !isEventsPage) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [location.pathname]); // Re-run effect when path changes

  return (
    <AnimatePresence>
      {/* Button only renders if isVisible is true. 
          isVisible can only be true if isEventsPage is false. 
      */}
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12
            sm:w-16 sm:h-16
            rounded-full
            bg-black
            border border-[rgba(253,224,71,0.6)]
            shadow-[0_0_12px_rgba(253,224,71,0.4)]
            flex items-center justify-center
            text-white
            hover:shadow-[0_0_32px_rgba(253,224,71,0.9)]
            hover:border-[rgba(253,224,71,0.9)]
            transition-all duration-300
          "
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
