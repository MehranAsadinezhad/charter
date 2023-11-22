import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";

export default function Loader() {
  const { loading } = useContext(FlightContext);
  if (loading) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="absolute inset-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-y-hidden bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
