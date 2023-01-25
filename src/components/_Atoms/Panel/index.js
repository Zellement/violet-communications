import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Logo from "../Logo";

function Panel(props) {
  const { panel } = props || {};

  return (
    <div className="relative  flex flex-1  w-full min-w-[300px] border-t border-gray-300">
      <div className="relative flex flex-col w-full px-8 py-16 overflow-hidden text-center shadow-xl place-content-start">
        <Logo className="absolute left-0 w-[500px] opacity-5 lg:opacity-10 -translate-y-1/3 -translate-x-[200px] top-1/2 " />
        <div className="relative flex flex-col items-center flex-grow gap-8 mb-auto">
          <h3 className="m-0 leading-tight text-violet-500 lg:text-lg">
            {panel.title}
          </h3>
          <div className="block w-16 h-auto text-lime-500">
            {panel.icon.format === "svg" ? (
              <img
                alt={panel.icon.alt ?? ""}
                className="w-full h-auto"
                src={panel.icon.url}
              />
            ) : (
              <GatsbyImage
                className="w-32 h-auto"
                image={panel.icon.gatsbyImageData}
                alt={panel.icon.alt ?? "Violet Communications"}
              />
            )}
          </div>
          <p className="text-xs">{panel.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Panel;
