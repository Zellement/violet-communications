import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function Hero({ data }) {
  const { copy, supportingImage } = data || {};

  return (
    <div className="my-16 lg:my-32">
      <div className="container relative flex flex-col p-8 bg-violet-700 lg:flex-row lg:p-16 xl:p-32">
        <div className="top-0 bottom-0 right-0 h-full lg:absolute lg:w-1/3 xl:w-2/5">
          <GatsbyImage
            className="object-cover w-full h-full "
            image={supportingImage.gatsbyImageData}
            alt={supportingImage.alt}
          />
        </div>
        <div
          className="relative order-first w-full p-8 bg-white lg:w-9/12 lg:order-last md:p-16 content lg:p-24 xl:p-32"
          dangerouslySetInnerHTML={{ __html: copy }}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
