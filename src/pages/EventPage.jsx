import React, { useEffect } from "react";
import { TempEvents } from "../sections/TempEvents";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Changed h-20 div to pt-20 on the main container
    <main className="min-h-screen bg-[#020202] text-white pt-20">
      <TempEvents />
    </main>
  );
};

export default EventsPage;
