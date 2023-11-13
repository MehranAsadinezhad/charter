import React, { useState } from "react";

export default function AutomaticList() {
  const [num, setNum] = useState(0);

  const myTime = () => {
    window.setTimeout(() => {
      setNum(() => num - 30);
    }, 3000);
  };

  if (num <= -160) {
    setNum(0);
  }else{
    myTime()
  }

  return (
    <ul
      style={{ top: `${num}px` }}
      className={`unorder absolute h-full text-sm leading-7 text-light transition-all duration-500`}
    >
      <li>راهنمای سفر به مالزی</li>
      <li>زمان کنسل کردن بلیط</li>
      <li>سامانه ثبت شکایت</li>
      <li>روش تهیه بلیط هواپیمت</li>
      <li>راهنمای سفر به مالزی</li>
      <li>زمان کنسل کردن بلیط</li>
      <li>سامانه ثبت شکایت</li>
      <li>روش تهیه بلیط هواپیمت</li>
      <li>راهنمای سفر به مالزی</li>
      <li>زمان کنسل کردن بلیط</li>
      <li>سامانه ثبت شکایت</li>
      <li>روش تهیه بلیط هواپیمت</li>
      <li>راهنمای سفر به مالزی</li>
      <li>زمان کنسل کردن بلیط</li>
      <li>سامانه ثبت شکایت</li>
      <li>روش تهیه بلیط هواپیمت</li>
    </ul>
  );
}
