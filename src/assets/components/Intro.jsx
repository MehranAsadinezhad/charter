import React from "react";
import kids from "../images/header.jpg";
import SearchBar from "../Ui/SearchBar";

export default function Intro() {
  return (
    <section>
      <div className="relative">
        <img
          src={kids}
          alt="flight"
          className="h-[380px] w-full object-cover object-top"
        ></img>
        <div className="absolute bottom-1 h-[150px] w-full">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-31.88,143.59 C-96.78,99.19 630.07,-20.20 530.76,120.89 L514.95,266.95 L-3.10,214.64 Z"
              style={{ stroke: "none", fill: "#f2f2f2", opacity: "0.1" }}
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-1 h-[240px] w-full">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-40.91,117.94 C45.43,114.97 182.56,159.38 500.27,81.42 L500.00,150.00 L-2.54,188.00 Z"
              style={{ stroke: "none", fill: "#f2f2f2", opacity: "0.2" }}
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-1 h-[200px] w-full">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-40.91,117.94 C45.43,114.97 182.56,159.38 500.27,81.42 L500.00,150.00 L-2.54,188.00 Z"
              style={{ stroke: "none", fill: "#f2f2f2", opacity: "0.4" }}
            ></path>
          </svg>
        </div>
        <div
          className="absolute -bottom-4 w-full"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-40.91,117.94 C45.43,114.97 182.56,159.38 500.27,81.42 L500.00,150.00 L-2.54,188.00 Z"
              style={{ stroke: "none", fill: "#f7f7f7" }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
