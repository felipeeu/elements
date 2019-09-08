import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import {Header} from './components/header.js'
import {Main} from './components/main.js'
import { Preloader } from 'react-materialize'
import axios from 'axios'

function App() {
 
  const [request, setRequest] = useState({
    loading: false,
    payload: null,
  });

  // const responseMock = {
  //   student: "Felipe Domingues",
  //   element: "Tório",
  //   symbol: "Th",
  //   number: "90",
  //   word: "loucão",
  //   artdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio",
  //   elementdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio",
  //   avatar: "g"
  // }
  
  useEffect(() => {
    // Note that this replaces the entire object and deletes user key!
    setRequest({ loading: true });
    axios.get('http://www.mocky.io/v2/5d73c0f8330000373308186f')
    //axios.get('https://localhost:4000/elements/') 
      .then(response => {
        setRequest({
          loading: false,
          payload: response.data,
          
        });
      });
  }, []);


const { loading, payload } = request;

const filteredPayload = payload && payload.find(item => item.number === "90")

  return (
    <div className="App">
      <Header/>
      { loading? 
      <Preloader flashing  size = "small"/>:
      <Main 
        student = {filteredPayload && filteredPayload.student}
        element= { filteredPayload && filteredPayload.element}
        symbol={filteredPayload && filteredPayload.symbol}
        number = {filteredPayload && filteredPayload.number}
        word ={filteredPayload && filteredPayload.word}
        artdesc={filteredPayload && filteredPayload.artdesc}
        elementdesc={filteredPayload && filteredPayload.elementdesc}
      />}
    </div>
  );
}

export default App;
