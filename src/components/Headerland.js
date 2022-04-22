import React from "react";
import { NavLink } from "react-router-dom";

const Headerland = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/mes-preferences"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Mes préferences</li>
          </NavLink>
          <NavLink
            to="/pythonland"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <ul>
              <li>P'sland</li>
            </ul>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Headerland;
