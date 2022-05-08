import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { BsTelephoneFill } from "react-icons/bs";

function Telephone(props) {
  const { className } = props || {};
  return (
    <StaticQuery
      query={graphql`
        query TelephoneNumber {
          datoCmsSiteOption {
            telephoneNumber
          }
        }
      `}
      render={(data) => (
        <a
          className={`flex flex-row gap-2 items-center ${className}`}
          href={`tel:${data.datoCmsSiteOption.telephoneNumber}`}
        >
          <BsTelephoneFill className="p-1.5 bg-white rounded-full fill-current text-violet-500" />
          <span>{data.datoCmsSiteOption.telephoneNumber}</span>
        </a>
      )}
    />
  );
}

export default Telephone;
