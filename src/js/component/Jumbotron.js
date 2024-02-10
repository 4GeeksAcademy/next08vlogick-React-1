import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="p-5 mb-4 bg-body-tertiary rounded-3"
      style={{ background: "#EAECEF", textAlign: "left" }}
    >
      <h1 className="display-5 fw-bold">A WARM WELCOME</h1>
      <p className="col-md-8 fs-4">
        Using a series of utilities, you can create this jumbotron, just like
        the one in previous versions of Bootstrap. Check out the examples below
        for how you can remix and restyle it to your liking.
      </p>
      <button
        className="btn btn btn-lg"
        style={{ backgroundColor: "red" }}
        type="button"
      >
        Example button
      </button>
    </div>
  );
};

export default Jumbotron;
