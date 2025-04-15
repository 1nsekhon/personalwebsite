import './App.css';
import React  from 'react';
import NavBar from './components/navbar';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
      
      <>
      <NavBar/>
      <div className="navRouting">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>

      </div>
      </>

      
  );
}

export default App;
