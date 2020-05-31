import React from "react";
import Routes from "../routes";

const styles = {
  main: {
    textAlign: "center"
  }
};
export const Main: React.FC<{ props:Array<object>}> = ({props })=> {
  return (
    <main>
      <Routes props={props} />
    </main>
  );
};
// export const Main = props => (
//   <main style= {styles.main}>
//     <Routes payload={props.payload} />
//   </main>
// );
