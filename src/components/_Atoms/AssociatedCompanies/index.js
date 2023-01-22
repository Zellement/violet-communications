import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
export default function AssociatedCompanies() {
  return (
    <StaticQuery
      query={graphql`
        query AssociatedCompaniesQuery {
          datoCmsSiteOption {
            associatedCompaniesHeader
            associatedCompanies {
              alt
              gatsbyImageData(layout: FIXED, height: 45)
            }
          }
        }
      `}
      render={(data) => (
        <div className="container flex flex-col p-8 mt-16 space-y-16 text-center lg:p-16 xl:p-32 ">
          <h2 className="text-2xl text-violet-500">
            {data.datoCmsSiteOption.associatedCompaniesHeader}
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-16">
            {data.datoCmsSiteOption.associatedCompanies.map((logo, index) => {
              return (
                <div key={index} className="flex">
                  <GatsbyImage
                    className="block"
                    alt={logo.alt ?? ""}
                    image={logo.gatsbyImageData}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
}
