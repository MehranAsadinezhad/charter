import React from "react";

export default function FlightCart() {
  return (
    <div className="flex w-full rounded-lg bg-light ring-1 ring-gray-300">
      <div className="flex w-3/4 gap-5 items-center">
        <div className="flex flex-col p-5 items-center justify-between gap-5">
          <img></img>
          <p>آسمان</p>
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
            <p>اهواز <span className="font-bold text-lg mx-2">22:55</span></p>
            <div></div>
            <p>مشهد <span className="font-bold text-lg mx-2">10:00</span></p>
          </div>
          <a href="v#" className="tracking-wide text-primary">
            قوانین استرداد
          </a>
        </div>
      </div>
      <div className="flex gap-3 w-1/4 flex-col items-center p-5 border-r-2 border-gray-300">
        <p className="font-bold text-primary">
          17,064,000<span className="text-sm mr-1 text-gray-500">ریال</span>
        </p>
        <h1 className="text-lg font-semibold text-darkGray">نرخ رسمی ایرلاین</h1>
        <button className="bg-primary py-2 text-light px-7 rounded-lg transition-all duration-200 hover:bg-darkestPrimary">
          انتخاب پرواز
        </button>
      </div>
    </div>
  );
}
