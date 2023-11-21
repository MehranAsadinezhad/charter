import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(900);
  useEffect(() => {
    const time = setInterval(() => {
      setSecondsRemaining(() => secondsRemaining - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [secondsRemaining, setSecondsRemaining]);

  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  const navigate = useNavigate();
  if(secondsRemaining === 0){
    navigate('/passenger')
  }
  return (
    <div className="relative flex flex-row-reverse rounded-lg items-center justify-center gap-1 bg-gray-100 p-2 font-iranBold text-primary">
      {/* <span className="countdown">
        <span style={{ "--value": min }}></span>
      </span>:
      <span className="countdown">
        <span style={{ "--value": sec }}></span>
      </span> */}
      <span>{min < 10 ? `0${min}` : min}</span>:<span>{sec < 10 ? `0${sec}` : sec}</span>
    </div>
  );
}
