import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import React from "react";

function Social() {
  return (
    <>
      <li>
        <a
          className="hover:lg:opacity-80"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/violetcomms"
        >
          <span className="sr-only">Follow us on Twitter</span>
          <GrTwitter className="block w-8 h-auto" />
        </a>
      </li>
      <li>
        <a
          className="hover:lg:opacity-80"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/violetcommunications/"
        >
          <span className="sr-only">Follow us on Instagram</span>
          <GrInstagram className="block w-8 h-auto" />
        </a>
      </li>
      <li>
        <a
          className="hover:lg:opacity-80"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/Violet-Communications-100859312623714/"
        >
          <span className="sr-only">Follow us on Facebook</span>
          <GrFacebook className="block w-8 h-auto" />
        </a>
      </li>
    </>
  );
}

export default Social;
