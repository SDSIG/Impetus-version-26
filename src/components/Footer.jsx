import { motion } from "framer-motion";
import {
  Code,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ieeeuvce",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ieee-uvce-66563332/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ieeeuvce",
      icon: Facebook,
    },
    { name: "Email", url: "mailto:ieeeuvce.ac.in", icon: Mail },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCt9I0q7BzuuRBcJKvMcdpow",
      icon: Youtube,
    },
  ];

  const developers = [
    {
      name: "Dhruv Rathi",
      url: "https://www.linkedin.com/in/dhruv-rathi-399378282/",
    },
    {
      name: "Lahari Priya N",
      url: "https://www.linkedin.com/in/lahari-priya-n/",
    },
    {
      name: "Rahita H Puthran",
      url: "https://www.linkedin.com/in/rahita-puthran-1262202a5/",
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
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        {/* Main row: Developed by + developers on left, social icons on right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left – Developer credit */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
            <div className="flex items-center gap-3 text-base sm:text-lg lg:text-xl">
              <Code size={20} style={{ color: colors.richGold }} />
              <span className="font-medium text-white/90">Developed by</span>
              <span
                className="tracking-widest"
                style={{
                  fontFamily: "'DaggerSquare', sans-serif",
                  color: "white",
                }}
              >
                Software Development SIG
              </span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 text-sm sm:text-base">
              {developers.map((dev, idx) => (
                <span key={dev.name} className="flex items-center gap-x-3">
                  <a
                    href={dev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:underline"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      color: colors.richGold,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = colors.brightGold;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = colors.richGold;
                    }}
                  >
                    {dev.name}
                  </a>
                  {idx < developers.length - 1 && (
                    <span
                      className="opacity-50"
                      style={{ color: colors.richGold }}
                    >
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right – Social icons */}
          <div className="flex justify-center sm:justify-end">
            <div className="flex gap-4 sm:gap-5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
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
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Thematic divider */}
        {/* <div
          className="mt-6 h-[1px] w-full"
          style={{
            background: `linear-gradient(to right, transparent, ${colors.richGold}40, transparent)`,
          }}
        /> */}

        {/* Branding & bottom line */}
        {/* <div className="mt-6 text-center space-y-2">
          <p
            className="text-lg tracking-[0.3em] font-bold"
            style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
          >
            © IMPETUS <span style={{ color: colors.richGold }}>26.0</span>
          </p>
          <p
            className="font-rajdhani text-[10px] uppercase tracking-[0.5em] font-bold opacity-40"
            style={{ color: colors.richGold }}
          >
            Secretaries, SDSIG
          </p>
        </div> */}
      </div>
    </footer>
  );
};
