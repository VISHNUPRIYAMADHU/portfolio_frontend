import React, { useState } from "react";
import "../App.css";  // Make sure the CSS file is included
import { Link } from "react-router-dom";
import logo from "../assets/styles/vm_logo_modern.svg"; // Import logo

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    { year: "till 2014", degree: "School Education", institution: "India" },
    { year: "2014 - 2018", degree: "Bachelor's in Computer Science", institution: "Mahatma Gandhi University India" }
  ];

  const experienceData = [
    { year: "2018 - 2022", role: "Backend Developer", company: "TCS (Tata Consultancy Services)" },
    { year: "2022 - 2024", role: "Senior Fullstack Developer", company: "Cognizant Technology Solutions" }
   
  ];

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


      <h1 className="role-heading" style={{ textAlign: 'center', fontSize: '56px' }}>About Me</h1>

      <div className="about-me-container" style={{ paddingBottom:"70px"}}>
        <div className="video-container" style={{ paddingLeft:"40px"}}>
          <div className="video-thumbnail">
            <iframe
              width="100%"
              height="100%"
              
              src="https://www.youtube.com/embed/your-video-id?rel=0&autohide=1&showinfo=0&modestbranding=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="About Me Video"
            ></iframe>
          </div>
        </div>

        <div className="details-container">
          <h2 style={{ fontSize: '35px', color: '#bc9c9c', fontFamily: '"Lucida Console", "Courier New", monospace' }}>
            I'm Vishnupriya Madusoothanan
          </h2>
          <p style={{ fontSize: '25px', color: '#bc9c9c', fontFamily: '"Lucida Console", "Courier New", monospace' }}>
            Fullstack Developer specializing in NodeJS- ReactJS & AWS
          </p>
          <p style={{ fontSize: '25px', color: '#bc9c9c', fontFamily: '"Lucida Console", "Courier New", monospace' }}>
            Building scalable systems, microservices, cloud deployments, and optimizing performance.
          </p>

         



        </div>
      </div>

      <div className="tab-container" style={{ marginTop: "40px", textAlign: "center" }}>
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
          style={{ marginLeft: "10px" }}
        >
          Experience
        </button>
      </div>

      <div className="tab-content" style={{ textAlign: "center", marginTop: "20px", padding: "20px",background: 'transparent', width: "100%",  // Increased width (you can adjust this value)
        marginLeft: "auto", // Centers the container
        marginRight: "auto", // Centers the container
     
      }}>
        {activeTab === "education" ? (
       <div>

            <h3>Education</h3>
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-date">{edu.year}</div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>Experience</h3>
            <div className="timeline">
              {experienceData.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-date">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.role}</h4>
                    <p>{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
