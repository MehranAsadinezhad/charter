import React, { createContext, useState } from "react";

const FlightContext = createContext();

export default function FlightProvider({ children }) {
  const [availFlights, setAvailFlights] = useState(null);
  return (
    <FlightContext.Provider value={{ availFlights, setAvailFlights }}>
      {children}
    </FlightContext.Provider>
  );
}
export { FlightContext };
