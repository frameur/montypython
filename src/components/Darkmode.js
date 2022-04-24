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
        <input
          type="checkbox"
          className="checkbox"
          id="dark-mode"
          rel="noreferrer"
        />
        <label for="dark-mode" className="label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default Darkmode;
