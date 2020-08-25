import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner gif"
      style={{ width: "200px", display: "block", margin: "auto" }}
    />
  );
};

export default Spinner;
