import React from "react";
import { NavLink } from "react-router-dom";
import "./../assets/style/navbar.scss";

const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="nav-left d-flex flex-row align-items-center justify-content-start">
        <div className="logo">
          Edsel Le<span>.</span>CV
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
      </div>
    </div>
  );
};

export default Navbar;
