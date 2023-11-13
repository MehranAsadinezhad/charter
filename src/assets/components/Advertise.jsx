import React from "react";
import foreignFlight from "../images/foreign-flight.jpg";
import foreignHotel from "../images/foreign-hotel.jpg";
import hotel from "../images/hotel.jpg";

export default function Advertise() {
  return (
    <div className=" my-16 w-screen px-64 justify-center flex gap-5 flex-col items-center">
      <div className="cursor-pointer w-full">
        <img
          className="rounded-md"
          src={foreignFlight}
          alt="foreignFlight"
        ></img>
      </div>
      <div className="flex items-center w-full gap-6">
        <img
          className="cursor-pointer rounded-md"
          src={foreignHotel}
          alt="foreignHotel"
        ></img>
        <img
          className="cursor-pointer rounded-md"
          src={hotel}
          alt="hotel"
        ></img>
      </div>
    </div>
  );
}
