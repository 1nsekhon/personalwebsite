import './App.css';
import React  from 'react';
import NavBar from './components/navbar';


function App() {
  const title = "Nanki's Beautiful Website";
  //const pinterestLink = "https://www.pinterest.com/nankisekhon/";
  return (
      
      <>
      <NavBar></NavBar>
      <h1>YO from {title}!</h1>
      </>

      
  );
}

export default App;
