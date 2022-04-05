import React from "react";

const Footer = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a
            href="https://fr.linkedin.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://mobile.twitter.com/?lang=fr"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </a>
        </li>
      </ul>
      <div className="signature">
        <p className="copyright">
          François Copyright © {new Date().getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
