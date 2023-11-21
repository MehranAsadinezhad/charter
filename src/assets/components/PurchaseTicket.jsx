import React, { useState } from "react";
import charter from "../../../public/images/charter.jpg";

export default function PurchaseTicket() {
  const [show, setShow] = useState(false);

  return (
    <section className="mt-8">
      <div className="text-center">
        <h1 className="text-darkGray inline-block border-b-2 border-primary text-lg font-bold">
          خرید بلیط چارتر هواپیما در چارتر 118
        </h1>
      </div>
      <div
        className={`lg:mx-40 mx-10 mt-8 ${
          !show ? "h-[450px]" : ""
        } overflow-hidden scroll-smooth rounded-md bg-white transition-all duration-200`}
      >
        <div className="px-20 py-20">
          <h1 className="text-skyDark text-xl font-semibold">
            بلیط چارتر هواپیما
          </h1>
          <p className="text-gg my-5 text-sm leading-7">
            زمانی که مسافران قصد خرید{" "}
            <strong className="text-secondary">بلیط چارتر</strong> هواپیما را
            دارند، ملاک‌هایی را برای آن در نظر می‌گیرند. اما نکته‌ای که شاید
            کمتر بدان توجه کنند، چارتری یا سیستمی بودن بلیط هواپیما است. فرق این
            دو نوع بلیط در مقصدهای خارجی بیشتر نمایان می‌شود و مسافران باید قبل
            از خرید حتما به آن توجه کنند.
          </p>
          <div className="flex items-center justify-center">
            <img
              alt="char"
              className="mb-5 h-[500px] w-[500px]"
              src={charter}
            ></img>
          </div>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            بلیط چارتر
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            بلیط چارتر به این روش فروخته می‌شود که یک آژانس مسافرتی اقدام به
            اجاره تمام صندلی‌های یک هواپیما در یک مسیر مشخص می‌کند. سپس متناسب
            با نرخ مصوب سازمان هواپیمایی کشوری روی این بلیط‌ها قیمت‌گذاری
            می‌کند. چارترکننده‌ها مجاز به قیمت‌گذاری مورد نظر خود روی بلیط
            چارتری هستند.
          </p>
          <p className="text-gg my-9 text-lg leading-8">
            قیمت بلیط چارتر دارای نوسانات بسیاری است. بدین شکل که در زمان اوج
            مسافر، شاهد افزایش قیمت در بلیط‌های چارتری هستیم. اما در زمانی که از
            شدت مسافران بنابر دلایلی کاسته می‌شود؛ چارترکننده برای آنکه صندلی
            پیش خرید کرده را به فروش برساند؛ قیمت بلیط چارتری را کاهش می‌دهد.
          </p>
          <h1 className="my-5 text-2xl font-semibold text-secondary">
            اجاره صندلی چارتر هواپیما
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            «سیت چارتر» اصطلاح دیگری است که در خصوص شرایط چارتری وجود دارد.
            زمانی که یک آژانس هواپیمایی اقدام به اجاره برخی از صندلی‌های پرواز
            سیستمی از یک شرکت هواپیمایی کند؛ گفته می‌شود سیت چارتر انجام داده
            است. در این وضعیت، چارتر کننده فقط می‌تواند روی صندلی‌های اجاره شده
            قیمت‌گذاری کند و اجازه‌ای مبنی بر تعیین و تاریخ پرواز ندارد.
          </p>
          <p className="text-gg my-8 text-lg leading-8">
            سیت چارتر به سه صورت انجام می‌شود:
          </p>
          <ul className="mb-8 mr-7">
            <li className="list-section text-gg list-disc">جاره شناور صندلی</li>
            <li className="list-section text-gg list-disc">
              اجاره صندلی رفت‌ و برگشت
            </li>
            <li className="list-section text-gg list-disc">
              اجاره صندلی‌های مشخص شده
            </li>
          </ul>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            خرید بلیط چارتر در مسیرهای پرطرفدار
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            ارزانی نسبی خرید بلیط چارتر باعث شده تا مسافران برای خرید بلیط
            هواپیما خارجی به‌سمت بلیط چارتری خارجی جذب شوند. برخی از مسیرهای
            پرواز به‌علت حجم بالای مسافر در زمان‌های گوناگون دارای بالاترین حجم
            بلیط چارتر خارجی هستند. به‌طور کل چارترکنندگان در مسیرهای پرطرفدار
            داخلی و خارجی بیشتر فعالیت دارند.
          </p>
          <p className="text-gg my-5 text-lg leading-8">
            از جمله مسیرهای پر ترافیک چارتری می‌توان به بلیط هواپیما مشهد تهران،
            بلیط هواپیما تهران تبریز، بلیط هواپیما مشهد کرمان و موارد دیگری
            اشاره کرد.
          </p>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            چگونه بلیط چارتر بخریم؟
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            باری خرید بلیط چارتر شما می‌توانید به ابتدا همین صفحه مراجعه کرده و
            مبدا و مقصد و تاریخ پرواز خود را مشخص کنید. بعد از جستجو لیستی از
            تمامی پروازهای موجود بین مبدا و مقصد شما به نمایش در می‌آید. در این
            قسمت آن دسته از پروازهایی که برچسب اکونومی دارند را می‌توانید انتخاب
            کنید و نسبت به رزرو آنها اقدام کنید.
          </p>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            تفاوت پرواز چارتری و سیستمی در بلیط هواپیما
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            عمده‌ترین تفاوت پرواز چارتری و سیستمی در نحوه قیمت‌گذاری و فروش{" "}
            <strong className="text-darkBlue cursor-pointer text-lg">
              بلیط هواپیما
            </strong>{" "}
            است. همان طور که در بالاتر هم اشاره کردیم فروش بلیط چارتر بر عهده
            آژانس چارترکننده است و بلیط سیستمی را ایرلاین‌ها و آژانس‌های
            هواپیمایی به فروش می‌رسانند.
          </p>
          <p className="text-gg my-5 text-lg leading-8">
            اما جز بحث قیمتی، این دو بلیط در مواردی دیگر نیز دارای تفاوت‌هایی
            هستند که باید حتماً هنگام خرید بلیط هواپیما، بدان ها دقت کرد زیرا در
            برنامه سفری مسافران ممکن است تأثیرگذار باشد.
          </p>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            نکات مثبت و منفی بلیط چارتری
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            مسافران برای خرید بلیط هواپیما، قاعدتاً از بلیط‌ سیستمی یا چارتری
            استفاده می‌کنند. در ادامه به نکات مثبت و منفی بلیط چارتری می‌پردازیم
            تا هنگام خرید یا در پرواز دچار مشکل نشوید.
          </p>
          <ul className="mb-8 mr-7">
            <li className="list-section text-gg list-disc text-sm leading-7">
              بسیاری بر این باورند که خرید بلیط چارتر، آن‌ها را به{" "}
              <strong className="text-darkBlue cursor-pointer text-base">
                بلیط ارزان هواپیما
              </strong>{" "}
              نزدیک می‌کند. اما این کاملاً باور غلطی است. چارترکننده به‌دنبال
              سود خود است پس لزومی به ارزان فروشی ندارد. اگر به‌دنبال خرید بلیط
              ارزان هواپیما هستید، پس باید زمان‌های کم سفر یا ایام کاهش مسافر را
              انتخاب کنید.
            </li>
            <li className="list-section text-gg list-disc text-sm leading-7">
              یکی از نکات منفی که بسیاری از مسافران به پروازهای چارتر نسبت
              می‌دهند؛ تأخیر در زمان پرواز است. در بلیط‌های چارتری ارسال مشخصات
              خریدار، دست چارتر کننده است که باید به شرکت هواپیمایی مذکور ارسال
              کند که گاهی اوقات این اتفاق می‌افتد که اسامی برخی از مسافران در
              برنامه پروازی ثبت نمی‌شود.
            </li>
            <li className="list-section text-gg list-disc text-sm leading-7">
              همین پروسه سبب تأخیر پرواز یا جاماندن از پرواز می‌شود. البته اگر
              <strong className="text-darkBlue cursor-pointer text-base">
                بلیط لحظه آخری
              </strong>{" "}
              خود را از چارتر 118 رزرو کنید، هیچگاه به این مشکل بر نمی‌خورید.
              بلیط چارتری اکثراً برای مسیرهای خاص و پرطرفدار فروخته می‌شود.
            </li>
          </ul>
          <h1 className="text-skyDark my-5 text-2xl font-semibold">
            چه زمانی نباید اقدام به خرید بلیط چارتری کنیم؟
          </h1>
          <p className="text-gg my-5 text-lg leading-8">
            اما خرید بلیط چارتر در چه زمان‌هایی توصیه نمی‌شود که در ادامه به شرح
            آنها خواهیم پرداخت:
          </p>
          <ul className="mb-8 mr-7">
            <li className="list-section texst-sm text-gg list-disc leading-7">
              اولین مورد زمانی است که با خود کودک همراه دارید. قیمت بلیط کودکان
              در نوع چارتری با بزرگسالان یکسان است به همین دلیل اگر با خود کودک
              همراه دارید بهتر است که از این نوع بلیط استفاده نکنید.
            </li>
            <li className="list-section texst-sm text-gg list-disc leading-7">
              مورد دوم زمانی است که در ایام پر سفر سال قرار داریم. در این روزها
              گاها قیمت بلیط چارتری از سیستمی نیز بیشتر می‌شود به همین دلیل بهتر
              است از خرید بلیط در این ایام بپرهیزید.
            </li>
            <li className="list-section texst-sm text-gg list-disc leading-7">
              همچنین اگر از سفر خود اطمینان ندارید بلیط هواپیما چارتر خریداری
              نکنید چرا که معمولا درصد جریمه کنسلی این نوع بلیط بسیار بالا
              می‌باشد.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 z-20 mx-10 lg:mx-40 flex h-20 items-end justify-center">
        <button
          onClick={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
          className="rounded-md text-sm px-12 py-3 text-gray-700 ring-1 ring-gray-400"
        >
          {show ? "کمتر" : "بیشتر"}...
        </button>
      </div>
    </section>
  );
}
