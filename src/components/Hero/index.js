import React from "react";

function Hero({ data, title }) {
  const { subline } = data || {};

  return (
    <div className="py-40 text-white bg-violet-500">
      <div className="container block-padding">
        <h1>{title}</h1>
        <p>{subline}</p>
      </div>
    </div>
  );
}

export default Hero;
