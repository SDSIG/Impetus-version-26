import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Navigation } from "lucide-react";

const UVCE_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9702221665475!2d77.5841022!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672fcfc3f21%3A0x8979666063d8594e!2sUniversity%20Visvesvaraya%20College%20of%20Engineering%20(UVCE)!5e0!3m2!1sen!2sin!4v1646820000000!5m2!1sen!2sin";
const UVCE_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//University+Visvesvaraya+College+of+Engineering+UVCE+Bangalore";

export const Contact = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const teamContacts = [
    {
      name: "Mohith Monnappa T A",
      role: "Chairperson, IEEE UVCE",
      phone: "+91 63609 65351",
      email: "mohithmonnappa.ta@ieee.org",
    },
    {
      name: "Bharath P Nambiar",
      role: "Vice Chairperson, IEEE UVCE",
      phone: "+91 91089 40867",
      email: "bharathpnambiar@ieee.org",
    },
    {
      name: "Vaishnavi N Mahadev",
      role: "Vice Chairperson, IEEE UVCE",
      phone: "+91 93803 82355",
      email: "vaishnavinm15@ieee.org",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
      {/* STAR LAYERS */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, ${colors.brightGold}, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(1px 1px at 220px 180px, ${colors.richGold}, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.8,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, ${colors.richGold}, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl uppercase"
            style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
          >
            Contact <span style={{ color: colors.brightGold }}>Us</span>
          </h2>
        </motion.div>

        {/* TEAM CONTACTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {teamContacts.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 sm:p-8 text-center bg-[#0a0a0a]"
              style={{
                border: `1px solid ${colors.richGold}33`,
                clipPath:
                  "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
              }}
            >
              <h3
                className="text-lg font-bold mb-1 text-white"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {person.name}
              </h3>

              <p
                className="text-xs tracking-widest mb-5"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  color: colors.richGold,
                }}
              >
                {person.role}
              </p>

              <div
                className="space-y-3 text-sm"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="flex justify-center items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Phone size={14} style={{ color: colors.richGold }} />
                  {person.phone}
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex justify-center items-center gap-2 text-gray-400 hover:text-white transition truncate"
                >
                  <Mail size={14} style={{ color: colors.richGold }} />
                  {person.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section - centered and responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center px-0 sm:px-2"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div
            className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto p-4 sm:p-6 min-w-0"
            style={{
              backgroundColor: "#0a0a0a",
              border: `1px solid ${colors.richGold}33`,
              clipPath:
                "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }}
          >
            <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-6 w-full gap-3">
              <h3
                className="text-2xl sm:text-3xl font-semibold"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  color: "white",
                }}
              >
                Find Us Here
              </h3>
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${colors.richGold}18`,
                  border: `1px solid ${colors.richGold}40`,
                }}
              >
                <Navigation size={24} style={{ color: colors.richGold }} />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border shadow-md aspect-video w-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[360px]">
              <iframe
                title="UVCE Location"
                src={UVCE_MAP_EMBED_URL}
                className="w-full h-full min-h-full border-0 block"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  filter:
                    "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)",
                }}
              />
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href={UVCE_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-8 font-bold uppercase tracking-[0.2em] text-sm rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  backgroundColor: "transparent",
                  color: colors.richGold,
                  borderColor: colors.richGold,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.richGold;
                  e.currentTarget.style.color = colors.royalBlack;
                  e.currentTarget.style.boxShadow = `0 0 12px ${colors.richGold}15`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = colors.richGold;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MapPin size={20} strokeWidth={2} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
