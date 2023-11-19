import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";
import { myConfig } from "../../../public/myConfig";
import { useNavigate } from "react-router-dom";

export default function BoxPreCalendar({
  date,
  availDates,
  setCloseCal,
  intCal,
}) {
  const { setLoading, setSearchFlight, searchFlight, setAvailFlights } =
    useContext(FlightContext);
  const navigate = useNavigate();

  const existFlight = availDates?.filter((item) => item[0] === date).length;
  const minExistFlight = availDates
    .map((item) => item.at(1))
    .reduce((acc, item) => (acc < item ? acc : item));
  const findMinExistFlight = availDates
    .filter((item) => item[1] === minExistFlight)
    .flat()[0];

  async function handleNewDate() {
    try {
      console.log(searchFlight);
      setCloseCal(true);
      setLoading(true);
      setSearchFlight({ ...searchFlight, date: date });
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
      setAvailFlights(data);
      navigate("/passenger");
      return data;
    } catch (err) {
      throw Error(err);
    } finally {
      setLoading(false);
      setCloseCal(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center justify-between gap-x-3 gap-y-4 text-xs text-light">
        <p>{new Date(date).toDateString().slice(0, 3)}</p>
        <p className="">
          {new Date(date).getMonth()}/{new Date(date).getDate()}
        </p>
      </div>
      <div
        onClick={handleNewDate}
        className={`flex h-12 w-24 items-center justify-center rounded-lg ${
          findMinExistFlight === date ? "border-b-4 border-green-600" : ""
        } ${
          existFlight > 0
            ? "cursor-pointer transition-all duration-300 hover:scale-110"
            : "pointer-events-none"
        } bg-white`}
      >
        {existFlight > 0 ? (
          <p className="font-iranBold tracking-widest text-darkGray">
            {availDates.filter((item) => item[0] === date).flat()[1]}
          </p>
        ) : (
          <p className="text-sm text-red-500">وجود ندارد</p>
        )}
      </div>
    </div>
  );
}
