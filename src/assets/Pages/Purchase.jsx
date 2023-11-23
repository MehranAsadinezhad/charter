import React, { useContext, useState } from "react";
import { FlightContext } from "../context/FlightContext";
import FlightIcon from "../Ui/FlightIcon";
import { useNavigate } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { getDateFormat, separate } from "../utils/helpers";
import Timer from "../Ui/Timer";
import Loader from "../Ui/Loader";
import FormExtraPassenger from "../Ui/FormExtraPassenger";
import { LuPlane } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { SiCriticalrole } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { RightSideReserve } from "../Ui/RightSideReserve.jsx";
import { LeftSideReserve } from "../Ui/LeftSideReserve.jsx";

export default function Purchase() {
  const { selectedFlight, loading } = useContext(FlightContext);
  // const [formId, setFormId] = useState([0]);

  // function addForm() {
  //   const newFormId = formId[formId.length - 1] + 1;
  //   setFormId([...formId, newFormId]);
  // }


  // changeable dates
  const todayFa = {
    day: getDateFormat(new Date(selectedFlight?.date_flight), {
      day: "2-digit",
    }),
    month: getDateFormat(new Date(selectedFlight?.date_flight), {
      month: "numeric",
    }),
    monthTitle: getDateFormat(new Date(selectedFlight?.date_flight), {
      month: "long",
    }),
    year: getDateFormat(new Date(selectedFlight?.date_flight), {
      year: "numeric",
    }),
    dayWeek: getDateFormat(new Date(selectedFlight?.date_flight), {
      weekday: "long",
    }),
  };


  return (
    <>
      {loading && <Loader />}
      <div className="popup grid min-h-[100vh] grid-cols-12 gap-5 p-7">
        <RightSideReserve todayFa={todayFa} selectedFlight={selectedFlight} />
        <LeftSideReserve selectedFlight={selectedFlight} />
      </div>
    </>
  );
}
