import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";
import FlightIcon from "../Ui/FlightIcon";

export default function Purchase() {
  const { selectedFlight } = useContext(FlightContext);
  console.log(selectedFlight);
  return (
    <div className="my-10 flex flex-col items-center px-40 2xl:px-72 ">
      <div className="flex h-[240px] w-full justify-between rounded-md bg-white ring-1 ring-gray-300">
        <div className="flex flex-col p-3 px-6 gap-3">
          <div className="flex items-center gap-3">
            <p className="rounded-full bg-purple-100 px-4 py-1 text-sm text-primary">
              بلیط رفت
            </p>
            <p className="font-bold text-darkGray">شنبه, 04 آذر</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-3 items-center">
              <img
                src={selectedFlight.airlineLogo}
                alt={selectedFlight.airlineLogo}
              ></img>
              <p className="text-center">
                {selectedFlight.airelineNamePersian}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="rounded-xl bg-light px-2 text-sm">سیستمی</p>
              <p className="rounded-xl bg-light px-2 text-sm">اکونومی</p>
              <p className="rounded-xl bg-light px-2 text-sm">Fokker 100</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="ml-5">
              {selectedFlight.fromFa}{" "}
              <span className="mx-2 text-lg font-bold">22:55</span>
            </p>
            <FlightIcon />
            <p className="mr-5">
              {selectedFlight.toFa}{" "}
              <span className="mx-2 text-lg font-bold">10:00</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-r-2 border-gray-300 py-4 px-6">
          <div>
            <button className="rounded-lg px-8 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50">
              تغییر بلیط
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-darkGray gap-5 justify-between">
              <p>بزرگسال</p>
              <p>
                {selectedFlight.adultPrice}
                <span>ریال</span>
              </p>
            </div>
            <span className="h-[1px] w-40 bg-gray-300"></span>
            <div className="flex text-darkGray gap-5 justify-between">
              <p>مجموع</p>
              <p>
                {selectedFlight.adultPrice}
                <span>ریال</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
