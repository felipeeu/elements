import React from "react";
import { Switch, Route } from "react-router-dom";
//components

import PeriodicTable from "./components/periodic_table";
import CardElement from "./components/card_element";

const Routes = (props, { childProps }) => {
  return (
    <Switch>
      <Route
        path="/:atomicNumber"
        render={() => <CardElement {...props} />}
        props={childProps}
      />
      <Route
        path="/"
        exact
        render={() => <PeriodicTable {...props} />}
        props={childProps}
      />
    </Switch>
  );
};

export default Routes;
