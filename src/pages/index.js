import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Form from "../components/Form";

export default function IndexPage({ data }) {
  const post = data.datoCmsHomepage;
  return (
    <div>
      {post.pageBuilder.map((item) => {
        if (item.model.apiKey === "hero") {
          return (
            <Hero
              pageIcon={post.pageIcon}
              data={item}
              title={post.title}
              key={item.id}
            />
          );
        }
        if (item.model.apiKey === "main_content") {
          return <MainContent data={item} key={item.id} />;
        }
        if (item.model.apiKey === "form") {
          return <Form key={item.id} />;
        }
      })}
    </div>
  );
}

export const query = graphql`
  query {
    datoCmsHomepage {
      id
      title
      slug
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
