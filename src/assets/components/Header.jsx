import React, { useState } from "react";
import { FaAngleDown, FaPhoneFlip } from "react-icons/fa6";
import SecondNav from "../Ui/SecondNav";
import UserMenu from "../Ui/UserMenu";
import ConnectionUs from "../Ui/ConnectionUs.jsx";
export default function Header() {
  const [connection, setConnection] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="relative">
      <nav className="flex h-9 items-center justify-between bg-primary px-32 ">
        <div className="flex items-center gap-5">
          <div
            className="relative"
            tabIndex={0}
            onClick={() => {
              if (connection) {
                setConnection(false);
              } else {
                setConnection(true);
              }
            }}
            onBlur={() => setConnection(false)}
          >
            <button
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
            <ConnectionUs
              connection={connection}
              setConnection={setConnection}
            />
          </div>
          <div
            tabIndex={0}
            className="relative"
            onClick={() => {
              if (menu) {
                setMenu(false);
              } else {
                setMenu(true);
              }
            }}
            onBlur={() => setMenu(false)}
          >
            <button
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
            <UserMenu menu={menu} setMenu={setMenu} />
          </div>
          <a href="#weblog" className="flex items-center gap-1 text-light">
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
    </header>
  );
}
