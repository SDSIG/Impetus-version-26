import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">I</span>
              </div>
              <div>
                <div className="text-white font-orbitron font-bold text-lg uppercase tracking-wider">
                  IMPETUS 26.0
                </div>
                <div className="text-xs text-gray-400 font-space">IEEE UVCE</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-space">
              Engineering Tomorrow. Celebrating 26 years of technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Events', 'Gallery', 'Sponsors', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan font-space text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 font-space text-sm">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <a href="mailto:impetus@ieeeuvce.org" className="hover:text-neon-cyan transition-colors">
                  impetus@ieeeuvce.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-space text-sm">
                <Phone className="w-4 h-4 text-neon-violet" />
                <a href="tel:+919876543210" className="hover:text-neon-violet transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-space text-sm">
                <MapPin className="w-4 h-4 text-neon-green mt-1" />
                <span>UVCE, Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 font-space text-sm">
            © 2024 IMPETUS 26.0 - IEEE UVCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
