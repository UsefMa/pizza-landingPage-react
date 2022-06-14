import React from "react";
import { useState } from "react";
import { FaPizzaSlice, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [togle, setTogel] = useState(false);
  const handelTogle = () => setTogel(!togle);
  const closeMenu = () => setTogel(false)
  return (
    <>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={200}>
          <FaPizzaSlice style={{ color: "black" }} size={40} className="logo" />
        </Link>

        <ul className={togle ? "navbar-list active" : "navbar-list"}>
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={2000} onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="product" smooth={true} duration={2000} onClick={closeMenu}>
              product
            </Link>
          </li>

          <li className="nav-item">
            <Link to="contact" smooth={true} duration={2000} onClick={closeMenu}>
              contact
            </Link>
          </li>
        </ul>
        <div className="humberger" onClick={handelTogle}>
          {togle ? (
            <FaTimes size={20} className="FaTimes" />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
