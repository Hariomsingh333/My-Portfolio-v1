import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Social from "./components/Social";

// react router dom

// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <HeaderCard />
            <hr />
            <About />
            <hr />
            <Skill />
            <hr />
            <Project />
            <hr />
            <Contact />
            <hr />
            <Social />
            <Footer />
          </Route>

          {/* About  */}
          <Route exact path="/About">
            <About />
            <hr />
            <Footer />
          </Route>

          {/* project  */}
          <Route exact path="/Project">
            <Project />
            <Footer />
          </Route>

          {/* contact  */}
          <Route exact path="/Contact">
            <Contact />
            <Footer />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
