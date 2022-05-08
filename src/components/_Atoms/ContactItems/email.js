import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Email(props) {
  const { className } = props || {};
  return (
    <StaticQuery
      query={graphql`
        query EmailAddress {
          datoCmsSiteOption {
            emailAddress
          }
        }
      `}
      render={(data) => (
        <a
          className={`flex flex-row gap-2 items-center ${className}`}
          href={`mailto:${data.datoCmsSiteOption.emailAddress}`}
        >
          <BsFillEnvelopeFill className="p-1 bg-white rounded-full fill-current text-violet-500" />
          <span>{data.datoCmsSiteOption.emailAddress}</span>
        </a>
      )}
    />
  );
}

export default Email;
