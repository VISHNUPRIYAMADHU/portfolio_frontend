import React from "react";
import "../App.css";  // Make sure the CSS file is included
import { Link } from "react-router-dom";

import logo from "../assets/styles/vm_logo_modern.svg"; // Import logo
import resume from "../assets/styles/resume.pdf"; // Import your resume PDF

const Projects = () => {
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


      <h1 className="role-heading" style={{ textAlign: "center", fontSize: "56px", fontFamily: '"Lucida Console", "Courier New", monospace' }}>
        My Work
      </h1>

      {/* Resume Section */}
      <div className="resume-section" style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "20px", color: "#555",fontFamily: '"Lucida Console", "Courier New", monospace' }}>
        Driven by curiosity, powered by results
        </p>
        
        <a href={resume} download className="btn btn-primary" style={{ fontSize: "20px", marginTop: "20px" }}>
          <i className="fas fa-download"></i> Get Resume
        </a>
      </div>

     

        {/* Projects List - Flexbox with 2 projects inline per row */}
        <div className="projects-list" style={{ display: "flex", flexWrap: "wrap", fontFamily: '"Lucida Console", "Courier New", monospace',justifyContent: "center", marginTop: "40px" }}>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}> Prudential Eclient</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Full Stack Developer for Prudential Life Insurance's eClient 
            system, responsible for developing a scalable web platform using ReactJS (front-end), 
            NodeJS (back-end), and MongoDB for efficient data management. Integrated e-Interview data collection 
            with underwriting systems, optimizing user experience and streamlining business processes for long-term growth.</p>  {/* Grey color for description */}
        </div>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}>Lineage Logistics</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Full Stack Developer for Lineage Logistics, specializing in temperature-controlled warehousing
             and logistics. Developed a logistics application to track parcel transportation stages. Utilized NodeJS for backend,
              ReactJS for frontend, and PostgreSQL for database management. Contributed to modernizing a legacy FoxPro application,
               transforming it into a scalable, future-ready platform.</p>  {/* Grey color for description */}
        </div>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}>Agilent</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Full Stack Developer for Agilent Technologies, leading medical equipment manufacturer.
             Developed an admin application for managing access to Agilent's suite. Used Node.js for backend, RESTful APIs, 
             and MySQL/DynamoDB for data management. Built frontend with AngularJS, integrated OKTA for secure authentication, 
             and Jitterbit for cross-environment integration. Focused on scalability and future-proof features.</p>  {/* Grey color for description */}
        </div>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}>Locker Boost (IoT Developer)</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Backend Developer for parcel locker network application, optimizing reservation, 
            configuration, and capacity management. Developed backend with Node.js, PostgreSQL, and SQLite. 
            Implemented RESTful APIs for integration with bpost systems. Utilized AWS IoT and Lambda for real-time data processing. 
            Ensured code quality with Jest, SonarQube, Swagger, Git, Jira, and Bitbucket.</p>  {/* Grey color for description */}
        </div>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}>Chatbot Solution</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Backend Developer for Amway's Chatbot Solution, built to assist internal IT through a 
            conversational interface. Developed backend logic using Microsoft Bot Framework and integrated LUIS for prompt analysis. 
            Utilized Microsoft Azure for cloud deployment, ensuring scalability and reliability of the chatbot solution for seamless 
            user interaction.</p>  {/* Grey color for description */}
        </div>
        <div className="project-card" style={{ width: "45%", background: "transparent", padding: "20px", margin: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#e1c3c3" }}> RIA Money Transfer</h3>  {/* Dark blue color for title */}
          <p style={{ color: "#63bd8a" }}>Backend Developer for Belgium postal offices' money transfer application, 
            enabling currency conversion and money send/receive services. Built backend using Node.js, TypeScript, HapiJS, and ExpressJS. 
            Integrated AWS EC2 for cloud hosting, IAM for security, and API Gateway for API management. Ensured code quality with Jest, 
            SonarQube, and Git.</p>  {/* Grey color for description */}
        </div>
      </div>
    </div>
  );
};

export default Projects;