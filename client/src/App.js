//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";

import MainPage from "./pages/MainPage";

const App = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");

      if (res.ok) {
        setEvents(await res.json());
      }
    };

    fetchEvents();
  }, []);

  return <MainPage events={events} />;
};

export default App;
