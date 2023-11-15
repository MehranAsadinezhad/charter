import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";
import FlightIcon from "../Ui/FlightIcon";

export default function Purchase() {
  const { selectedFlight } = useContext(FlightContext);
  console.log(selectedFlight);
  return (
    <div className="my-10 flex flex-col items-center px-72 ">
      <div className="flex justify-between rounded-md w-[800px] bg-white p-4 ring-1 ring-gray-300">
        <div>
          <div className="flex">
            <p>بلیط رفت</p>
            <p>شنبه, 04 آذر</p>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <img
                src={selectedFlight.airlineLogo}
                alt={selectedFlight.airlineLogo}
              ></img>
              <p className="text-center">{selectedFlight.airelineNamePersian}</p>
            </div>
            <div className="flex items-center">
              <p>سیستمی</p>
              <p>اکونومی</p>
              <p>fokker100</p>
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
        <div className="flex flex-col items-center justify-between border-r-2 border-gray-300 p-2">
          <div>
            <button className="text-primary py-1 duration-200 transition-all px-8 hover:bg-purple-50 rounded-lg ring-2 ring-primary">تغییر بلیط</button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex justify-between">
              <p>بزرگسال</p>
              <p>{selectedFlight.adultPrice}<span>ریال</span></p>
            </div>
            <span className="h-[1px] bg-gray-300 w-32"></span>
            <div className="flex justify-between">
              <p>بزرگسال</p>
              <p>{selectedFlight.adultPrice}<span>ریال</span></p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
