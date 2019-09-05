import React, { useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';
import {Header} from './components/header.js'
import {Main} from './components/main.js'
import axios from 'axios'

function App() {
 
  const responseMock = {
    student: "Felipe Domingues",
    element: "Tório",
    symbol: "Th",
    number: "90",
    word: "loucão",
    artdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio",
    elementdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio"
  }
  
  useEffect(() => {
    //console.log("fetch")
    axios.get('http://localhost:4000/elements')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
   
  });
  return (
    <div className="App">
      {/* <header className="App-header">
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
        
      </header> */}
      <Header/>
      <Main 
        student = {responseMock.student}
        element= { responseMock.element}
        symbol={responseMock.symbol}
        number = {responseMock.number}
        word ={responseMock.word}
        artdesc={responseMock.artdesc}
        elementdesc={responseMock.elementdesc}
      />
    </div>
  );
}

export default App;
