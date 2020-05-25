import React from "react";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";


const CardElement = ({ match, payload }) => {
  const { atomicNumber } = match.params;
  const elementData =
    payload && payload.find(element => element.number === atomicNumber);

  return (
    <div>
      <motion.div>
          <div>
            <h1>{elementData && elementData.name}</h1>
            <img src ={elementData && elementData.image}/>
          </div>
      </motion.div>
    </div>
  );
};

export default withRouter(CardElement);
