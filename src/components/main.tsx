import React from "react";
import Routes from "../routes";


interface IStyleMain {
  main:any
}

const styles:IStyleMain = {
  main: {
    textAlign: "center"
  }
};
 const Main: React.FC<{ props:Array<object>}> = ({props })=> {
  return (
    <main style = {styles.main}>
      <Routes props={props} />
    </main>
  );
};
export default Main;

