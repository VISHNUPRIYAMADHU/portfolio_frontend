import React from "react";
import "../App.css"; // Make sure the CSS file is included
import { Link } from "react-router-dom";

import logo from "../assets/styles/vm_logo_modern.svg"; // Import logo

const SkillSet = () => {
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

      {/* Skillset Section */}
      <div className="skillset-section" style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1 className="role-heading" style={{ textAlign: 'center', fontSize: '56px', paddingBottom: '70px' }}>
          My Skillset
        </h1>

        <div className="skillset-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "30px", fontFamily: '"Lucida Console", "Courier New", monospace', paddingBottom: '70px' }}>

          {/* Skill Category */}
          {['Software Skills', 'Driving Tools', 'Databases', 'Operating Systems', 'Languages'].map((category, index) => (
            <div
              key={index}
              className="skill-category"
              style={{
                margin: "20px",
                textAlign: "left",
                width: "300px",
                padding: "20px",
                backgroundColor: "#b0ddcb",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <h3 style={{ fontSize: "24px", color: "#333" }}>{category}</h3>
              <ul style={{ fontSize: "16px", color: "#555", listStyleType: "none", paddingLeft: "0" }}>
                {category === 'Software Skills' && (
                  <>
                    <li>Node.js, ReactJS, AngularJS, Java</li>
                    <li>Kotlin, Spring Framework, Hibernate, Kubernetes</li>
                    <li>Gradle, Maven, Vue.js, Python, Django</li>
                    <li>AI, IoT, JavaScript, GraphQL, TypeScript</li>
                    <li>Docker, MongoDB, SQL, AWS, HapiJS, ExpressJS</li>
                    <li>NestJS, RESTful API, HTML, CSS, Bootstrap</li>
                    <li>Webservices, AWS IoT Core, AWS Lambda, Jest</li>
                    <li>LUIS, AWS EC2, Microsoft Bot Framework, AWS IAM</li>
                    <li>Microsoft Azure</li>
                  </>
                )}
                {category === 'Driving Tools' && (
                  <>
                    <li>Bitbucket, Git, Postman</li>
                    <li>Swagger, JIRA, X-RAY</li>
                    <li>Visual Studio Code, AWS services</li>
                    <li>NPM, SonarQube, Jenkins</li>
                    <li>Splunk, Putty, OKTA</li>
                    <li>Jitterbit, VMWare, WinSCP</li>
                    <li>AWS CLI</li>
                  </>
                )}
                {category === 'Databases' && (
                  <>
                    <li>PostgreSQL, MongoDB</li>
                    <li>MySQL, Amazon DynamoDB</li>
                    <li>SQLite</li>
                  </>
                )}
                {category === 'Operating Systems' && (
                  <>
                    <li>Windows</li>
                    <li>Linux</li>
                  </>
                )}
                {category === 'Languages' && (
                  <>
                    <li>English</li>
                    <li>German</li>
                  </>
                )}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SkillSet;
