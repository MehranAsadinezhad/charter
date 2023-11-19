import React, { useContext } from "react";
import FlightIcon from "./FlightIcon";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";
import { separate } from "../utils/helpers";
import { myConfig } from "../../../public/myConfig";

export default function FlightCart({ flight }) {
  const navigate = useNavigate();
  const { setSelectedFlight, setLoading, availFlights } = useContext(FlightContext);

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
          "Accept": "application/json",
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
    <div className="flex h-[140px] w-full rounded-lg bg-white ring-1 ring-gray-300">
      <div className="flex h-full w-3/4 gap-5 pb-2 pr-4 pt-2">
        <div className="flex flex-col items-center justify-between gap-1">
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-16"
              src={flight.airlineLogo}
              alt={flight.id}
            ></img>
            <p>{flight.airelineNamePersian}</p>
          </div>
          <a href="c#" className="text-sm tracking-wide text-primary">
            اطلاعات پرواز
          </a>
        </div>

        <div className="mt-3 flex flex-col gap-5">
          <div className="flex items-center gap-3 ">
            <p className="rounded-xl bg-light px-2 text-sm">
              {flight.cobinPersian}
            </p>
          </div>
          <div className="flex items-center">
            <p className="ml-5">
              {flight.fromFa}{" "}
              <span className="mx-2 text-lg font-bold">
                {flight.departureTime}
              </span>
            </p>
            <FlightIcon />
            <p className="mr-5">
              {flight.toFa}{" "}
              <span className="mx-2 text-lg font-bold">
                {flight.arrivalTime}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center gap-2 border-r-2 border-gray-200">
        <p className="font-iranBold text-xl tracking-wide text-primary">
          {separate(flight.adultPrice)}
          <span className="mr-1 text-xs text-gray-500">
            {flight.currencyTitle}
          </span>
        </p>
        <h1 className="text-sm font-semibold text-darkGray">
          نرخ رسمی ایرلاین
        </h1>
        <button
          onClick={handlePreReserved}
          className="rounded-lg bg-primary px-10 py-1 text-light transition-all duration-200 hover:bg-darkestPrimary"
        >
          انتخاب پرواز
        </button>
        {flight.capacity < 10 && (
          <p className="text-sm text-red-500">
            {flight.capacity} صندلی باقی مانده
          </p>
        )}
      </div>
    </div>
  );
}
