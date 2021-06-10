import React from "react";
import Typed from "react-typed";
import logo from "../logo.jpg";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 coltxt">
            <h1>Hey there!. i am, hari om singh</h1>
            <a href="" className="headerlink">
              contact me
            </a>
          </div>
          <div className="col-lg-6 ">
            <img src={logo} alt="img" className="myImg" />
          </div>
        </div>
        <div className="container">
          <Typed
            className="typedtxt"
            strings={[
              "Web Developer",
              "A student",
              "Web designer",
              "JavaScript is love",
              "react is heart",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
