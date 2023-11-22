import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaHeadphonesAlt,
  FaMobileAlt,
  FaVoicemail,
  FaUserAlt,
} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { SiAparat } from "react-icons/si";
import logo from "../../../public/images/logo.png";
import sib from "../../../public/images/sib.svg";
import bazar from "../../../public/images/bazar.png";
import gp from "../../../public/images/gp.png";
import namad from "../../../public/images/namad.png";
import saman from "../../../public/images/samandeh.png";

export default function Footer() {
  return (
    <footer className="relative lg:h-[600px] md:h-[1300px] sm:h-[1450px] h-[1700px] w-screen overflow-hidden bg-darkPrimary">
      <div className="rotate hidden lg:block absolute right-0 z-40 w-[1600px] overflow-hidden text-center 2xl:w-full">
        <svg
          width="1998"
          height="109"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1998.1 109"
        >
          <path
            opacity="0.2"
            fill="#ffffff"
            d="M-1,107.6c346,0.6,524.3,4.7,878.4-4.4c286.6-7.4,442.5-54,608.3-51.2c205.4,3.5,310.3,72.8,513.3,49.7V1.2L-1,1.7V107.6z"
          ></path>
          <path
            opacity="0.2"
            fill="#ffffff"
            d="M1997.5,83.8c-251.3,30.8-441.2-38.7-499.9-52.4c-54.7-12.8-122.5-12-186.7,5.3c-154.2,41.6-315.5,70.9-475.2,67.5c-159.6-3.4-324.4-22.4-484.1-19.7C218.6,86.8,49,82.8-1,80.8C-1,59.5-1,1.1-1,1.1h1998.8L1997.5,83.8z"
          ></path>
          <path
            opacity="0.4"
            fill="#ffffff"
            d="M-2,88.7c139.8,12.7,219.9,10.7,360.2,11.1c285.5,0.8,487.5-18.1,736.2-51.2C1351,14.4,1451.5,13.3,1799,76.2c58.9,10.6,140,8,200,1.3V0H-1.5L-2,88.7z"
          ></path>
          <path
            fill="#ffffff"
            d="M362.6,79.6c193.8-11.8,366.7-24.8,568.8-49.9c110.2-13.7,221.1-21.6,332.2-19.6c187,3.3,344.8,29.7,561.3,69.8c122.2,22.6,173.2,4,173.2,4V0H0v83.7C0,83.7,166.1,91.7,362.6,79.6z"
          ></path>
        </svg>
      </div>
      <div className="absolute lg:mt-36 mt-10 w-full px-5 xl:px-[130px]">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="flex lg:flex-row flex-col items-center gap-x-8">
            <img src={logo} alt="logoWhite"></img>
            <ul className="my-3 flex items-center lg:gap-1 gap-3">
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <FaTelegramPlane className="text-2xl text-light transition-all duration-200" />
              </li>
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <FaInstagram className="text-2xl text-light transition-all duration-200" />
              </li>
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <SiAparat className="text-2xl text-light transition-all duration-200" />
              </li>
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <FaFacebookF className="text-2xl text-light transition-all duration-200" />
              </li>
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <FaTwitter className="text-2xl text-light transition-all duration-200" />
              </li>
              <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-secondary">
                <FaYoutube className="text-2xl text-light transition-all duration-200" />
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <img alt="sib" className="md:w-28 w-24 cursor-pointer" src={sib}></img>
            <img alt="bazar" className="md:w-40 w-32 cursor-pointer" src={bazar}></img>
            <img alt="gp" className="md:w-40 w-32 cursor-pointer" src={gp}></img>
          </div>
        </div>
        <div className="my-5 border-b-2 border-darkestPrimary"></div>
        <div className="grid lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h1 className="text-center p-2 lg:p-0 text-lg bg-darkestPrimary lg:bg-transparent text-light">ارتباط با ما</h1>
            <ul className="mt-5 mx-5 flex flex-col gap-2">
              <li className="flex flex-col text-sm text-light">
                <div className="flex gap-1">
                  <FaHeadphonesAlt className="bg-secondary p-1 text-2xl text-primary" />
                  <p className="self-end">07691006118</p>
                </div>
                <p className="mr-2 mt-2 text-base">
                  برای <strong>تماس تلفنی </strong>کلیک کنید
                </p>
              </li>
              <li className="flex gap-1 text-light">
                <FaMobileAlt className="bg-secondary p-1 text-2xl text-primary" />
                <p className="self-end text-sm">09027006118</p>
              </li>
              <li className="flex gap-1 text-light">
                <FaVoicemail className="bg-secondary p-1 text-2xl text-primary" />
                <a href="s" className="self-end text-sm">
                  charter118@gmail.com
                </a>
              </li>
              <li className="flex gap-1 text-light">
                <FaDollarSign className="bg-secondary p-1 text-2xl text-primary" />
                <p className="self-end text-sm">5054-1670-0019-3467</p>
              </li>
              <li className="flex flex-col text-sm text-light">
                <div className="flex gap-1">
                  <FaUserAlt className="bg-secondary p-1 text-2xl text-primary" />
                  <p className="self-end">کیش : بازار سارینا 1طبقه 2 واحد209</p>
                </div>
                <a href="e" className="mr-2 mt-2">
                  موقعیت ما بر روی نقشه
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 lg:my-0 my-5 lg:order-none order-last">
            <h1 className="text-center p-2 lg:p-0 text-lg bg-darkestPrimary lg:bg-transparent text-light">دسترسی سریع</h1>
            <ul className="unorderFooter mt-5 flex flex-col text-sm leading-7">
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  هتل داخلی
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  پیگیری بلیط
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  آموزش رزرو بلیط هواپیما
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  راهنمای پرداخت
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  قوانین بلیط چارتر
                </a>
              </li>
              <li>
                <a href="d" className="text-light hover:text-secondary">
                  جریمه استرداد بلیط سیستمی
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-center my-5 lg:my-0 p-2 lg:p-0 text-lg bg-darkestPrimary lg:bg-transparent text-light">مجوزها و نمادها</h1>
            <div className="my-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 items-center gap-3">
              <img
                src={namad}
                alt="namad"
                className="rounded-md w-36 border-2 border-light bg-light bg-opacity-40"
              ></img>
              <img
                src={saman}
                alt="saman"
                className="rounded-md w-36 border-2 border-light bg-light bg-opacity-40"
              ></img>
              <img
                src={namad}
                alt="namad"
                className="rounded-md w-36 border-2 border-light bg-light bg-opacity-40"
              ></img>
              <img
                src={saman}
                alt="saman"
                className="rounded-md w-36 border-2 border-light bg-light bg-opacity-40"
              ></img>
              <img
                src={namad}
                alt="namad"
                className="rounded-md w-36 border-2 border-light bg-light bg-opacity-40"
              ></img>
            </div>
            <div className="mt-4 rounded-md bg-darkestPrimary px-4 py-2 text-sm leading-7 text-light">
              <p>ما دنیا را نزدیکتر میکنیم</p>
              <p>
                تمام بلیط‌های این وب‌سایت توسط آژانس مقتدر سیر ایرانیان صادر
                می‌شود و کلیه‌ی مسئولیت‌های صدور بلیط برعهده‌ی این آژانس است.
              </p>
            </div>
            <p className="mt-1 text-end text-sm text-light">
              کلیه حقوق این سایت محفوظ و متعلق به چارتر118 می باشد.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
