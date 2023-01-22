import { GrFacebook, GrInstagram, GrTwitter, GrLinkedin } from "react-icons/gr";
import React from "react";

function Social() {
  return (
    <>
      <li>
        <a
          className="block p-1.5 bg-white hover:lg:opacity-80 text-twitter-500"
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
          className="block p-1.5 bg-white hover:lg:opacity-80 text-instagram-pink-500"
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
          className="block p-1.5 bg-white hover:lg:opacity-80 text-facebook-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/Violet-Communications-100859312623714/"
        >
          <span className="sr-only">Follow us on Facebook</span>
          <GrFacebook className="block w-8 h-auto" />
        </a>
      </li>
      <li>
        <a
          className="block p-1.5 bg-white hover:lg:opacity-80 text-facebook-500"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/violet-communications-ltd//"
        >
          <span className="sr-only">Find Jack on LinkedIn</span>
          <GrLinkedin className="block w-8 h-auto" />
        </a>
      </li>
    </>
  );
}

export default Social;
