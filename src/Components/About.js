import React from "react";
import "./About.css";

function About() {
  return (
    <div className="info">
      <h2 className="aboutUs">About us</h2>
      <div className="icons">
        <a href="mailto:dhruvrg2003@gmail.com?subject = Feedback&body = Message">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="instagram://user?username=_dhruv.0038_">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="tel:7709468189">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="http://www.Facebook.com/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="http://www.twitter.com/">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="http://www.youtube.com/">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
