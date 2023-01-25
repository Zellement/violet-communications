import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/_Seo";
import FlexibleContent from "../components/FlexibleContent";
import Hero from "../components/Hero";

export default function IndexPage({ data }) {
  const post = data.datoCmsHomepage;
  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} />
      <Hero
        secondaryLine={post.secondaryLine}
        image={post.image}
        tallHero={post.tallHero}
        list={post.list}
        primaryLine={post.primaryLine}
        buttons={post.buttons}
        pageIcon={post.pageIcon}
      />
      <FlexibleContent post={post} content={post.pageBuilder} />
    </>
  );
}

export const query = graphql`
  query {
    datoCmsHomepage {
      id
      title
      secondaryLine
      primaryLine
      tallHero
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

      metaDescription
      metaTitle
      slug
      pageBuilder {
        ... on DatoCmsMainContent {
          id
          model {
            apiKey
          }
          showImage
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
            }
            ... on DatoCmsParentPage {
              id
              slug
              title
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
        ... on DatoCmsStatement {
          id
          model {
            apiKey
          }
          image {
            gatsbyImageData
          }
          linkText
          title
          content
          linkTo {
            ... on DatoCmsArticle {
              id
              slug
              model {
                apiKey
              }
            }
            ... on DatoCmsParentPage {
              id
              slug
              model {
                apiKey
              }
            }
            ... on DatoCmsServicePage {
              id
              slug
              model {
                apiKey
              }
            }
          }
        }
        ... on DatoCmsPanelBlock {
          id
          title
          panels {
            title
            id
            icon {
              gatsbyImageData
              format
              url
            }
            content
          }
          model {
            apiKey
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
