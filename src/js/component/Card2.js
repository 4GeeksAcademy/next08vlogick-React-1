import React from "react";
import Card from "./Card";

import imagen1 from "../../img/imagen1.jpg";
import imagen2 from "../../img/imagen2.jpg";
import imagen3 from "../../img/imagen3.jpg";
import imagen4 from "../../img/imagen4.jpg";

const Card2 = () => {
  let cardInfo = [
    {
      imageUrl: imagen1,
      title: "Titulo1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum voluptate ad fuga eveniet error.",
    },

    {
      title: "Titulo2",
      text: "Bacon ipsum dolor amet kielbasa ground round salami cow. Bresaola jerky pork chop tongue porchetta.",
    },

    {
      title: "Titulo3",
      text: "Ball tip turkey tenderloin tail pork loin, pastrami buffalo boudin ham hock. Corned beef turkey.",
    },

    { title: "Titulo4", text: "Cow tenderloin tongue cupim jerky beef" },
  ];
  return (
    <>
      {cardInfo.map((card) => {
        return <Card title={card.title} text={card.text} />;
      })}
    </>
  );
};

export default Card2;
