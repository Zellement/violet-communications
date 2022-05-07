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
        {data.allDatoCmsArticle.edges.map((article) => {
          return (
            <Link
              to={`/news/${article.node.slug}/`}
              className="flex flex-col group bg-violet-50 hover:lg:bg-violet-500 hover:lg:text-white text-violet-800"
            >
              {article.node.pageBuilder?.map((content) => {
                if (content.model?.apiKey == "hero" && content.image) {
                  return (
                    <div className="h-[200px] overflow-hidden">
                      <GatsbyImage
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                        image={content.image.gatsbyImageData}
                        alt={content.image.alt}
                      />
                    </div>
                  );
                } else {
                  return (
                    <Logo className="w-3/4 opacity-30 max-w-[150px] h-auto mx-auto my-8" />
                  );
                }
              })}
              <div className="flex flex-col flex-grow p-8 ">
                <div className="flex flex-col mt-auto">
                  <h2 className="m-0">{article.node.title}</h2>
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
          pageBuilder {
            ... on DatoCmsHero {
              model {
                apiKey
              }
              id
              image {
                gatsbyImageData(aspectRatio: 1.5, width: 500)
                title
              }
              subline
              primaryLine
            }
          }
        }
      }
    }
  }
`;
