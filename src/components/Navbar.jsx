import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Button } from './Button';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Events', path: '/#events' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Sponsors', path: '/#sponsors' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const section = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {scrollDirection === 'up' && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl ${
            scrolled ? 'bg-white/10' : 'bg-white/5'
          } border-b border-white/10 transition-all duration-300`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => navigate('/')}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center">
                  <span className="text-white font-orbitron font-bold text-lg">I</span>
                </div>
                <div>
                  <div className="text-white font-orbitron font-bold text-lg uppercase tracking-wider">
                    IMPETUS 26.0
                  </div>
                  <div className="text-xs text-gray-400 font-space">IEEE UVCE</div>
                </div>
              </motion.div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-300 hover:text-neon-cyan font-space font-medium text-sm uppercase tracking-wide transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Right Section */}
              <div className="hidden md:flex items-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-neon-violet/20 border border-neon-violet/50">
                  <span className="text-xs font-orbitron font-bold text-neon-violet uppercase">
                    March 14-15
                  </span>
                </div>
                <Button onClick={() => window.open('#register', '_self')}>
                  Get All-Access Pass
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-white/10 backdrop-blur-xl bg-white/5"
              >
                <div className="px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left text-gray-300 hover:text-neon-cyan font-space font-medium text-sm uppercase tracking-wide transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <Button className="w-full" onClick={() => window.open('#register', '_self')}>
                      Get All-Access Pass
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
