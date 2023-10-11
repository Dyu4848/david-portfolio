import React, { useState } from "react";

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
        <button class="hire-button">Hire Me</button>
        <button className="contact-button">Contact</button>
        <div className="socials">SOCIALS</div>
        <img className="git" src="../images/git2.png"></img>
        <img className="dribble" src="../images/dribble.png"></img>
      </div>
      <div className="hero-sub">
        <div className="works">WORKS</div>
        <div className="h2">Check Out Some of My Projects</div>
        <button className="project-button">Projects</button>
        <img className="work-img" src="../images/works.png"></img>
      </div>
    </div>
  );
};

export default About;
