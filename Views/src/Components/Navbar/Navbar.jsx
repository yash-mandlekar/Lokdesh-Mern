import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import Darklogo from "../images/darklogo.png";
import Playstorelogo from "../images/playstore.png";
import Applestorelogo from "../images/lolobg.png";
import { Link } from "react-router-dom";
const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className={`Navbar ${theme === "light" ? "" : "Navbar-dark"}`}>
      <span className="nav-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={theme === "dark" ? Darklogo : Logo} alt="" />
        </Link>
      </span>
      <div
        className={`nav-items ${isOpen && "open"} ${
          theme === "light" ? "" : "Navbar-dark"
        }`}
      >
        <Link to="/video" onClick={() => setIsOpen(false)}>
          <i className="bi bi-play-circle"></i>वीडियो
        </Link>
        <Link to="/Epaper" onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-newspaper"></i>ई-पेपर
        </Link> 
        <Link to="/Login" onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-box-arrow-in-right"></i> लॉग इन करें
        </Link>
        <Link to="/user" onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-person-circle"></i>यूजर
        </Link>
        <button
          onClick={handleTheme}
          className={`${theme === "dark" ? "Navbar-dark" : ""}`}
        >
          {theme === "light" ? (
            <>
              <i className="bi bi-moon"></i> डार्क मोड
            </>
          ) : (
            <>
              <i className="bi bi-brightness-high"></i> लाइट मोड
            </>
          )}
        </button>
        <div className="playstore">
          <img src={Playstorelogo} alt="" />
        </div>
        <div className="applestore">
          <img src={Applestorelogo} alt="" />
        </div>
        <div className="followus">
          <h1>Follow us on</h1>
          <div className="sociali">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
