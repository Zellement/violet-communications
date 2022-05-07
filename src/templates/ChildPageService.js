import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/_Seo";
import FlexibleContent from "../components/FlexibleContent";

export default function IndexPage({ data }) {
  const post = data.datoCmsServicePage;
  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} />
      <FlexibleContent post={post} content={post.pageBuilder} />
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsServicePage(slug: { eq: $slug }) {
      id
      title
      pageIcon
      slug
      pageBuilder {
        ... on DatoCmsHero {
          id
          model {
            apiKey
          }
          subline
          image {
            gatsbyImageData(placeholder: BLURRED)
            alt
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
