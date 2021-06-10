import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
