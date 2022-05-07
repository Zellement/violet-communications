import { Link } from "gatsby";
import React from "react";
import Card from "../_Atoms/Card";

function CardBlock(props) {
  const { data } = props;

  console.log(data);

  return (
    <div className="container grid w-full grid-cols-1 gap-8 px-8 text-black 2xs:grid-cols-2 lg:grid-cols-3 lg:gap-16 ">
      {data?.cards?.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

export default CardBlock;
