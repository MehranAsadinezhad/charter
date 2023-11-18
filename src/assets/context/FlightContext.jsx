import React, { createContext, useState } from "react";

const FlightContext = createContext();

export default function FlightProvider({ children }) {
  const [availFlights, setAvailFlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchFlight, setSearchFlight] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [secondsRemaining, setSecondsRemaining] = useState(900);

  if (loading) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <FlightContext.Provider
      value={{
        availFlights,
        setAvailFlights,
        loading,
        setLoading,
        selectedFlight,
        setSelectedFlight,
        secondsRemaining,
        setSecondsRemaining,
        setSearchFlight,
        searchFlight,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
export { FlightContext };
