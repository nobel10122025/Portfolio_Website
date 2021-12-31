import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './Assets/Css/style.css'
import About from './Component/About/About';
import Skillsets from './Component/Skillsets/Skillsets';
import Projects from './Component/Projects/Projects';
import NavBar from './Component/Navbar/NavBar';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/about" element={<Skillsets />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
