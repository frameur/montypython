import React from "react";
import Calculator from "../components/Calculator";
import Darkmode from "../components/Darkmode";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Media = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />
      <section>
        <Calculator />
      </section>
      <Footer />
    </div>
  );
};

export default Media;
