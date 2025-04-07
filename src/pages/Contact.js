import React from "react";
import "../App.css";  // Make sure the CSS file is included
import { Link } from "react-router-dom";

import logo from "../assets/styles/vm_logo_modern.svg"; // Import logo
import avatarImage from "../assets/styles/cartoon.png"; // Import the avatar image (adjust the path accordingly)

const Contact = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ width: "200px", height: "100px" }} />
          </Link>
          {/* Navbar Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">My Work</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutme">About Me</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/skillset">Skillset</Link></li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Main Container for Contact Section */}
      <div className="contact-info-container">
        <h1 className="role-heading" style={{ textAlign: 'center', fontSize: '56px' }}>
          Get In Touch
        </h1>

        {/* Map Container */}
        <div className="map-image-wrapper">
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21312.49941172297!2d11.620653815520837!3d48.10903146488155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddfe01610e313%3A0x1c1d25a73b769e30!2s81735%20Munich-Ramersdorf-Perlach!5e0!3m2!1sen!2sde!4v1743245340438!5m2!1sen!2sde"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
             title="Address"
          ></iframe>

          <img
            src={avatarImage}
            alt="Avatar"
            className="avatar-image"
          />
        </div>


        {/* Social Icons Section with Image */}
        <div className="social-icons-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '70px', alignItems: 'center' }}>
          {/* Image inside Social Icons Container */}


          <a
            href="mailto:vishnupriyamadhu1996@gmail.com"  // Mail link
            className="social-icon email"
            title="Email"
            style={{ margin: '0 10px' }}
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://maps.app.goo.gl/3DanM4CsqmM2137g7"  // Replace with your address link
            className="social-icon address"
            title="Address"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vishnupriya-madhu"  // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            title="LinkedIn"
            style={{ margin: '0 10px' }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="tel:+491702860348"  // Replace with your phone number
            className="social-icon phone"
            title="Phone"
            style={{ margin: '0 10px' }}
          >
            <i className="fas fa-phone-alt"></i>
          </a>
          <a
            href="https://github.com/VISHNUPRIYAMADHU"  // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            title="GitHub"
            style={{ margin: '0 10px' }}
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
