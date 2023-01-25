import React from "react";
import Hero from "../Hero";
import MainContent from "../MainContent";
import Statement from "../Statement";
import Panels from "../Panels";
import Form from "../Form";
import CardBlock from "../CardBlock";

function FlexibleContent(props) {
  const { content, post } = props || {};

  return (
    <div className="flex flex-col space-y-16 lg:space-y-32">
      {content.map((item) => {
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
        if (item.model.apiKey === "statement") {
          return <Statement data={item} key={item.id} />;
        }
        if (item.model.apiKey === "panel_block") {
          return <Panels data={item} key={item.id} />;
        }
        if (item.model.apiKey === "card_block") {
          return <CardBlock data={item} key={item.id} />;
        }
        if (item.model.apiKey === "form") {
          return <Form key={item.id} />;
        } else return null;
      })}
    </div>
  );
}

export default FlexibleContent;
