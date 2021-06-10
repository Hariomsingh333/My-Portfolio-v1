import React from "react";
import logo from "../logo.jpg";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 ">
          <img src={logo} alt="my img" className="aimg" />
        </div>
        <div className="col-lg-8 atxt">
          <h1>about me</h1>
          <p>
            hey there!, meet my self my name is Hari om singh, and i'm a
            developer, i love web development it's lot more for fun and i'm very
            happy that i am developer. also wlcome to my portfolio website. if
            you want to hire me. i will always welcome you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
