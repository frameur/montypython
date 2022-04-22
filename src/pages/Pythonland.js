import React from "react";
import Darkmode from "../components/Darkmode";
import Form from "../components/Form";
import Headerland from "../components/Headerland";
import Navigation from "../components/Navigation";

const Pythonland = () => {
  return (
    <div className="container-bubble">
      <Darkmode />
      <Navigation />
      <Headerland />
      <Form />
    </div>
  );
};

export default Pythonland;
