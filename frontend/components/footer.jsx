import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-links">
          <a href="https://github.com/tyeonn"> <i className="fab fa-github"></i> </a>
          <a href="https://www.linkedin.com/in/timjwu/"> <i className="fab fa-linkedin"></i> </a>
          <a href="https://angel.co/timothyjwu1"> <i className="fab fa-angellist"></i> </a>
          
        </div>
        <div className="footer-countries">
          <i className="fas fa-globe-americas" />
          {/* Create dropdown later */}
          <select className="footer-dropdown">
            <option value="Gaming"> United States </option>
            <option value="Canada"> Canada </option>
            <option value="United Kingdom"> United Kingdom </option>
          </select>
          <i className="fas fa-arrows-alt-v" />
        </div>
      </div>
      <p>
        <i className="far fa-copyright" /> 2019 Conbrite
      </p>
      <img src={window.c_logo} className="footer-logo" />
    </div>
  );
};
export default Footer;
