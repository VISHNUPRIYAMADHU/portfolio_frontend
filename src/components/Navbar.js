import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/styles/logo.png"; // Import logo
import "./Navbar.css"; // Import custom CSS for the navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Navbar with Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: "290px", height: "190px", marginRight: "10px" }} /> {/* Adjust the size and margin */}
        </Link>

     

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutme">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
