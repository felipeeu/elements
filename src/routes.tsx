import React , {FunctionComponent} from "react";
import { Switch, Route } from "react-router-dom";
import PeriodicTable from "./components/periodic_table";
import CardElement from "./components/card_element";

const Routes: FunctionComponent<{props:Array<object> }> =(props)=>{
  console.log('Prop in routes', props)
// const Routes = (props:any, { childProps }) => {
  return (
    <Switch>
      <Route
        path="/:atomicNumber"
        render={() => <CardElement {...props} />}
        // props={childProps}
      />
      <Route
        path="/"
        exact
        render={() => <PeriodicTable {...props} />}
        // props={childProps}
      />
    </Switch>
  );
};

export default Routes;
