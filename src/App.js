import React from "react";
import CountdownTimer from "./CountdownTimer";

import "./App.css";

export default function App() {

  const newYears = "Jan 1, 2025 00:00:00";

  return (
    <div>
      <CountdownTimer targetDate={newYears} />
    </div>
  );
}
