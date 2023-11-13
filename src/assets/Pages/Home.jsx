import React from "react";
import SearchBar from "../Ui/SearchBar";
import CharterFlight from "../components/CharterFlight";
import PurchaseTicket from "../components/PurchaseTicket";
import Advertise from "../components/Advertise";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <SearchBar />
      <CharterFlight />
      <PurchaseTicket />
      <Advertise />
      <About />
    </>
  );
}
