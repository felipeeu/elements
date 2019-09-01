// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import { ElementProfile } from "./profile.js";
import {ElementDescription} from './element_description'
import { ArtDescription } from "./art_description.js";
export const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <ElementProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre o Urânio</h5>
        <Card>
            
          <ElementDescription/>
        </Card>
        <h5 className="subtitle">Sobre o Patch</h5>
        <Card>
          <ArtDescription/>
        </Card>
    </Col>
  </Row>
);

