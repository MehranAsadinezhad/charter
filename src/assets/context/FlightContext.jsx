import React, { createContext, useState } from "react";

const FlightContext = createContext();

export default function FlightProvider({ children }) {
  const [availFlights, setAvailFlights] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <FlightContext.Provider
      value={{
        availFlights,
        setAvailFlights,
        loading,
        setLoading,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
export { FlightContext };
