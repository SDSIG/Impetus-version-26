import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/#gallery" },
    // { name: "Sponsors", path: "/#sponsors" },
    { name: "Contact", path: "/#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (path) => {
    if (path === "/") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToTop, 100);
      } else {
        scrollToTop();
      }
      setIsOpen(false);
      return;
    }

    if (path.startsWith("/#")) {
      const section = path.slice(2);

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[50] backdrop-blur-xl transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `${colors.royalBlack}CC` : "transparent",
        borderBottom: scrolled
          ? `1px solid ${colors.richGold}33`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <img
              src="/images/logo.png"
              alt="IEEE Logo"
              className="h-12 w-auto"
              style={{
                filter: `drop-shadow(0 0 12px ${colors.richGold}40)`,
              }}
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="tracking-widest font-rajdhani font-bold text-xs sm:text-[13px] transition-colors duration-300"
                style={{ color: "#D1D5DB" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = colors.richGold)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "#D1D5DB")}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              style={{ color: colors.richGold }}
              onClick={() => setIsOpen((p) => !p)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t"
            style={{
              backgroundColor: colors.royalBlack,
              borderColor: `${colors.richGold}33`,
            }}
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full text-left font-rajdhani font-bold tracking-widest py-1 border-b transition-colors"
                  style={{
                    color: "#E5E7EB",
                    borderBottomColor: "rgba(255,255,255,0.05)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = colors.richGold)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = "#E5E7EB")}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
