
import React from "react";
//import logo from './logo.svg';
import { Navbar, NavItem, Row} from 'react-materialize';

export const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>
      {/* <img src={logo} className="App-logo-mini" alt="logo" /> */}
      </NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </Navbar>
  </Row>
);

