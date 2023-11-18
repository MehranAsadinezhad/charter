import React, { useContext, useEffect } from "react";
import { FlightContext } from "../context/FlightContext";

export default function Timer() {
  const { setSecondsRemaining, secondsRemaining } = useContext(FlightContext);
  useEffect(() => {
    const time = setInterval(() => {
      setSecondsRemaining(() => secondsRemaining - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [secondsRemaining, setSecondsRemaining]);

  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  return (
    <div className="relative flex flex-row-reverse items-center justify-center gap-1 bg-gray-100 p-2 font-iranBold text-primary">
      <p className="">{min < 10 && 0}</p>
      <p className="">{min}</p>:<p className="">{sec < 10 && 0}</p>
      <p className="">{sec}</p>
    </div>
  );
}
