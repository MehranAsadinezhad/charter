import React from "react";
import ahv from "../images/ahv.jpg";
import ban from "../images/ban.jpg";
import kish from "../images/kish.jpg";
import mhd from "../images/mhd.jpg";
import shi from "../images/shi.jpg";
import tab from "../images/tab.jpg";
import teh from "../images/teh.jpg";
import esf from "../images/esf.jpg";
import Card from "../Ui/Card";

export default function CharterFlight() {
  const options = [
    { id: 1, name: "تهران", poster: teh },
    { id: 2, name: "مشهد", poster: mhd },
    { id: 3, name: "اصفهان", poster: esf },
    { id: 4, name: "کیش", poster: kish },
    { id: 5, name: "شیراز", poster: shi },
    { id: 6, name: "تبریز", poster: tab },
    { id: 7, name: "بندر عباس", poster: ban },
    { id: 8, name: "اهواز", poster: ahv },
  ];
  return (
    <section className="mt-24 ">
      <div className="text-center">
        <h1 className="text-darkGray inline-block border-b-2 border-primary text-xl font-bold">
          بلیط چارتر
        </h1>
      </div>
      <div className="mx-32 my-3 grid grid-cols-4 gap-6">
        {options.map((city) => (
          <Card key={city.id} option={city} />
        ))}
      </div>
    </section>
  );
}
