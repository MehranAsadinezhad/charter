import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMobileAlt,
  FaVoicemail,
  FaRegCreditCard,
  FaPhoneAlt,
} from "react-icons/fa";

import { SiAparat } from "react-icons/si";
import { BsTriangleFill } from "react-icons/bs";

export default function ConnectionUs({ connection, setConnection }) {
  
  return (
    <div
      className={`absolute right-0 ${
        connection
          ? "pointer-events-auto z-50 opacity-100 translate-y-1.5"
          : "pointer-events-none -z-10 translate-y-10 opacity-0"
      }   flex w-[300px] flex-col justify-between rounded-lg border-t-2 border-secondary bg-white p-2  transition-all duration-500`}
    >
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex  cursor-pointer flex-col gap-2 rounded-lg border border-graay p-3 text-darkGray shadow-sm transition-all duration-500 hover:bg-graay">
          <FaPhoneAlt className="text-lg" />
          <p>07691006118</p>
          <h1>
            برای <strong>تماس تلفنی </strong>کلیک کنید
          </h1>
        </div>
        <div className="flex  cursor-pointer flex-col gap-2 rounded-lg border border-graay p-3 text-darkGray shadow-sm transition-all duration-500 hover:bg-graay">
          <FaMobileAlt className="text-lg" />
          <p>09027006118</p>
        </div>
        <div className="flex  cursor-pointer flex-col gap-2 rounded-lg border border-graay p-3 text-darkGray shadow-sm transition-all duration-500 hover:bg-graay">
          <FaVoicemail className="text-lg" />
          <p>charter118@gmail.com</p>
        </div>
        <div className="flex  cursor-pointer flex-col gap-2 rounded-lg border border-graay p-3 text-darkGray shadow-sm transition-all duration-500 hover:bg-graay">
          <FaRegCreditCard className="text-lg" />
          <p>5054-1232-3343-4334</p>
        </div>
      </div>
      <ul className="mt-5 flex items-center gap-3 p-2">
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <FaTelegramPlane className="text-xl text-darkestBlue  transition-all duration-200" />
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <FaInstagram className="text-xl text-darkestBlue  transition-all duration-200" />
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <SiAparat className="text-xl text-darkestBlue transition-all duration-200" />
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <FaFacebookF className="text-xl text-darkestBlue  transition-all duration-200" />
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <FaTwitter className="text-xl text-darkestBlue  transition-all duration-200" />
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-full">
          <FaYoutube className="text-xl text-darkestBlue  transition-all duration-200" />
        </li>
      </ul>
      <span className="absolute z-10 -top-2.5 right-9 text-xs text-white">
        <BsTriangleFill />
      </span>
    </div>
  );
}
