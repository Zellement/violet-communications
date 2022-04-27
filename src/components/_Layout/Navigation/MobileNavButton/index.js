import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function MobileNavButton(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {};

  return (
    <button
      aria-label="Navigation menu button"
      tabIndex={0}
      className={`  fixed top-0 right-0 z-50 p-2 mt-7 mr-8 lg:hidden h-[40px] text-2xl bg-lime-500 text-violet-500`}
      onClick={() => {
        setMobileNavOpen(!mobileNavOpen);
      }}
    >
      {mobileNavOpen ? <IoMdClose /> : <RiMenu3Line />}
    </button>
  );
}
