import React, { useState } from "react";
import Guidence from "../Ui/Guidence";

export default function Guide() {
  // fake data to render some Guidence
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [show, setShow] = useState(false);

  return (
    <div className="bg-white pb-24 pt-14">
      <div
        id="weblog"
        className={`grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 overflow-hidden px-3 ${
          !show ? "h-[200px]" : ""
        }`}
      >
        {nums.map((item) => (
          <Guidence key={item} />
        ))}
      </div>
      <div className="z-20 flex h-20 items-end justify-center bg-white">
        <button
          onClick={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
          className="rounded-md px-12 py-3 text-sm text-gray-700 ring-1 ring-gray-400"
        >
          {show ? "کمتر" : "بیشتر"}...
        </button>
      </div>
    </div>
  );
}
