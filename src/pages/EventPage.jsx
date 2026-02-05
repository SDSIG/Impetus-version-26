import React, { useEffect } from "react";
import { Events } from "../sections/Events";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Changed h-20 div to pt-20 on the main container
    <main className="min-h-screen bg-[#020202] text-white pt-20">
      <Events />
    </main>
  );
};

export default EventsPage;
