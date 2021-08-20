const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("img");
  bubble.classList.add("bubble");
  bubble.setAttribute("id", "montyImg");
  document.body.appendChild(bubble);

  const montyImg = [
    'url("./image/monty1.webp") center/cover',
    'url("./image/monty2.webp") center/cover',
    'url("./image/monty3.webp") center/cover',
    'url("./image/monty4.webp") center/cover',
    'url("./image/monty5.webp") center/cover',
    'url("./image/monty6.webp") top/cover',
    'url("./image/bg12.webp") center/cover',
    'url("./image/bg13.webp") bottom/cover',
  ];

  const size = Math.random() * 150 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  const bg = montyImg[Math.floor(Math.random() * montyImg.length)];
  bubble.style.background = bg;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 7000);
};

setInterval(bubbleMaker, 900);
