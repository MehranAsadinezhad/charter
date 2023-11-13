import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Guide from "../components/Guide";

export default function AppLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Intro />
      <main>
        <Outlet />
      </main>
      <Guide />
      <Footer />
    </div>
  );
}
