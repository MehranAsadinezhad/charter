import React, { useContext, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";

export default function SearchBar() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setAvailFlights } = useContext(FlightContext);

  async function handleSubmit(e) {
    try {
      setLoading(true);
      e.preventDefault();
      if (!departure || !arrival || !date) return;
      const newOrder = { origin: departure, destination: arrival, date: date };
      const res = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });
      const { data } = await res.json();
      setLoading(true);
      setAvailFlights(data);
      navigate("/Passenger");
      return data;
    } catch (err) {
      throw Error(err);
    }
  }

  return (
    <div className="relative bottom-28 z-50 flex flex-col items-center justify-center">
      <div className="absolute ml-[114px] flex items-center gap-3">
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay px-3 pb-3 pt-2 text-xl  text-primary transition-all duration-150"
        >
          بلیط هواپیما
        </a>
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          هتل داخلی
        </a>
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          هتل خارجی
        </a>
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          پرواز خارجی
        </a>
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          حجوزات العرب
        </a>
        <a
          href="#."
          className="z-10 rounded-md rounded-b-none bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          پکیج تور
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-form absolute top-4 rounded-md rounded-tr-none bg-graay px-5 py-6 pb-1"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-56 rounded-md">
            <input
              onChange={(e) => setDeparture(e.target.value)}
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="مبدا"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <BiSolidPlaneTakeOff className="text-2xl text-gray-300"></BiSolidPlaneTakeOff>
            </div>
          </div>
          <FaExchangeAlt className="cursor-pointer text-lg text-primary" />
          <div className="relative w-56 rounded-md">
            <input
              onChange={(e) => setArrival(e.target.value)}
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="مقصد"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <BiSolidPlaneLand className="text-2xl text-gray-300"></BiSolidPlaneLand>
            </div>
          </div>

          <div className="relative w-56 rounded-md">
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="تاریخ رفت"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <BsFillCalendarDateFill className="text-lg text-gray-300"></BsFillCalendarDateFill>
            </div>
          </div>
        </div>
        <p className="my-1 ml-2 text-end text-xs text-gray-400">
          نمایش کمترین نرخ در صورت عدم ورود تاریخ
        </p>
        <div className="mt-2 text-end">
          <button className="rounded-md bg-secondary px-14 py-2 text-lg font-semibold text-primary transition-all duration-200 hover:bg-light hover:ring-1 hover:ring-secondary">
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}
