import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiHotel } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import logo from "../../../public/images/logo.jpg";

export default function SecondNav() {
  return (
    <div className="flex items-center justify-between bg-white px-32">
      <div>
        <img src={logo} alt="logo" className="cursor-pointer"></img>
      </div>
      <div>
        <ul className="flex items-center">
          <li className="flex cursor-pointer items-center gap-2">
            <BiHotel className="text-2xl text-gray-500" />
            <span className="tex text-sky-500">هتل</span>
          </li>
          <li className="flex cursor-pointer items-center gap-2 before:mr-1 before:text-xl before:text-gray-300 before:content-['|']">
            <BsPerson className="text-2xl text-gray-500" />
            <span className="text-skyDark tex">
              جدول جریمه پرواز سیستمی داخلی
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-2 before:mr-1 before:text-xl before:text-gray-300 before:content-['|']">
            <HiOutlineBuildingOffice2 className="text-2xl text-gray-500" />
            <div className="flex items-center gap-2">
              <p className="text-skyDark tex">تور داخلی و خارجی</p>
              <FaAngleDown className="text-xs text-gray-500 transition-all duration-200" />
            </div>
          </li>
          <li className="flex cursor-pointer items-center gap-2 before:mr-1 before:text-xl before:text-gray-300 before:content-['|']">
            <SlPlane className="text-2xl text-gray-500" />
            <div className="flex items-center gap-2">
              <p className="tex text-skyDark">اپلیکیشن و ساین همکاری</p>
              <FaAngleDown className="text-xs text-gray-500 transition-all duration-200" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
