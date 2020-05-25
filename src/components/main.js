import React from "react";
import Routes from "../routes.js";


const styles ={
  main: {
    textAlign : "center"
  }
}

export const Main = props => (
  <main style= {styles.main}>
    <Routes payload={props.payload} />
  </main>
);
