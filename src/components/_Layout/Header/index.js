import React, { useState, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Navigation from "../Navigation";
import MobileNavButton from "../Navigation/MobileNavButton";
import Logo from "../../_Atoms/Logo";
import Button from "../../_Atoms/Button";
import Social from "../../_Atoms/Social";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const scrollDirection = useScrollDirection();

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
                  className={`block w-40 p-4 -mb-8 text-lg bg-white transition-all duration-300 border-b shadow-xl border-violet-50 lg:p-8 md:w-56 lg:ml-0 lg:shadow-none  lg:-mb-32 lg:-mt-12
                  ${scrollDirection === "down" ? "lg:w-48" : "lg:w-72"}`}
                  to="/"
                >
                  <Logo />
                </Link>

                <div className="flex flex-row items-center space-x-4 lg:space-x-12">
                  <Navigation
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                    headerNav={true}
                    scrollDirection={scrollDirection}
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

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
