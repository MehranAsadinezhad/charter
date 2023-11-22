import React from "react";
import { FaXmark } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";

export default function Logup({ setShowLogUp }) {
  return (
    <div>
      <div className="absolute inset-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-y-hidden backdrop-brightness-50">
        <div className="popup relative flex w-1/3 flex-col rounded-lg px-5 py-8 text-sm shadow-2xl">
          <button
            onClick={() => setShowLogUp(false)}
            className="absolute -left-3 -top-3 rounded-full bg-graay p-1 text-2xl text-darkestPrimary"
          >
            <FaXmark />
          </button>
          <div className="flex items-center gap-2 border-b-2 border-light pb-3 text-lg">
            <MdOutlinePerson className="text-3xl text-secondary" />
            <p className="text-white">ثبت نام</p>
          </div>
          <form
            className="my-5 grid w-full grid-rows-4 gap-3 text-sm text-light"
            method="get"
            id="register"
            name="register"
          >
            <div className="flex w-full items-center gap-5">
              <div className="flex w-1/2 items-center justify-between">
                <label>نام</label>
                <input
                  className="h-9 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="flex w-1/2 items-center justify-between">
                <label>نام خانوادگی</label>
                <input
                  className="h-9 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="flex w-1/2 items-center gap-6">
                <label>جنسیت</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <label>آقا</label>
                    <input type="radio" name="gender" value="male" />
                  </div>
                  <div className="flex items-center gap-1">
                    <label>خانم</label>
                    <input type="radio" name="gender" value="female" />
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-between">
                <label>موبایل</label>
                <input
                  className="h-9 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
                  type="number"
                  name="mobile"
                  id="mobile"
                  required
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-2">
              <label>نوع</label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <label>مسافر</label>
                  <input type="radio" name="profileType" value="passenger" />
                </div>
                <div className="flex items-center gap-1">
                  <label>کارمند آژانس</label>
                  <input type="radio" name="profileType" value="employee" />
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-between">
                <label>ایمیل</label>
                <input
                  className="h-9 rounded-md p-1 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="flex rounded-md bg-white px-3 h-14 w-full justify-between items-center gap-2">
                <input className="bg-graay p-2 rounded-md outline-none ring-2 ring-primary transition-all duration-200 focus:ring-2 focus:ring-secondary" type="number"></input>
                <button type="submit" className="bg-primary text-light px-8 py-2 rounded-md">ثبت</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
