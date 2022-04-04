import React from "react";
import Darkmode from "../components/Darkmode";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Picker from "../components/Picker";

const News = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />
      <main className="main-news">
        <h2>Python's calendar</h2>
        <Picker />
      </main>
      <Footer />
    </div>
  );
};

export default News;
