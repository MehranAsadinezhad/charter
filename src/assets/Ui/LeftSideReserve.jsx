import React, { useState } from "react";
import { CiSquarePlus, CiCirclePlus } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { separate } from "../utils/helpers";
import logo from "../../../public/images/logo.jpg";
import PassengerForm from "./PassengerForm";
import { FaPlus } from "react-icons/fa";

export function LeftSideReserve({ selectedFlight }) {
  // const [formId, setFormId] = useState([0]);
  // add passenger
  // function addForm() {
  //   const newFormId = formId[formId.length - 1] + 1;
  //   setFormId([...formId, newFormId]);
  // }

  //   {
  //     passengerType: "ADL",
  //     fnamefa: "تست",
  //     lnamefa: "تست",
  //     fnameen: "Test",
  //     lnameen: "Test",
  //     gender: 1,
  //     nationality: 1,
  //     passengerCode: "1234567890",
  //     nationalitycode: "IRI",
  //     expdate: "2020-02-02",
  //     birthday: "2020-02-02",
  //   },
  // ],

  const [mobileNumber, setMobileNumber] = useState("");
  const [forms, setForms] = useState([0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(1);
  const [passengerCode, setPassengerCode] = useState("");
  const [passengerType, setPassengerType] = useState("ADL");
  console.log(forms.length);
  
  function addForm() {
    const newFormId = forms[forms.length - 1] + 1;
    setForms([...forms, newFormId]);
  }

  const handleRemoveForm = (i) => {
    setForms((pre) => pre.filter((form) => form !== i));
  };

  const handleSubmit = () => {
    const passengers = [];
    const mm = {
      passengerType: passengerType,
      fnameen: firstName,
      lnameen: lastName,
      gender: gender,
      passengerCode: passengerCode,
    };
    passengers.push(mm);
    console.log(passengers);

    const value = {
      from_flight: selectedFlight?.from,
      to_flight: selectedFlight?.to,
      date_flight: "2023-11-03",
      time_flight: "18:00:00",
      number_flight: "Y91234",
      ajency_online_ID: 446,
      cabinclass: "v",
      sellingType: "v",
      airline: "KishAir",
      mobile: mobileNumber,
      email: "test@test.com",
      passengers: passengers,
    };
    console.log(mm);
  };

  return (
    <div className="col-span-10 flex flex-col">
      <div className="flex items-center gap-10">
        <button
          onClick={addForm}
          className="rounded-lg bg-sky-700 p-2 text-white"
        >
          افزودن مسافر جدید
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <CiSquarePlus className=" cursor-pointer text-5xl text-secondary" />
            <div className="relative left-2 rounded-l-lg px-5 py-1.5 text-center text-white shadow-lg">
              بزرگسال <span className="font-iranReg">12+</span>
            </div>
          </div>
          <div className="flex items-center">
            <CiSquarePlus className=" cursor-pointer text-5xl text-secondary" />
            <div className="relative left-2 rounded-l-lg px-5 py-1.5 text-center text-white shadow-lg">
              کودک <span className="font-iranReg">12-2</span>
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
        <form
          id="aval"
          className="flex items-center border-b-2 border-darkPrimary pb-3"
        >
          <div className="flex items-center gap-1 text-white">
            <IoPersonSharp />
            <p className="relative top-0.5 font-iranReg">1</p>
          </div>
          <p className="mx-5 text-white">بزرگسال</p>
          <div className="ml-2 mr-6 flex">
            {/* <button className="cursor-pointer bg-gray-300 px-2 text-gray-400 focus:bg-blue-700 focus:text-white">
              آقا
            </button>
            <button className="cursor-pointer border-r-2 border-gray-400 bg-gray-300 px-2 text-gray-400 focus:bg-blue-700 focus:text-white">
              خانم
            </button>
            <input type="text" required className="hidden"></input> */}
            <select
              onChange={(e) => setGender(+e.target.value)}
              name="gender"
              id="gender"
            >
              <option value="1">آقا</option>
              <option value="2">خانم</option>
            </select>
          </div>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            name="fnamefa"
            id="fnamefa"
            type="text"
            className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
            placeholder="نام Name"
            required
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            name="lnamefa"
            id="lnamefa"
            type="text"
            required
            className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
            placeholder="فامیل Family"
          />
          <input
            onChange={(e) => setPassengerCode(e.target.value)}
            type="number"
            name="passengerCode"
            required
            className="mx-1 w-32 rounded-md px-2 py-1 outline-none placeholder:text-sm"
            placeholder="پاسپوت/کد ملی"
          />
          <p className="mx-8 font-iranReg text-white">
            {separate(selectedFlight?.price_final)}
          </p>
          <button>
            <FaPlus className="rounded-md p-1 text-xl font-bold text-white ring-2 ring-white" />
          </button>
        </form>
        {forms.map((form, index) => (
          <PassengerForm
            index={index}
            onHandleRemoveForm={handleRemoveForm}
            // onHandleChange={handleChange}
            key={form.id}
            selectedFlight={selectedFlight}
          />
        ))}
      </div>
      <div className="my-5 flex flex-row-reverse gap-3 self-end border-b-2 border-darkPrimary pb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="number"
            required
            name="mobie"
            id="mobile"
            placeholder="موبایل"
            className="w-40 rounded-md p-2 text-sm outline-none"
            onChange={(e) => setMobileNumber(String(e.target.value))}
          ></input>
          <input
            type="number"
            required
            name="imgcode"
            id="imgcoe"
            placeholder="کد تصویر"
            className="w-40 rounded-md p-2 text-sm outline-none"
          ></input>
        </div>
        <div className="my-3 flex flex-col items-center gap-2 text-white">
          <p className="text-sm">موبایل مسافر</p>
          <div>
            <img alt="tt" src={logo} className="w-20"></img>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="self-end rounded-lg bg-secondary px-8 py-1 transition-all duration-300 hover:bg-sky-700 hover:text-white"
      >
        رزرو
      </button>
    </div>
  );
}
