
import React from "react";

import { Navbar, NavItem, Row } from 'react-materialize';

export const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Início</NavItem>
      <NavItem href='/new'>Cadastro de elemento</NavItem>
    </Navbar>
  </Row>
);

