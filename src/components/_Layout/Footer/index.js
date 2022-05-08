import React from "react";
import { Link } from "gatsby";
import Logo from "../../_Atoms/Logo";
import primaryNavigation from "/src/helpers/navigation";

function Footer() {
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  return (
    <div className="pt-16 my-16 border-t-2 border-gray-200 lg:my-32 font-header">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 text-center md:px-8 lg:text-left 2xl:px-0 lg:flex-row">
        <div className="flex flex-col gap-8">
          <nav className={`hello`}>
            <ul className="flex flex-col gap-1 lg:flex-row lg:gap-16">
              {primaryNavigation.map((navItem) => {
                return (
                  <li key={navItem.url} className="relative flex">
                    <Link
                      className={`flex py-4 mx-auto hover:lg:text-lime-500 uppercase   font-semibold text-violet`}
                      to={navItem.url}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex flex-col space-y-4 text-gray-500 uppercase text-[0.9em]">
            <p>© {getYear} Violet Communications</p>
            <p>
              <a
                href="https://www.zellement.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-violet-700 hover:lg:text-lime-700"
              >
                Website by Zellement
              </a>
            </p>
          </div>
        </div>
        <Link
          className="block w-48 p-4 text-lg md:w-56 lg:w-72 lg:ml-auto"
          to="/"
        >
          <Logo />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
