import React from "react";
import foreignFlight from "../../../public/images/foreign-flight.jpg";
import foreignHotel from "../../../public/images/foreign-hotel.jpg";
import hotel from "../../../public/images/hotel.jpg";

export default function Advertise() {
  return (
    <div className=" my-16 overflow-hidden w-screen px-32 2xl:px-80 justify-center flex flex-col gap-10 ">
      <div className="cursor-pointer col-span-2 w-full">
        <img
          className="rounded-md w-full"
          src={foreignFlight}
          alt="foreignFlight"
        ></img>
      </div>
      <div className="grid grid-cols-2 w-full items-center gap-6">
        <img
          className="cursor-pointer w-full col-span-1 rounded-md"
          src={foreignHotel}
          alt="foreignHotel"
        ></img>
        <img
          className="cursor-pointer w-full col-span-1 rounded-md"
          src={hotel}
          alt="hotel"
        ></img>
      </div>
    </div>
  );
}
