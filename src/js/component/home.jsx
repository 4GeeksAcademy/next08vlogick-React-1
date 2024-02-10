import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Card2 from "./Card2";
import Jumbotron from "./Jumbotron.js";

//create your first component
const Home = () => {
  //aqui va la logica js
  return (
    <div className="text-center">
      <div>
        <Navbar />
      </div>

      <div>
        <Jumbotron />
      </div>

      <div className="container-fluid row justify-content-center">
        <Card2 />
      </div>
    </div>
  );
};

export default Home;
