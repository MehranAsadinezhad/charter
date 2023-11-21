import React from "react";
import ahv from "../../../public/images/ahv.jpg";
import ban from "../../../public/images/ban.jpg";
import kish from "../../../public/images/kish.jpg";
import mhd from "../../../public/images/mhd.jpg";
import shi from "../../../public/images/shi.jpg";
import tab from "../../../public/images/tab.jpg";
import teh from "../../../public/images/teh.jpg";
import esf from "../../../public/images/esf.jpg";
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
    <section className="md:mt-24 mt-40 ">
      <div className="text-center">
        <h1 className="text-darkGray inline-block border-b-2 border-primary text-xl font-bold">
          بلیط چارتر
        </h1>
      </div>
      <div className="xl:px-32 md:px-10 px-5 lg:px-24 my-5 grid place-items-center grid-cols-12 gap-5 2xl:px-64">
        {options.map((city) => (
          <Card key={city.id} option={city} />
        ))}
      </div>
    </section>
  );
}
