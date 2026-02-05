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
      {/* 🌌 STAR BACKGROUND */}
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

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black text-white uppercase mb-6">
            Contact{" "}
            <span className="bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>

        {/* Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {teamContacts.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-amber-500/50 transition"
            >
              <h3 className="text-lg font-orbitron font-bold text-white">
                {person.name}
              </h3>
              <p className="text-sm text-amber-500 font-bold uppercase mb-6">
                {person.role}
              </p>

              <div className="space-y-4 text-gray-400 text-sm">
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="flex justify-center gap-2 hover:text-amber-400"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  {person.phone}
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex justify-center gap-2 hover:text-amber-400 truncate"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  {person.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
          >
            <input
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 bg-black/40 border border-white/10 text-white rounded"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 bg-black/40 border border-white/10 text-white rounded"
            />

            <textarea
              required
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 bg-black/40 border border-white/10 text-white rounded"
            />

            <Button
              disabled={loading}
              className="w-full bg-amber-500 text-black"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* ✅ FIXED MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-white/10"
          >
            <iframe
              title="UVCE Location"
              src="https://www.google.com/maps?q=University+Visvesvaraya+College+of+Engineering,+Bengaluru&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
