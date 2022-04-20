import React from "react"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

export default function MobileNavButton(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {}

  return (
    <button
      aria-label="Navigation menu button"
      tabIndex={0}
      className={`bg-black text-white absolute top-0 right-0 z-50 p-2 m-4 lg:hidden text-2xl`}
      onClick={() => {
        setMobileNavOpen(!mobileNavOpen)
      }}
    >
      {mobileNavOpen ? <IoMdClose /> : <RiMenu3Line />}
    </button>
  )
}
