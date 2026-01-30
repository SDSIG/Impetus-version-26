import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "../hooks/useScrollDirection";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Sponsors", path: "/#sponsors" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith("/#")) {
      const section = path.substring(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
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
    <AnimatePresence>
      {(scrollDirection === "up" || !scrolled) && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-[50] backdrop-blur-xl transition-colors duration-300 ${
            scrolled
              ? "bg-black/80 border-b border-amber-500/20"
              : "bg-transparent border-b border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* BRAND LOGO */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer flex-shrink-0"
                onClick={() => navigate("/")}
              >
                <img
                  src="/images/logo.png"
                  alt="IMPETUS Logo"
                  className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                />
              </motion.div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-300 hover:text-amber-400 font-rajdhani font-semibold text-sm uppercase tracking-widest transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Toggle Only */}
              <div className="flex items-center md:hidden">
                <button
                  className="text-amber-500 p-1"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-amber-500/20 bg-black/95 backdrop-blur-2xl"
              >
                <div className="px-6 py-8 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left text-gray-200 hover:text-amber-500 font-rajdhani font-bold text-lg uppercase tracking-widest py-2 border-b border-white/5"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
