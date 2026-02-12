import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useChatbot } from "../hooks/useChatbot";

const MASCOT_IMAGE = "/images/mascot-impetus.png";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isTyping, sendMessage } = useChatbot();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <>
      {/* FLOATING MASCOT BUTTON */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.08, boxShadow: `0 0 25px ${colors.richGold}66` }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: colors.royalBlack,
          border: `1px solid ${colors.richGold}60`,
          boxShadow: `0 0 15px ${colors.richGold}33`,
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <X style={{ color: colors.brightGold }} />
            </motion.div>
          ) : (
            <motion.img
              key="mascot"
              src={MASCOT_IMAGE}
              alt="MASRO"
              className="w-full h-full object-cover p-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed z-50 bottom-24 left-4 right-4 sm:left-8 sm:right-auto sm:w-96 h-[70vh] sm:h-[540px] rounded-2xl flex flex-col overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: `${colors.royalBlack}F2`, // 95% opacity
              border: `1px solid ${colors.richGold}40`,
              boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
            }}
          >
            {/* HEADER */}
            <div
              className="p-4 flex items-center justify-between border-b"
              style={{ borderColor: `${colors.richGold}20` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-black border overflow-hidden"
                  style={{ borderColor: `${colors.richGold}30` }}
                >
                  <img
                    src={MASCOT_IMAGE}
                    alt="MASRO"
                    className="w-full h-full p-1"
                  />
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-xs uppercase tracking-[0.25em]"
                    style={{ fontFamily: "'DaggerSquare', sans-serif" }}
                  >
                    MASRO
                  </h3>

                  <p
                    className="text-[10px] uppercase tracking-wide"
                    style={{
                      color: colors.richGold,
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    IMPETUS AI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ color: colors.richGold }}
              >
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-rajdhani">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-xl text-base leading-relaxed ${
                      m.sender === "user" ? "" : "border"
                    }`}
                    style={{
                      backgroundColor:
                        m.sender === "user"
                          ? colors.richGold
                          : "rgba(255,255,255,0.03)",
                      color:
                        m.sender === "user" ? colors.royalBlack : "#E5E7EB",
                      borderColor:
                        m.sender === "user"
                          ? "transparent"
                          : `${colors.richGold}20`,
                      fontWeight: m.sender === "user" ? "700" : "400",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div
                    className="flex gap-1 px-3 py-2 rounded-xl border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      borderColor: `${colors.richGold}20`,
                    }}
                  >
                    {[0, 0.2, 0.4].map((d, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.richGold }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div
              className="p-4 border-t"
              style={{ borderColor: `${colors.richGold}20` }}
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Query System..."
                  className="w-full px-4 py-3 pr-12 bg-black border text-white text-sm rounded-xl focus:outline-none transition-all placeholder:opacity-30"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    borderColor: `${colors.richGold}30`,
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-all"
                  style={{ color: colors.richGold }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
