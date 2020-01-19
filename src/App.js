import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import MensajeRespuesta from './MensajeRespuesta';
import FuncionFlecha from './FuncionComp';
import CompFecha from  './FechaVic';

function App() {
  return (
    <div className="App">
      <Saludo></Saludo>
      <MensajeRespuesta nombre="La Mosh" app="React Victor"></MensajeRespuesta>
      <FuncionFlecha cargo="Jefe" departamento="Sistemas"></FuncionFlecha>
      <CompFecha timestamp={1475700297974}></CompFecha>
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
