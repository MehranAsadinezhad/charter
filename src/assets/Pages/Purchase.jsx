import React, { useContext, useState } from "react";
import { FlightContext } from "../context/FlightContext";
import { getDateFormat, separate } from "../utils/helpers";
import { RightSideReserve } from "../Ui/RightSideReserve.jsx";
import { LeftSideReserve } from "../Ui/LeftSideReserve.jsx";

export default function Purchase() {
  const { selectedFlight } = useContext(FlightContext);
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
      <div className="popup grid min-h-[100vh] grid-cols-12 gap-5 p-7">
        <RightSideReserve todayFa={todayFa} selectedFlight={selectedFlight} />
        <LeftSideReserve selectedFlight={selectedFlight} />
      </div>
    </>
  );
}
