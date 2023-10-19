import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

// projects
import Evergreen from './projects/Evergreen';
import Weather from './projects/Weather';
import Shecodes from './projects/Shecodes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/about" exact element = {<About />} />
        <Route path="/projects" exact element = {<Projects />} />
        <Route path="/evergreen" exact element = {<Evergreen />} />
        <Route path="/weather" exact element = {<Weather />} />
        <Route path="/shecodes" exact element = {<Shecodes />} />


      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
