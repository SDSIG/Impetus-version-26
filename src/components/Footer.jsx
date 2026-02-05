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
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

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
    <footer
      className="relative border-t backdrop-blur-xl"
      style={{
        backgroundColor: `${colors.royalBlack}E6`,
        borderColor: `${colors.richGold}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Connect Section */}
        <div className="flex flex-col items-center gap-6">
          <h3
            className="font-bold text-xs uppercase tracking-[0.4em]"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: colors.richGold,
            }}
          >
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: `1px solid ${colors.richGold}40`,
                    backgroundColor: "rgba(255,255,255,0.03)",
                    color: colors.richGold,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors.brightGold;
                    e.currentTarget.style.color = colors.brightGold;
                    e.currentTarget.style.boxShadow = `0 0 15px ${colors.richGold}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = `${colors.richGold}40`;
                    e.currentTarget.style.color = colors.richGold;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Thematic Divider */}
        <div
          className="mt-10 h-[1px] w-full"
          style={{
            background: `linear-gradient(to right, transparent, ${colors.richGold}40, transparent)`,
          }}
        />

        {/* Branding & Credits */}
        <div className="mt-10 text-center space-y-6">
          <p
            className="text-lg tracking-[0.3em] font-bold"
            style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
          >
            © IMPETUS <span style={{ color: colors.richGold }}>26.0</span>
          </p>

          <div className="space-y-2">
            <p className="font-rajdhani text-sm text-gray-400 tracking-widest uppercase">
              Developed by{" "}
              <span style={{ color: colors.richGold }} className="font-bold">
                Software Development SIG
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 text-[11px] sm:text-xs tracking-widest font-bold uppercase"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {[
                {
                  name: "Dhruv Rathi",
                  link: "https://www.linkedin.com/in/dhruv-rathi-399378282/",
                },
                {
                  name: "Lahari Priya N",
                  link: "https://www.linkedin.com/in/lahari-priya-n/",
                },
                {
                  name: "Rahita H Puthran",
                  link: "https://www.linkedin.com/in/rahita-puthran-1262202a5/",
                },
              ].map((dev) => (
                <a
                  key={dev.name}
                  href={dev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#F9D976] transition-colors duration-300"
                >
                  {dev.name}
                </a>
              ))}
            </div>
          </div>

          <p
            className="font-rajdhani text-[10px] uppercase tracking-[0.5em] font-bold opacity-40"
            style={{ color: colors.richGold }}
          >
            Secretaries, SDSIG
          </p>
        </div>
      </div>
    </footer>
  );
};
