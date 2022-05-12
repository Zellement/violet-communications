import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/_Seo";
import FlexibleContent from "../components/FlexibleContent";
import Hero from "../components/Hero";

export default function IndexPage({ data }) {
  const post = data.datoCmsArticle;
  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} />
      <Hero
        title={post.title}
        primaryLine={post.primaryLine}
        secondaryLine={post.secondaryLine}
        image={post.featuredImage}
        list={post.list}
        buttons={post.buttons}
        tallHero={post.tallHero}
      />
      <FlexibleContent post={post} content={post.pageBuilder} />
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      id
      title
      secondaryLine
      primaryLine
      tallHero
      list {
        listItemText
      }
      featuredImage {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
      buttons {
        displayText
        link {
          ... on DatoCmsArticle {
            id
            slug
            title
            model {
              apiKey
            }
          }
          ... on DatoCmsParentPage {
            id
            slug
            title
            model {
              apiKey
            }
          }
          ... on DatoCmsServicePage {
            id
            slug
            title
            model {
              apiKey
            }
          }
          ... on DatoCmsHomepage {
            id
            title
            slug
            model {
              apiKey
            }
          }
        }
      }

      metaDescription
      metaTitle
      slug
      pageBuilder {
        ... on DatoCmsMainContent {
          id
          model {
            apiKey
          }
          supportingImage {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
          copy
          buttons {
            displayText
          }
        }
        ... on DatoCmsCardBlock {
          id
          cardHeader
          model {
            apiKey
          }
          cards {
            ... on DatoCmsArticle {
              id
              slug
              title
              model {
                apiKey
              }
            }
            ... on DatoCmsHomepage {
              id
              slug
              title
              model {
                apiKey
              }
            }
            ... on DatoCmsParentPage {
              id
              slug
              title
              model {
                apiKey
              }
            }
            ... on DatoCmsServicePage {
              id
              slug
              title
              pageIcon
              model {
                apiKey
              }
            }
          }
        }
        ... on DatoCmsForm {
          id
          model {
            apiKey
          }
        }
      }
    }
  }
`;
