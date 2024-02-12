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
      title: "Polvo Cosmico",
      text: "El polvo cósmico, también llamado polvo extraterrestre o polvo espacial, es polvo que existe en el espacio exterior, así como en todo el planeta Tierra.1​2​ La mayoría de las partículas de polvo cósmico tienen entre unas pocas moléculas hasta 0,1 μm de tamaño. Una fracción más pequeña de todo el polvo en el espacio consiste en minerales refractarios más grandes que se condensaron cuando la materia dejó las estrellas.",
    },

    {
      imageUrl: imagen2,
      title: "Aurora Polar",
      text: "Aurora polar (o aurora polaris) es un fenómeno en forma de luminiscencia que se observa con más facilidad en el cielo nocturno, generalmente en zonas polares, aunque puede aparecer en otras zonas del mundo durante breves períodos. Las auroras son el resultado de perturbaciones en la magnetosfera causadas por el viento solar. Las principales perturbaciones se deben a aumentos en la velocidad del viento solar provocados por agujeros coronales y eyecciones de masa coronal.",
    },

    {
      imageUrl: imagen3,
      title: "¿Son importantes las plantas?",
      text: "Las plantas mantienen la atmósfera. Producen oxígeno y absorben dióxido de carbono durante la fotosíntesis . El oxígeno es esencial para llevar a cabo la respiración celular en todos los organismos aerobicos. También mantiene la capa de ozono que ayuda a que la vida en la Tierra no se dañe con la radiación UV. La extracción del dióxido de carbono de la atmósfera reduce el efecto invernadero y el calentamiento global.",
    },

    {
      imageUrl: imagen4,
      title: "Paisajes Maravillosos",
      text: "Desiertos, ríos, barrancos y paisajes marcianos sin salir de tu pinche casa. Colores ocres y desiertos arenosos en los parajes lunares de las Bárdenas Y pozas de agua cristalina excavadas en la roca gris de la Garganta de los Infiernos. Espacios casi extraterrestres. Lugares que parecen creados por una varita mágica. Paisajes excepcionalmente bellos y extraños.",
    },
  ];
  return (
    <>
      {cardInfo.map((card) => {
        return (
          <Card title={card.title} text={card.text} image={card.imageUrl} />
        );
      })}
    </>
  );
};

export default Card2;
