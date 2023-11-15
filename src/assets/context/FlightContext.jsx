import React, { createContext, useState } from "react";

const FlightContext = createContext();

export default function FlightProvider({ children }) {
  const [availFlights, setAvailFlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <FlightContext.Provider
      value={{
        availFlights,
        setAvailFlights,
        loading,
        setLoading,
        selectedFlight,
        setSelectedFlight
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
export { FlightContext };
