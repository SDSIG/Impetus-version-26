import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const isEventsPage = location.pathname === "/events";

  useEffect(() => {
    const toggleVisibility = () => {
      // Simple logic: show if scrolled > 300px and not on events page
      setIsVisible(window.pageYOffset > 300 && !isEventsPage);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isEventsPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          whileHover={{
            borderColor: colors.brightGold,
            backgroundColor: "#0a0a0a",
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 border backdrop-blur-sm"
          style={{
            backgroundColor: colors.royalBlack,
            borderColor: `${colors.richGold}40`,
            color: colors.richGold,
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
