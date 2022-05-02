import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function Hero({ data, title }) {
  const { subline, image } = data || {};
  console.log(image);
  return (
    <div className="relative py-32 overflow-hidden text-white bg-violet-500 md:py-40 lg:pt-48 xl:pt-64">
      <GatsbyImage
        className="absolute inset-0 flex object-cover w-full h-full"
        image={image.gatsbyImageData}
      />
      <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-violet-700 to-violet-500"></div>
      <div className="container px-8 2xl:px-0 ">
        <div className="relative flex flex-col space-y-2 uppercase">
          <h1 className="text-3xl leading-none md:text-5xl xl:text-7xl">
            {title}
          </h1>
          <p className="text-2xl xl:text-4xl">{subline}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
