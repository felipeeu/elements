import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Preloader } from "react-materialize";
import axios from "axios";
import Input from "react-materialize/lib/Input";
import { isAbsolute } from "path";
import PeriodicTable from "./components/periodic_table";
// import {data} from "./data"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      number: 1,
      payload: []
      //filteredPayload: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios.get("http://localhost:4000/elements/").then(response => {
      console.log("RESPONSE: ", response);
      this.setState({ payload: response.data });
      this.setState({
        filteredPayload: response.data.find(
          item => item.number === this.state.number
        )
      });
    });
    // this.setState({ payload: data });
    this.setState({ loading: false });
  }

  render() {
    const { filteredPayload, loading, payload, number } = this.state;

    return (
      <div className="App">
        <Header />
        {/* <input
          type="number"
          onChange={event => {
            this.setState({ number: parseInt(event.target.value) });
            this.setState({
              filteredPayload: payload.find(
                item => item.number === parseInt(event.target.value)
              )
            });
            event.preventDefault();
          }}
          placeholder={"digite o número atômico do elemento"}
          style={{
            position: "absolute",
            left: 100,
            width: 280
          }}
        /> */}
        {/* <PeriodicTable payload={payload} /> */}

        {/* {loading || !number || number > 99 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "40vh",
              left: "45vw"
            }}
          >
            <span style={{ fontSize: 45, width: 200 }}>
              Digite um número atômico válido !
            </span>
            <Preloader flashing size="small" />
          </div>
        ) : ( */}
        <Main
          // student={filteredPayload && filteredPayload.student}
          // element={filteredPayload && filteredPayload.element}
          // symbol={filteredPayload && filteredPayload.symbol}
          // number={filteredPayload && filteredPayload.number}
          // word={filteredPayload && filteredPayload.word}
          // artdesc={filteredPayload && filteredPayload.artdesc}
          // elementdesc={filteredPayload && filteredPayload.elementdesc}
          payload={payload}
        />
        {/* )}  */}
      </div>
    );
  }
}

export default App;
