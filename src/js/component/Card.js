import React from "react";
import montañas from "../../img/montaña.jpg";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem", padding: "0px" }}>
      <img src={montañas} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
