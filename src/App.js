import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Header } from './components/header.js'
import { Main } from './components/main.js'
import { Preloader } from 'react-materialize'
import axios from 'axios'
import Input from 'react-materialize/lib/Input';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      number: 20 , 
      payload: [],
      //filteredPayload: {}
    };
  }

  componentDidMount() {
        axios.get('http://www.mocky.io/v2/5d96653a3b00001100c310d3')
      .then(response => {
        this.setState({payload:response.data})
        this.setState({filteredPayload: response.data.find(item => item.number === this.state.number)})
      });
      //this.setState({filteredPayload: this.state.payload.find(item => item.number === this.state.number)})
  }

  handle () {
    
    axios.get('http://www.mocky.io/v2/5d96653a3b00001100c310d3')
    .then(response => {
      this.setState({payload:response.data})
      this.setState({filteredPayload: response.data.find(item => item.number === this.state.number)})
    });
  }
 

  render() {
    const {filteredPayload, loading,payload, number} = this.state
      console.log("payload: ", payload)
  console.log("number: ",typeof number)
  console.log("filter: ", filteredPayload)

    return (
       <div className="App">
      <Header />
      <input
        type="number"
        onChange={(event) => {
          this.setState({number:parseInt(event.target.value)})
          this.setState({filteredPayload: payload.find(item => item.number === parseInt(event.target.value))})
          event.preventDefault()
          
        }

        }
        //value={value}
        placeholder={"digite o número atômico do elemento"}
        style={{
          position: "absolute",
          left: 100,
          width: 280
        }} />
      <button  onClick = {() => this.handle() } >
        button
        </button>
      
      
      {loading ?
        <Preloader flashing size="small" /> :

        <Main
          student={filteredPayload && filteredPayload.student}
          element={filteredPayload && filteredPayload.element}
          symbol={filteredPayload && filteredPayload.symbol}
          number={filteredPayload && filteredPayload.number}
          word={filteredPayload && filteredPayload.word}
          artdesc={filteredPayload && filteredPayload.artdesc}
          elementdesc={filteredPayload && filteredPayload.elementdesc}
          
         
        />

      }
    </div>
    );
  }
}


 export default App;
