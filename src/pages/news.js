import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/_Seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Logo from "../components/_Atoms/Logo";

export default function NewsPage({ data }) {
  return (
    <>
      <Seo
        title="Latest News"
        description="Latest news from Violet Communications"
      />
      <div className="container grid grid-cols-1 gap-8 mt-32 block-padding md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-2xl text-violet-500">News</h1>
      </div>
      <div className="container grid grid-cols-1 gap-8 block-padding md:grid-cols-2 lg:grid-cols-3">
        {data.allDatoCmsArticle.edges.map((article) => {
          return (
            <Link
              key={article.node.slug}
              to={`/news/${article.node.slug}/`}
              className="flex flex-col group bg-violet-50 hover:lg:bg-violet-500 hover:lg:text-white text-violet-800"
            >
              {article.node.featuredImage ? (
                <div className="h-[200px] overflow-hidden">
                  <GatsbyImage
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                    image={article.node.featuredImage.gatsbyImageData}
                    alt={article.node.featuredImage.alt}
                  />
                </div>
              ) : (
                <Logo className="w-3/4 opacity-30 max-w-[150px] h-auto mx-auto my-8" />
              )}
              <div className="flex flex-col flex-grow p-8 ">
                <div className="flex flex-col mt-auto">
                  <h2 className="m-0">
                    {article.node.primaryLine
                      ? article.node.primaryLine
                      : article.node.title}
                  </h2>
                  <h3 className="mt-2 mb-0 text-sm opacity-50">
                    {article.node.secondaryLine}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          secondaryLine
          primaryLine
          featuredImage {
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`;
