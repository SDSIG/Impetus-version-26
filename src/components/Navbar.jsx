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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <AnimatePresence>
      {(scrollDirection === "up" || !scrolled || isOpen) && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-[50] backdrop-blur-xl ${
            scrolled
              ? "bg-black/80 border-b border-amber-500/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* LOGO */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="IMPETUS Logo"
                  className="h-12 w-auto"
                />
              </motion.div>

              {/* Desktop */}
              <div className="hidden md:flex gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-300 hover:text-amber-400 uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Toggle */}
              <div className="md:hidden">
                <button
                  className="text-amber-500"
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
                className="md:hidden bg-black/95 border-t border-amber-500/20"
              >
                <div className="px-6 py-8 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onTouchStart={() => handleNavClick(item.path)}
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left text-gray-200 hover:text-amber-500 font-bold uppercase tracking-widest py-2 border-b border-white/10"
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
