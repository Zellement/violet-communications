import React from "react";
import Card from "../_Atoms/Card";
import ScrollAnimation from "react-animate-on-scroll";

function CardBlock(props) {
  const { data } = props;

  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={20}>
      <div className="container">
        {data.cardHeader ? (
          <h2 className="mb-16 text-2xl text-center text-violet-500">
            {data.cardHeader}
          </h2>
        ) : null}
        <div className="grid w-full grid-cols-1 gap-8 px-8 text-black 2xs:grid-cols-2 lg:grid-cols-4 lg:gap-16 ">
          {data?.cards?.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default CardBlock;
