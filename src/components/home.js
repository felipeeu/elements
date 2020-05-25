import React from "react";
import { ElementProfile, StudentProfile } from "./profile.js";

export const Home = (props) => {

  return (
    <React.Fragment>
        <ElementProfile
          element={props.element}
          number={props.number}
          symbol={props.symbol}
        />
    </React.Fragment>
  )
};

