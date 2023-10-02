import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />} />


      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
