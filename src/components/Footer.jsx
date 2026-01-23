/*import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ieeeuvce', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ieeeuvce', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ieee-uvce-66563332/', label: 'LinkedIn' },
    { icon: Mail, href: 'ieeeuvce26@gmail.com', label: 'Gmail' },
    { icon: Twitter, href: 'https://x.com/ieeeuvce?s=21', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCt9I0q7BzuuRBcJKvMcdpow', label: 'YouTube' }
   ];

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        
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
              FutureTech: Engineering Tomorrow. Celebrating 26 years of technical excellence.
            </p>
          </div>

        
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

        
          <div>
            <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 font-space text-sm">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <a href="mailto:impetus@ieeeuvce.org" className="hover:text-neon-cyan transition-colors">
                  impetus.ieeeuvce@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-space text-sm">
                <Phone className="w-4 h-4 text-neon-violet" />
                <a href="tel:+919876543210" className="hover:text-neon-violet transition-colors">
                  +91 63609 65351
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-space text-sm">
                <MapPin className="w-4 h-4 text-neon-green mt-1" />
                <span>UVCE, Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>

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
            © 2026 IMPETUS 26.0 - IEEE UVCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
*/

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/ieeeuvce",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ieeeuvce",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ieee-uvce-66563332/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:ieeeuvce26@gmail.com", label: "Gmail" },
    { icon: Twitter, href: "https://x.com/ieeeuvce?s=21", label: "Twitter" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCt9I0q7BzuuRBcJKvMcdpow",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Follow Us (CENTERED) */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-wider">
            Follow Us
          </h3>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10
                             flex items-center justify-center text-gray-400
                             hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Footer Text */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-gray-400 font-space text-sm">
            © IMPETUS 26.0 — All rights reserved
          </p>

          <p className="text-gray-400 font-space text-sm">
            Developed by{" "}
            <span className="text-neon-cyan font-semibold">
              Software Development SIG
            </span>
          </p>

          {/* Names */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-white font-orbitron font-bold text-sm">
            <span>Dhruv Rathi</span>
            <span>Lahari Priya N</span>
            <span>Rahita H Puthran</span>
          </div>

          <p className="text-gray-400 font-space text-xs uppercase tracking-widest">
            Secretories, SDSIG
          </p>
        </div>
      </div>
    </footer>
  );
};

