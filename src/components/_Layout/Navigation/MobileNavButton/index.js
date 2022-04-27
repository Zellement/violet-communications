import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function MobileNavButton(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {};

  return (
    <button
      aria-label="Navigation menu button"
      tabIndex={0}
      className={`p-2 lg:hidden text-2xl ${
        mobileNavOpen
          ? " z-50 bg-white text-violet-500"
          : "bg-lime-500 text-violet-500"
      }`}
      onClick={() => {
        setMobileNavOpen(!mobileNavOpen);
      }}
    >
      {mobileNavOpen ? <IoMdClose /> : <RiMenu3Line />}
    </button>
  );
}
