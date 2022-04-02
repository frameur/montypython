import React, { useEffect } from "react";

const Darkmode = () => {
  useEffect(() => {
    const darlMode = document.getElementById("dark-mode");

    darlMode.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });
  }, []);

  return (
    <div>
      <div className="toggle">
        <input type="checkbox" className="checkbox" id="dark-mode" />
        <label for="dark-mode" className="label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>

      <main>
        <h1>Python live</h1>
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
    </div>
  );
};

export default Darkmode;
