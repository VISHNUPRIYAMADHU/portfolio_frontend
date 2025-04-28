import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot"; 
import chatIcon from "../assets/styles/chatbot.png"; 
import logo from "../assets/styles/vm_logo_modern.svg"; 
import myPhoto from "../assets/styles/mypic.png"; 
import resume from "../assets/styles/resume_python.pdf"; 

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

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

      <div className="container mt-4 home-container">
        <div className="text-container">
          <h1 className="intro-heading">Hi there, I'm</h1>
          <h1 className="name-heading">Vishnupriya</h1>
          <h2 className="role-heading">Senior FullStack Developer</h2>
          <a href={resume} download className="btn btn-primary mt-3">
            <i className="fas fa-download"></i> Get Resume
          </a>
        </div>
        <div className="photo-container">
          <img src={myPhoto} alt="Vishnupriya" className="my-photo" />
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src={chatIcon} alt="Chatbot" />
      </div>

      {/* Chatbot Window */}
      {showChatbot && <Chatbot />}
    </div>
  );
};

export default Home;
