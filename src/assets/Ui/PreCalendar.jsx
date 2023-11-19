import React, { useContext, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FlightContext } from "../context/FlightContext";
import BoxPreCalendar from "./BoxPreCalendar";
import { BsAirplaneFill } from "react-icons/bs";

const hugeDatas = {
  status: "success",
  KHD: {
    THR: {
      minWeek: ["IR", 846, "2023-11-28"],
      minDate: {
        "2023-11-21": 897,
        "2023-11-28": 846,
        "2023-11-20": 1007,
        "2023-11-27": 1045,
        "2023-12-04": 1045,
        "2023-12-05": 897,
        "2023-12-12": 897,
      },
    },
  },
};

export default function PreCalendar() {
  const availDates = Object.entries(hugeDatas.KHD.THR.minDate);
  const extractDates = Object.keys(hugeDatas.KHD.THR.minDate);
  const startDate = extractDates.reduce(function (a, b) {
    return a <= b ? a : b;
  });
  const endDate = extractDates.reduce(function (a, b) {
    return a >= b ? a : b;
  });
  const datesArray = [];

  // loop from start date to end date
  for (
    let date = new Date(startDate);
    date <= new Date(endDate);
    date.setDate(date.getDate() + 1)
  ) {
    datesArray.push(
      `${date.getFullYear()}-${date.getMonth() + 1}-${
        date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
      }`,
    );
  }
  const { searchFlight, availFlights } = useContext(FlightContext);
  const [closeCal, setCloseCal] = useState(false);
  const [intCal, setIntCal] = useState(false);
  console.log(availFlights);
  return (
    // <!-- Modal toggle -->
    <>
      <div className="relative">
        <button
          className="flex gap-2 rounded-lg bg-white p-2 text-primary transition-all duration-200 hover:bg-purple-100"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <FaCalendarAlt />
          تقویم
        </button>
        {!closeCal && (
          <dialog id="my_modal_1" className="modal">
            <div className="popup modal-box bg-gradient-to-t">
              <div className="flex items-center gap-10 border-b-2 py-2">
                <div className="flex items-center gap-3">
                  <BsAirplaneFill className="text-xl text-secondary" />
                  <p className="text-light">
                    {availFlights?.flights[0].fromFa} به{" "}
                    {availFlights?.flights[0].toFa}
                  </p>
                </div>
                <div>
                  <p
                    onClick={() => {
                      if (intCal) {
                        setIntCal(false);
                      } else {
                        setIntCal(true);
                      }
                    }}
                    className="cursor-pointer rounded-lg bg-secondary px-2 py-0.5 text-primary"
                  >
                    تبدیل تقویم به {`${intCal ? "شمسی" : "میلادی"}`}
                  </p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="absolute left-1 top-1 text-3xl">
                    <FaXmark className="rounded-full bg-light p-1" />
                  </button>
                  <div className="my-5 grid grid-cols-5 place-items-center gap-5">
                    {datesArray?.map((date) => (
                      <BoxPreCalendar
                        intCal={intCal}
                        setCloseCal={setCloseCal}
                        key={Math.random()}
                        date={date}
                        availDates={availDates}
                      />
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
}
