import React from "react";
import { MdOutlineLogin } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

export default function Login({ setShowLogin }) {
  return (
    <div className="absolute inset-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-y-hidden backdrop-brightness-50">
      <form className="popup relative flex w-1/5 flex-col rounded-lg px-3 py-8 text-sm shadow-2xl">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute -left-3 -top-3 rounded-full bg-graay p-1 text-2xl text-darkestPrimary"
        >
          <FaXmark />
        </button>
        <div className="flex items-center gap-2 border-b-2 border-light pb-5 text-lg">
          <MdOutlineLogin className="text-3xl text-secondary" />
          <p className="text-white">ورود</p>
        </div>
        <div className="mt-3 flex flex-col gap-1">
          <label className="text-light">نام کاربری</label>
          <input
            type="text"
            className="h-8 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
            name="name"
            id="name"
          />
        </div>
        <div className="mt-3 flex flex-col gap-1">
          <label className="text-light">رمز ورود</label>
          <input
            type="password"
            className="h-8 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
            name="pass"
            id="pass"
          />
        </div>
        <p className="my-3 cursor-pointer self-start text-light">
          بازیابی رمز ورود
        </p>
        <button className="self-end rounded-md bg-primary px-8 py-2 text-white">
          ورود
        </button>
      </form>
    </div>
  );
}
