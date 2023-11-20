import React, { useContext, useState } from "react";
import { FlightContext } from "../context/FlightContext";
import FlightIcon from "../Ui/FlightIcon";
import { useNavigate } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { getDateFormat, separate } from "../utils/helpers";
import Timer from "../Ui/Timer";
import Loader from "../Ui/Loader";
import FormExtraPassenger from "../Ui/FormExtraPassenger";
import { LuPlane } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { SiCriticalrole } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";

export default function Purchase() {
  const { selectedFlight, loading } = useContext(FlightContext);
  const [formId, setFormId] = useState([0]);
  function addForm() {
    const newFormId = formId[formId.length - 1] + 1;
    setFormId([...formId, newFormId]);
  }
  console.log(selectedFlight);
  const navigate = useNavigate();

  const todayFa = {
    day: getDateFormat(new Date(selectedFlight.departureDate), { day: "2-digit" }),
    month: getDateFormat(new Date(selectedFlight.departureDate), { month: "numeric" }),
    monthTitle: getDateFormat(new Date(selectedFlight.departureDate), { month: "long" }),
    year: getDateFormat(new Date(selectedFlight.departureDate), { year: "numeric" }),
    dayWeek: getDateFormat(new Date(selectedFlight.departureDate), { weekday: "long" }),
  };

  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col items-center gap-5 px-32 2xl:px-72 ">
        {/* <div className="my-10 flex h-[220px] w-full justify-between rounded-lg bg-white ring-1 ring-gray-300">
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
            <Timer />
          </div>
          <div className="forms-container">
            {formId.length > 0 &&
              formId?.map((form) => (
                <FormExtraPassenger
                  key={Math.random()}
                  formId={form}
                  setFormId={setFormId}
                />
              ))}
          </div>
          <div>
            <button
              onClick={addForm}
              className="rounded-lg px-5 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50"
            >
              + اصافه کردن مسافر جدید
            </button>
          </div>
        </div> */}

        <div className="popup rounded-lg w-[1150px] my-40 p-7">
            <div className="grid grid-col-9 gap-5">
              <div className="col-span-1 text-white rounded-md ring-4 ring-white">
                <div className="flex bg-darkPrimary text-white items-center justify-between p-2">
                  <h1>اطلاعات پرواز</h1>
                  <LuPlane className="text-xl" />
                </div>
                <ul className="p-2">
                  <li className="flex items-center gap-2">
                    <TbMoneybag/>
                    <p>مبلغ قابل پرداخت</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p className="font-iranBold">{separate(selectedFlight.adultPrice)}</p>
                    <p>{selectedFlight.currencyTitle}</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoPersonSharp/>
                    <p>مسافر</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdTime/>
                    <p>زمان باقیمانده رزرو</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Timer/>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsInfoCircle/>
                    <p>اطلاعات پرواز</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div>
                      <p>تاریخ</p>
                      <p>روز</p>
                      <p>ساعت</p>
                      <p>مبدا</p>
                      <p>مقصد</p>
                      <p>شماره پرواز</p>
                      <p>ایرلاین</p>
                    </div>
                    <div>
                      <p>{todayFa.year}/{todayFa.month}/{todayFa.day}</p>
                      <p>{todayFa.dayWeek}</p>
                      <p className="font-iranReg">{selectedFlight.departureTime}</p>
                      <p>{selectedFlight.fromFa}</p>
                      <p>{selectedFlight.toFa}</p>
                      <p>{selectedFlight.flightNumber}</p>
                      <img alt="logo" src={selectedFlight.airlineLogo}></img>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div>
                      <SiCriticalrole/>
                      <a>قوانین کنسلی</a>
                    </div>
                    <a>کلیک کنید</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdPhone/>
                    <p>پشتیبانی</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p>07691006118</p>
                    <p>09027006118</p>
                  </li>
                </ul>
              </div>
              <div className="col-span-8"></div>
            </div>
        </div>
      </div>
    </>
  );
}
