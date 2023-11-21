import React, { useRef, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";

export default function HiddenMenu({ showIconMobile, setShowIconMobile }) {
    const hiddenBox = useRef();
    // window.addEventListener('click',(e)=>{
    //     if(e.target !== hiddenBox.current && showIconMobile === true){
    //         setShowIconMobile(false)
    //     }
    // })
    

  return (
    <div
      className={`hidden-menu absolute inset-0 ${
        !showIconMobile ? "-right-[2000px]" : "right-0"
      }  top-0 z-50 h-[100vh] w-full  flex-col overflow-y-hidden bg-slate-200/20 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="z-50 flex h-full w-[265px] flex-col bg-white transition-all duration-500" ref={hiddenBox}>
        <span
          className="fixed right-2 top-1 text-3xl text-white"
          onClick={() => setShowIconMobile(!showIconMobile)}
        >
          <FaXmark />
        </span>
        <div className="flex flex-col items-center gap-5 bg-primary py-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkGray ring-2 ring-light">
            <GoPersonFill className="text-3xl text-light" />
          </div>
          <div className="flex items-center gap-5">
            <a href="c" className="text-gray-300 hover:text-graay">
              ورود
            </a>
            <span className="text-sm text-gray-400">|</span>
            <a href="d" className="text-gray-300 hover:text-graay">
              ثبت نام
            </a>
          </div>
          <p className="cursor-pointer text-graay">فارسی</p>
        </div>
        <ul className="flex flex-col p-4 pb-2 text-sm text-gray-500">
          <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <FaHome className="text-xl" />
            <p>صفحه اصلی</p>
          </li>
          <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <FaHome className="text-xl" />
            <p>پیگیری بلیط</p>
          </li>
          <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <FaHome className="text-xl" />
            <p>هتل داخلی</p>
          </li>
          <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <FaHome className="text-xl" />
            <p>آموزش رزرو بلیط هواپیما</p>
          </li>
          <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <FaHome className="text-xl" />
            <p>درباره ما</p>
          </li>
          <li className="flex cursor-pointer items-center rounded-md p-3 transition-all duration-500 hover:bg-graay">
            <div className="pointer-events-none flex w-full items-center justify-between">
              <div className="pointer-events-none flex items-center gap-4">
                <FaHome className="pointer-events-none text-xl" />
                <p>قوانین</p>
              </div>
              <FaAngleDown
                className={` pointer-events-none transition-all duration-300`}
              />
            </div>
          </li>
        </ul>
        <div
          className={`mx-8 mb-5  text-sm leading-7 text-darkestBlue transition-all duration-500`}
        >
          <p className="cursor-pointer hover:text-black">قوانین بلیط چارتر</p>
          <p className="cursor-pointer hover:text-black">
            جریمه استرداد بلیط سیستمی
          </p>
          <p className="cursor-pointer hover:text-black">بار همراه مسافر</p>
        </div>
        <span className="absolute -top-2.5 right-36 -z-10 text-xs text-white">
          <BsTriangleFill />
        </span>
      </div>
    </div>
  );
}
