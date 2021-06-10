import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

// react router dom

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Header />
            <HeaderCard />
            <hr />
          </Route>

          <Route exact path="/About">
            {/* <About /> */}
            <About />
            <hr />
          </Route>
          <Skill />
          <hr />
          <Project />
          <hr />
          <Contact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
