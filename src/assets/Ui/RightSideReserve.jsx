import {LuPlane} from "react-icons/lu";
import {TbMoneybag} from "react-icons/tb";
import {separate} from "../utils/helpers.js";
import {IoPersonSharp} from "react-icons/io5";
import {IoMdTime} from "react-icons/io";
import Timer from "./Timer.jsx";
import {BsInfoCircle} from "react-icons/bs";
import {SiCriticalrole} from "react-icons/si";
import {MdPhone} from "react-icons/md";
import React from "react";

export function RightSideReserve({selectedFlight,todayFa}) {
    return (
        <div className="text-white col-span-2 rounded-md border-4 border-white text-sm">
            <div className="flex bg-primary text-white items-center justify-between p-2">
                <h1>اطلاعات پرواز</h1>
                <LuPlane className="text-xl"/>
            </div>
            <ul className="p-2">
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <TbMoneybag className="text-lg font-semibold"/>
                    <p>مبلغ قابل پرداخت</p>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <p className="font-iranBold text-lg">{separate(selectedFlight?.price_final)}</p>
                    <p>{selectedFlight?.currencyTitle}</p>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <IoPersonSharp className="text-lg font-semibold"/>
                    <p>مسافر</p>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <IoMdTime className="text-lg font-semibold"/>
                    <p>زمان باقیمانده رزرو</p>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <Timer/>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <BsInfoCircle className="text-lg font-semibold"/>
                    <p>اطلاعات پرواز</p>
                </li>
                <li className="flex items-baseline gap-2 border-b-2 border-white py-2">
                    <div className="flex flex-col gap-1">
                        <p>تاریخ</p>
                        <p>روز</p>
                        <p>ساعت</p>
                        <p>مبدا</p>
                        <p>مقصد</p>
                        <p>شماره پرواز</p>
                        <p>ایرلاین</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>{todayFa?.year}/{todayFa?.month}/{todayFa?.day}</p>
                        <p>{todayFa?.dayWeek}</p>
                        <p className="font-iranReg">{selectedFlight?.time_flight}</p>
                        <p>{selectedFlight?.from}</p>
                        <p>{selectedFlight?.to}</p>
                        <p>{selectedFlight?.number_flight}</p>
                        <img className="w-10" alt="logo" src={selectedFlight?.airlineLogo}></img>
                    </div>
                </li>
                <li className="flex items-center justify-between gap-2 border-b-2 border-white py-2">
                    <div className="flex items-center gap-2">
                        <SiCriticalrole className="text-lg font-bold"/>
                        <a href="#">قوانین کنسلی</a>
                    </div>
                    <a href="#">کلیک کنید</a>
                </li>
                <li className="flex items-center gap-2 border-b-2 border-white py-2">
                    <MdPhone className="text-lg font-bold"/>
                    <p>پشتیبانی</p>
                </li>
                <li className="flex flex-col gap-1 py-2">
                    <p>07691006118</p>
                    <p>09027006118</p>
                </li>
            </ul>
        </div>
    )
}