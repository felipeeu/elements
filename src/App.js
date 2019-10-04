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
      number: null , 
      payload: [],
      filteredPayload: {}
    };
  }

  componentDidMount() {
        axios.get('http://www.mocky.io/v2/5d96653a3b00001100c310d3')
      .then(response => {
        this.setState({payload:response.data})
       this.setState({filteredPayload: response.data.find(item => item.number === number)})
      });
  }

  // componentDidUpdate() {
  //   document.title = `Você clicou ${this.state.count} vezes`;
  // }

  render() {
    const {filteredPayload} = this.state
    return (
       <div className="App">
      <Header />
      <input
        type="number"
        onChange={(event) => {
          
         
        }

        }
        //value={value}
        placeholder={"digite o número atômico do elemento"}
        style={{
          position: "absolute",
          left: 100,
          width: 280
        }} />
      {/* <button onClick={() => {
        setFiltered(payload.find(item => item.number === number))
        console.log("number: ",number)
         }}>
        button
        </button>
       */}
      
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













// function App() {

//   const [loading, setRequest] = useState(false);
//   const [number, setNumber] = useState()
//   const [payload, setPayload] = useState([])
//   const [filteredPayload, setFiltered] = useState({})
//   // const responseMock = {
//   //   student: "Felipe Domingues",
//   //   element: "Tório",
//   //   symbol: "Th",
//   //   number: "90",
//   //   word: "loucão",
//   //   artdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio",
//   //   elementdesc:"a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio a arte criada remete ao elemento urânio",
//   //   avatar: "g"
//   // }
//   const handleChange = (number) => {
//     console.log(number)
//     // setValue(number)

//   }

//   useEffect(() => {

//     setRequest(true);
//     axios.get('http://www.mocky.io/v2/5d96653a3b00001100c310d3')
//       .then(response => {
//         setPayload(response.data)
//         //setFiltered(response.data.find(item => item.number === number))
//       });
//     setRequest(false)


//   }, []);






//   console.log("payload: ", payload)
//   console.log("number: ", number)
//   console.log("filter: ", filteredPayload)

//   //setRequest({payload: payload && payload.find(item => item.number === 13) })



//   return (
//     <div className="App">
//       <Header />
//       <input
//         type="number"
//         onChange={(event) => {
//           setNumber(event.target.value)
         
//         }

//         }
//         //value={value}
//         placeholder={"digite o número atômico do elemento"}
//         style={{
//           position: "absolute",
//           left: 100,
//           width: 280
//         }} />
//       <button onClick={() => {
//         setFiltered(payload.find(item => item.number === number))
//         console.log("number: ",number)
//          }}>
//         button
//         </button>
      
      
//       {loading ?
//         <Preloader flashing size="small" /> :

//         <Main
//           student={filteredPayload && filteredPayload.student}
//           element={filteredPayload && filteredPayload.element}
//           symbol={filteredPayload && filteredPayload.symbol}
//           number={filteredPayload && filteredPayload.number}
//           word={filteredPayload && filteredPayload.word}
//           artdesc={filteredPayload && filteredPayload.artdesc}
//           elementdesc={filteredPayload && filteredPayload.elementdesc}
//           handleChange={handleChange}
//           payload={payload}
//         />

//       }
//     </div>
//   );
// }

 export default App;
