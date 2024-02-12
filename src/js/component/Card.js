import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ width: "25rem", margin: "10px", padding: "0px" }}
    >
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer text-body-secondary ">
        <a
          href="https://www.pinterest.es/irisp557/galaxia/"
          className="btn btn-lihgt cardcolores"
        >
          Haz Click
        </a>
      </div>
    </div>
  );
};

export default Card;
