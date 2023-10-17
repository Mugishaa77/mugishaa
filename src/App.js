import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/about" exact element = {<About />} />
        <Route path="/projects" exact element = {<Projects />} />


      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
