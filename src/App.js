import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Project from './components/project';
import Skills from './components/skills';
import Contact from './components/contactme';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Home />
   <Project />
   <Skills />
   <Contact />
    </div>
  );
}

export default App;
