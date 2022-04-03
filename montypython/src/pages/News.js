import React from "react";
import Darkmode from "../components/Darkmode";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const News = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />

      <main className="main-news">
        <h2>Python live</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          aspernatur odio repellat, asperiores dolorum at magni accusantium
          ipsum reprehenderit exercitationem voluptatibus impedit inventore unde
          tenetur harum obcaecati placeat id ea neque iure odit deleniti dolor
          et aut! Tempore, odit? Culpa ipsa adipisci ducimus consequuntur non
          quia, voluptates maiores quos corporis consectetur nisi? Libero
          debitis rerum cupiditate dolorem nihil, vitae voluptas!
        </p>
        <div className="img"></div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
