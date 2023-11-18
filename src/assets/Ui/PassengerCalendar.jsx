import React from "react";

export default function PassengerCalendar({ date,availDates }) {
  return (
    <li className="flex cursor-pointer flex-col border-l-2 border-gray-300 p-1 text-center duration-200 hover:bg-purple-50">
      <div className="flex w-32 flex-col items-center justify-between gap-1">
        <p className="text-center text-gray-400">{date}</p>
        {availDates?.filter((item) => item[0] === date).length > 0 ? (
          <p className="font-iranBold text-lg font-semibold tracking-widest text-green-700">
            {availDates.filter((item) => item[0] === date).flat()[1]}
          </p>
        ) : (
          <p className="text-red-600">
            وجود ندارد
          </p>
        )}
      </div>
    </li>
  );
}
