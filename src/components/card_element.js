import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Card, Icon, CardTitle, Button } from "react-materialize";
import { motion } from "framer-motion";
import Modal from "react-materialize/lib/Modal";

const CardElement = ({ match, payload }) => {
  const { atomicNumber } = match.params;
  const elementData =
    payload && payload.find(element => element.number === atomicNumber);

  return (
    <Col>
      <motion.div>
        <Col m={6} s={12}>
          <Card
            actions={[
              <a key="1" href="/">
                Tabela Periódica
              </a>
            ]}
            // closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={elementData && elementData.image} />}
            horizontal
            // revealIcon={<Icon>more_vert</Icon>}
          >
            <h1>{elementData && elementData.name}</h1>
          </Card>
        </Col>
      </motion.div>
    </Col>
  );
};

export default withRouter(CardElement);
