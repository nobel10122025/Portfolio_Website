import './App.css';
import './Assets/Css/style.css'
import About from './Component/About/About';
import Skillsets from './Component/Skillsets/Skillsets';
import Aims from './Component/Aims/Aims';
import SkillLevel from './Component/SkillLevel/SkillLevel';
import Projects from './Component/Projects/Projects';
import TimeLine from './Component/TimeLine/TimeLine';
import NavBar from './Component/Navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skillsets />
      <SkillLevel />
      <TimeLine />
      <Aims />
      <Projects />

    </div>
  );
}

export default App;
