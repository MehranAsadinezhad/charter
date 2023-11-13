import React from "react";
import FlightIcon from "./FlightIcon";

export default function FlightCart({ flight }) {
  return (
    <div className="flex w-full rounded-lg bg-light ring-1 ring-gray-300">
      <div className="flex w-3/4 items-center gap-5">
        <div className="flex flex-col items-center justify-between gap-5 p-5">
          <img src={flight.airlineLogo} alt={flight.id}></img>
          <p>{flight.airlineName}</p>
          <a href="c#" className="tracking-wide text-primary">
            اطلاعات پرواز
          </a>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="flex items-center gap-5 ">
            <p className="rounded-xl bg-gray-100">سیستمی</p>
            <p className="rounded-xl bg-gray-100">اکونومی</p>
            <p className="rounded-xl bg-gray-100">Fokker 100</p>
          </div>
          <div className="flex items-center">
            <p className="ml-5">
              {flight.from}{" "}
              <span className="mx-2 text-lg font-bold">22:55</span>
            </p>
            <FlightIcon />
            <p className="mr-5">
              {flight.to} <span className="mx-2 text-lg font-bold">10:00</span>
            </p>
          </div>
          <a href="v#" className="tracking-wide text-primary">
            قوانین استرداد
          </a>
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center gap-3 border-r-2 border-gray-200 p-5">
        <p className="font-bold text-primary">
          {flight.adultPrice}
          <span className="mr-1 text-sm text-gray-500">ریال</span>
        </p>
        <h1 className="text-lg font-semibold text-darkGray">
          نرخ رسمی ایرلاین
        </h1>
        <button className="rounded-lg bg-primary px-7 py-2 text-light transition-all duration-200 hover:bg-darkestPrimary">
          انتخاب پرواز
        </button>
        <p className="text-red-500">{flight.capacity} صندلی باقی مانده</p>
      </div>
    </div>
  );
}
