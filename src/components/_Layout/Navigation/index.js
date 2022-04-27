import React from "react";
import { Link } from "gatsby";
import primaryNavigation from "/src/helpers/navigation";
import * as styles from "./navigation.module.css";

export default function Navigation(props) {
  const { mobileNavOpen, setMobileNavOpen, headerNav } = props || {};

  return (
    <nav
      className={`absolute uppercase p-8 md:p-16 bg-violet-600 inset-0 z-40 leading-none w-full transform h-screen lg:translate-x-0 lg:w-auto lg:relative lg:h-auto lg:flex lg:content-end lg:justify-end lg:flex-col duration-300 lg:px-0 ${
        mobileNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul
        className={
          "flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 xl:space-x-16 w-full max-w-[280px] lg:max-w-none"
        }
      >
        {primaryNavigation.map((navItem) => {
          return (
            <li className="relative group">
              <Link
                className={`flex py-4 hover:lg:text-lime-500 ${styles.navigationLink}`}
                onClick={() => {
                  setMobileNavOpen(false);
                }}
                activeClassName={"primaryNav-item-is-active"}
                to={navItem.url}
              >
                {navItem.name}
              </Link>
              {navItem.children && headerNav ? (
                <nav className="flex lg:bg-violet-600 lg:shadow-xl lg:p-8 flex-col pl-8 lg:pt-4 mt-4 text-sm transition duration-300 lg:m-0 lg:opacity-0 lg:pointer-events-none lg:absolute lg:left-0 lg:w-[250px] lg:group-hover:opacity-100 lg:top-full lg:group-hover:pointer-events-auto lg:hover:pointer-events-auto lg:hover:opacity-100">
                  <ul className="flex flex-col space-y-2 lg:space-y-6">
                    {navItem.children?.map((navItemChild) => {
                      return (
                        <li className="flex">
                          <Link
                            className="py-3 hover:lg:text-lime-500"
                            to={navItemChild.url}
                          >
                            {navItemChild.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
