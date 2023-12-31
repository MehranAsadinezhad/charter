import React from 'react'

export default function alibab() {
  return (
    <div>
        {/* alibaba reserve style  */}
      {/* <div className="flex flex-col items-center gap-5">
        <div className="my-10 flex h-[220px] w-full justify-between rounded-lg bg-white ring-1 ring-gray-300">
          <div className="flex flex-col gap-3 p-3 px-6">
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-purple-100 px-4 py-1 text-sm text-primary">
                بلیط رفت
              </p>
              <p className="font-bold text-darkGray">
                {selectedFlight.arrivalDateM}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-3">
                <img
                  src={selectedFlight.airlineLogo}
                  alt={selectedFlight.airlineLogo}
                ></img>
                <p className="text-center">
                  {selectedFlight.airelineNamePersian}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="rounded-xl bg-light px-2 text-sm">
                  {selectedFlight.cobinPersian}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="ml-5">
                {selectedFlight.fromFa}{" "}
                <span className="mx-2 text-lg font-bold">
                  {selectedFlight.departureTime}
                </span>
              </p>
              <FlightIcon />
              <p className="mr-5">
                {selectedFlight.toFa}{" "}
                <span className="mx-2 text-lg font-bold">
                  {selectedFlight.arrivalTime}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-r-2 border-gray-300 px-6 py-4">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="rounded-lg px-10 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50"
              >
                تغییر بلیط
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-between gap-5 text-darkGray">
                <p>بزرگسال</p>
                <p>
                  {separate(selectedFlight.adultPrice)}
                  <span className="mr-1 text-sm">
                    {selectedFlight.currencyTitle}
                  </span>
                </p>
              </div>
              <span className="h-[1px] w-40 bg-gray-300"></span>
              <div className="flex justify-between gap-5 text-darkGray">
                <p>مجموع</p>
                <p>
                  {separate(selectedFlight.adultPrice)}
                  <span className="mr-1 text-sm">
                    {selectedFlight.currencyTitle}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-5 rounded-lg bg-white p-5 ring-1 ring-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IoMdPeople className="text-3xl text-darkGray" />
              <h1 className="text-xl font-bold text-darkGray">
                مشخصات مسافران
              </h1>
            </div>
            <Timer />
          </div>
          <div className="forms-container">
            {formId.length > 0 &&
              formId?.map((form) => (
                <FormExtraPassenger
                  key={Math.random()}
                  formId={form}
                  setFormId={setFormId}
                />
              ))}
          </div>
          <div>
            <button
              onClick={addForm}
              className="rounded-lg px-5 py-2 text-primary ring-2 ring-primary transition-all duration-200 hover:bg-purple-50"
            >
              + اصافه کردن مسافر جدید
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
