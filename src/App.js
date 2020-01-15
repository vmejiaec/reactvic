import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Propiedad from './propiedad';

import Contador from './Contador';
import CicloVida from './CicloVida';

function App() {
  return (
    <div className="App">
      <CicloVida/>
      <Contador/>
      <Saludo></Saludo>
      <Propiedad saldo='18'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
