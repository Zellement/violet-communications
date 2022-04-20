import React from "react"
import { Link } from "gatsby"
import primaryNavigation from "/src/helpers/navigation"

export default function Navigation(props) {
  const { mobileNavOpen, setMobileNavOpen } = props || {}

  return (
    <nav
      className={`absolute p-8 inset-0 z-40 w-full transform h-full bg-white lg:translate-x-0 lg:w-auto lg:relative lg:h-auto lg:flex lg:content-end lg:justify-end lg:flex-col duration-300 ${
        mobileNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className={"flex flex-col lg:flex-row gap-4"}>
        {primaryNavigation.map((navItem) => {
          return (
            <li>
              <Link
                className=""
                onClick={() => {
                  setMobileNavOpen(false)
                }}
                activeClassName={"primaryNav-item-is-active"}
                to={navItem.url}
              >
                {navItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
