import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/images/montytroup.jpg";
import img2 from "../assets/images/sacregraal.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/banniere.jpg";

const Slider = () => {
  return (
    <Carousel
      className="sliderMonty"
      autoPlay
      interval={3000}
      infiniteLoop
      thumbWidth={65}
      showIndicators={false}
      showStatus={false}
    >
      <div>
        <img src={img1} alt="la troupe des monty python" />
        <p className="legend">Monty 1</p>
      </div>
      <div>
        <img src={img2} alt="la troupe des monty python" />
        <p className="legend">Monty 2</p>
      </div>
      <div>
        <img src={img3} alt="la troupe des monty python" />
        <p className="legend">Monty 3</p>
      </div>
      <div>
        <img src={img4} alt="la troupe des monty python" />
        <p className="legend">Monty 4</p>
      </div>
    </Carousel>
  );
};

export default Slider;
