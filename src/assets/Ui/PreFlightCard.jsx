import React, { useContext } from "react";
import { myConfig } from "../../../public/myConfig";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";
import { TbClockShare } from "react-icons/tb";
import { GiRockingChair } from "react-icons/gi";
import { separate } from "../utils/helpers";

export default function PreFlightCard({ flight }) {
  const navigate = useNavigate();
  const { setSelectedFlight, setLoading, availFlights } =
    useContext(FlightContext);

  async function handlePreReserved() {
    try {
      setLoading(true);
      setSelectedFlight(flight);
      const value = {
        flight_key: flight.flight_key,
        search_id: availFlights.search_id,
      };
      const res = await fetch(`${myConfig.api}/pre-reserve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      console.log(data);
      navigate("/passenger/id:");
      return data;
    } catch (err) {
      throw Error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex h-16 items-center justify-end rounded-md bg-white p-1 transition-all duration-200 hover:bg-yellow-50">
      <p className="mx-16 font-iranReg tracking-wide text-green-500">
        {separate(flight.adultPrice)}
      </p>
      <div className="mx-16 flex items-center gap-1 text-darkBlue">
        <p className="font-iranReg">{flight.departureTime}</p>
        <TbClockShare />
      </div>
      <div className="mx-16 flex items-center gap-1 text-darkBlue">
        <p className="font-iranReg">{flight.capacity}</p>
        <GiRockingChair />
      </div>
      <div className="mx-16 flex items-center gap-2">
        <p className="font-iranReg text-darkBlue">{flight.flightNumber}</p>
        <img alt="logoAir" className="w-10" src={flight.airlineLogo}></img>
        <p className="rotate-90 text-sm text-darkBlue">قوانین</p>
      </div>

      <button
        onClick={handlePreReserved}
        className="rounded-md bg-primary px-14 py-2 text-light transition-all duration-200 hover:bg-darkPrimary"
      >
        خرید
      </button>
    </div>
  );
}
