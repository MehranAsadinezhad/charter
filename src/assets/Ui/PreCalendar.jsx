import React, { useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaXmark  } from "react-icons/fa6";
import { FlightContext } from "../context/FlightContext";

export default function PreCalendar() {
    const {searchFlight } = useContext(FlightContext)
    console.log(searchFlight);
  return (
    // <!-- Modal toggle -->
    <div className="relative">
      <button
        className="text-primary flex gap-2 bg-white p-2 rounded-lg hover:bg-purple-100 duration-200 transition-all"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <FaCalendarAlt/>تقویم
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gradient-to-t from-darkestPrimary to-primary">
          <div className="border-b-2 py-2">
            <p className="text-white">تهران به مشهد</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute text-3xl top-1 left-1"><FaXmark className="bg-gray-200 rounded-full p-1"/></button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
