import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { Chatbot } from "./components/Chatbot";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { TempEvents } from "./sections/TempEvents";
import { pageview } from "./utils/analytics";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    pageview(pathname);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
  };

  return (
    <Router>
      <ScrollToTopOnMount />
      <div
        className="min-h-screen text-white selection:bg-[#D4AF37]/30 selection:text-[#F9D976]"
        style={{ backgroundColor: colors.royalBlack }}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col min-h-screen"
            >
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<TempEvents />} />
                </Routes>
              </main>

              <Footer />
              {/* <Chatbot /> */}
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
