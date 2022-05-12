import React from "react";
import { StaticQuery, graphql } from "gatsby";
export default function Address() {
  return (
    <StaticQuery
      query={graphql`
        query AddressQuery {
          datoCmsSiteOption {
            address
          }
        }
      `}
      render={(data) => (
        <div
          dangerouslySetInnerHTML={{ __html: data.datoCmsSiteOption.address }}
        />
      )}
    />
  );
}
