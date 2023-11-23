import React, { useContext, useState } from "react";
import { CiSquarePlus, CiCirclePlus } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { separate } from "../utils/helpers";
import logo from "../../../public/images/logo.jpg";
import PassengerForm from "./PassengerForm";
import { FaPlus } from "react-icons/fa";
import { FlightContext } from "../context/FlightContext";
import { myConfig } from "../../../public/myConfig";

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
  const { setLoading, setSearchFlight, setAvailFlights } =
    useContext(FlightContext);
  const [mobileNumber, setMobileNumber] = useState("");
  const [forms, setForms] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [showLastReserve, setShowLastReserve] = useState(false);
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(1);
  const [addEmail, setAddEmail] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [passengerCode, setPassengerCode] = useState("");
  const [passengerType, setPassengerType] = useState("ADL");
  console.log(selectedFlight);

  const handleSubmit = () => {
    setShowLastReserve(true);
    const passengers = [];
    const mm = {
      passengerType: passengerType,
      fnamefa: "",
      lnamefa: "",
      fnameen: firstName,
      lnameen: lastName,
      gender: gender,
      nationality: 1,
      passengerCode: passengerCode,
      nationalitycode: "IRI",
      expdate: "2020-02-02",
      birthday: "2020-02-02",
    };
    passengers.push(mm);
    console.log(passengers);
    const value = {
      from_flight: selectedFlight?.from,
      to_flight: selectedFlight?.to,
      date_flight: selectedFlight.date_flight,
      time_flight: selectedFlight.time_flight,
      number_flight: selectedFlight.number_flight,
      ajency_online_ID: selectedFlight.ajency_online_ID,
      cabinclass: selectedFlight.cabinclass,
      sellingType: selectedFlight.sellingType,
      airline: selectedFlight.airline,
      mobile: mobileNumber,
      email: addEmail,
      passengers: passengers,
    };
    setLastValue(value);
  };

  async function handleLastSubmit(e) {
    try {
      setLoading(true);
      const res = await fetch(`${myConfig.api}/Reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(lastValue),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      throw Error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="col-span-10 flex flex-col">
      {!showLastReserve && (
        <div className="flex flex-col">
          <div className="flex items-center gap-10">
            <button className="rounded-lg bg-sky-700 p-2 text-white">
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
      )}
      {showLastReserve && (
        <div className="flex w-full items-center gap-5">
          <div className="flex w-2/3 flex-col">
            <div className="my-3 flex h-9 items-center justify-around bg-primary text-sm text-white">
              <p className="mr-12">رده سنی</p>
              <p className="mr-14">نام</p>
              <p className="mr-28">نام خانوادگی</p>
              <p className="mr-20">قیمت(ریال)</p>
            </div>
            <div className="flex items-center border-b-2 border-darkPrimary pb-3">
              <div className="flex items-center gap-1 text-white">
                <IoPersonSharp />
                <p className="relative top-0.5 font-iranReg">1</p>
              </div>
              <p className=" mx-16 text-white">بزرگسال</p>
              <div className="mx-16 text-white">
                <p>{firstName}</p>
              </div>
              <div className="mx-32 text-white">
                <p>{lastName}</p>
              </div>

              <p className="mr-16 font-iranReg text-white">
                {separate(selectedFlight?.price_final)}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b-2 border-white py-4 text-sm font-semibold text-white">
                <p>جمع کل</p>
                <p>432542524</p>
              </div>
              <div className="flex items-center justify-between border-b-2 border-white pb-4 text-sm font-semibold text-white">
                <p>تخفیف کل(%0.5)</p>
                <p>235252</p>
              </div>
              <div className="flex items-center justify-between border-b-2 border-white pb-4 text-sm font-semibold text-white">
                <p>مبلغ قابل پرداخت</p>
                <p>2352523</p>
              </div>
            </div>
          </div>

          <div className="flex w-1/3 flex-col gap-3">
            <div className="flex flex-col items-center gap-5 rounded-md p-3 ring-2 ring-white">
              <div className="flex items-center gap-3">
                <p className="text-white">ایمیل:</p>
                <input
                  onChange={(e) => setAddEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="rounded-md p-1"
                ></input>
              </div>
              <div className="flex items-center gap-3 text-white">
                <input type="checkbox" name="" id="" />
                <p>ایمیل ندارم</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-md p-3 text-white ring-2 ring-white">
              <p>امکان پرداخت توسط کلیه کارت های شتاب</p>
              <input className="rounded-md bg-secondary"></input>
              <button onClick={handleLastSubmit} className="rounded-md bg-secondary px-5 py-1 text-white">
                پرداخت
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
