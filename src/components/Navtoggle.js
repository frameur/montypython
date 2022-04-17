import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/images/monty1.gif";
import image2 from "../assets/images/monty2.gif";
import image3 from "../assets/images/monty3.gif";
import image4 from "../assets/images/monty4.gif";
import image5 from "../assets/images/monty5.gif";
import image6 from "../assets/images/monty6.gif";
import image7 from "../assets/images/blackknight.jpg";
const Navtoggle = () => {
  useEffect(() => {
    let menuToggle = document.querySelector(".menuToggle");
    let navigation = document.querySelector(".navitoggle");
    menuToggle.onclick = function () {
      navigation.classList.toggle("active");
    };
  }, []);
  return (
    <div>
      <div className="navitoggle">
        <div className="userBx">
          <div className="imgBx">
            <img src={image7} alt="" />
          </div>
          <p className="username">Monty Python</p>
        </div>
        <div className="menuToggle"></div>
        <ul className="menu">
          <li className="lienToggle">
            <NavLink
              to="/"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}
              className="imgIcon"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>Home</h3>
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/media"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}

              className="imgIcon"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>Media</h3>
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/news"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}
              className="imgIcon"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>News</h3>
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/pythonland"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}
              className="imgIcon"
              style={{
                backgroundImage: `url(${image4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>P'sland</h3>
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/shop"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}
              className="imgIcon"
              style={{
                backgroundImage: `url(${image5})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>Shop</h3>
            </NavLink>
          </li>
          <li className="lienToggle">
            <NavLink
              to="/works"
              //   className={(nav) => (nav.isActive ? "nav-active" : "")}
              className="imgIcon"
              style={{
                backgroundImage: `url(${image6})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>Works</h3>
            </NavLink>
          </li>
          {/* <NavLink
        to="/about"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
        style={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ul>
          <li>About</li>
        </ul>
      </NavLink>
      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
        style={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ul>
          <li>Contact</li>
        </ul>
      </NavLink> */}
        </ul>
      </div>
    </div>
  );
};

export default Navtoggle;
