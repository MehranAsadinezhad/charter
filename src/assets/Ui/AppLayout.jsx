import React, { useContext } from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Guide from "../components/Guide";
import Loader from "./Loader";
import { FlightContext } from "../context/FlightContext";

export default function AppLayout() {
  const { loading } = useContext(FlightContext);
  return (
    <div className="overflow-hidden">
      <Header />
      <Intro />
      {loading ? (
        <Loader />
      ) : (
        <>
          <main>
            <Outlet />
          </main>
          <Guide />
          <Footer />
        </>
      )}
    </div>
  );
}
