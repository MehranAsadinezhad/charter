import React from "react";
import { separate } from "../utils/helpers";
import { CiCirclePlus } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

export default function PassengerForm({
  selectedFlight,
  index,
  // onHandleRemoveForm,
  // onHandleChange,
}) {
  return (
    <form
      className={`flex items-center border-b-2 border-darkPrimary p-3 pr-0`}
    >
      <div className="flex items-center gap-1 text-white">
        <IoPersonSharp />
        <p className="relative top-0.5 font-iranReg">1</p>
      </div>
      <p className="mx-5 text-white">بزرگسال</p>
      <div className="ml-2 mr-6 flex">
        <select name="gender" id="gender">
          <option value="1">آقا</option>
          <option value="2">خانم</option>
        </select>
      </div>
      <input
        type="text"
        className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
        placeholder="نام Name"
      />
      <input
        type="text"
        required
        className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
        placeholder="فامیل Family"
      />
      <input
        type="number"
        required
        className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
        placeholder="پاسپوت/کد ملی"
      />
      <p className="mx-8 font-iranReg text-white">
        {separate(selectedFlight?.adultPrice)}
      </p>
      <button>
        <FaXmark className="rounded-md p-1 text-xl font-bold text-white ring-2 ring-white" />
      </button>
    </form>
  );
}
