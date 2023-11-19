import React, { useContext } from "react";
import SearchBar from "../Ui/SearchBar";
import CharterFlight from "../components/CharterFlight";
import PurchaseTicket from "../components/PurchaseTicket";
import Advertise from "../components/Advertise";
import About from "../components/About";
import { FlightContext } from "../context/FlightContext";
import Loader from "../Ui/Loader";

export default function Home() {
  const { loading } = useContext(FlightContext);
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
