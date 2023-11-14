import React, { useContext } from "react";
import FlightCart from "../Ui/FlightCart";
import { FlightContext } from "../context/FlightContext";

const fakeFlight = {
  success: true,
  message: "Flights available",
  flights: [
    {
      id: "100813",
      capacity: 1,
      currencyTitle: "\u062a\u0648\u0645\u0627\u0646",
      adultPrice: 1805400,
      childPrice: 1805400,
      infantPrice: 1805400,
      discountPrice: 1805400,
      airlineName: "Taban",
      airlineCode: "HH",
      airelineNamePersian: "\u062a\u0627\u0628\u0627\u0646",
      airlineLogo: "https://respina24.ir/assets/images/them1/internal/10.png",
      from: "THR",
      to: "MHD",
      fromFa: "\u062a\u0647\u0631\u0627\u0646",
      toFa: "\u0645\u0634\u0647\u062f",
      flightNumber: "6326",
      pet: 0,
      aircraft: "\u0628\u0648\u0626\u064a\u0646\u06af",
      departureDate: "2023-11-16",
      departureDateJalali: {
        0: "1700080200",
        seconds: "0",
        minutes: "0",
        hours: "0",
        mday: "25",
        wday: "5",
        mon: "8",
        year: "1402",
        yday: "240",
        weekday: "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
        month: "\u0622\u0628\u0627\u0646",
      },
      departureTime: "19:00",
      arrivalTime: "20:20",
      api: "",
      flightDuration: "1:20",
      class: "",
      lastUpdate: "",
      refresh: "Taban",
      CIP: "",
      cobin: "ECONOMY",
      noe: "ticharter",
      cobinPersian: "\u0627\u06a9\u0648\u0646\u0648\u0645\u06cc",
      Baggage: "20 \u06a9\u06cc\u0644\u0648\u06af\u0631\u0645",
      refundRules: [
        {
          penalty: "70% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 72 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "80% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 24 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "95% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "100% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u0627\u0632 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0645\u0627\u0646\u062f\u0647 \u0628\u0647 \u067e\u0631\u0648\u0627\u0632",
        },
      ],
      type: "charter",
      noe_en: "charter",
      typePersian: "",
      nextDay: "1402-08-26",
      previousDay: "1402-08-24",
      dayTimeDeparture: "19",
      minutesTimeDeparture: "00",
      dayTimeTextDeparture: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdDeparture: 5,
      dayTimeArrival: "20",
      minutesTimeArrival: "20",
      dayTimeTextArrival: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdArrival: 5,
      arrivalDate: "08/25 \u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      arrivalDateM:
        "\u067e\u0646\u062c\u0634\u0646\u0628\u0647 25 \u0622\u0628\u0627\u0646",
      stop: 0,
      stops: 0,
      isInternational: 0,
      isSuggest: 0,
      approvedRate: 1714800,
      isMoreThanApprovedRate: 1,
      moreThanApprovedText:
        "\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06cc\u06a9 \u0634\u0628 \u0627\u0642\u0627\u0645\u062a",
      mainMoreThanApprovedRate: 1,
      allClass: [],
      foreignClass: 0,
      from_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0645\u0647\u0631 \u0627\u0628\u0627\u062f ",
      to_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0628\u06cc\u0646 \u0627\u0644\u0645\u0644\u0644\u06cc \u0634\u0647\u06cc\u062f \u0647\u0627\u0634\u0645\u06cc \u0646\u0698\u0627\u062f ",
      refundable: true,
      cabinTypeForReserveLink: "Economy",
    },
    {
      id: "100813",
      capacity: 1,
      currencyTitle: "\u062a\u0648\u0645\u0627\u0646",
      adultPrice: 1805400,
      childPrice: 1805400,
      infantPrice: 1805400,
      discountPrice: 1805400,
      airlineName: "Taban",
      airlineCode: "HH",
      airelineNamePersian: "\u062a\u0627\u0628\u0627\u0646",
      airlineLogo: "https://respina24.ir/assets/images/them1/internal/10.png",
      from: "THR",
      to: "MHD",
      fromFa: "\u062a\u0647\u0631\u0627\u0646",
      toFa: "\u0645\u0634\u0647\u062f",
      flightNumber: "6326",
      pet: 0,
      aircraft: "\u0628\u0648\u0626\u064a\u0646\u06af",
      departureDate: "2023-11-16",
      departureDateJalali: {
        0: "1700080200",
        seconds: "0",
        minutes: "0",
        hours: "0",
        mday: "25",
        wday: "5",
        mon: "8",
        year: "1402",
        yday: "240",
        weekday: "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
        month: "\u0622\u0628\u0627\u0646",
      },
      departureTime: "19:00",
      arrivalTime: "20:20",
      api: "",
      flightDuration: "1:20",
      class: "",
      lastUpdate: "",
      refresh: "Taban",
      CIP: "",
      cobin: "ECONOMY",
      noe: "ticharter",
      cobinPersian: "\u0627\u06a9\u0648\u0646\u0648\u0645\u06cc",
      Baggage: "20 \u06a9\u06cc\u0644\u0648\u06af\u0631\u0645",
      refundRules: [
        {
          penalty: "70% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 72 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "80% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 24 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "95% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "100% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u0627\u0632 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0645\u0627\u0646\u062f\u0647 \u0628\u0647 \u067e\u0631\u0648\u0627\u0632",
        },
      ],
      type: "charter",
      noe_en: "charter",
      typePersian: "",
      nextDay: "1402-08-26",
      previousDay: "1402-08-24",
      dayTimeDeparture: "19",
      minutesTimeDeparture: "00",
      dayTimeTextDeparture: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdDeparture: 5,
      dayTimeArrival: "20",
      minutesTimeArrival: "20",
      dayTimeTextArrival: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdArrival: 5,
      arrivalDate: "08/25 \u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      arrivalDateM:
        "\u067e\u0646\u062c\u0634\u0646\u0628\u0647 25 \u0622\u0628\u0627\u0646",
      stop: 0,
      stops: 0,
      isInternational: 0,
      isSuggest: 0,
      approvedRate: 1714800,
      isMoreThanApprovedRate: 1,
      moreThanApprovedText:
        "\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06cc\u06a9 \u0634\u0628 \u0627\u0642\u0627\u0645\u062a",
      mainMoreThanApprovedRate: 1,
      allClass: [],
      foreignClass: 0,
      from_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0645\u0647\u0631 \u0627\u0628\u0627\u062f ",
      to_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0628\u06cc\u0646 \u0627\u0644\u0645\u0644\u0644\u06cc \u0634\u0647\u06cc\u062f \u0647\u0627\u0634\u0645\u06cc \u0646\u0698\u0627\u062f ",
      refundable: true,
      cabinTypeForReserveLink: "Economy",
    },
    {
      id: "100813",
      capacity: 1,
      currencyTitle: "\u062a\u0648\u0645\u0627\u0646",
      adultPrice: 1805400,
      childPrice: 1805400,
      infantPrice: 1805400,
      discountPrice: 1805400,
      airlineName: "Taban",
      airlineCode: "HH",
      airelineNamePersian: "\u062a\u0627\u0628\u0627\u0646",
      airlineLogo: "https://respina24.ir/assets/images/them1/internal/10.png",
      from: "THR",
      to: "MHD",
      fromFa: "\u062a\u0647\u0631\u0627\u0646",
      toFa: "\u0645\u0634\u0647\u062f",
      flightNumber: "6326",
      pet: 0,
      aircraft: "\u0628\u0648\u0626\u064a\u0646\u06af",
      departureDate: "2023-11-16",
      departureDateJalali: {
        0: "1700080200",
        seconds: "0",
        minutes: "0",
        hours: "0",
        mday: "25",
        wday: "5",
        mon: "8",
        year: "1402",
        yday: "240",
        weekday: "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
        month: "\u0622\u0628\u0627\u0646",
      },
      departureTime: "19:00",
      arrivalTime: "20:20",
      api: "",
      flightDuration: "1:20",
      class: "",
      lastUpdate: "",
      refresh: "Taban",
      CIP: "",
      cobin: "ECONOMY",
      noe: "ticharter",
      cobinPersian: "\u0627\u06a9\u0648\u0646\u0648\u0645\u06cc",
      Baggage: "20 \u06a9\u06cc\u0644\u0648\u06af\u0631\u0645",
      refundRules: [
        {
          penalty: "70% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 72 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "80% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 24 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "95% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u062a\u0627 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u0648\u0627\u0632",
        },
        {
          penalty: "100% \u062c\u0631\u06cc\u0645\u0647",
          text: "\u0627\u0632 \u06cc\u06a9 \u0633\u0627\u0639\u062a \u0645\u0627\u0646\u062f\u0647 \u0628\u0647 \u067e\u0631\u0648\u0627\u0632",
        },
      ],
      type: "charter",
      noe_en: "charter",
      typePersian: "",
      nextDay: "1402-08-26",
      previousDay: "1402-08-24",
      dayTimeDeparture: "19",
      minutesTimeDeparture: "00",
      dayTimeTextDeparture: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdDeparture: 5,
      dayTimeArrival: "20",
      minutesTimeArrival: "20",
      dayTimeTextArrival: "\u0639\u0635\u0631=>(17=>00-21=>00)",
      dayTimeIdArrival: 5,
      arrivalDate: "08/25 \u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      arrivalDateM:
        "\u067e\u0646\u062c\u0634\u0646\u0628\u0647 25 \u0622\u0628\u0627\u0646",
      stop: 0,
      stops: 0,
      isInternational: 0,
      isSuggest: 0,
      approvedRate: 1714800,
      isMoreThanApprovedRate: 1,
      moreThanApprovedText:
        "\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06cc\u06a9 \u0634\u0628 \u0627\u0642\u0627\u0645\u062a",
      mainMoreThanApprovedRate: 1,
      allClass: [],
      foreignClass: 0,
      from_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0645\u0647\u0631 \u0627\u0628\u0627\u062f ",
      to_airport_name:
        " \u0641\u0631\u0648\u062f\u06af\u0627\u0647 \u0628\u06cc\u0646 \u0627\u0644\u0645\u0644\u0644\u06cc \u0634\u0647\u06cc\u062f \u0647\u0627\u0634\u0645\u06cc \u0646\u0698\u0627\u062f ",
      refundable: true,
      cabinTypeForReserveLink: "Economy",
    },
  ],
};

const hugeDatas = {
  status: "success",
  KHD: {
    THR: {
      minWeek: ["IR", 846, "2023-11-28"],
      minDate: {
        "2023-11-21": 897,
        "2023-11-28": 846,
        "2023-11-20": 1007,
        "2023-11-27": 1045,
        "2023-12-04": 1045,
        "2023-12-05": 897,
        "2023-12-12": 897,
      },
    },
  },
};

export default function Passenger() {
  const availDates = Object.entries(hugeDatas.KHD.THR.minDate);
  console.log(availDates);

  const extractDates = Object.keys(hugeDatas.KHD.THR.minDate);

  const startDate = extractDates.reduce(function (a, b) {
    return a <= b ? a : b;
  });

  const endDate = extractDates.reduce(function (a, b) {
    return a >= b ? a : b;
  });

  const datesArray = [];

  // loop from start date to end date
  for (
    let date = new Date(startDate);
    date <= new Date(endDate);
    date.setDate(date.getDate() + 1)
  ) {
    datesArray.push(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    );
  }

  return (
    <div className="my-14 grid grid-cols-4 gap-x-5 px-80">
      <div className="col-span-1 h-[550px] rounded-lg bg-light ring-1 ring-gray-300"></div>
      <div className="col-span-3">
        <ul className="mb-5 flex w-full items-center gap-5 overflow-hidden overflow-x-auto rounded-lg bg-light p-2 ring-1 ring-gray-300">
          {datesArray.map((date) => (
            <li
              key={Math.random()}
              className="flex flex-col border-l-2 border-gray-300 p-1 text-center"
            >
              <div className="flex w-32 ml-3 flex-col items-center justify-between gap-3">
                <p className="text-center text-gray-400">{date}</p>
                {availDates.filter((item) => item[0] === date).length > 0 ? (
                  <p className="text-green-700 text-lg font-semibold tracking-widest">
                    {availDates.filter((item) => item[0] === date).flat()[1]}
                  </p>
                ) : (
                  <p className="text-red-600">وجود ندارد</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5">
          {fakeFlight.flights.map((flight) => (
            <FlightCart flight={flight} key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
}
