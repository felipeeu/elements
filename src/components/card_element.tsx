import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { motion } from "framer-motion";

type TParams = { atomicNumber: string };

const CardElement: React.FC<{
  props: Array<object>;
 
  // propsRoute: RouteComponentProps;
}> = (props, {match} : RouteComponentProps<TParams> ) => {
 console.log("match",match)
  // const atomicNumber = propsRoute.match.params;
  // console.log("atomicNumber",atomicNumber);
  // const elementData =
  //   props.payload &&
  //   props.payload.find((element: any) => element.number === atomicNumber);

  return (
    <div>
      <motion.div>
        <div>
          {/* <h1>{elementData && elementData.name}</h1>
          <img src={elementData && elementData.image} /> */}
        </div>
      </motion.div>
    </div>
  );
};

// export default withRouter(CardElement) 
export default CardElement 
