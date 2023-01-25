import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Panel from "../_Atoms/Panel";

function PanelBlock(props) {
  const { data } = props;

  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={50}>
      <div className="container">
        <h2 className="mb-16 text-2xl text-center text-violet-500">
          {data.title}
        </h2>
        <div className="flex flex-col p-4 md:flex-row md:flex-wrap md:gap-8">
          {data?.panels?.map((panel) => {
            return <Panel key={panel.id} panel={panel} />;
          })}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default PanelBlock;
