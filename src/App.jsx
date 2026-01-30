import React, { useState, useEffect } from "react"; // Fixed: Added imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Component Imports
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Events } from "./sections/Events";

// Helper component to force scroll to top on route change
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="min-h-screen bg-[#020202] text-white selection:bg-amber-500/30">
        {/* 1. Loader Logic */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col min-h-screen"
            >
              {/* 2. Global Navigation */}
              <Navbar />

              {/* 3. Main Content Area */}
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  {/* Fallback for 404s can be added here */}
                </Routes>
              </main>

              {/* 4. Global Utilities */}
              <Footer />
              <Chatbot />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

// Fixed: Explicit Default Export
export default App;
