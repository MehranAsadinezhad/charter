import React from "react";
import AutomaticList from "../Ui/AutomaticList";

export default function About() {
  return (
    <>
      <div className="bg-about relative mt-24 h-[350px] flex lg:h-[600px] w-screen flex-col justify-center overflow-hidden">
        <div className="rotate absolute hidden lg:block right-0 top-0 z-40 w-[1600px] overflow-hidden text-center 2xl:w-full">
          <svg
            width="1998"
            height="109"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1998.1 109"
          >
            <path
              opacity="0.2"
              fill="#f7f7f7"
              d="M-1,107.6c346,0.6,524.3,4.7,878.4-4.4c286.6-7.4,442.5-54,608.3-51.2c205.4,3.5,310.3,72.8,513.3,49.7V1.2L-1,1.7V107.6z"
            ></path>
            <path
              opacity="0.2"
              fill="#f7f7f7"
              d="M1997.5,83.8c-251.3,30.8-441.2-38.7-499.9-52.4c-54.7-12.8-122.5-12-186.7,5.3c-154.2,41.6-315.5,70.9-475.2,67.5c-159.6-3.4-324.4-22.4-484.1-19.7C218.6,86.8,49,82.8-1,80.8C-1,59.5-1,1.1-1,1.1h1998.8L1997.5,83.8z"
            ></path>
            <path
              opacity="0.4"
              fill="#f7f7f7"
              d="M-2,88.7c139.8,12.7,219.9,10.7,360.2,11.1c285.5,0.8,487.5-18.1,736.2-51.2C1351,14.4,1451.5,13.3,1799,76.2c58.9,10.6,140,8,200,1.3V0H-1.5L-2,88.7z"
            ></path>
            <path
              fill="#f7f7f7"
              d="M362.6,79.6c193.8-11.8,366.7-24.8,568.8-49.9c110.2-13.7,221.1-21.6,332.2-19.6c187,3.3,344.8,29.7,561.3,69.8c122.2,22.6,173.2,4,173.2,4V0H0v83.7C0,83.7,166.1,91.7,362.6,79.6z"
            ></path>
          </svg>
        </div>
        <div className="grid lg:grid-cols-3 grid-col-12 2xl:px-[320px] px-14 lg:px-[120px]">
          <div className="col-span-2">
            <p className="mb-5 text-sm text-light">درباره ما</p>
            <p className="text-sm leading-8 text-light sm:h-auto h-40 overflow-y-scroll">
              بلیط چارتر هواپیما خود را از ما بخواهید. چارتر 118 (charter118) با
              بیش یک دهه تجربه در فروش انواع بلیط هواپیما از جمله چارتری و
              سیستمی توانسته رضایت مشتریان خود را جلب کند. ما در مجموعه چارتر
              118 انواع بلیط لحظه آخری هواپیما و بلیط ارزان هواپیما را برای شما
              عزیزان آماده کرده ایم تا بتوانید با خیالی راحت و آسود نسبت به خرید
              بلیط خود اقدام کنید. در چارتر 118 میتوانید انواع هتل های داخلی و
              خارجی نیز مشاهده و رزرو کنید. همچنین انواع تورهای جذاب داخلی و
              خارجی را چارتر 118 با قیمت‌های ویژه برای شما آماده کرده است تا
              سفری دلنشین و خاطره انگیز همراه ما داشته باشید.
            </p>
            <div className="text-end">
              <button className="rounded-md sm:mt-0 mt-3 bg-pink px-4 py-1 text-light">
                بیشتر
              </button>
            </div>
          </div>
          <div className="mr-20 hidden lg:block">
            <p className="mb-5 text-sm text-light">اطلاعیه های سایت</p>
            <div className="relative h-[160px] overflow-hidden">
              <AutomaticList />
            </div>
          </div>
        </div>
        <div className="rotate-180 hidden lg:block absolute right-0 bottom-0 z-40 w-[1600px] overflow-hidden text-center 2xl:w-full">
          <svg
            width="1998"
            height="109"
            className=""
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1998.1 109"
          >
            <path
              opacity="0.2"
              fill="#f7f7f7"
              d="M-1,107.6c346,0.6,524.3,4.7,878.4-4.4c286.6-7.4,442.5-54,608.3-51.2c205.4,3.5,310.3,72.8,513.3,49.7V1.2L-1,1.7V107.6z"
            ></path>
            <path
              opacity="0.2"
              fill="#f7f7f7"
              d="M1997.5,83.8c-251.3,30.8-441.2-38.7-499.9-52.4c-54.7-12.8-122.5-12-186.7,5.3c-154.2,41.6-315.5,70.9-475.2,67.5c-159.6-3.4-324.4-22.4-484.1-19.7C218.6,86.8,49,82.8-1,80.8C-1,59.5-1,1.1-1,1.1h1998.8L1997.5,83.8z"
            ></path>
            <path
              opacity="0.4"
              fill="#f7f7f7"
              d="M-2,88.7c139.8,12.7,219.9,10.7,360.2,11.1c285.5,0.8,487.5-18.1,736.2-51.2C1351,14.4,1451.5,13.3,1799,76.2c58.9,10.6,140,8,200,1.3V0H-1.5L-2,88.7z"
            ></path>
            <path
              fill="#ffff"
              d="M362.6,79.6c193.8-11.8,366.7-24.8,568.8-49.9c110.2-13.7,221.1-21.6,332.2-19.6c187,3.3,344.8,29.7,561.3,69.8c122.2,22.6,173.2,4,173.2,4V0H0v83.7C0,83.7,166.1,91.7,362.6,79.6z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
