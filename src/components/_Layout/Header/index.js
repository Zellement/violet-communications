import React, { useState } from "react";
import { Link } from "gatsby";
import Navigation from "../Navigation";
import MobileNavButton from "../Navigation/MobileNavButton";

export default function Header(props) {
  const { siteTitle } = props || {};

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="text-white bg-violet-600">
      <div className="container block-padding">
        <div className="flex items-center justify-between w-full">
          <Link className="block text-lg font-bold md:text-xl" to="/">
            {siteTitle}
          </Link>

          <Navigation
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            headerNav={true}
          />
        </div>
      </div>

      <MobileNavButton
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
    </header>
  );
}
