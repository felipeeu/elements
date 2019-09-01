// Importando o React
import React from "react";
// Importando o component Home
import {Home} from "./home.js";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';


export const  Main = () => (
  <main>
    <Container>

      <Home />
    </Container>
  </main>  
);
