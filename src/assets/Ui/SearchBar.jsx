import React, { useContext } from "react";
import Loader from "../Ui/Loader";
import { FaExchangeAlt } from "react-icons/fa";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";
import toast, { Toaster } from "react-hot-toast";
import { myConfig } from "../../../public/myConfig";

export default function SearchBar() {
  const navigate = useNavigate();
  const { setAvailFlights, setLoading, loading, setSearchFlight } =
    useContext(FlightContext);

  async function handleSubmit(e) {
    try {
      setLoading(true);
      e.preventDefault();
      const formdata = new FormData(e.target);
      console.log(formdata);
      if (
        formdata.get("origin") === "" ||
        formdata.get("destination") === "" ||
        formdata.get("date") === "" ||
        formdata.get("origin") === formdata.get("destination")
      ) {
        toast.error("مبدا یا مقصد یا تاریخ وارد شده صحیح نمی باشد");
        return;
      }
      const value = Object.fromEntries(formdata);
      setSearchFlight(value);
      console.log(value);
      const res = await fetch(`${myConfig.api}/avail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
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
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "green",
              color: "white",
              minWidth: "390px",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "red",
              color: "white",
              minWidth: "390px",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "whitesmoke",
            color: "black",
          },
        }}
      />
      <div className="relative bottom-72 z-40 flex flex-col items-center justify-center md:bottom-28">
        <div className="absolute grid w-screen grid-cols-12 gap-5 md:mx-0 md:ml-[114px] md:flex md:w-auto md:items-center md:gap-3">
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-base text-primary opacity-80 transition-all duration-150 md:mx-0 md:rounded-b-none md:px-3 md:pb-3  md:pt-2 md:text-xl md:opacity-100"
          >
            بلیط هواپیما
          </a>
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-primary opacity-80 transition-all duration-150 hover:opacity-95 md:mx-0 md:rounded-b-none md:p-3"
          >
            هتل داخلی
          </a>
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-primary opacity-80 transition-all duration-150 hover:opacity-95 md:mx-0 md:rounded-b-none md:p-3"
          >
            هتل خارجی
          </a>
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-primary opacity-80 transition-all duration-150 hover:opacity-95 md:mx-0 md:rounded-b-none md:p-3"
          >
            پرواز خارجی
          </a>
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-primary opacity-80 transition-all duration-150 hover:opacity-95 md:mx-0 md:rounded-b-none md:p-3"
          >
            حجوزات العرب
          </a>
          <a
            href="#."
            className="z-10 col-span-6 mx-3 rounded-md bg-graay p-2 text-primary opacity-80 transition-all duration-150 hover:opacity-95 md:mx-0 md:rounded-b-none md:p-3"
          >
            پکیج تور
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="shadow-form opacity-90 md:opacity-100 absolute top-24 flex w-11/12 flex-col rounded-md bg-graay px-5 py-6 pb-1 md:top-4 md:mx-0 md:block md:w-auto md:rounded-tr-none"
        >
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="relative w-full rounded-md md:w-56">
              <select
                style={{ WebkitAppearance: "none" }}
                type="text"
                name="origin"
                id="origin"
                className="block w-full cursor-pointer rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="مبدا"
              >
                <option value="MHD">مشهد</option>
                <option value="THR">تهران</option>
                <option value="AHW">اهواز</option>
                <option value="IFN">اصفهان</option>
                <option value="KIH">کیش</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <BiSolidPlaneTakeOff className="text-2xl text-gray-300"></BiSolidPlaneTakeOff>
              </div>
            </div>
            <FaExchangeAlt className="cursor-pointer text-lg text-primary" />
            <div className="relative w-full rounded-md md:w-56">
              <select
                style={{ WebkitAppearance: "none" }}
                type="text"
                name="destination"
                id="destination"
                className="block w-full cursor-pointer rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="مقصد"
              >
                <option value="KIH">کیش</option>
                <option value="MHD">مشهد</option>
                <option value="THR">تهران</option>
                <option value="AHW">اهواز</option>
                <option value="IFN">اصفهان</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <BiSolidPlaneLand className="text-2xl text-gray-300"></BiSolidPlaneLand>
              </div>
            </div>

            <div className="relative w-full rounded-md md:w-56">
              <input
                type="date"
                name="date"
                id="date"
                className="dateClaendar bg-white block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="تاریخ رفت"
              ></input>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <BsFillCalendarDateFill className="text-lg text-gray-300"></BsFillCalendarDateFill>
              </div>
            </div>
          </div>
          <p className="my-1 ml-2 text-center text-xs text-gray-400 md:text-end">
            نمایش کمترین نرخ در صورت عدم ورود تاریخ
          </p>
          <div className="my-3 mt-2 text-center md:text-end">
            <button className="rounded-md  bg-secondary px-14 py-2 text-lg font-semibold text-primary transition-all duration-200 hover:bg-light hover:ring-1 hover:ring-secondary">
              جستجو
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
