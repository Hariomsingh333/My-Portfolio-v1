import React from 'react'
import logo from"../logo.jpg"
const About = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-lg-4 ">
      <img src={logo} alt="my img" className="aimg" />
        </div>
        <div className="col-lg-8 atxt">
        <h1>about me</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsa maiores necessitatibus debitis, impedit exercitationem quod non, labore ea minus nihil, illo earum in recusandae eum quae animi cupiditate nisi.</p>
        </div>
      </div>
    </div>
  )
}

export default About
