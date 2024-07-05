import React, { useState } from "react";
import logo from "../../Assets/images/logo.jpg";
import mobMenu from "../../Assets/images/menu.png";
import contact from "../../Assets/images/contact.jpg";
import { Link } from "react-scroll";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contactPage"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Experience
          </Link>
        </div>

        <button
          className="desktopMenuButton"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contact} className="desktopMenuImg" />
          Contact Me
        </button>
        <img
          src={mobMenu}
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contactPage"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
