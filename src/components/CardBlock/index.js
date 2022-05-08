import React from "react";
import Card from "../_Atoms/Card";
import ScrollAnimation from "react-animate-on-scroll";

function CardBlock(props) {
  const { data } = props;

  console.log(data);

  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={20}>
      <div className="container grid w-full grid-cols-1 gap-8 px-8 text-black 2xs:grid-cols-2 lg:grid-cols-3 lg:gap-16 ">
        {data?.cards?.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </ScrollAnimation>
  );
}

export default CardBlock;
