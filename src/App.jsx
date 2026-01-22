import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { EventDetails } from './pages/EventDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-base text-white">
        <Loader onComplete={handleLoaderComplete} />
        <AnimatePresence>
          {!isLoading && (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetails />} />
              </Routes>
              <Footer />
              <Chatbot />
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
