
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from './logo192.png';
import '../css/Home.css';

export const ElementProfile = (props) => (
  <Card style={{backgroundColor: '#ccea26'}}>
      <Row>
          <h5>{props.number}</h5>
        <Col s={8} m={8} offset="s2 m2">
          <h1>{props.symbol}</h1>
        </Col>
      </Row>
      <Row className="center-align">
        <h3>{props.element}</h3>
      </Row>
  </Card>
);

export const StudentProfile = (props) => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={`https://robohash.org/${props.student}`} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >{props.student}</h5>
        <p className="grey darken-2 white-text">Robô {props.word}</p>
      </Row>
  </Card>
);

