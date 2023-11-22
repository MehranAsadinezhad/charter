import React,{useState} from "react";
import { CiSquarePlus, CiCirclePlus } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { separate } from "../utils/helpers";
import logo from "../../../public/images/logo.jpg";

export function LeftSideReserve({ selectedFlight}) {
  const [formId,setFormId] = useState([0])
  // add passenger
  function addForm() {
    const newFormId = formId[formId.length - 1] + 1;
    setFormId([...formId, newFormId]);
  }
  return (
    <div className="col-span-10 flex flex-col">
      <div className="flex items-center gap-10">
        <button className="rounded-lg bg-sky-700 p-2 text-white">
          افزودن مسافر جدید
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <CiSquarePlus className=" cursor-pointer text-5xl text-secondary" />
            <div className="relative left-2 rounded-l-lg px-5 py-1.5 text-center text-white shadow-lg">
              کودک <span className="font-iranReg">2-12</span>
            </div>
          </div>
          <div className="flex items-center">
            <CiSquarePlus className=" cursor-pointer text-5xl text-secondary" />
            <div className="relative left-2 rounded-l-lg px-5 py-1.5 text-center text-white shadow-lg">
              کودک <span className="font-iranReg">2-12</span>
            </div>
          </div>
          <div className="flex items-center">
            <CiSquarePlus className=" cursor-pointer text-5xl text-secondary" />
            <div className="relative left-2 rounded-l-lg px-5 py-1.5 text-center text-white shadow-lg">
              نوزاد <span className="font-iranReg">2-0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 flex h-9 items-center bg-primary text-sm text-white">
        <p className="mr-12">رده سنی</p>
        <p className="mr-11">جنسیت</p>
        <p className="mr-14">نام</p>
        <p className="mr-28">نام خانوادگی</p>
        <p className="mr-16">پاسپورت/کدملی</p>
        <p className="mr-20">قیمت(ریال)</p>
      </div>
      <div className="form-container">
        <div className="flex items-center border-b-2 border-darkPrimary pb-3">
          <div className="flex items-center gap-1 text-white">
            <IoPersonSharp />
            <p className="relative top-0.5 font-iranReg">1</p>
          </div>
          <p className="mx-5 text-white">بزرگسال</p>
          <div className="ml-2 mr-6 flex">
            <button className="cursor-pointer bg-gray-300 px-2 text-gray-400 focus:bg-blue-700 focus:text-white">
              آقا
            </button>
            <button className="cursor-pointer border-r-2 border-gray-400 bg-gray-300 px-2 text-gray-400 focus:bg-blue-700 focus:text-white">
              خانم
            </button>
            <input type="text" required className="hidden"></input>
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
            <CiCirclePlus className="text-3xl font-bold text-white " />
          </button>
        </div>
      </div>
      <div className="my-5 flex flex-row-reverse gap-3 self-end border-b-2 border-darkPrimary pb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="number"
            required
            name="mobie"
            id="mobile"
            placeholder="موبایل"
            className="w-36 rounded-md p-2 outline-none"
          ></input>
          <input
            type="number"
            required
            name="imgcode"
            id="imgcoe"
            placeholder="کد تصویر"
            className="w-36 rounded-md p-2 outline-none"
          ></input>
        </div>
        <div className="my-3 flex flex-col items-center gap-2 text-white">
          <p className="text-sm">موبایل مسافر</p>
          <div>
            <img alt="tt" src={logo} className="w-20"></img>
          </div>
        </div>
      </div>
      <button className="bg-secondary hover:bg-sky-700 hover:text-white duration-300 transition-all px-8 rounded-lg py-1 self-end">
        رزرو
      </button>
    </div>
  );
}
