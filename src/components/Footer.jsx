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
    <footer className="relative border-t border-amber-500/20 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Follow Us (CENTERED) */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-amber-500 font-orbitron font-bold text-xs uppercase tracking-[0.3em]">
            Connect With Us
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
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg backdrop-blur-md bg-white/5 border border-white/10
                             flex items-center justify-center text-gray-400
                             hover:text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider - Solar Gradient Style */}
        <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        {/* Footer Text */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-500 font-rajdhani text-sm tracking-widest uppercase">
            © IMPETUS 26.0
          </p>

          <p className="text-gray-400 font-rajdhani text-sm">
            Developed by{" "}
            <span className="text-amber-500 font-bold tracking-wider">
              Software Development SIG
            </span>
          </p>

          {/* Names */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 text-white font-orbitron font-bold text-[11px] sm:text-xs tracking-widest">
            <a
              href="https://www.linkedin.com/in/dhruv-rathi-399378282/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-200 cursor-pointer uppercase"
            >
              Dhruv Rathi
            </a>

            <a
              href="https://www.linkedin.com/in/lahari-priya-n/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-200 cursor-pointer uppercase"
            >
              Lahari Priya N
            </a>

            <a
              href="https://www.linkedin.com/in/rahita-puthran-1262202a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-200 cursor-pointer uppercase"
            >
              Rahita H Puthran
            </a>
          </div>

          <p className="text-amber-500/40 font-rajdhani text-[10px] uppercase tracking-[0.4em] font-bold">
            Secretaries, SDSIG
          </p>
        </div>
      </div>
    </footer>
  );
};
