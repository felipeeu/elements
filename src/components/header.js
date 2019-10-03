
import React from "react";

import { Navbar,Row } from 'react-materialize';

export const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">    
  <span style = {{
    fontSize: 40,
    color: 'white'
  }}>TABELA PERIÓDICA</span>
    </Navbar>
  </Row>
);

