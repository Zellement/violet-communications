import React from "react";
import Seo from "../components/_Seo";

const NotFoundPage = () => (
  <>
    <Seo
      title="Thank you"
      description="Thank you for getting in touch. We'll get right back to you."
    />
    <div className="max-w-screen-md px-12 py-40 mx-auto">
      <h1>Thank you</h1>
      <p>Thank you for getting in touch. We'll get right back to you.</p>
      <p>
        Please go to the{" "}
        <a className="underline" href="/">
          homepage
        </a>
        .
      </p>
    </div>
  </>
);

export default NotFoundPage;
