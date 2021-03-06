import React from "react";
import Seo from "../components/_Seo";

const NotFoundPage = () => (
  <>
    <Seo title="Error" description="Sorry, this page doesn't exist." />
    <div className="max-w-screen-md px-12 py-40 mx-auto">
      <h1>Sorry!</h1>
      <p>
        Sorry, this page doesn't exist. Please go to the{" "}
        <a className="underline" href="/">
          homepage
        </a>
        .
      </p>
    </div>
  </>
);

export default NotFoundPage;
