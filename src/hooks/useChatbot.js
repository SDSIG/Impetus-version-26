import { useState, useCallback } from "react";

export const useChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I’m MASCOT, your IMPETUS event assistant.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: text })
        }
      );

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.answer || "I couldn’t understand that.",
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 2,
          text: "⚠️ Server not reachable. Please try again later.",
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! 👋 I’m MASCOT, your IMPETUS event assistant.",
        sender: "bot",
        timestamp: new Date()
      }
    ]);
  };

  return { messages, isTyping, sendMessage, clearChat };
};
