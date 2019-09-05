// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import { ElementProfile , StudentProfile} from "./profile.js";
import {ElementDescription} from './element_description'
import { ArtDescription } from "./art_description.js";


export const Home = (props) => (
  
<Row>
    <Col m={3} s={12}>
      <ElementProfile 
        element ={props.element}
        number = {props.number}  
        symbol= {props.symbol}
      />
      <StudentProfile 
        student = {props.student}
        word={props.word}
      />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre o {props.element}</h5>
        <Card>
          <ElementDescription elementdesc = {props.elementdesc}/>
        </Card>
        <h5 className="subtitle">Sobre o Patch</h5>
        <Card>
          <ArtDescription artdesc ={props.artdesc}/>
        </Card>
    </Col>
  </Row>
);

