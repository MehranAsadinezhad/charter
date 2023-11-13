import React from "react";

export default function Card({ option }) {
  return (
    <div className="shadow-box w-64 bg-white p-1">
      <div className="box-bg relative w-full">
        <img
          className="left relative h-[75px] object-fill object-center"
          alt="teh"
          src={option.poster}
        ></img>
        <div
          className="absolute bottom-0 z-10"
          style={{ height: "35px", width: "100%", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-58.41,121.88 C82.67,3.48 151.52,134.72 530.19,155.44 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f9fafb", opacity: "0.7" }}
            ></path>
          </svg>
        </div>
        <div
          className="absolute bottom-0"
          style={{
            height: "45px",
            opacity: "0.7",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-58.41,121.88 C82.67,3.48 151.52,134.72 530.19,155.44 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f9fafb", opacity: "0.7" }}
            ></path>
          </svg>
        </div>
        <div className="absolute right-3 top-3 z-20">
          <p className="text-xs text-gray-300">بلیط هواپیما</p>
          <h1 className="mt-1 rounded-md bg-black bg-opacity-40 px-3 py-1 text-white">
            {option.name} به
          </h1>
        </div>
      </div>
      <ul className="box my-2 h-[217px] overflow-y-scroll">
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">استانبول</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">نجف</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">یزد</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">شیراز</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">قشم</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">گرگان</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">بوشهر</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">گرگان</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">کرمان</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
        <li className="flex cursor-pointer items-center justify-between border-b-2 border-graay p-1 px-2 transition-all duration-200 hover:rounded-md hover:bg-primary hover:bg-opacity-40">
          <p className="text-darkGray text-sm">ساری</p>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">3,118</h1>
            <span className="text-xs text-gg">تومان</span>
          </div>
        </li>
      </ul>
      
    </div>
  );
}
