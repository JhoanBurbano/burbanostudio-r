import React from 'react';
import './App.css';
import './components/globals.css'
import Principal from './components/principal';
import Navbar from './components/navbar';
import Portada from './components/portada';


function App() {
  return (
    <>
      <Navbar/>
      <Portada/>
      <Principal/>
    </>
  );
}

export default App;
