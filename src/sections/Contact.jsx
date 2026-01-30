import { motion } from "framer-motion";
import { Mail, Phone, Send, Zap } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ieeeuvce26@gmail.com",
        },
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 bg-[#020202] overflow-hidden"
    >
      {/* 🌌 SOLAR STAR LAYERS */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fbbf24, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fbbf24, transparent),
            radial-gradient(1px 1px at 220px 180px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-rajdhani font-bold tracking-[0.4em] text-xs uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter mb-6">
            Contact{" "}
            <span className="bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>

        {/* Team Contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {teamContacts.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] group"
            >
              <h3 className="text-lg font-orbitron font-bold text-white mb-1 tracking-tight">
                {person.name}
              </h3>
              <p className="text-sm text-amber-500 font-rajdhani font-bold tracking-widest mb-6 uppercase">
                {person.role}
              </p>

              <div className="flex flex-col gap-4 text-gray-400 text-sm font-rajdhani">
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-3 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  {person.phone}
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center justify-center gap-3 hover:text-amber-400 transition-colors truncate px-2"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span className="truncate">{person.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 transition-all duration-300 hover:border-amber-500/30"
          >
            <div className="space-y-2">
              <label className="block text-xs font-rajdhani font-bold text-amber-500 uppercase tracking-[0.2em]">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-500/50 outline-none transition-colors font-rajdhani"
                placeholder="Full Name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-rajdhani font-bold text-amber-500 uppercase tracking-[0.2em]">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-amber-500/50 outline-none transition-colors font-rajdhani"
                placeholder="your.email@ieee.org"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-rajdhani font-bold text-amber-500 uppercase tracking-[0.2em]">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white resize-none focus:border-amber-500/50 outline-none transition-colors font-rajdhani"
                placeholder="How can we help you?"
              />
            </div>

            <Button
              variant="primary"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              disabled={loading}
            >
              <Send className="w-4 h-4" />
              {loading ? "Transmitting..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition shadow-2xl group"
          >
            <iframe
              title="UVCE Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1671239965b9%3A0xb3531b7829707f50!2sUniversity%20Visvesvaraya%20College%20of%20Engineering%20(UVCE)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[450px] filter grayscale invert-[0.9] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
