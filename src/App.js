import React from "react";
import "./css/App.css";
import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import axios from "axios";

const styles = {
  appContainer:{
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      number: 1,
      payload: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios.get("http://localhost:4000/elements").then(response => {
      this.setState({ payload: response.data });
      this.setState({
        filteredPayload: response.data.find(
          item => item.number === this.state.number
        )
      });
    });

    this.setState({ loading: true });
  }

  render() {
    const { payload } = this.state;

    return (
      <div style = {styles.appContainer}>
        <Header />
        <Main payload={payload} />
      </div>
    );
  }
}

export default App;
