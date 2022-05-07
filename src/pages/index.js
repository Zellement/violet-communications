import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/_Seo";
import FlexibleContent from "../components/FlexibleContent";

export default function IndexPage({ data }) {
  const post = data.datoCmsHomepage;
  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} />
      <FlexibleContent post={post} content={post.pageBuilder} />
    </>
  );
}

export const query = graphql`
  query {
    datoCmsHomepage {
      id
      title
      slug
      metaDescription
      metaTitle
      pageBuilder {
        ... on DatoCmsHero {
          id
          model {
            apiKey
          }
          primaryLine
          subline
          tallHeader
          list {
            listItemText
          }
          image {
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
        }
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
