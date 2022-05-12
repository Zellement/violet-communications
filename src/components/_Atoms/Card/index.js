import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import iconFinder from "../../../helpers/iconFinder";
import Logo from "../Logo";

function Card(props) {
  const { card } = props || {};

  const [url, setUrl] = useState();

  useEffect(() => {
    if (card.model?.apiKey === "service_page") {
      setUrl("/services/");
    } else if (card.model?.apiKey === "article") {
      setUrl("/news/");
    } else {
      setUrl("");
    }
  }, []);

  return (
    <div className="relative flex flex-grow w-full ">
      <div className="absolute top-0 z-10 -mt-4 -translate-x-1/2 pointer-events-none triangle-down left-1/2"></div>
      <Link
        className="relative flex flex-col w-full px-8 py-16 overflow-hidden font-bold text-center uppercase shadow-xl font-header text-violet-500 hover:lg:bg-violet-50"
        key={card.title}
        to={`${url}${card.slug}/`}
      >
        <Logo className="absolute left-0 w-[500px] opacity-5 lg:opacity-10 -translate-y-1/3 -translate-x-[200px] top-1/2 " />
        <div className="relative flex flex-col items-center justify-center flex-grow gap-8 m-auto">
          <p className="lg:text-lg">{card.title}</p>
          {card.pageIcon ? (
            <div className="block w-12 h-10 text-lime-500">
              {iconFinder(card.pageIcon, "w-full h-full block")}
            </div>
          ) : null}
        </div>
      </Link>
    </div>
  );
}

export default Card;
