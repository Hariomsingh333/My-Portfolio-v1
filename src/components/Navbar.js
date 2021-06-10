import React from 'react'
import logo from '../logo.jpg'
const Header = () => {
  return (
    <div>
      <div classNameName="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light" ></span>
     
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Header


