import React, { useContext, useState } from "react";
import { FlightContext } from "../context/FlightContext";
import FlightIcon from "../Ui/FlightIcon";
import { useNavigate } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { separate } from "../utils/helpers";
import Timer from "../Ui/Timer";
import Loader from "../Ui/Loader";

export default function Purchase() {
  const { selectedFlight, loading } = useContext(FlightContext);
  const [secondsRemaining, setSecondsRemaining] = useState(900);
  console.log(selectedFlight);
  const navigate = useNavigate();

  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col items-center gap-5 px-32 2xl:px-72 ">
        <div className="my-10 flex h-[220px] w-full justify-between rounded-lg bg-white ring-1 ring-gray-300">
          <div className="flex flex-col gap-3 p-3 px-6">
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-purple-100 px-4 py-1 text-sm text-primary">
                بلیط رفت
              </p>
              <p className="font-bold text-darkGray">
                {selectedFlight.arrivalDateM}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-3">
                <img
                  src={selectedFlight.airlineLogo}
                  alt={selectedFlight.airlineLogo}
                ></img>
                <p className="text-center">
                  {selectedFlight.airelineNamePersian}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="rounded-xl bg-light px-2 text-sm">
                  {selectedFlight.cobinPersian}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="ml-5">
                {selectedFlight.fromFa}{" "}
                <span className="mx-2 text-lg font-bold">
                  {selectedFlight.departureTime}
                </span>
              </p>
              <FlightIcon />
              <p className="mr-5">
                {selectedFlight.toFa}{" "}
                <span className="mx-2 text-lg font-bold">
                  {selectedFlight.arrivalTime}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-r-2 border-gray-300 px-6 py-4">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="rounded-lg px-10 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50"
              >
                تغییر بلیط
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-between gap-5 text-darkGray">
                <p>بزرگسال</p>
                <p>
                  {separate(selectedFlight.adultPrice)}
                  <span className="mr-1 text-sm">
                    {selectedFlight.currencyTitle}
                  </span>
                </p>
              </div>
              <span className="h-[1px] w-40 bg-gray-300"></span>
              <div className="flex justify-between gap-5 text-darkGray">
                <p>مجموع</p>
                <p>
                  {separate(selectedFlight.adultPrice)}
                  <span className="mr-1 text-sm">
                    {selectedFlight.currencyTitle}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-5 rounded-lg bg-white p-5 ring-1 ring-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IoMdPeople className="text-3xl text-darkGray" />
              <h1 className="text-xl font-bold text-darkGray">
                مشخصات مسافران
              </h1>
            </div>
            <Timer
              secondsRemaining={secondsRemaining}
              setSecondsRemaining={setSecondsRemaining}
            />
          </div>
          <form>
            <select
              id="type"
              name="type"
              className="rounded-full px-2 py-1 text-darkGray outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-darkGray"
            >
              <option value="adl">بزرگسال (+12)</option>
              <option value="chi">کودک (2-12)</option>
              <option value="inf">نوزاد (0-2)</option>
            </select>
            <div className="my-5 grid grid-cols-4 gap-x-5 gap-y-8">
              <input
                className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="first_name"
                name="first_name"
                type="text"
                placeholder="نام"
                required
              />
              <input
                className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="نام خانوادگی"
                required
              />
              <select
                className="focus: rounded-lg p-2 text-gray-400 ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="gender"
                name="gender"
              >
                <option value="" disabled selected>
                  جنسیت
                </option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              <input
                className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="na_code"
                name="na_code"
                type="number"
                placeholder="کد ملی / پاسپورت"
                required
              />
              <input
                className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="birthday"
                name="birthday"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="تاریخ تولد"
                required
              />
              <select
                className="rounded-lg p-2 text-gray-400 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
                id="nationality"
                name="nationality"
              >
                <option value="" disabled selected>
                  ملیت
                </option>
                <option value="IRN">ایرانی</option>
                <option value="FOR">اتباع خارجی</option>
              </select>
              {/* <input type="number" id="phone" placeholder="شماره موبایل"></input> */}
            </div>
            <hr className="mt-8 w-full"></hr>
          </form>
          <div>
            <button className="rounded-lg px-5 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50">
              + اصافه کردن مسافر جدید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
