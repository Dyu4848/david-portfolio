import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = ({ setCurrentPage }) => {
  return (
    <div className="about-container">
      <div className="hero">
        <div className="name-job">Hi! I’m 
        <span className="gradient-text"> David Yu</span> UI UX Designer</div>
        <p className="intro">
          Aspiring front-end/UI developer, focusing on creating user friendly
          applications.
        </p>
        <a href="mailto:dyu4848@gmail.com" class="hire-button">Hire Me</a>
        <Link to="/contact">
        <button className="contact-button">Contact</button>
        </Link>
        <div className="socials">SOCIALS</div>
        <img className="git" src="../images/git2.png"></img>
        <img className="dribble" src="../images/dribble.png"></img>
      </div>
      <div className="hero-sub">
        <div className="works">WORKS</div>
        <div className="h2">Check Out Some of My Projects</div>
        <Link to="/portfolio">
        <button className="project-button">Projects</button>
        </Link>
        <img className="work-img" src="../images/works.png"></img>
      </div>
    </div>
  );
};

export default About;
