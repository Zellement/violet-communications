import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import iconFinder from "../../helpers/iconFinder";
import { BsCheck2 } from "react-icons/bs";
import Button from "../_Atoms/Button";

function Hero({ data, title, pageIcon }) {
  const { subline, image, tallHeader, list, primaryLine, buttons } = data || {};
  return (
    <div
      className={`relative overflow-hidden text-white bg-violet-500 font-header ${
        tallHeader
          ? "py-48 md:py-56 lg:py-80 xl:py-96"
          : "py-32 md:py-40 lg:pt-48 xl:pt-64"
      }`}
    >
      <div className="absolute inset-0 flex">
        <GatsbyImage
          className="object-cover w-full h-full "
          image={image.gatsbyImageData}
          alt={image.alt}
        />
      </div>
      <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-violet-700 to-violet-500"></div>

      {pageIcon ? (
        <div className="absolute top-0 right-0 w-40 h-40 mt-2 mr-2 overflow-hidden text-white border-2 border-white rounded-full opacity-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-56 lg:h-56 lg:mr-16 2xl:w-[330px] 2xl:m-0 2xl:mr-40 lg:border-8 2xl:h-[330px]">
          {iconFinder(pageIcon, "w-full h-full")}
        </div>
      ) : null}
      <div className="container px-8 2xl:px-0 ">
        <div className="relative flex flex-col space-y-2 uppercase">
          <h1 className="flex flex-row items-center p-0 m-0 text-3xl leading-none md:text-5xl xl:text-7xl">
            <span>{primaryLine ? primaryLine : title}</span>
          </h1>
          <p className="p-0 m-0 text-2xl leading-none xl:text-4xl">{subline}</p>
          {list ? (
            <ul className="flex flex-row flex-wrap gap-4 pt-8 lg:gap-8">
              {list.map((listItem) => {
                return (
                  <li
                    key={listItem.listItemText}
                    className="flex flex-row items-center space-x-2"
                  >
                    <BsCheck2 className="text-base text-lime-500" />
                    <span>{listItem.listItemText}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {buttons ? (
            <div className="flex flex-row flex-wrap gap-4 pt-8 lg:gap-8">
              {buttons.map((button, i) => {
                return (
                  <Button
                    key={button.link.slug}
                    colourModifier={i % 2 == 0 ? "white" : null}
                    url={button.link.slug}
                    label={button.displayText}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Hero;
