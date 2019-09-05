// Importando o React
import React from "react";
// Importando o component Home
import {Home} from "./home.js";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';


export const  Main = (props) => (
  <main>
    <Container>
      <Home 
        student = {props.student}
        element= { props.element}
        symbol={props.symbol}
        number = {props.number}
        word ={props.word}
        artdesc={props.artdesc}
        elementdesc={props.elementdesc} />
    </Container>
  </main>  
);
