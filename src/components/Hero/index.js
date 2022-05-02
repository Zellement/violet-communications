import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import iconFinder from "../../helpers/iconFinder";

function Hero({ data, title, pageIcon }) {
  const { subline, image } = data || {};
  return (
    <div className="relative py-32 overflow-hidden text-white bg-violet-500 md:py-40 lg:pt-48 xl:pt-64 font-header">
      <GatsbyImage
        className="absolute inset-0 flex object-cover w-full h-full"
        image={image.gatsbyImageData}
        alt={image.alt}
      />
      <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-violet-700 to-violet-500"></div>

      <div className="absolute top-0 right-0 w-40 h-40 mt-2 mr-2 overflow-hidden text-white border-2 border-white rounded-full opacity-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-56 lg:h-56 lg:mr-16 2xl:w-[330px] 2xl:m-0 2xl:mr-40 lg:border-8 2xl:h-[330px]">
        {iconFinder(pageIcon, "w-full h-full")}
      </div>
      <div className="container px-8 2xl:px-0 ">
        <div className="relative flex flex-col space-y-2 uppercase">
          <h1 className="flex flex-row items-center p-0 m-0 text-3xl leading-none md:text-5xl xl:text-7xl">
            <span>{title}</span>
          </h1>
          <p className="text-2xl xl:text-4xl">{subline}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
