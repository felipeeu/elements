
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from './logo192.png';

export const ElementProfile = () => (
  <Card>
      <Row>
          <span>92</span>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Urânio</h5>
        <p className="grey darken-2 white-text">Felipe Domingues</p>
      </Row>
  </Card>
);

