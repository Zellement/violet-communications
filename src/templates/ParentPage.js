import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Form from "../components/Form";

export default function StandardPage({ data }) {
  console.log(data);

  const post = data.datoCmsParentPage;
  return (
    <div>
      {post.pageBuilder.map((item) => {
        console.log(item);
        if (item.model.apiKey === "hero") {
          return <Hero data={item} title={post.title} key={item.id} />;
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
  query ($slug: String!) {
    datoCmsParentPage(slug: { eq: $slug }) {
      id
      title
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
            link
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
