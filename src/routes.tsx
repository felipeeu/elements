import React from "react";
import { Switch, Route } from "react-router-dom";
import PeriodicTable from "./components/periodic_table";
import CardElement from "./components/card_element";

const Routes: React.FC<{props:Array<object> }> =(props)=>{

  return (
    <Switch>
      <Route
        path="/:atomicNumber"
        render={() => <CardElement {...props} />}
      />
      
      <Route
        path="/"
        exact
        render={() => <PeriodicTable/>}
      />
    </Switch>
  );
};

export default Routes;
