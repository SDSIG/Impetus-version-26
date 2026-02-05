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
      {/* FLOATING MASCOT BUTTON (UNCHANGED BEHAVIOR) */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 left-6 z-50
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full bg-black border border-yellow-400/40
          flex items-center justify-center overflow-hidden
          shadow-[0_0_20px_rgba(253,224,71,0.35)]
        "
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <X className="text-yellow-400" />
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
            className="
              fixed z-50 bottom-24 left-4 right-4
              sm:left-8 sm:right-auto sm:w-96
              h-[70vh] sm:h-[540px]
              bg-[#0b0b0b]
              border border-yellow-400/30
              rounded-2xl
              shadow-[0_20px_40px_rgba(0,0,0,0.6)]
              flex flex-col overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="p-4 border-b border-yellow-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black border border-yellow-400/30 overflow-hidden">
                  <img
                    src={MASCOT_IMAGE}
                    alt="MASRO"
                    className="w-full h-full p-1"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-widest">
                    MASRO
                  </h3>
                  <p className="text-[10px] text-yellow-400 uppercase">
                    IMPETUS AI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow-400"
              >
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-yellow-400 text-black font-medium"
                        : "bg-white/5 border border-white/10 text-gray-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
                    {[0, 0.2, 0.4].map((d, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
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
            <div className="p-4 border-t border-yellow-400/20">
              <div className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about IMPETUS..."
                  className="
                    w-full px-4 py-3 pr-12
                    bg-black border border-white/10
                    text-white text-sm rounded-xl
                    placeholder-gray-500
                    focus:outline-none focus:border-yellow-400/50
                  "
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2
                    text-yellow-400 hover:text-yellow-300
                    disabled:opacity-30
                  "
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
