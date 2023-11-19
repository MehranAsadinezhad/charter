import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";
import { useNavigate } from "react-router-dom";
import {myConfig} from "../../../public/myConfig"

export default function PassengerCalendar({ date, availDates }) {
  const { setLoading, setSearchFlight, searchFlight, setAvailFlights } =
    useContext(FlightContext);
  const navigate = useNavigate();

  async function handleNewAvail(newDate) {
    const checkDate = availDates
      .map((item) => item[0])
      .filter((c) => c === date);
    if (!checkDate.length > 0) return;

    try {
      console.log(searchFlight);
      setLoading(true);
      setSearchFlight({ ...searchFlight, date: newDate });
      console.log(searchFlight);
      const res = await fetch(`${myConfig.api}/avail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(searchFlight),
      });
      const data = await res.json();
      console.log(data);
      setAvailFlights(data);
      navigate("/passenger");
      return data;
    } catch (err) {
      throw Error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <li
      onClick={()=>handleNewAvail(date)}
      className="flex cursor-pointer flex-col border-l-2 border-gray-300 p-1 text-center duration-200 hover:bg-purple-50"
    >
      <div className="flex w-32 flex-col items-center justify-between gap-1">
        <p className="text-center text-gray-400">{date}</p>
        {availDates?.filter((item) => item[0] === date).length > 0 ? (
          <p className="font-iranBold text-lg font-semibold tracking-widest text-green-700">
            {availDates.filter((item) => item[0] === date).flat()[1]}
          </p>
        ) : (
          <p className="text-red-600">وجود ندارد</p>
        )}
      </div>
    </li>
  );
}
