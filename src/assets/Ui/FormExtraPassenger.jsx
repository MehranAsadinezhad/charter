import React from "react";

export default function FormExtraPassenger({ formId, setFormId }) {
  function removeForm() {
    setFormId((pre) => pre.filter((form) => form !== formId));
  }
  return (
    <form className="my-5">
      <div className="flex items-center justify-between">
        <select
          id="type"
          name="type"
          className="rounded-full px-2 py-1 text-darkGray outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-darkGray"
        >
          <option value="adl">بزرگسال (+12)</option>
          <option value="chi">کودک (2-12)</option>
          <option value="inf">نوزاد (0-2)</option>
        </select>
        {formId > 0 && (
          <button
            onClick={removeForm}
            className="rounded-lg px-3 py-1 text-red-600 ring-2 ring-red-600 transition-all duration-200 hover:bg-red-50"
          >
            حذف
          </button>
        )}
      </div>
      <div className="my-5 grid grid-cols-4 gap-x-5 gap-y-8">
        <input
          className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="first_name"
          name="first_name"
          type="text"
          placeholder="نام"
          required
        />
        <input
          className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="last_name"
          name="last_name"
          type="text"
          placeholder="نام خانوادگی"
          required
        />
        <select
          className="focus: rounded-lg p-2 text-gray-400 ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="gender"
          name="gender"
        >
          <option value="" disabled selected>
            جنسیت
          </option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        <input
          className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="na_code"
          name="na_code"
          type="number"
          placeholder="کد ملی / پاسپورت"
          required
        />
        <input
          className="rounded-lg p-2 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="birthday"
          name="birthday"
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          placeholder="تاریخ تولد"
          required
        />
        <select
          className="rounded-lg p-2 text-gray-400 outline-none ring-1 ring-lightGray transition-all duration-200 focus:ring-2 focus:ring-darkGray"
          id="nationality"
          name="nationality"
        >
          <option value="" disabled selected>
            ملیت
          </option>
          <option value="IRN">ایرانی</option>
          <option value="FOR">اتباع خارجی</option>
        </select>
      </div>
      <hr className="mt-8 w-full"></hr>
    </form>
  );
}
