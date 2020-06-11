import React, { useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { motion } from "framer-motion";
import { AtomDetailProps } from "./periodic_table";
import ElementContext from "../context/elements_context";


const CardElement: React.FC<AtomDetailProps> = ({ match }) => {
  console.log("match", match);
  const { atomicNumber } = match.params;

  const elementsContext = useContext(ElementContext);
  const elementsPayload = elementsContext && elementsContext.data;
  const elementData:any = elementsPayload && elementsPayload.find(
    (element: any) => element.number === atomicNumber
  );

  return (
    <div>
      <motion.div>
        <div>
          <h1>{elementData && elementData.name}</h1>
          <img src={elementData && elementData.image} />
        </div>
      </motion.div>
    </div>
  );
};

// export default withRouter(CardElement)
export default withRouter(CardElement);
