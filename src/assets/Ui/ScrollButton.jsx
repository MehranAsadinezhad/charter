import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollButton() {
  const [show, setShow] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShow(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={scrollTop}
        className={`fixed bottom-5 z-50 text-xl ${
          show ? "pointer-events-auto opacity-100" : ""
        } pointer-events-none right-5 rounded-full bg-primary p-2 text-white opacity-0 transition-all duration-300`}
      >
        <IoIosArrowUp />
      </button>
    </>
  );
}
