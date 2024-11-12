import './App.css';
import React  from 'react';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const title = "Nanki's Beautiful Website";
  //const pinterestLink = "https://www.pinterest.com/nankisekhon/";
  return (
      
      <>
      <h1>YO from {title}</h1>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="https://www.google.com/maps" exact/> 
      </Routes>
      </Router>
      </>

      
  );
}

export default App;
