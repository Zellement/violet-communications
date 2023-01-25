import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";
import UrlGenerator from "../../helpers/urlGenerator";
import Button from "../_Atoms/Button";

function Statement({ data }) {
  const { image, content, title, linkTo, linkText } = data || {};

  return (
    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} offset={20}>
      <div className="">
        <div className="container relative flex flex-col">
          <div className="w-full max-h-[60vh] overflow-hidden object-center sm:max-h-screen">
            <GatsbyImage
              className="object-cover w-full h-full"
              image={image.gatsbyImageData}
              alt={image.alt ?? "Violet Communications"}
            />
          </div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={500}
            animateOnce={true}
            className="flex flex-col p-8 -mt-48 lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:m-0"
          >
            <h2 className="p-8 m-0 leading-tight text-white bg-violet-600">
              {title}
            </h2>
            <div
              className={`p-8 bg-white border-b border-lime-500 lg:border-0`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <Button
              className="self-end mr-4 -mt-4"
              url={`${UrlGenerator(linkTo.model.apiKey)}${linkTo.slug}`}
              label={linkText}
            />
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Statement;
