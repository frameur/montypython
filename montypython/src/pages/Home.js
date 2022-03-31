import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Time1 from "../components/Time1";
import Time2 from "../components/Time2";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Time1 />
      <Time2 />
      <Footer />
    </div>
  );
};

export default Home;
