import React from "react";
import foreignFlight from "../../../public/images/foreign-flight.jpg";
import foreignHotel from "../../../public/images/foreign-hotel.jpg";
import hotel from "../../../public/images/hotel.jpg";

export default function Advertise() {
  return (
    <div className=" my-16 overflow-hidden w-screen px-32 2xl:px-64 justify-center grid grid-cols-2 gap-5 ">
      <div className="cursor-pointer col-span-2 w-full">
        <img
          className="rounded-md"
          src={foreignFlight}
          alt="foreignFlight"
        ></img>
      </div>
      <div className="flex grid-cols-2  items-center w-full gap-6">
        <img
          className="cursor-pointer  col-span-1 rounded-md"
          src={foreignHotel}
          alt="foreignHotel"
        ></img>
        <img
          className="cursor-pointer col-span-1 rounded-md"
          src={hotel}
          alt="hotel"
        ></img>
      </div>
    </div>
  );
}
