import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../Navigation";
import MobileNavButton from "../Navigation/MobileNavButton";
import Logo from "../../_Atoms/Logo";
import Button from "../../_Atoms/Button";
import Social from "../../_Atoms/Social";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          datoCmsSiteOption {
            telephoneNumber
          }
        }
      `}
      render={(data) => (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 px-8 text-white bg-violet-600 font-header">
            <div className="container ">
              <div className="flex items-center justify-between w-full">
                <Link
                  className="block w-40 p-4 -mb-8 text-lg bg-white border-b shadow-xl border-violet-50 lg:p-8 md:w-56 lg:ml-0 lg:shadow-none lg:w-72 lg:-mb-32 lg:-mt-12"
                  to="/"
                >
                  <Logo />
                </Link>

                <div className="flex flex-row items-center space-x-4 lg:space-x-12">
                  <Navigation
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                    headerNav={true}
                  />
                  <Button
                    tel={true}
                    url={data.datoCmsSiteOption.telephoneNumber}
                  />
                  <ul className="flex-row items-center hidden gap-4 md:flex">
                    <Social />
                  </ul>
                  <MobileNavButton
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                  />
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    />
  );
}
