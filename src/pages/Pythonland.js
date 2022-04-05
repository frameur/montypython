import React from "react";
import Darkmode from "../components/Darkmode";
import Navigation from "../components/Navigation";

const Pythonland = () => {
  // const counterDisplay = document.querySelector("h3");
  // let counter = 0;

  // const bubbleMaker = () => {
  //   const bubble = document.createElement("img");
  //   bubble.classList.add("bubble");
  //   bubble.setAttribute("id", "montyImg");
  //   document.body.appendChild(bubble);

  //   const montyImg = [
  //     'url("../assets/images/monty1.webp") center/cover',
  //     'url("../assets/images/monty2.webp") center/cover',
  //     'url("../assets/images/monty3.webp") center/cover',
  //     'url("../assets/images/monty4.webp") center/cover',
  //     'url("../assets/images/monty5.webp") center/cover',
  //     'url("../assets/images/monty6.webp") top/cover',
  //     'url("../assets/images/bg12.webp") center/cover',
  //     'url("../assets/images/bg13.webp") bottom/cover',
  //   ];

  //   const size = Math.random() * 150 + 100 + "px";
  //   bubble.style.height = size;
  //   bubble.style.width = size;

  //   const bg = montyImg[Math.floor(Math.random() * montyImg.length)];
  //   bubble.style.background = bg;

  //   bubble.style.top = Math.random() * 100 + 50 + "%";
  //   bubble.style.left = Math.random() * 100 + "%";

  //   const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //   bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //   bubble.addEventListener("onClick", () => {
  //     counter++;
  //     counterDisplay.textContent = counter;
  //     bubble.remove();
  //   });

  //   setTimeout(() => {
  //     bubble.remove();
  //   }, 7000);
  // };

  // setInterval(bubbleMaker, 900);

  return (
    <div className="container-bubble">
      <Darkmode />
      <Navigation />
      {/* <h3>0</h3> */}
    </div>
  );
};

export default Pythonland;
