import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import About from "./components/About";
import Skill from './components/Skill'
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
    </div>
  );
}

export default App;
