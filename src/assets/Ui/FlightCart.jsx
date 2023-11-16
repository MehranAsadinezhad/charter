import React, { useContext } from "react";
import FlightIcon from "./FlightIcon";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";
import { config } from "localforage";

export default function FlightCart({ flight }) {
  const navigate = useNavigate();
  const { setSelectedFlight, setLoading } = useContext(FlightContext);

  async function handlePreReserved() {
    try {
      // setLoading(true);
      setSelectedFlight(flight);
      // const value = {
      //   flight_key: flight.id,
      //   search_id: 1,
      // };
      // const res = await fetch(`${config.api}/pre-reserve`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(value),
      // });
      // const data = await res.json();
      // console.log(data);
      navigate("/passenger/id:");
      // return data;
    } catch (err) {
      throw Error(err);
    // } finally {
    //   setLoading(false);
    // }
    }
  }
  return (
    <div className="flex h-[140px] w-full rounded-lg bg-white ring-1 ring-gray-300">
      <div className="flex h-full w-3/4 gap-5 pb-2 pr-2 pt-2">
        <div className="flex flex-col items-center justify-between gap-1">
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-16"
              src={flight.airlineLogo}
              alt={flight.id}
            ></img>
            <p>{flight.airelineNamePersian}</p>
          </div>
          <a href="c#" className="tracking-wide text-primary">
            اطلاعات پرواز
          </a>
        </div>

        <div className="mt-3 flex flex-col gap-5">
          <div className="flex items-center gap-3 ">
            <p className="rounded-xl bg-light px-2 text-sm">سیستمی</p>
            <p className="rounded-xl bg-light px-2 text-sm">اکونومی</p>
            <p className="rounded-xl bg-light px-2 text-sm">Fokker 100</p>
          </div>
          <div className="flex items-center">
            <p className="ml-5">
              {flight.fromFa}{" "}
              <span className="mx-2 text-lg font-bold">22:55</span>
            </p>
            <FlightIcon />
            <p className="mr-5">
              {flight.toFa}{" "}
              <span className="mx-2 text-lg font-bold">10:00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center gap-1 border-r-2 border-gray-200">
        <p className="text-xl font-extrabold tracking-wide text-primary">
          {flight.adultPrice}
          <span className="mr-1 text-sm text-gray-500">ریال</span>
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
        <p className="text-red-500">{flight.capacity} صندلی باقی مانده</p>
      </div>
    </div>
  );
}
