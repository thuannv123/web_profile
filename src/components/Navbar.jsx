import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./../assets/style/navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="container-nav">
      <div className="nav-left d-flex flex-row align-items-center justify-content-start">
        <div className="logo">
          Thuan<span>.</span>CV
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span> About</span>
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Skills</span>
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Service</span>
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Experience</span>
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Education</span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Portfolio</span>
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Testimonials</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Contact</span>
          </NavLink>
        </nav>
        <div
          className={`menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu_content d-flex flex-row align-items-start justify-content-end">
            <div className="hamburger ml-auto">menu</div>
            <div className="menu_nav text-right">
              <ul>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  <Link to={"/skills"}>Skills</Link>
                </li>
                <li>
                  <Link to={"/service"}>Services</Link>
                </li>
                <li>
                  <Link to={"/experience"}>Experience</Link>
                </li>
                <li>
                  <Link to={"/education"}>Education</Link>
                </li>
                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                  <Link to={"/testimonials"}>Testimonials</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
