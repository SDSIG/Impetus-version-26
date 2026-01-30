import React, { useEffect } from "react";
import { Events } from "../sections/Events";

const EventsPage = () => {
  // Ensure we start at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      {/* Spacer to prevent Navbar overlap */}
      <div className="h-20" />
      <Events />
    </main>
  );
};

export default EventsPage;
