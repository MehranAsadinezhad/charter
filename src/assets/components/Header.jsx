import React, { useRef, useState } from "react";
import { FaAngleDown, FaPhoneFlip } from "react-icons/fa6";
import SecondNav from "../Ui/SecondNav";
import { BsTriangleFill } from "react-icons/bs";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMobileAlt,
  FaPhoneAlt,
  FaRegCreditCard,
  FaTelegramPlane,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { SiAparat } from "react-icons/si";
import { GoPersonFill } from "react-icons/go";
import HiddenMenu from "../Ui/hiddenMenu";
import Login from "./Login";
import Logup from "./Logup";
export default function Header() {
  const [connection, setConnection] = useState(false);
  const [menu, setMenu] = useState(false);
  const [detailRoles, setDetaiRoles] = useState(false);
  const [showIconMobile, setShowIconMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogUp, setShowLogUp] = useState(false);
  const [showPersuit, setShowPersuit] = useState(false);
  
  const roleRef = useRef();
  const tabConnectRef = useRef();
  const connectionRef = useRef();
  const tabMenuRef = useRef();
  const menuRef = useRef();
  const listRef = useRef();

  if (showIconMobile === true) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  window.addEventListener("click", (e) => {
    if (
      e.target !== tabConnectRef.current &&
      e.target !== connectionRef.current
    ) {
      setConnection(false);
    }
    if (
      e.target !== menuRef.current &&
      e.target !== tabMenuRef.current &&
      e.target !== roleRef.current &&
      e.target !== listRef.current
    ) {
      console.log("outside");
      setMenu(false);
    }
  });
  return (
    <header className="relative">
      <HiddenMenu
        showIconMobile={showIconMobile}
        setShowIconMobile={setShowIconMobile}
      />
      <nav className="flex h-9 items-center justify-between bg-primary px-3 md:px-10 xl:px-72 ">
        <div className="flex items-center gap-5">
          <span
            onClick={() => setShowIconMobile(!showIconMobile)}
            className="text-lg text-light md:hidden"
          >
            {!showIconMobile && <SlMenu />}
          </span>
          <div className="relative">
            <button
              onClick={() => {
                if (connection === false) {
                  setConnection(true);
                } else {
                  setConnection(false);
                }
              }}
              ref={tabConnectRef}
              className={`flex items-center gap-1 text-light ${
                connection ? "text-secondary" : ""
              }`}
            >
              ارتباط با ما
              <FaAngleDown
                className={`text-xs text-light transition-all duration-200 ${
                  connection ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              ref={connectionRef}
              className={`absolute -right-14 md:right-0 ${
                connection
                  ? "pointer-events-auto z-50 translate-y-1.5 opacity-100"
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
                  <FaFacebook className="text-xl text-darkestBlue  transition-all duration-200" />
                </li>
                <li className="flex cursor-pointer items-center justify-center rounded-full">
                  <FaTwitter className="text-xl text-darkestBlue  transition-all duration-200" />
                </li>
                <li className="flex cursor-pointer items-center justify-center rounded-full">
                  <FaYoutube className="text-xl text-darkestBlue  transition-all duration-200" />
                </li>
              </ul>
              <span className="absolute -top-2.5 right-20 z-10 text-xs text-white md:right-9">
                <BsTriangleFill />
              </span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <button
              onClick={() => {
                if (menu === false) {
                  setMenu(true);
                } else {
                  setMenu(false);
                }
              }}
              ref={tabMenuRef}
              className={`flex items-center gap-1 text-light ${
                menu ? "text-secondary" : ""
              }`}
            >
              منوی کاربری
              <FaAngleDown
                className={`text-xs text-light transition-all duration-200 ${
                  menu ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              ref={menuRef}
              className={`${
                menu
                  ? "pointer-events-auto z-50 translate-y-1.5 opacity-100"
                  : "pointer-events-none -z-10 translate-y-10 opacity-0"
              } absolute -right-24 flex w-[265px] flex-col rounded-lg border-t-2 border-secondary bg-white transition-all duration-500`}
            >
              <div className="flex flex-col items-center gap-5 rounded-t-lg bg-primary py-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkGray ring-2 ring-light">
                  <GoPersonFill className="text-3xl text-light" />
                </div>
                <div className="flex items-center gap-5">
                  <p
                    onClick={() => {
                      setShowLogin(true);
                    }}
                    className="cursor-pointer text-gray-300 hover:text-graay"
                  >
                    ورود
                  </p>
                  <span className="text-sm text-gray-400">|</span>
                  <p
                    onClick={() => setShowLogUp(true)}
                    className="cursor-pointer text-gray-300 hover:text-graay"
                  >
                    ثبت نام
                  </p>
                </div>
                <p className="cursor-pointer text-graay">فارسی</p>
              </div>
              <ul
                ref={listRef}
                className="flex flex-col p-4 pb-2 text-sm text-gray-500"
              >
                <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
                  <FaHome className="text-xl" />
                  <p>صفحه اصلی</p>
                </li>
                <li
                  onClick={() => setShowPersuit(true)}
                  className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay"
                >
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
                <li
                  onClick={() => {
                    if (detailRoles) {
                      setDetaiRoles(false);
                    } else {
                      setDetaiRoles(true);
                    }
                  }}
                  ref={roleRef}
                  className="flex cursor-pointer items-center rounded-md p-3 transition-all duration-500 hover:bg-graay"
                >
                  <div className="pointer-events-none flex w-full items-center justify-between">
                    <div className="pointer-events-none flex items-center gap-4">
                      <FaHome className="pointer-events-none text-xl" />
                      <p>قوانین</p>
                    </div>
                    <FaAngleDown
                      className={`${
                        detailRoles ? "rotate-180" : ""
                      } pointer-events-none transition-all duration-300`}
                    />
                  </div>
                </li>
              </ul>
              <div
                className={`mx-8 mb-5 ${
                  detailRoles ? "block" : "hidden"
                } text-sm leading-7 text-darkestBlue transition-all duration-500`}
              >
                <p className="cursor-pointer hover:text-black">
                  قوانین بلیط چارتر
                </p>
                <p className="cursor-pointer hover:text-black">
                  جریمه استرداد بلیط سیستمی
                </p>
                <p className="cursor-pointer hover:text-black">
                  بار همراه مسافر
                </p>
              </div>
              <span className="absolute -top-2.5 right-36 -z-10 text-xs text-white">
                <BsTriangleFill />
              </span>
            </div>
          </div>

          <a
            href="#weblog"
            className="hidden items-center gap-1 text-light md:flex"
          >
            وبلاگ
            <FaAngleDown className="text-xs" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs text-light">
          <a href="#.">پشتیبانی: 07691006118</a>
          <FaPhoneFlip />
        </div>
      </nav>
      <SecondNav />
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
      {showLogUp && <Logup showLogUp={showLogUp} setShowLogUp={setShowLogUp} />}
    </header>
  );
}
