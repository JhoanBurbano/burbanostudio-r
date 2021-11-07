import React from 'react';
import './App.css';
import './components/globals.css'
import Navbar from './components/navbar.jsx';
import Portada from './components/portada.jsx';
import Footer from './components/footer';
import Bio from './components/Bio';
import {createGlobalStyle} from 'styled-components';


function App() {
  const GlobalStyle = createGlobalStyle`
  button{
    outline: none;
    border: none;
    background: var(--resaltador);
    padding: 1rem 1.5rem;
    border-radius: .1rem;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0 auto;
  }

  section{
    width: 100vw;
    padding: 0 100px;
    height: 90vh;
    &.cnt{
    }
  }

  hr{
     position: relative;
      font-size: 1.5em;
      height: 1em;
      border: 0;
      -webkit-filter: drop-shadow(hsla(0, 0%, 0%, 0.75) 1px 3px 5px);
      background:none;
    margin: 2em 0;
      &::after{
        content:"";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        background-size: 1em 100%;
        height: inherit;
        background-image: 
        linear-gradient(155deg, rgba(152,255,92, 0.75) 25%, transparent 25%),
        linear-gradient(225deg, rgba(152,255,92, 0.75) 25%, transparent 25%);
        background-position: -webkit-calc(50% - 0.5em);
        top: 0.48em;

      }
      &:before{
        content:"";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        background-size: 1em 100%;
        height: inherit;
        background-image:
        linear-gradient(315deg, rgba(152,255,92, 0.75) 25%, transparent 25%),
        linear-gradient(45deg, rgba(152,255,92, 0.75) 25%, transparent 25%);
      background-position: 50%;
      top: -0.48em;
      }

    }
  
  `;
  return (
    <>
    <GlobalStyle/>
      <Navbar/>
      <Portada/>
      <hr/>
      <Bio/>
      <Footer/>
    </>
  );
}

export default App;
